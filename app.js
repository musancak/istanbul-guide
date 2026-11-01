/* Istanbul-Guide: Navigation, Seiten, Food-Karte, Abstimmen, Vorschläge. Inhalte stehen in data.js. */
const I={
home:'<path d="M4 11 12 4l8 7v9H4z"/><path d="M10 20v-5h4v5"/>',
train:'<rect x="6" y="3" width="12" height="14" rx="3"/><path d="M6 11h12M9 17l-2 4M15 17l2 4"/>',
fork:'<path d="M7 3v7a2 2 0 0 0 4 0V3M9 12v9M16.5 3C15 4 14 6 14 9s1 4 2.5 4v8"/>',
bag:'<path d="M5 8h14l-1 13H6z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',
compass:'<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/>',
card:'<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M3 10h18M7 15h4"/>',
plane:'<path d="M2.5 13.5 21 6l-4 13-4.5-4.5-3 3V13l8-5.5"/>',
sim:'<path d="M7 3h7l4 4v14H7z"/><rect x="10" y="11" width="5" height="6" rx="1"/>',
phone:'<rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M11 18.5h2"/>',
car:'<path d="M4 15l1.5-5a2 2 0 0 1 1.9-1.5h9.2a2 2 0 0 1 1.9 1.5L20 15v3H4z"/><path d="M7 18v2M17 18v2M4 15h16"/>',
bus:'<rect x="5" y="3" width="14" height="15" rx="3"/><path d="M5 11h14M8 18v2M16 18v2"/>',
moon:'<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',
boat:'<path d="M3 18c2 1.7 4 1.7 6 0 2 1.7 4 1.7 6 0 2 1.7 4 1.7 6 0"/><path d="M5 14.5 4 10h16l-1 4.5M8 10V6h8v4"/>',
link:'<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
money:'<rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/>',
cart:'<path d="M3 4h2l2.5 11h10L20 8H6.5"/><circle cx="9" cy="19" r="1.3"/><circle cx="17" cy="19" r="1.3"/>',
market:'<path d="M3 9l2-5h14l2 5"/><path d="M3 9h18M5 9v11h14V9M10 20v-6h4v6"/>',
wifi:'<path d="M2.5 9a14 14 0 0 1 19 0M5.5 12.5a9.5 9.5 0 0 1 13 0M8.5 16a5 5 0 0 1 7 0"/><path d="M12 19.5h.01"/>',
house:'<path d="M3 11 12 3l9 8"/><path d="M5 9.5V20h14V9.5M10 20v-5h4v5"/>',
doc:'<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/>',
plus:'<path d="M12 5v14M5 12h14"/>',
dome:'<path d="M4 20h16M6 20v-7M18 20v-7M6 13a6 6 0 0 1 12 0"/><path d="M12 3v4M10 20v-4h4v4"/>',
ticket:'<path d="M4 6h16v4a2 2 0 0 0 0 4v4H4v-4a2 2 0 0 0 0-4z"/><path d="M14 6v12"/>',
pin:'<path d="M12 21s-6-5.5-6-11a6 6 0 0 1 12 0c0 5.5-6 11-6 11z"/><circle cx="12" cy="10" r="2"/>',
people:'<circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><circle cx="17" cy="9" r="2.5"/><path d="M16 14.2a5 5 0 0 1 5 5.8"/>',
locate:'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/><circle cx="12" cy="12" r="7"/>',
up:'<path d="m6 15 6-6 6 6"/>', down:'<path d="m6 9 6 6 6-6"/>',
sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
chev:'<path d="m9 5 7 7-7 7"/>', backc:'<path d="m15 5-7 7 7 7"/>', ext:'<path d="M7 17 17 7M9 7h8v8"/>',
search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>', check:'<path d="m5 12.5 4.5 4.5L19 7.5"/>'
};
const svg=(k,c="")=>`<svg viewBox="0 0 24 24" class="${c}" aria-hidden="true">${I[k]}</svg>`;
const esc=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const norm=s=>String(s).toLowerCase().replace(/ı/g,"i").normalize("NFD").replace(/[̀-ͯ]/g,"");
const store={get(k,f){try{const v=localStorage.getItem(k);return v===null?f:JSON.parse(v)}catch(e){return f}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};

/* ---------- Sprache ---------- */
let LANG=store.get("ist-lang",(navigator.language||"de").startsWith("de")?"de":"en");
const UI={
de:{start:"Start",verkehr:"Verkehr",essen:"Essen",alltag:"Alltag",entdecken:"Entdecken",sub:"Für Studierende · Stand 2026",search:"Suchen: Taxi, Ramen, e-İkamet …",clear:"Löschen",sos:"Notruf",sosAll:"Alle Notdienste",police:"Polizei",fire:"Feuer",tourist:"Touristen",sosMore:"Nummern zum Abtippen. Mehr unter",first:"Erste Tage",firstNote:"Abhaken wird nur auf diesem Gerät gespeichert.",prices:"Preise auf einen Blick",popular:"Beliebt",today:"Heute",spots:"Food-Spots",spotsSub:n=>`${n} Orte, mit Karte und Bewertung`,foot:"Zusammengestellt aus dem ESI Istanbul Survival Guide (2025/26), den Istanbul-Gruppenchats und der Food-Spot-Liste der Gruppe. Kein offizielles Angebot. Preise ändern sich schnell, vor Ort kurz prüfen.",tabFoot:"Angaben laut ESI Survival Guide und Gruppenchats, Stand 2025/26.",nothing:v=>`Nichts gefunden für „${v}“.`,topics:"Themen",infos:"Infos",
 essenSub:"Food-Spots aus der Gruppe. Antippen öffnet Google Maps, Pfeile zum Bewerten. Punkte auf der Karte sind automatisch gesetzt und können leicht danebenliegen.",list500:"Liste mit 500 Spots",list500d:"Google Maps, aus der Gruppe WiSe 26/27",orig:"Original-Liste",origd:"Google Doc nach Bezirken",all:"Alle",byArea:"Bezirk",byTop:"Beliebt",byNear:"In der Nähe",fq:"Burger, Mantı, Moda …",places:n=>`${n} ${n===1?"Ort":"Orte"}`,none:"Kein Spot passt. Anderen Bezirk oder Begriff probieren.",onMap:n=>`${n} auf der Karte`,openMaps:"In Google Maps öffnen",noGeo:"Standort nicht verfügbar. Erlaube den Zugriff im Browser oder wähle einen Bezirk.",locating:"Standort wird gesucht …",suggest:"Spot vorschlagen",suggestD:"Fehlt dein Lieblingsladen?",fresh:"Neu",offline:"Bewertungen gerade nicht erreichbar.",
 t1:"Fahrt mit Studentenkarte",t2:"Monatskarte Student, 200 Fahrten",t3:"Taxi-Mindestpreis",t4:"Halk Ekmek, 250 g Brot",
 steps:[["s1","Istanbulkart am Flughafen holen","flughafen"],["s2","SIM-Karte kaufen, Pass mitnehmen","sim"],["s3","e-İkamet innerhalb von 30 Tagen","aufenthalt"],["s4","Studenten-Istanbulkart beantragen","istanbulkart"],["s5","Handy-Frist von 120 Tagen notieren","imei"],["s6","Notrufnummern speichern","notfall"]],
 days:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],monMarket:"Kleine Märkte in vielen Bezirken",marketToday:"Wochenmarkt heute",nightYes:"Heute Nacht fahren Nachtmetro und Nachtfähre",nightNo:"Nachts fahren heute nur Metrobüs und Nachtbusse",ramadan:"",
 calcRides:"Fahrten pro Tag",calcDays:"Tage im Monat",calcStudent:"Studentenkarte",single:"Einzelfahrten",pass:"Monatskarte",verdictPass:d=>`Monatskarte lohnt sich, du sparst ${d} TL.`,verdictSingle:d=>`Einzelfahrten sind ${d} TL günstiger.`,calcNote:"Monatskarte: 653 TL Student (200 Fahrten) oder 3.628 TL voll (180 Fahrten). Fahrten über dem Limit kosten den Einzelpreis.",
 fName:"Name des Ladens",fArea:"Bezirk",fKind:"Art",fNote:"Kurze Notiz (optional)",fNoteP:"z. B. bester Lahmacun, günstig",fSend:"Vorschlag senden",fThanks:"Danke! Der Spot erscheint, sobald er geprüft ist.",fErr:"Senden hat nicht geklappt. Bitte später nochmal.",fOther:"Anderer Bezirk",fIntro:"Neue Spots werden kurz geprüft und erscheinen dann für alle in der Liste.",lang:"English"},
en:{start:"Home",verkehr:"Transport",essen:"Food",alltag:"Daily life",entdecken:"Explore",sub:"For students · 2026",search:"Search: taxi, ramen, e-İkamet …",clear:"Clear",sos:"Emergency",sosAll:"All services",police:"Police",fire:"Fire",tourist:"Tourist",sosMore:"Numbers to dial. More under",first:"First days",firstNote:"Checkmarks are saved on this device only.",prices:"Prices at a glance",popular:"Popular",today:"Today",spots:"Food spots",spotsSub:n=>`${n} places, with map and ratings`,foot:"Compiled from the ESI Istanbul Survival Guide (2025/26), the Istanbul group chats and the group’s food spot list. Not an official service. Prices change fast, double-check on site.",tabFoot:"Based on the ESI Survival Guide and group chats, 2025/26.",nothing:v=>`Nothing found for “${v}”.`,topics:"Topics",infos:"Info",
 essenSub:"Food spots from the group. Tap to open Google Maps, arrows to rate. Map pins are placed automatically and may be slightly off.",list500:"List with 500 spots",list500d:"Google Maps, from the WiSe 26/27 group",orig:"Original list",origd:"Google Doc by district",all:"All",byArea:"District",byTop:"Top rated",byNear:"Near me",fq:"Burger, mantı, Moda …",places:n=>`${n} ${n===1?"place":"places"}`,none:"No spot matches. Try another district or word.",onMap:n=>`${n} on the map`,openMaps:"Open in Google Maps",noGeo:"Location not available. Allow access in your browser or pick a district.",locating:"Finding your location …",suggest:"Suggest a spot",suggestD:"Missing your favourite place?",fresh:"New",offline:"Ratings are not reachable right now.",
 t1:"Ride with student card",t2:"Student monthly pass, 200 rides",t3:"Taxi minimum fare",t4:"Halk Ekmek, 250 g bread",
 steps:[["s1","Get an Istanbulkart at the airport","flughafen"],["s2","Buy a SIM card, bring your passport","sim"],["s3","e-İkamet within 30 days","aufenthalt"],["s4","Apply for the student Istanbulkart","istanbulkart"],["s5","Note the 120-day phone deadline","imei"],["s6","Save the emergency numbers","notfall"]],
 days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monMarket:"Small markets in many districts",marketToday:"Market today",nightYes:"Night metro and night ferry run tonight",nightNo:"Tonight only Metrobüs and night buses run",
 calcRides:"Rides per day",calcDays:"Days per month",calcStudent:"Student card",single:"Single rides",pass:"Monthly pass",verdictPass:d=>`The monthly pass pays off, you save ${d} TL.`,verdictSingle:d=>`Single rides are ${d} TL cheaper.`,calcNote:"Monthly pass: 653 TL student (200 rides) or 3,628 TL full (180 rides). Rides above the limit cost the single fare.",
 fName:"Name of the place",fArea:"District",fKind:"Type",fNote:"Short note (optional)",fNoteP:"e.g. best lahmacun, cheap",fSend:"Send suggestion",fThanks:"Thanks! The spot shows up once it’s checked.",fErr:"Sending failed. Please try again later.",fOther:"Other district",fIntro:"New spots get a quick check and then show up for everyone.",lang:"Deutsch"}
};
const u=k=>UI[LANG][k];
const KIND_EN={r:"Food",c:"Cafés",s:"Shisha",g:"Upscale",t:"Group"};
const GROUP_EN={"Frühstück":"Breakfast","Spät in Kadıköy":"Late in Kadıköy"};
const NOTE_EN=[["laut Gruppe der beste Döner","best döner, says the group"],["eine Straße voller Frühstücksläden","a street full of breakfast places"],["Frühstück am Wasser","breakfast by the water"],["Frühstück","breakfast"],["uigurisch","Uyghur"],["jemenitisch","Yemeni"],["syrisch","Syrian"],["Schwarzmeerküche","Black Sea food"],["afrikanisch","African"],["italienisch","Italian"],["afghanisch","Afghan"],["persisch","Persian"],["libanesisch","Lebanese"],["pakistanisch","Pakistani"],["asiatisch","Asian"],["authentisch","authentic"],["Hausmannskost","home cooking"],["einer der besten","one of the best"],["Preis-Leistung","good value"],["gutes Tatlı","good desserts"],["bestellen","order this"],["Knoblauchbrot","garlic bread"],["viele Cafés und Lokale","lots of cafés and places"],["japanischer Cheesecake","Japanese cheesecake"],["Buchcafé","book café"],["Bibliothekscafé","library café"],["Schokolade","chocolate"],["Kaffee","coffee"],["warme Cookies","warm cookies"],["kalte Baklava","cold baklava"],["günstige Kette","cheap chain"],["nachts","late night"],["Nudeln","noodles"]];
const noteL=s=>{if(LANG!=="en"||!s)return s;for(const[a,b]of NOTE_EN)s=s.split(a).join(b);return s};
const kindL=k=>LANG==="en"?KIND_EN[k]:F[k].t;
const areaL=d=>LANG==="en"?(GROUP_EN[d]||d):d;
const PG=id=>LANG==="en"&&PE[id]?{...P[id],...PE[id]}:P[id];

const TABS=[
 {id:"start",i:"home"},
 {id:"verkehr",i:"train",s:{de:"Istanbulkart, Taxi, Nacht",en:"Istanbulkart, taxi, night"},g:[{r:["istanbulkart","rechner","flughafen","taxi","dolmus","nacht","ausfluege"]},{h:{de:"Planen",en:"Planning"},r:["links"]}]},
 {id:"essen",i:"fork"},
 {id:"alltag",i:"bag",s:{de:"Alles für die ersten Wochen",en:"Everything for the first weeks"},g:[{h:{de:"Ankommen",en:"Arriving"},r:["sim","imei","aufenthalt","wohnen"]},{h:{de:"Jeden Tag",en:"Every day"},r:["geld","einkaufen","pazar","wlan"]},{h:{de:"Sicherheit",en:"Safety"},r:["notfall"]}]},
 {id:"entdecken",i:"compass",s:{de:"Sehen, Museen, Viertel",en:"Sights, museums, neighbourhoods"},g:[{r:["sehen","muzekart","viertel","ausfluege"]},{h:{de:"Über die Seite",en:"About"},r:["danke"]}]}
];

/* ---------- Food-Spots, Bewertungen ---------- */
const FOOD_LIST="https://maps.app.goo.gl/n9GjDf6zoVrzDhsGA";
const FOOD_DOC="https://docs.google.com/document/d/1-fcHRWwjJJ3iX50wu4ELeeuZCtuZmyi87PVhlJMdGvg/edit?usp=sharing";
const GROUP_AREAS=new Set(Object.keys(F.t.d));
let SPOTS=[],COORDS={};
const mapsUrl=(n,area)=>`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${n} ${area||""} Istanbul`)}`;
function buildSpots(extra=[]){
  SPOTS=[];
  for(const k in F)for(const d in F[k].d)for(const e of F[k].d[d]){
    const top=e[0]==="*",[n,note=""]=(top?e.slice(1):e).split("|");
    const area=GROUP_AREAS.has(d)?note.split(",")[0]:d,id=`${d}|${n}`;
    SPOTS.push({id,k,d,n,note,top,u:mapsUrl(n,area),ll:COORDS[id]||null});
  }
  for(const s of extra){const id=`${s.district}|${s.name}`;if(SPOTS.some(x=>x.id===id))continue;
    SPOTS.push({id,k:s.kind,d:s.district,n:s.name,note:s.note||"",fresh:true,u:mapsUrl(s.name,s.district),ll:null})}
}
buildSpots();

const SB="https://tdattimvlqyljahijyoo.supabase.co/rest/v1/rpc/",SBK="sb_publishable_GhyClAXoPp0t752Fvk1kUw_VxGZ0tuX";
const rpc=(fn,body={})=>fetch(SB+fn,{method:"POST",headers:{apikey:SBK,"Content-Type":"application/json"},body:JSON.stringify(body)}).then(r=>{if(!r.ok)throw new Error(r.status);return r.status===204?null:r.json()});
let DEVICE=store.get("ist-device",null);
if(!DEVICE){DEVICE=(crypto.randomUUID?crypto.randomUUID():"10000000-1000-4000-8000-100000000000".replace(/[018]/g,c=>(c^crypto.getRandomValues(new Uint8Array(1))[0]&15>>c/4).toString(16)));store.set("ist-device",DEVICE)}
let SCORES=store.get("ist-scores",{}),MINE=store.get("ist-mine",{}),online=null;
async function loadRemote(){
  try{
    const [sc,mine,sug]=await Promise.all([rpc("get_scores"),rpc("my_votes",{p_device:DEVICE}),rpc("approved_suggestions")]);
    SCORES={};sc.forEach(r=>SCORES[r.spot]=r.score);MINE={};mine.forEach(r=>MINE[r.spot]=r.value);
    store.set("ist-scores",SCORES);store.set("ist-mine",MINE);buildSpots(sug||[]);online=true;
  }catch(e){online=false}
  if(tab==="essen")list();
}
function vote(id,dir){
  const old=MINE[id]||0,nv=old===dir?0:dir;
  SCORES[id]=(SCORES[id]||0)-old+nv;if(nv)MINE[id]=nv;else delete MINE[id];
  store.set("ist-scores",SCORES);store.set("ist-mine",MINE);
  document.querySelectorAll(`.vote[data-id="${CSS.escape(id)}"]`).forEach(paintVote);
  rpc("vote",{p_spot:id,p_device:DEVICE,p_value:nv}).catch(()=>{toast(u("offline"))});
}
function paintVote(el){const id=el.dataset.id,m=MINE[id]||0;el.querySelector(".up").setAttribute("aria-pressed",m===1);el.querySelector(".dn").setAttribute("aria-pressed",m===-1);
  const s=el.querySelector("b");s.textContent=SCORES[id]||0;s.className=m===1?"pos":m===-1?"neg":"";s.animate&&s.animate([{transform:"scale(1.35)"},{transform:"none"}],{duration:260,easing:"cubic-bezier(.32,.72,0,1)"})}
let toastT;function toast(t){let el=document.getElementById("toast");if(!el){el=document.createElement("div");el.id="toast";el.setAttribute("role","status");document.body.appendChild(el)}
  el.textContent=t;el.classList.add("on");clearTimeout(toastT);toastT=setTimeout(()=>el.classList.remove("on"),2600)}

/* ---------- Bausteine ---------- */
const ico=(k,c)=>`<span class="ico" style="background:var(${c})">${svg(k)}</span>`;
function rowHTML(r){
  if(typeof r==="string")return`<div class="row txt">${esc(r)}</div>`;
  if(Array.isArray(r))return`<div class="row kv"><div class="l t">${esc(r[0])}</div><div class="v">${esc(r[1])}</div></div>`;
  if(r.u)return`<a class="row" href="${esc(r.u)}" target="_blank" rel="noopener"><div class="l"><div class="t">${esc(r.l)}</div>${r.d?`<div class="d">${esc(r.d)}</div>`:""}</div>${svg("ext","ext")}</a>`;
  if(r.s)return r.s.map((x,i)=>`<div class="row"><span class="num">${i+1}</span><div class="l t">${esc(x)}</div></div>`).join("");
  if(r.tb)return`<div class="tbl"><table><thead><tr>${r.tb.h.map(h=>`<th>${h}</th>`).join("")}</tr></thead><tbody>${r.tb.r.map(x=>`<tr>${x.map(c=>`<td class="${/^(direkt|direct)$/.test(c)?"m":""}">${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
  return"";
}
const pageRow=id=>{const p=PG(id);return`<button class="row ic" data-go="${id}">${ico(p.i,p.c)}<div class="l"><div class="t">${esc(p.t)}</div>${p.s?`<div class="d">${esc(p.s)}</div>`:""}</div>${svg("chev","chev")}</button>`};
const group=(g,fn)=>`${g.h?`<div class="gh">${esc(g.h)}</div>`:'<div style="height:14px"></div>'}<div class="grp">${g.r.map(fn).join("")}</div>${g.f?`<div class="gf">${esc(g.f)}</div>`:""}`;
const navbar=(t,back,extra="")=>`<header class="nav"><div class="wrap">${back?`<button class="back" data-back>${svg("backc")}<span>${esc(back)}</span></button>`:""}<span class="nav-t">${esc(t)}</span>${extra}</div></header>`;
const langBtn=()=>`<button class="navr" data-lang>${LANG==="de"?"EN":"DE"}</button>`;

/* ---------- Heute ---------- */
function istDay(){try{const w=new Intl.DateTimeFormat("en-US",{timeZone:"Europe/Istanbul",weekday:"short"}).format(new Date());return["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].indexOf(w)}catch(e){return new Date().getDay()}}
function heuteHTML(){
  const d=istDay(),rows=PG("pazar").g[0].r,market=d===1?u("monMarket"):rows[(d+5)%7]?.[1];
  const night=d===5||d===6;
  return`<div class="gh">${u("today")} · ${u("days")[d]}</div><div class="grp">
   <button class="row ic" data-go="pazar">${ico("market","--c8")}<div class="l"><div class="t">${esc(u("marketToday"))}</div><div class="d">${esc(market)}</div></div>${svg("chev","chev")}</button>
   <button class="row ic" data-go="nacht">${ico("moon","--c5")}<div class="l"><div class="t">${esc(night?u("nightYes"):u("nightNo"))}</div></div>${svg("chev","chev")}</button></div>`;
}

/* ---------- Start ---------- */
let done=store.get("ist-done",{});
function startHTML(){
  return`${navbar("Istanbul","",langBtn())}<div class="wrap view">
  <h1 class="lt">Istanbul</h1><p class="sub">${u("sub")}</p>
  <label class="search">${svg("search")}<input id="q" type="search" placeholder="${esc(u("search"))}" autocomplete="off" enterkeyhint="search"><button id="qx" hidden>${u("clear")}</button></label>
  <div id="res"></div>
  <div id="home">
  <div class="gh">${u("sos")}</div>
  <div class="sos"><a class="main" href="tel:112"><b>112</b><span>${u("sosAll")}</span></a><a href="tel:155"><b>155</b><span>${u("police")}</span></a><a href="tel:110"><b>110</b><span>${u("fire")}</span></a><a href="tel:157"><b>157</b><span>${u("tourist")}</span></a></div>
  <div class="gf">${u("sosMore")} <button data-go="notfall" style="color:var(--accent)">${esc(PG("notfall").t)}</button>.</div>
  ${heuteHTML()}
  <div class="gh">${u("first")}</div>
  <div class="grp">${u("steps").map(([k,t,p])=>`<div class="row${done[k]?" done":""}"><button class="chk-btn" data-chk="${k}" aria-label="${esc(t)}" aria-pressed="${!!done[k]}"><span class="chk">${svg("check")}</span></button><button class="l t" data-go="${p}" style="text-align:left">${esc(t)}</button>${svg("chev","chev")}</div>`).join("")}</div>
  <div class="gf">${u("firstNote")}</div>
  <div class="gh">${u("prices")}</div>
  <div class="tiles">
   <button class="tile" data-go="istanbulkart"><b>22,55<small>TL</small></b><span>${u("t1")}</span></button>
   <button class="tile" data-go="rechner"><b>653<small>TL</small></b><span>${u("t2")}</span></button>
   <button class="tile" data-go="taxi"><b>230<small>TL</small></b><span>${u("t3")}</span></button>
   <button class="tile" data-go="einkaufen"><b>15<small>TL</small></b><span>${u("t4")}</span></button>
  </div>
  <div class="gh">${u("popular")}</div>
  <div class="grp">${["sim","nacht","geld","wohnen"].map(pageRow).join("")}
   <button class="row ic" data-tab="essen">${ico("fork","--c2")}<div class="l"><div class="t">${u("spots")}</div><div class="d">${u("spotsSub")(SPOTS.length)}</div></div>${svg("chev","chev")}</button></div>
  <p class="foot">${u("foot")} <button data-go="danke" style="color:var(--accent)">${esc(PG("danke").t)}</button></p>
  </div></div>`;
}
function bindStart(){
  const q=document.getElementById("q"),res=document.getElementById("res"),home=document.getElementById("home"),qx=document.getElementById("qx");
  q.oninput=()=>{const v=q.value.trim();qx.hidden=!v;home.hidden=!!v;res.innerHTML=v?searchHTML(v):""};
  qx.onclick=()=>{q.value="";q.oninput();q.focus()};
  document.querySelectorAll("[data-chk]").forEach(b=>b.onclick=()=>{const k=b.dataset.chk;if(done[k])delete done[k];else done[k]=1;store.set("ist-done",done);
    b.closest(".row").classList.toggle("done",!!done[k]);b.setAttribute("aria-pressed",!!done[k])});
}
function hl(s,v){const i=norm(s).indexOf(norm(v));if(i<0)return esc(s);return esc(s.slice(0,i))+"<mark>"+esc(s.slice(i,i+v.length))+"</mark>"+esc(s.slice(i+v.length))}
function searchHTML(v){
  const nv=norm(v),idx=[];
  for(const id in P)for(const g of PG(id).g)for(const r of g.r){
    const txt=typeof r==="string"?r:Array.isArray(r)?r.join(": "):r.u?r.l+" "+(r.d||""):r.s?r.s.join(" · "):"";
    if(txt&&norm(txt).includes(nv))idx.push({id,txt});
  }
  const pages=Object.keys(P).filter(id=>norm(PG(id).t+" "+PG(id).s).includes(nv));
  const hits=idx.slice(0,25),sp=SPOTS.filter(s=>norm(s.n+" "+s.note+" "+s.d).includes(nv)).slice(0,25);
  if(!pages.length&&!hits.length&&!sp.length)return`<div class="gf" style="margin-top:20px">${esc(u("nothing")(v))}</div>`;
  let h="";
  if(pages.length)h+=group({h:u("topics"),r:pages},pageRow);
  if(hits.length)h+=group({h:u("infos"),r:hits},x=>`<button class="row" data-go="${x.id}"><div class="l"><div class="t">${hl(x.txt.length>110?x.txt.slice(0,110)+"…":x.txt,v)}</div><div class="d">${esc(PG(x.id).t)}</div></div>${svg("chev","chev")}</button>`);
  if(sp.length)h+=`<div class="gh">${u("spots")}</div><div class="grp">${sp.map(spotRow).join("")}</div>`;
  return h;
}

/* ---------- Essen: Karte, Liste, Abstimmen ---------- */
let fk="r",fd="all",fq="",fsort="area",me=null,map=null,layer=null,meLayer=null;
const km=(a,b)=>{const R=6371,t=Math.PI/180,dl=(b[0]-a[0])*t,dn=(b[1]-a[1])*t,x=Math.sin(dl/2)**2+Math.cos(a[0]*t)*Math.cos(b[0]*t)*Math.sin(dn/2)**2;return 2*R*Math.asin(Math.sqrt(x))};
const fmtKm=d=>d<1?`${Math.round(d*1000/10)*10} m`:`${d.toFixed(1).replace(".",LANG==="de"?",":".")} km`;
const voteHTML=s=>`<div class="vote" data-id="${esc(s.id)}"><button class="up" aria-label="Gut" aria-pressed="${MINE[s.id]===1}">${svg("up")}</button><b class="${MINE[s.id]===1?"pos":MINE[s.id]===-1?"neg":""}">${SCORES[s.id]||0}</b><button class="dn" aria-label="Schlecht" aria-pressed="${MINE[s.id]===-1}">${svg("down")}</button></div>`;
function spotRow(s){
  const note=noteL(s.note)||(s.k==="t"?areaL(s.d):""),dist=me&&s.ll?fmtKm(km(me,s.ll)):"";
  return`<div class="row spot"><a class="l" href="${s.u}" target="_blank" rel="noopener"><div class="t">${esc(s.n)}${s.top?'<span class="pill">Top</span>':""}${s.fresh?`<span class="pill">${u("fresh")}</span>`:""}</div>${note||dist?`<div class="d">${esc(note)}${note&&dist?" · ":""}${dist}</div>`:""}</a>${voteHTML(s)}</div>`;
}
function essenHTML(){
  return`${navbar(u("essen"),"",langBtn())}<div class="wrap view">
  <h1 class="lt">${u("essen")}</h1><p class="sub">${u("essenSub")}</p>
  <div class="seg" id="seg" role="group"><i></i>${Object.keys(F).map(k=>`<button data-k="${k}" aria-pressed="${k===fk}">${kindL(k)}</button>`).join("")}</div>
  <div class="mapbox"><div id="map" role="img" aria-label="Karte"></div><button class="locbtn" id="loc" aria-label="${u("byNear")}">${svg("locate")}</button><span class="mapcount" id="mapcount"></span></div>
  <div class="chips" id="chips"></div>
  <div class="sortrow"><div class="seg sm" id="sort" role="group"><i></i>${[["area",u("byArea")],["top",u("byTop")],["near",u("byNear")]].map(([k,t])=>`<button data-s="${k}" aria-pressed="${k===fsort}">${t}</button>`).join("")}</div></div>
  <label class="search">${svg("search")}<input id="fq" type="search" placeholder="${esc(u("fq"))}" value="${esc(fq)}" autocomplete="off"></label>
  <div id="flist"></div>
  <div class="gh"></div>
  <div class="grp">
   <button class="row ic" data-go="vorschlag">${ico("plus","--c3")}<div class="l"><div class="t">${u("suggest")}</div><div class="d">${u("suggestD")}</div></div>${svg("chev","chev")}</button>
   <a class="row ic" href="${FOOD_LIST}" target="_blank" rel="noopener">${ico("pin","--c2")}<div class="l"><div class="t">${u("list500")}</div><div class="d">${u("list500d")}</div></div>${svg("ext","ext")}</a>
   <a class="row ic" href="${FOOD_DOC}" target="_blank" rel="noopener">${ico("doc","--c7")}<div class="l"><div class="t">${u("orig")}</div><div class="d">${u("origd")}</div></div>${svg("ext","ext")}</a>
  </div></div>`;
}
function segPlace(seg,sel,attr){const pill=seg.querySelector("i"),btns=[...seg.querySelectorAll("button")],i=Math.max(0,btns.findIndex(b=>b.dataset[attr]===sel));
  pill.style.width=`calc((100% - 4px) / ${btns.length})`;pill.style.transform=`translateX(${i*100}%)`;btns.forEach(b=>b.setAttribute("aria-pressed",b.dataset[attr]===sel))}
function bindEssen(){
  const seg=document.getElementById("seg"),sort=document.getElementById("sort");
  seg.querySelectorAll("button").forEach(b=>b.onclick=()=>{fk=b.dataset.k;fd="all";segPlace(seg,fk,"k");chips();list(true)});
  sort.querySelectorAll("button").forEach(b=>b.onclick=()=>{const s=b.dataset.s;if(s==="near"&&!me){locate();return}fsort=s;segPlace(sort,fsort,"s");list(s==="near")});
  document.getElementById("loc").onclick=locate;
  document.getElementById("fq").oninput=e=>{fq=e.target.value.trim();list(true)};
  segPlace(seg,fk,"k");segPlace(sort,fsort,"s");
  initMap();chips();list(true);
}
function chips(){
  const el=document.getElementById("chips"),ds=["all",...Object.keys(F[fk].d),...new Set(SPOTS.filter(s=>s.k===fk&&s.fresh&&!F[fk].d[s.d]).map(s=>s.d))];
  el.innerHTML=ds.map(d=>`<button class="chip" aria-pressed="${d===fd}" data-d="${esc(d)}">${esc(d==="all"?u("all"):areaL(d))}</button>`).join("");
  el.querySelectorAll(".chip").forEach(c=>c.onclick=()=>{fd=c.dataset.d;el.querySelectorAll(".chip").forEach(x=>x.setAttribute("aria-pressed",x===c));c.scrollIntoView({inline:"center",block:"nearest",behavior:"smooth"});list(true)});
}
function filtered(){const nv=norm(fq);return SPOTS.filter(x=>x.k===fk&&(fd==="all"||x.d===fd)&&(!nv||norm(x.n+" "+x.note+" "+x.d).includes(nv)))}
function list(fit){
  const el=document.getElementById("flist");if(!el)return;
  let s=filtered();
  if(fsort==="top")s=[...s].sort((a,b)=>(SCORES[b.id]||0)-(SCORES[a.id]||0)||(b.top-a.top));
  if(fsort==="near"&&me)s=[...s].sort((a,b)=>(a.ll?km(me,a.ll):1e9)-(b.ll?km(me,b.ll):1e9));
  let h="";
  if(!s.length)h=`<div class="gf" style="margin-top:20px">${u("none")}</div>`;
  else if(fsort==="area"){const by={};s.forEach(x=>(by[x.d]=by[x.d]||[]).push(x));
    h=`<div class="count">${u("places")(s.length)}${online===false?" · "+u("offline"):""}</div>`+Object.keys(by).map(d=>`<div class="gh">${esc(areaL(d))}</div><div class="grp">${by[d].map(spotRow).join("")}</div>`).join("")}
  else h=`<div class="count">${u("places")(s.length)}</div><div class="grp" style="margin-top:8px">${s.map(spotRow).join("")}</div>`;
  el.innerHTML=h;
  el.querySelectorAll(".vote").forEach(v=>{v.querySelector(".up").onclick=()=>vote(v.dataset.id,1);v.querySelector(".dn").onclick=()=>vote(v.dataset.id,-1)});
  drawMarkers(s,fit);
}
function locate(){
  if(!navigator.geolocation){toast(u("noGeo"));return}
  toast(u("locating"));
  navigator.geolocation.getCurrentPosition(p=>{me=[p.coords.latitude,p.coords.longitude];fsort="near";fd="all";
    const sort=document.getElementById("sort");if(sort)segPlace(sort,"near","s");chips();list(false);
    if(map&&window.L){if(meLayer)meLayer.remove();meLayer=L.circleMarker(me,{radius:8,color:"#fff",weight:3,fillColor:"#2F6FD6",fillOpacity:1}).addTo(map);map.flyTo(me,15,{duration:.8})}
  },()=>toast(u("noGeo")),{enableHighAccuracy:true,timeout:10000,maximumAge:60000});
}
const dark=()=>{const t=document.documentElement.dataset.theme;return t?t==="dark":matchMedia("(prefers-color-scheme: dark)").matches};
function initMap(){
  if(map){map.remove();map=null;meLayer=null}
  if(!window.L){document.getElementById("map").classList.add("nomap");return}
  map=L.map("map",{zoomControl:false,attributionControl:true,tap:true}).setView([41.03,29.0],11);
  const tone=dark()?"Dark":"Light",esri=t=>`https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_${tone}_Gray_${t}/MapServer/tile/{z}/{y}/{x}`;
  L.tileLayer(esri("Base"),{maxZoom:16,attribution:'Esri, HERE, Garmin, &copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'}).addTo(map);
  L.tileLayer(esri("Reference"),{maxZoom:16}).addTo(map);
  layer=L.layerGroup().addTo(map);
  if(me)meLayer=L.circleMarker(me,{radius:8,color:"#fff",weight:3,fillColor:"#2F6FD6",fillOpacity:1}).addTo(map);
}
function drawMarkers(s,fit){
  const c=document.getElementById("mapcount"),pts=s.filter(x=>x.ll);
  if(c)c.textContent=u("onMap")(pts.length);
  if(!map||!layer)return;
  layer.clearLayers();
  const accent=getComputedStyle(document.documentElement).getPropertyValue("--accent").trim()||"#1C58B5";
  pts.forEach(x=>{
    const m=L.circleMarker(x.ll,{radius:x.top?8:6.5,color:"#fff",weight:2,fillColor:x.top?"#E0533B":accent,fillOpacity:.95});
    m.bindPopup(`<b>${esc(x.n)}</b>${x.note?`<br><span>${esc(noteL(x.note))}</span>`:""}<br><a href="${x.u}" target="_blank" rel="noopener">${u("openMaps")}</a>`,{closeButton:false,offset:[0,-4]});
    layer.addLayer(m);
  });
  if(fit&&pts.length){const b=L.latLngBounds(pts.map(x=>x.ll));map.flyToBounds(b.pad(.15),{maxZoom:15,duration:.7})}
  else if(fit)map.flyTo([41.03,29.0],11,{duration:.7});
}

/* ---------- Rechner ---------- */
let calc=store.get("ist-calc",{r:4,d:22,st:true});
function rechnerHTML(){return`<div class="grp calc">
  <div class="row"><div class="l t">${u("calcRides")}</div><b id="cr" class="cv"></b></div><div class="row slide"><input id="crr" type="range" min="1" max="10" step="1" value="${calc.r}" aria-label="${u("calcRides")}"></div>
  <div class="row"><div class="l t">${u("calcDays")}</div><b id="cd" class="cv"></b></div><div class="row slide"><input id="cdd" type="range" min="4" max="31" step="1" value="${calc.d}" aria-label="${u("calcDays")}"></div>
  <label class="row"><div class="l t">${u("calcStudent")}</div><input id="cst" class="switch" type="checkbox" ${calc.st?"checked":""}></label></div>
  <div class="cmp"><div class="box" id="b1"><span>${u("single")}</span><b id="c1"></b></div><div class="box" id="b2"><span>${u("pass")}</span><b id="c2"></b></div></div>
  <p class="verdict" id="cv"></p><div class="gf">${u("calcNote")}</div>`}
function bindRechner(){
  const f=n=>Math.round(n).toLocaleString(LANG==="de"?"de-DE":"en-US"),$=id=>document.getElementById(id);
  const run=()=>{calc={r:+$("crr").value,d:+$("cdd").value,st:$("cst").checked};store.set("ist-calc",calc);
    const fare=calc.st?22.55:46.2,price=calc.st?653:3628,lim=calc.st?200:180,n=calc.r*calc.d;
    const single=n*fare,pass=price+Math.max(0,n-lim)*fare;
    $("cr").textContent=calc.r;$("cd").textContent=calc.d;$("c1").textContent=f(single)+" TL";$("c2").textContent=f(pass)+" TL";
    $("b1").classList.toggle("win",single<pass);$("b2").classList.toggle("win",pass<=single);
    $("cv").textContent=pass<=single?u("verdictPass")(f(single-pass)):u("verdictSingle")(f(pass-single))};
  ["crr","cdd","cst"].forEach(id=>$(id).oninput=run);run();
}

/* ---------- Vorschlag ---------- */
function vorschlagHTML(){
  const areas=[...new Set(Object.values(F).flatMap(c=>Object.keys(c.d)).filter(d=>!GROUP_AREAS.has(d)))].sort((a,b)=>a.localeCompare(b,"tr"));
  return`<p class="gf" style="margin:4px 16px 14px">${u("fIntro")}</p><form id="sf" class="grp form" autocomplete="off">
  <label class="row"><span class="fl">${u("fName")}</span><input id="sn" name="n" required minlength="2" maxlength="80"></label>
  <label class="row"><span class="fl">${u("fArea")}</span><select id="sd" name="d">${areas.map(a=>`<option>${esc(a)}</option>`).join("")}<option value="_">${u("fOther")}</option></select></label>
  <label class="row" id="sdo" hidden><span class="fl">${u("fOther")}</span><input id="sdx" name="dx" maxlength="40"></label>
  <label class="row"><span class="fl">${u("fKind")}</span><select id="sk" name="k">${["r","c","s","g"].map(k=>`<option value="${k}">${kindL(k)}</option>`).join("")}</select></label>
  <label class="row"><span class="fl">${u("fNote")}</span><input id="sno" name="no" maxlength="140" placeholder="${esc(u("fNoteP"))}"></label>
  </form><button class="cta" id="ssend" form="sf" type="submit">${u("fSend")}</button><p class="gf" id="smsg" role="status"></p>`;
}
function bindVorschlag(){
  const $=id=>document.getElementById(id);
  $("sd").onchange=()=>{$("sdo").hidden=$("sd").value!=="_"};
  $("sf").onsubmit=async e=>{e.preventDefault();const b=$("ssend");b.disabled=true;
    const d=$("sd").value==="_"?$("sdx").value.trim():$("sd").value;
    try{await rpc("suggest",{p_name:$("sn").value.trim(),p_district:d||"Istanbul",p_note:$("sno").value.trim(),p_kind:$("sk").value,p_device:DEVICE});
      $("smsg").textContent=u("fThanks");$("sf").reset();$("sdo").hidden=true;toast(u("fThanks"))}
    catch(err){$("smsg").textContent=u("fErr")}
    b.disabled=false};
}

/* ---------- Danke und Quellen ---------- */
const SOURCES=[
 {id:"esi",de:["ESI Istanbul Survival Guide","Verkehr, SIM, Geld, Wohnen, Aufenthalt, Notfall"],en:["ESI Istanbul Survival Guide","Transport, SIM, money, housing, residence, emergency"],u:"https://www.instagram.com/erasmus_social_istanbul/"},
 {id:"fooddoc",de:["Food-Spots-Liste","Google Doc aus der Gruppe SoSe 2026"],en:["Food spot list","Google Doc from the SoSe 2026 group"]},
 {id:"maps500",de:["Liste mit 500 Spots","Google Maps, aus der Gruppe WiSe 26/27"],en:["List with 500 spots","Google Maps, from the WiSe 26/27 group"]},
 {id:"chats",de:["Tipps aus den Gruppenchats","Frühstück, Lahmacun, Bank, eSIM und mehr"],en:["Tips from the group chats","Breakfast, lahmacun, banks, eSIM and more"]}
];
const DK={de:{intro:"Diese Seite sammelt, was andere zusammengetragen haben. Wer etwas davon erstellt hat, wird hier genannt, sobald es bestätigt ist.",open:"Noch nicht bestätigt",by:"Von",claimH:"Ist etwas davon von dir?",claimIntro:"Melde dich. Nach einer kurzen Prüfung wirst du hier genannt. Deine Kontaktdaten sind nicht öffentlich.",src:"Was ist von dir?",name:"Name, wie er hier stehen soll",contact:"Kontakt (Instagram, E-Mail oder Telefon)",proof:"Wie kannst du zeigen, dass es von dir ist?",proofP:"z. B. Link zum Original, Bearbeitungsrechte, Screenshot auf Anfrage",send:"Meldung senden",thanks:"Danke! Wir melden uns und nennen dich nach der Prüfung.",err:"Senden hat nicht geklappt. Bitte später nochmal."},
 en:{intro:"This page collects what others put together. Whoever created something here gets credited once it’s confirmed.",open:"Not confirmed yet",by:"By",claimH:"Did you make any of this?",claimIntro:"Get in touch. After a quick check you’ll be credited here. Your contact details stay private.",src:"What did you make?",name:"Name as it should appear",contact:"Contact (Instagram, email or phone)",proof:"How can you show it’s yours?",proofP:"e.g. link to the original, edit rights, screenshot on request",send:"Send",thanks:"Thanks! We’ll get back to you and credit you after the check.",err:"Sending failed. Please try again later."}};
let CREDITS=null;
function dankeHTML(){const t=DK[LANG];
  return`<p class="gf" style="margin:4px 16px 0">${t.intro}</p><div style="height:14px"></div><div class="grp" id="srcs">${srcRows()}</div>
  <div class="gh">${t.claimH}</div><p class="gf" style="margin:0 16px 10px">${t.claimIntro}</p>
  <form id="cf" class="grp form" autocomplete="off">
   <label class="row"><span class="fl">${t.src}</span><select id="cs">${SOURCES.map(s=>`<option value="${s.id}">${esc(s[LANG][0])}</option>`).join("")}</select></label>
   <label class="row"><span class="fl">${t.name}</span><input id="cn" required minlength="2" maxlength="80"></label>
   <label class="row"><span class="fl">${t.contact}</span><input id="cc" required minlength="3" maxlength="120"></label>
   <label class="row"><span class="fl">${t.proof}</span><textarea id="cp" maxlength="500" rows="3" placeholder="${esc(t.proofP)}"></textarea></label>
  </form><button class="cta" id="csend" form="cf" type="submit">${t.send}</button><p class="gf" id="cmsg" role="status"></p>`}
function srcRows(){const t=DK[LANG];return SOURCES.map(s=>{const names=(CREDITS||[]).filter(c=>c.source===s.id).map(c=>c.credit);
  const inner=`<div class="l"><div class="t">${esc(s[LANG][0])}</div><div class="d">${esc(s[LANG][1])}</div><div class="d cr">${names.length?`${t.by} ${esc(names.join(", "))}`:t.open}</div></div>`;
  return s.u?`<a class="row" href="${s.u}" target="_blank" rel="noopener">${inner}${svg("ext","ext")}</a>`:`<div class="row">${inner}</div>`}).join("")}
function bindDanke(){const t=DK[LANG],$=id=>document.getElementById(id);
  if(!CREDITS)rpc("credits").then(c=>{CREDITS=c||[];const el=$("srcs");if(el)el.innerHTML=srcRows()}).catch(()=>{});
  $("cf").onsubmit=async e=>{e.preventDefault();const b=$("csend");b.disabled=true;
    try{await rpc("claim",{p_source:$("cs").value,p_name:$("cn").value,p_contact:$("cc").value,p_proof:$("cp").value,p_device:DEVICE});$("cmsg").textContent=t.thanks;$("cf").reset();toast(t.thanks)}
    catch(err){$("cmsg").textContent=t.err}
    b.disabled=false};
}

/* ---------- Tabs, Seiten, Navigation ---------- */
const tabT=t=>u(t.id);
function tabHTML(t){return`${navbar(tabT(t),"",langBtn())}<div class="wrap view"><h1 class="lt">${esc(tabT(t))}</h1><p class="sub">${esc(t.s[LANG])}</p>${t.g.map(g=>group({...g,h:g.h&&g.h[LANG]},pageRow)).join("")}<p class="foot">${u("tabFoot")}</p></div>`}
function pageHTML(id,back){const p=PG(id);
  const body=id==="rechner"?rechnerHTML():id==="vorschlag"?vorschlagHTML():id==="danke"?dankeHTML():p.g.map(g=>group(g,rowHTML)).join("");
  return`${navbar(p.t,back)}<div class="wrap body"><h1 class="lt">${esc(p.t)}</h1>${p.s?`<p class="sub">${esc(p.s)}</p>`:""}${body}</div>`}

const main=document.getElementById("main"),pane=document.getElementById("pane"),tabsEl=document.getElementById("tabs");
let tab="start",page=null;
function drawTabbar(){tabsEl.innerHTML=TABS.map(t=>`<button class="tab" data-tab="${t.id}" aria-current="${t.id===tab?"page":"false"}">${svg(t.i)}<span>${tabT(t)}</span></button>`).join("")}
function showTab(id,keepScroll){
  const t=TABS.find(x=>x.id===id)||TABS[0];tab=t.id;
  if(map&&t.id!=="essen"){map.remove();map=null}
  main.innerHTML=t.id==="start"?startHTML():t.id==="essen"?essenHTML():tabHTML(t);
  if(t.id==="start")bindStart();if(t.id==="essen")bindEssen();
  drawTabbar();if(!keepScroll)window.scrollTo(0,0);navScroll();
}
function openPage(id){
  if(!P[id])return;page=id;
  pane.innerHTML=pageHTML(id,tabT(TABS.find(x=>x.id===tab)||TABS[0]));pane.scrollTop=0;
  if(id==="rechner")bindRechner();if(id==="vorschlag")bindVorschlag();if(id==="danke")bindDanke();
  requestAnimationFrame(()=>{pane.classList.add("open");main.classList.add("pushed")});
  paneScroll();
}
function closePage(){page=null;pane.classList.remove("open","drag");pane.style.transform="";main.classList.remove("pushed");main.style.transform=""}
function setHash(h){try{if(location.hash.slice(1)!==h)history.pushState(null,"","#"+h)}catch(e){}}
const parentTab=id=>(TABS.find(t=>t.g&&t.g.some(g=>g.r.includes(id)))||TABS[0]).id;
function go(id){if(P[id]){openPage(id);setHash(id)}else{if(page)closePage();if(id!==tab||!main.innerHTML)showTab(id);setHash(id)}}
function route(){
  const h=decodeURIComponent((location.hash||"").slice(1));
  if(P[h]){if(!main.innerHTML)showTab(parentTab(h));if(page!==h)openPage(h)}
  else if(TABS.some(t=>t.id===h)){if(page)closePage();if(h!==tab||!main.innerHTML)showTab(h)}
  else{if(page)closePage();if(!main.innerHTML)showTab("start")}
}
document.addEventListener("click",e=>{
  const g=e.target.closest("[data-go]"),t=e.target.closest("[data-tab]"),b=e.target.closest("[data-back]"),l=e.target.closest("[data-lang]");
  if(l){LANG=LANG==="de"?"en":"de";store.set("ist-lang",LANG);document.documentElement.lang=LANG;showTab(tab,true);return}
  if(b){e.preventDefault();if(history.state!==undefined&&history.length>1&&location.hash.slice(1)===page)history.back();else{closePage();setHash(tab)}return}
  if(g){e.preventDefault();go(g.dataset.go);return}
  if(t){e.preventDefault();if(page)closePage();if(t.dataset.tab===tab&&!page)window.scrollTo({top:0,behavior:"smooth"});else showTab(t.dataset.tab);setHash(t.dataset.tab)}
});
addEventListener("popstate",route);addEventListener("hashchange",route);

function navScroll(){const n=main.querySelector(".nav");if(n)n.classList.toggle("on",scrollY>34)}
function paneScroll(){const n=pane.querySelector(".nav");if(n)n.classList.toggle("on",pane.scrollTop>34)}
addEventListener("scroll",navScroll,{passive:true});
pane.addEventListener("scroll",paneScroll,{passive:true});

/* Wischen vom linken Rand zurück */
let sx=null,dx=0;
pane.addEventListener("touchstart",e=>{const x=e.touches[0].clientX;if(x<28){sx=x;dx=0;pane.classList.add("drag");main.style.transition="none"}},{passive:true});
pane.addEventListener("touchmove",e=>{if(sx===null)return;dx=Math.max(0,e.touches[0].clientX-sx);pane.style.transform=`translateX(${dx}px)`;main.style.transform=`translateX(${-24+24*dx/innerWidth}%)`},{passive:true});
pane.addEventListener("touchend",()=>{if(sx===null)return;sx=null;pane.classList.remove("drag");main.style.transition="";
  if(dx>innerWidth*.3){closePage();setHash(tab)}else{pane.style.transform="";main.style.transform=""}});

document.documentElement.lang=LANG;
route();
fetch("coords.json").then(r=>r.json()).then(c=>{COORDS=c;for(const s of SPOTS)s.ll=COORDS[s.id]||s.ll;if(tab==="essen")list(false)}).catch(()=>{});
loadRemote();
if("serviceWorker" in navigator&&location.protocol==="https:")navigator.serviceWorker.register("sw.js").catch(()=>{});
