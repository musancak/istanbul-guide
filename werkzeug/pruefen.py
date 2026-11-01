"""Prüft coords.json: Spots, die zu weit vom Bezirk liegen, werden auf null gesetzt (lieber nicht auf der Karte als falsch).
Schreibt das Ergebnis nach ../coords.json für die Seite."""
import json, math, os
HIER = os.path.dirname(os.path.abspath(__file__))
MITTE = {"Fatih": (41.013, 28.955, 4), "Beyoğlu": (41.033, 28.978, 3.5), "Şişli": (41.058, 28.99, 4.5), "Beşiktaş": (41.06, 29.015, 6),
         "Sarıyer": (41.13, 29.05, 12), "Kadıköy": (40.98, 29.05, 7), "Üsküdar": (41.03, 29.04, 6), "Beykoz": (41.12, 29.1, 10),
         "Zeytinburnu": (40.995, 28.905, 4), "Beylikdüzü": (41.0, 28.64, 6), "Başakşehir": (41.09, 28.8, 8), "Bakırköy": (40.98, 28.86, 7)}
GRUPPE = {"Taksim": (41.037, 28.985, 2.5), "Karaköy": (41.024, 28.976, 2), "Beşiktaş": (41.043, 29.005, 3), "Kadıköy": (40.99, 29.03, 4),
          "Sirkeci": (41.015, 28.977, 2), "Beykoz": (41.12, 29.1, 10)}
def km(a, b):
    t = math.pi / 180; dl = (b[0]-a[0])*t; dn = (b[1]-a[1])*t
    x = math.sin(dl/2)**2 + math.cos(a[0]*t)*math.cos(b[0]*t)*math.sin(dn/2)**2
    return 2*6371*math.asin(math.sqrt(x))
spots = {f"{s['d']}|{s['n']}": s for s in json.load(open(f"{HIER}/spots.json"))}
c = json.load(open(f"{HIER}/coords.json"))
aus, weg = {}, []
for k, v in c.items():
    if not v: continue
    s = spots.get(k); d = k.split("|")[0]
    ref = MITTE.get(d)
    if not ref and s:
        ref = GRUPPE.get(s["note"].split(",")[0].strip())
    if ref and km(v, ref[:2]) > ref[2]:
        weg.append(f"{k}  {km(v, ref[:2]):.1f} km"); continue
    if not ref:  # Gruppen-Tipp ohne bekannten Ort: nur innerhalb des Zentrums zulassen
        if km(v, (41.03, 29.0)) > 15: weg.append(k); continue
    aus[k] = [round(v[0], 5), round(v[1], 5)]
json.dump(aus, open(os.path.join(HIER, "..", "coords.json"), "w"), ensure_ascii=False, separators=(",", ":"))
print(len(aus), "auf der Karte,", len(weg), "aussortiert:"); print("\n".join(weg))
