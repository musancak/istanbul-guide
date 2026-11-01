"""Holt Koordinaten für alle Food-Spots (Nominatim, Fallback Photon) → werkzeug/coords.json.
Bereits gefundene Spots werden übersprungen, Aufruf also beliebig oft möglich."""
import json, time, urllib.parse, urllib.request, os

HIER = os.path.dirname(os.path.abspath(__file__))
UA = {"User-Agent": "istanbul-guide/1.0 (https://github.com/musancak/istanbul-guide)"}
BOX = (28.4, 40.8, 29.6, 41.35)  # lon_min, lat_min, lon_max, lat_max (Istanbul)
GRUPPE_ORT = {"Frühstück", "Kebap, Döner, Lahmacun", "Burger, Pizza, Snacks", "Spät in Kadıköy"}


def hole(url):
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=20) as r:
        return json.load(r)


def in_box(lat, lon):
    return BOX[1] <= lat <= BOX[3] and BOX[0] <= lon <= BOX[2]


def nominatim(q):
    p = urllib.parse.urlencode({"q": q, "format": "jsonv2", "limit": 1, "countrycodes": "tr",
                                "viewbox": f"{BOX[0]},{BOX[3]},{BOX[2]},{BOX[1]}", "bounded": 1})
    r = hole("https://nominatim.openstreetmap.org/search?" + p)
    time.sleep(1.1)
    return (float(r[0]["lat"]), float(r[0]["lon"])) if r else None


def photon(q):
    p = urllib.parse.urlencode({"q": q, "limit": 1, "lat": 41.03, "lon": 29.0,
                                "bbox": ",".join(map(str, BOX))})
    r = hole("https://photon.komoot.io/api/?" + p)
    time.sleep(0.6)
    f = r.get("features")
    if not f:
        return None
    lon, lat = f[0]["geometry"]["coordinates"]
    return (lat, lon) if in_box(lat, lon) else None


spots = json.load(open(f"{HIER}/spots.json"))
ziel = f"{HIER}/coords.json"
coords = json.load(open(ziel)) if os.path.exists(ziel) else {}
for s in spots:
    schluessel = f"{s['d']}|{s['n']}"
    if coords.get(schluessel):
        continue
    ort = s["note"].split(",")[0] if s["d"] in GRUPPE_ORT else s["d"]
    treffer = None
    for q in (f"{s['n']}, {ort}, İstanbul", f"{s['n']}, İstanbul"):
        for f in (nominatim, photon):
            try:
                treffer = f(q)
            except Exception as e:
                print("Fehler", q, e)
            if treffer:
                break
        if treffer:
            break
    coords[schluessel] = treffer
    print(("OK  " if treffer else "--  ") + schluessel, treffer or "")
    json.dump(coords, open(ziel, "w"), ensure_ascii=False, indent=0)
print("gefunden:", sum(1 for v in coords.values() if v), "von", len(coords))
