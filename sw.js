/* Offline: eigene Dateien und Leaflet aus dem Cache, im Hintergrund aktualisieren. Kartenkacheln nur, was schon angesehen wurde. */
const V = "ist-v9";
const CORE = ["./", "index.html", "data.js", "app.js", "coords.json", "manifest.webmanifest", "icon-192.png",
  "leaflet/leaflet.min.css", "leaflet/leaflet.min.js", "rechtliches.html"];
self.addEventListener("install", e => { e.waitUntil(caches.open(V).then(c => c.addAll(CORE.map(u => new Request(u, { cache: "reload" })))).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V && k !== "ist-tiles").map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const u = new URL(e.request.url);
  if (e.request.method !== "GET" || u.hostname.endsWith("supabase.co")) return;
  if (u.hostname === "server.arcgisonline.com") {
    e.respondWith(caches.open("ist-tiles").then(async c => {
      const hit = await c.match(e.request);
      if (hit) return hit;
      const r = await fetch(e.request);
      if (r.ok) c.put(e.request, r.clone());
      return r;
    }));
    return;
  }
  if (u.origin !== location.origin) return;
  e.respondWith(caches.open(V).then(async c => {
    const hit = await c.match(e.request, { ignoreSearch: true });
    const net = fetch(e.request).then(r => { if (r.ok) c.put(e.request, r.clone()); return r; }).catch(() => hit);
    return hit || net;
  }));
});
