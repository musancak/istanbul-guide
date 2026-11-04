"""Holt Metro-, Tram-, Marmaray-, Seilbahn- und Fährhaltestellen aus OpenStreetMap (Overpass) → haltestellen.json.
Format: [[Name, lat, lon, "M2 T1"], ...]; Fähranleger haben die Linie "Fähre". Die App sucht daraus die nächsten Haltestellen je Ort.
Aufruf: python3 werkzeug/haltestellen.py (dauert 1–2 Minuten)."""
import json, math, time, os, re, urllib.parse, urllib.request

HIER = os.path.dirname(os.path.abspath(__file__))
ZIEL = os.path.join(HIER, "..", "haltestellen.json")
UA = {"User-Agent": "istanbul-guide/1.0 (https://github.com/musancak/istanbul-guide)"}
Q = """[out:json][timeout:170];
area["name"="İstanbul"]["admin_level"="4"]->.a;
rel(area.a)["type"="route"]["route"~"^(subway|light_rail|tram|train|funicular|aerialway)$"]->.r;
.r out body;
node(r.r);
out;
nwr["amenity"="ferry_terminal"](40.8,28.4,41.35,29.6);
out center tags;"""
SERVER = ["https://overpass-api.de/api/interpreter", "https://overpass.kumi.systems/api/interpreter", "https://maps.mail.ru/osm/tools/overpass/api/interpreter"]
# Fernzüge raus, nur Stadtverkehr
WEG = re.compile(r"YHT|Ekspres|Bölgesel|INT |Uzunköprü|Yüksek Standart", re.I)


def hole():
    body = urllib.parse.urlencode({"data": Q}).encode()
    for i, url in enumerate(SERVER * 3):  # Server oft voll: reihum mit wachsender Pause
        time.sleep(30 * i)
        try:
            with urllib.request.urlopen(urllib.request.Request(url, body, UA), timeout=200) as r:
                return json.load(r)["elements"]
        except OSError as e:
            print(url, e)
    raise SystemExit("Kein Overpass-Server erreichbar, später nochmal.")


def ref_von(t):
    n = t.get("name", "")
    if WEG.search(n):
        return None
    if "Marmaray" in n or t.get("ref") == "B1":
        return "Marmaray"
    ref = t.get("ref")
    if ref and re.fullmatch(r"[MTFB]\d+[AB]?|TF\d", ref):
        return ref
    return None  # Linien ohne saubere Nummer lieber weglassen als raten


def sauber(n):
    n = re.sub(r"\s*\((?:M|T|F|TF|B)\d.*?\)$", "", n)
    n = re.sub(r"\s+(?:Metro|Tramvay|Füniküler|Teleferik)?\s*(?:İstasyonu|Durağı|Peronu)$", "", n, flags=re.I)
    n = re.sub(r"\s+(?:İskelesi|Vapur İskelesi|Feribot İskelesi)$", "", n, flags=re.I)
    return n.strip(" -")


def km(a, b):
    t = math.pi / 180
    x = math.sin((b[0] - a[0]) * t / 2) ** 2 + math.cos(a[0] * t) * math.cos(b[0] * t) * math.sin((b[1] - a[1]) * t / 2) ** 2
    return 12742 * math.asin(math.sqrt(x))


def main():
    el = hole()
    knoten = {x["id"]: x for x in el if x["type"] == "node"}
    roh = []  # (name, lat, lon, linie)
    for r in (x for x in el if x["type"] == "relation"):
        ref = ref_von(r["tags"])
        if not ref:
            continue
        for m in r["members"]:
            k = knoten.get(m["ref"]) if m["type"] == "node" else None
            if k and k.get("tags", {}).get("name") and m["role"].startswith(("stop", "platform", "")):
                roh.append((sauber(k["tags"]["name"]), k["lat"], k["lon"], ref))
    for f in (x for x in el if x.get("tags", {}).get("amenity") == "ferry_terminal"):
        n = f["tags"].get("name")
        ll = (f["lat"], f["lon"]) if "lat" in f else (f["center"]["lat"], f["center"]["lon"])
        if n:
            roh.append((sauber(n), ll[0], ll[1], "Fähre"))
    # gleiche Namen in < 600 m zu einer Haltestelle zusammenfassen
    st = []
    for n, la, lo, ref in roh:
        for s in st:
            if s["n"] == n and km((s["la"], s["lo"]), (la, lo)) < 0.6:
                s["p"].append((la, lo)); s["l"].add(ref); break
        else:
            st.append({"n": n, "la": la, "lo": lo, "p": [(la, lo)], "l": {ref}})
    aus = []
    ord_ = lambda r: (r == "Fähre", r[0], int(re.sub(r"\D", "", r) or 99), r)
    for s in st:
        la = sum(p[0] for p in s["p"]) / len(s["p"]); lo = sum(p[1] for p in s["p"]) / len(s["p"])
        aus.append([s["n"], round(la, 5), round(lo, 5), " ".join(sorted(s["l"], key=ord_))])
    aus.sort(key=lambda x: x[0])
    with open(ZIEL, "w") as f:
        f.write("[\n" + ",\n".join(json.dumps(x, ensure_ascii=False) for x in aus) + "\n]\n")
    print(len(aus), "Haltestellen →", os.path.normpath(ZIEL))


if __name__ == "__main__":
    main()
