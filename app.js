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
cloud:'<path d="M7 18h10a4 4 0 0 0 .5-8A6 6 0 0 0 6 9.5 4.3 4.3 0 0 0 7 18z"/>',
rain:'<path d="M7 14h10a4 4 0 0 0 .5-8A6 6 0 0 0 6 5.5 4.3 4.3 0 0 0 7 14z"/><path d="m9 17-1 3M13 17l-1 3M17 17l-1 3"/>',
sunset:'<path d="M4 18h16M7 21h10M6.3 14a6 6 0 0 1 11.4 0M12 4v4M4.9 8.9l1.4 1.4M19.1 8.9l-1.4 1.4"/>',
cal:'<rect x="4" y="5" width="16" height="16" rx="2"/><path d="M4 10h16M9 3v4M15 3v4"/>',
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
de:{start:"Start",verkehr:"Verkehr",essen:"Essen",alltag:"Alltag",entdecken:"Entdecken",sub:"Für Studierende · Stand 2026",search:"Suchen: Taxi, Ramen, e-İkamet …",clear:"Löschen",sos:"Notruf",sosAll:"Alle Notdienste",police:"Polizei",fire:"Feuer",tourist:"Ausländer",sosMore:"Nummern zum Abtippen. Mehr unter",first:"Erste Tage",firstNote:"Abhaken wird nur auf diesem Gerät gespeichert.",prices:"Preise auf einen Blick",popular:"Beliebt",today:"Heute",spots:"Food-Spots",spotsSub:n=>`${n} Orte, mit Karte und Bewertung`,foot:"Eigene Texte nach offiziellen Seiten (İBB, Metro İstanbul, Istanbulkart, Migrationsbehörde) sowie Tipps aus den Istanbul-Gruppenchats und der Food-Spot-Liste der Gruppe. Kein offizielles Angebot. Preise ändern sich schnell, vor Ort kurz prüfen.",tabFoot:"Nach offiziellen Seiten, Stand November 2026.",nothing:v=>`Nichts gefunden für „${v}“.`,topics:"Themen",infos:"Infos",
 essenSub:"Food-Spots aus der Gruppe. Antippen öffnet Google Maps, Pfeile zum Bewerten. Punkte auf der Karte sind automatisch gesetzt und können leicht danebenliegen.",list500:"Liste mit 500 Spots",list500d:"Google Maps, aus der Gruppe WiSe 26/27",orig:"Original-Liste",origd:"Google Doc nach Bezirken",all:"Alle",byArea:"Bezirk",byTop:"Beliebt",byNear:"In der Nähe",fq:"Burger, Mantı, Moda …",places:n=>`${n} ${n===1?"Ort":"Orte"}`,none:"Kein Spot passt. Anderen Bezirk oder Begriff probieren.",onMap:n=>`${n} auf der Karte`,openMaps:"In Google Maps öffnen",noGeo:"Standort nicht verfügbar. Erlaube den Zugriff im Browser oder wähle einen Bezirk.",locating:"Standort wird gesucht …",suggest:"Spot vorschlagen",suggestD:"Fehlt dein Lieblingsladen?",fresh:"Neu",offline:"Bewertungen gerade nicht erreichbar.",
 t1:"Fahrt mit Studentenkarte",t2:"Monatskarte Student",t3:"Taxi-Mindestpreis",t4:"Einzelfahrt voll",
 steps:[["s1","Istanbulkart am Flughafen holen","flughafen"],["s2","SIM-Karte kaufen, Pass mitnehmen","sim"],["s3","e-İkamet rechtzeitig beantragen","aufenthalt"],["s4","Studenten-Istanbulkart beantragen","istanbulkart"],["s5","Handy-Frist von 120 Tagen notieren","imei"],["s6","Notrufnummern speichern","notfall"]],
 days:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],monMarket:"Kleine Märkte in vielen Bezirken",marketToday:"Wochenmarkt heute",nightYes:"Heute Nacht fährt die Nachtmetro",nightNo:"Nachts fahren heute nur Metrobüs und Nachtbusse",ramadan:"",
 calcRides:"Fahrten pro Tag",calcDays:"Tage im Monat",calcStudent:"Studentenkarte",single:"Einzelfahrten",pass:"Monatskarte",verdictPass:d=>`Monatskarte lohnt sich, du sparst ${d} TL.`,verdictSingle:d=>`Einzelfahrten sind ${d} TL günstiger.`,calcNote:"Monatskarte: 653 TL Student (200 Fahrten) oder 3.628 TL voll (180 Fahrten). Fahrten über dem Limit kosten den Einzelpreis.",
 fName:"Name des Ladens",fArea:"Bezirk",fKind:"Art",fNote:"Kurze Notiz (optional)",fNoteP:"z. B. bester Lahmacun, günstig",fSend:"Vorschlag senden",fThanks:"Danke! Der Spot erscheint, sobald er geprüft ist.",fErr:"Senden hat nicht geklappt. Bitte später nochmal.",fOther:"Anderer Bezirk",fIntro:"Neue Spots werden kurz geprüft und erscheinen dann für alle in der Liste.",lang:"English"},
en:{start:"Home",verkehr:"Transport",essen:"Food",alltag:"Daily life",entdecken:"Explore",sub:"For students · 2026",search:"Search: taxi, ramen, e-İkamet …",clear:"Clear",sos:"Emergency",sosAll:"All services",police:"Police",fire:"Fire",tourist:"Foreigners",sosMore:"Numbers to dial. More under",first:"First days",firstNote:"Checkmarks are saved on this device only.",prices:"Prices at a glance",popular:"Popular",today:"Today",spots:"Food spots",spotsSub:n=>`${n} places, with map and ratings`,foot:"Written by us from official sources (İBB, Metro İstanbul, Istanbulkart, migration authority), plus tips from the Istanbul group chats and the group’s food spot list. Not an official service. Prices change fast, double-check on site.",tabFoot:"Based on official sources, as of November 2026.",nothing:v=>`Nothing found for “${v}”.`,topics:"Topics",infos:"Info",
 essenSub:"Food spots from the group. Tap to open Google Maps, arrows to rate. Map pins are placed automatically and may be slightly off.",list500:"List with 500 spots",list500d:"Google Maps, from the WiSe 26/27 group",orig:"Original list",origd:"Google Doc by district",all:"All",byArea:"District",byTop:"Top rated",byNear:"Near me",fq:"Burger, mantı, Moda …",places:n=>`${n} ${n===1?"place":"places"}`,none:"No spot matches. Try another district or word.",onMap:n=>`${n} on the map`,openMaps:"Open in Google Maps",noGeo:"Location not available. Allow access in your browser or pick a district.",locating:"Finding your location …",suggest:"Suggest a spot",suggestD:"Missing your favourite place?",fresh:"New",offline:"Ratings are not reachable right now.",
 t1:"Ride with student card",t2:"Student monthly pass",t3:"Taxi minimum fare",t4:"Full single ride",
 steps:[["s1","Get an Istanbulkart at the airport","flughafen"],["s2","Buy a SIM card, bring your passport","sim"],["s3","Apply for e-İkamet in time","aufenthalt"],["s4","Apply for the student Istanbulkart","istanbulkart"],["s5","Note the 120-day phone deadline","imei"],["s6","Save the emergency numbers","notfall"]],
 days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monMarket:"Small markets in many districts",marketToday:"Market today",nightYes:"The night metro runs tonight",nightNo:"Tonight only Metrobüs and night buses run",
 calcRides:"Rides per day",calcDays:"Days per month",calcStudent:"Student card",single:"Single rides",pass:"Monthly pass",verdictPass:d=>`The monthly pass pays off, you save ${d} TL.`,verdictSingle:d=>`Single rides are ${d} TL cheaper.`,calcNote:"Monthly pass: 653 TL student (200 rides) or 3,628 TL full (180 rides). Rides above the limit cost the single fare.",
 fName:"Name of the place",fArea:"District",fKind:"Type",fNote:"Short note (optional)",fNoteP:"e.g. best lahmacun, cheap",fSend:"Send suggestion",fThanks:"Thanks! The spot shows up once it’s checked.",fErr:"Sending failed. Please try again later.",fOther:"Other district",fIntro:"New spots get a quick check and then show up for everyone.",lang:"Deutsch"}
};
const u=k=>UI[LANG][k];
const KIND_EN={r:"Food",c:"Cafés",s:"Shisha",g:"Upscale",t:"Group"};
const GROUP_EN={"Frühstück":"Breakfast","Spät in Kadıköy":"Late in Kadıköy"};
const NOTE_EN=[["mexikanisch","Mexican"],["Dachterrasse","rooftop"],["im Wald","in the forest"],["laut Gruppe der beste Döner","best döner, says the group"],["eine Straße voller Frühstücksläden","a street full of breakfast places"],["Frühstück am Wasser","breakfast by the water"],["Frühstück","breakfast"],["uigurisch","Uyghur"],["jemenitisch","Yemeni"],["syrisch","Syrian"],["Schwarzmeerküche","Black Sea food"],["afrikanisch","African"],["italienisch","Italian"],["afghanisch","Afghan"],["persisch","Persian"],["libanesisch","Lebanese"],["pakistanisch","Pakistani"],["asiatisch","Asian"],["authentisch","authentic"],["Hausmannskost","home cooking"],["einer der besten","one of the best"],["Preis-Leistung","good value"],["gutes Tatlı","good desserts"],["bestellen","order this"],["Knoblauchbrot","garlic bread"],["viele Cafés und Lokale","lots of cafés and places"],["japanischer Cheesecake","Japanese cheesecake"],["Buchcafé","book café"],["Bibliothekscafé","library café"],["Schokolade","chocolate"],["Kaffee","coffee"],["warme Cookies","warm cookies"],["kalte Baklava","cold baklava"],["günstige Kette","cheap chain"],["nachts","late night"],["Nudeln","noodles"]];
const noteL=s=>{if(LANG!=="en"||!s)return s;for(const[a,b]of NOTE_EN)s=s.split(a).join(b);return s};
const kindL=k=>LANG==="en"?KIND_EN[k]:F[k].t;
const areaL=d=>LANG==="en"?(GROUP_EN[d]||d):d;
const PG=id=>LANG==="en"&&PE[id]?{...P[id],...PE[id]}:P[id];

const TABS=[
 {id:"start",i:"home"},
 {id:"verkehr",i:"train",s:{de:"Istanbulkart, Taxi, Nacht",en:"Istanbulkart, taxi, night"},g:[{r:["istanbulkart","rechner","flughafen","taxi","dolmus","nacht","ausfluege"]},{h:{de:"Planen",en:"Planning"},r:["links"]}]},
 {id:"essen",i:"fork"},
 {id:"alltag",i:"bag",s:{de:"Alles für die ersten Wochen",en:"Everything for the first weeks"},g:[{h:{de:"Ankommen",en:"Arriving"},r:["sim","imei","aufenthalt","wohnen"]},{h:{de:"Jeden Tag",en:"Every day"},r:["geld","einkaufen","pazar","wlan"]},{h:{de:"Sicherheit",en:"Safety"},r:["notfall"]}]},
 {id:"entdecken",i:"compass",s:{de:"Sehen, Museen, Viertel",en:"Sights, museums, neighbourhoods"},g:[{r:["events","sehen","muzekart","viertel","ausfluege"]},{h:{de:"Über die Seite",en:"About"},r:["danke","datenschutz"]}]}
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
  zaehl("bewertet");
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

/* ---------- Heute: Wetter, Kurs, Hinweise, Events ---------- */
const HT={
de:{wx:["Klar","Heiter","Wolkig","Bewölkt","Nebel","Niesel","Regen","Schnee","Schauer","Gewitter"],tomorrow:"Morgen",rainAt:h=>`Regen wahrscheinlich ab ${h} Uhr, Schirm mitnehmen`,rainTom:"Morgen wird es wohl nass",sunset:t=>`Sonnenuntergang ${t}`,sunsetD:"Schön von Galata, Çamlıca oder der Fähre nach Kadıköy",
 rate:r=>`1 € = ${r} TL`,rateD:(x,d)=>`100 TL ≈ ${x} € · Kurs vom ${d}`,
 hol:n=>`Feiertag: ${n}`,holD:"Banken und Ämter zu. Öffis sind an Feiertagen oft kostenlos, kurz bei İBB prüfen.",eve:n=>`Morgen Feiertag: ${n}`,eveD:"Ämter heute nur bis mittags, abends viel Verkehr. Nachtmetro fährt.",
 mon:"Montag: viele Museen zu",monD:"Dolmabahçe, Istanbul Modern, Pera Museum. Topkapı ist offen.",tue:"Dienstag: Topkapı-Palast zu",tueD:"Dafür sind Dolmabahçe und die meisten anderen Museen offen.",
 fri:"Freitagsgebet: Moscheen ca. 12–14:30 Uhr voll",friD:"Besichtigungen besser vormittags oder später.",
 ev:"Events",evMore:"Mehr Events und Ticketseiten",evNote:"Termine ohne Gewähr, vorher beim Veranstalter prüfen.",free:"kostenlos",until:d=>`bis ${d}`,runs:d=>`läuft bis ${d}`,
 mons:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"]},
en:{wx:["Clear","Mostly clear","Partly cloudy","Cloudy","Fog","Drizzle","Rain","Snow","Showers","Thunderstorm"],tomorrow:"Tomorrow",rainAt:h=>`Rain likely from ${h}:00, take an umbrella`,rainTom:"Tomorrow looks wet",sunset:t=>`Sunset ${t}`,sunsetD:"Best from Galata, Çamlıca or the ferry to Kadıköy",
 rate:r=>`€1 = ${r} TL`,rateD:(x,d)=>`100 TL ≈ €${x} · rate of ${d}`,
 hol:n=>`Public holiday: ${n}`,holD:"Banks and offices closed. Public transport is often free on holidays, check İBB.",eve:n=>`Holiday tomorrow: ${n}`,eveD:"Offices close at noon today, heavy traffic in the evening. Night metro runs.",
 mon:"Monday: many museums closed",monD:"Dolmabahçe, Istanbul Modern, Pera Museum. Topkapı is open.",tue:"Tuesday: Topkapı Palace closed",tueD:"Dolmabahçe and most other museums are open.",
 fri:"Friday prayer: mosques busy approx. 12–14:30",friD:"Better visit in the morning or later.",
 ev:"Events",evMore:"More events and ticket sites",evNote:"Dates without guarantee, check with the organiser.",free:"free",until:d=>`until ${d}`,runs:d=>`on until ${d}`,
 mons:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}};
const h=k=>HT[LANG][k];
/* Gesetzliche Feiertage; Bayram-Daten nach Diyanet. Vortag (arife) = halber Tag. */
const HOL={"2026-01-01":["Neujahr","New Year"],"2026-03-20":["Ramazan Bayramı","Ramadan Feast"],"2026-03-21":["Ramazan Bayramı","Ramadan Feast"],"2026-03-22":["Ramazan Bayramı","Ramadan Feast"],"2026-04-23":["Tag der Kinder","Children’s Day"],"2026-05-01":["Tag der Arbeit","Labour Day"],"2026-05-19":["Tag der Jugend","Youth Day"],"2026-05-27":["Kurban Bayramı","Feast of Sacrifice"],"2026-05-28":["Kurban Bayramı","Feast of Sacrifice"],"2026-05-29":["Kurban Bayramı","Feast of Sacrifice"],"2026-05-30":["Kurban Bayramı","Feast of Sacrifice"],"2026-07-15":["Tag der Demokratie","Democracy Day"],"2026-08-30":["Tag des Sieges","Victory Day"],"2026-10-29":["Tag der Republik","Republic Day"],
 "2027-01-01":["Neujahr","New Year"],"2027-03-09":["Ramazan Bayramı","Ramadan Feast"],"2027-03-10":["Ramazan Bayramı","Ramadan Feast"],"2027-03-11":["Ramazan Bayramı","Ramadan Feast"],"2027-04-23":["Tag der Kinder","Children’s Day"],"2027-05-01":["Tag der Arbeit","Labour Day"],"2027-05-16":["Kurban Bayramı","Feast of Sacrifice"],"2027-05-17":["Kurban Bayramı","Feast of Sacrifice"],"2027-05-18":["Kurban Bayramı","Feast of Sacrifice"],"2027-05-19":["Kurban Bayramı, Tag der Jugend","Feast of Sacrifice, Youth Day"],"2027-07-15":["Tag der Demokratie","Democracy Day"],"2027-08-30":["Tag des Sieges","Victory Day"],"2027-10-29":["Tag der Republik","Republic Day"]};
function istDate(off=0){try{return new Intl.DateTimeFormat("en-CA",{timeZone:"Europe/Istanbul"}).format(new Date(Date.now()+off*864e5))}catch(e){return new Date(Date.now()+off*864e5).toISOString().slice(0,10)}}
function istDay(){return new Date(istDate()+"T12:00:00Z").getUTCDay()}
const num=(x,d)=>x.toLocaleString(LANG==="de"?"de-DE":"en-GB",{minimumFractionDigits:d,maximumFractionDigits:d});
const fmtD=s=>{const [y,m,d]=s.split("-").map(Number);return`${d}${LANG==="de"?".":""} ${h("mons")[m-1]}`};

/* Live-Daten: Wetter (Open-Meteo), Kurs (EZB über Frankfurter), Events (Supabase). Zwischenspeicher im Browser, damit offline das Letzte steht. */
let LIVE=store.get("ist-live",{});
const AGE={wx:30*6e4,fx:6*36e5,ev:30*6e4};
function loadLive(){
  const now=Date.now(),get=(k,url,map,opt)=>{if(LIVE[k]&&now-LIVE[k].at<AGE[k])return;
    (opt?rpc(url):fetch(url).then(r=>{if(!r.ok)throw 0;return r.json()})).then(d=>{LIVE[k]={at:Date.now(),d:map(d)};store.set("ist-live",LIVE);const el=document.getElementById("heute");if(el)el.outerHTML=heuteHTML()}).catch(()=>{})};
  get("wx","https://api.open-meteo.com/v1/forecast?latitude=41.01&longitude=28.98&current=temperature_2m,weather_code&hourly=precipitation_probability&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,sunset&forecast_days=2&timezone=Europe%2FIstanbul",
    d=>({t:d.current.temperature_2m,c:d.current.weather_code,hr:d.hourly.time.map((t,i)=>[t,d.hourly.precipitation_probability[i]]).slice(0,24),mx:d.daily.temperature_2m_max,mn:d.daily.temperature_2m_min,pp:d.daily.precipitation_probability_max,wc:d.daily.weather_code,ss:d.daily.sunset,day:d.daily.time[0]}));
  get("fx","https://api.frankfurter.dev/v1/latest?base=EUR&symbols=TRY",d=>({r:d.rates.TRY,date:d.date}));
  get("ev","get_events",d=>d,true);
}
const wxIdx=c=>c===0?0:c<=1?1:c===2?2:c===3?3:c<=48?4:c<=57?5:c<=67?6:c<=77?7:c<=82?8:c<=86?7:9;
const wxIco=c=>{const i=wxIdx(c);return i<=1?["sun","--c4"]:i<=4?["cloud","--c7"]:["rain","--c1"]};
function wxRows(){
  const w=LIVE.wx&&LIVE.wx.d;if(!w||w.day!==istDate())return"";
  const [ic,col]=wxIco(w.c),hr=new Date().toLocaleString("en-US",{timeZone:"Europe/Istanbul",hour:"numeric",hour12:false})|0;
  const wet=w.hr.find(([t,p])=>+t.slice(11,13)>=hr&&p>=50);
  const tip=wet?h("rainAt")(+wet[0].slice(11,13)):w.pp[1]>=50?h("rainTom"):`${h("tomorrow")}: ${h("wx")[wxIdx(w.wc[1])]}, ${Math.round(w.mn[1])}–${Math.round(w.mx[1])}°`;
  const ss=w.ss[0].slice(11,16);
  return`<div class="row ic">${ico(ic,col)}<div class="l"><div class="t">${Math.round(w.t)}° · ${esc(h("wx")[wxIdx(w.c)])} <span class="mut">${Math.round(w.mn[0])}–${Math.round(w.mx[0])}°</span></div><div class="d">${esc(tip)}</div></div></div>
   <div class="row ic">${ico("sunset","--c2")}<div class="l"><div class="t">${esc(h("sunset")(ss))}</div><div class="d">${esc(h("sunsetD"))}</div></div></div>`;
}
function fxRow(){
  const f=LIVE.fx&&LIVE.fx.d;if(!f)return"";
  return`<button class="row ic" data-go="geld">${ico("money","--c3")}<div class="l"><div class="t">${esc(h("rate")(num(f.r,2)))}</div><div class="d">${esc(h("rateD")(num(100/f.r,2),fmtD(f.date)))}</div></div>${svg("chev","chev")}</button>`;
}
function hintRows(d){
  const out=[],hol=HOL[istDate()],eve=HOL[istDate(1)],L=LANG==="de"?0:1;
  const row=(i,c,t,s)=>`<div class="row ic">${ico(i,c)}<div class="l"><div class="t">${esc(t)}</div><div class="d">${esc(s)}</div></div></div>`;
  if(hol)out.push(row("cal","--c2",h("hol")(hol[L]),h("holD")));
  else if(eve)out.push(row("cal","--c4",h("eve")(eve[L]),h("eveD")));
  if(d===1)out.push(row("dome","--c6",h("mon"),h("monD")));
  if(d===2)out.push(row("dome","--c6",h("tue"),h("tueD")));
  if(d===5)out.push(row("dome","--c6",h("fri"),h("friD")));
  return out.join("");
}
function evHTML(){
  const ev=(LIVE.ev&&LIVE.ev.d||[]).filter(e=>(e.ends||e.starts)>=istDate());
  const more=`<button class="row ic" data-go="events">${ico("ticket","--c8")}<div class="l"><div class="t">${esc(h("evMore"))}</div></div>${svg("chev","chev")}</button>`;
  const rows=ev.slice(0,6).map(e=>{
    const running=e.starts<=istDate()&&e.ends;
    const [,em,ed]=(running?e.ends:e.starts).split("-").map(Number);
    const when=`<span class="dt${running?" now":""}"><small>${h("mons")[em-1]}</small><b>${ed}</b></span>`;
    const sub=[e.place,running?h("runs")(fmtD(e.ends)):e.ends?h("until")(fmtD(e.ends)):""].filter(Boolean).join(" · ");
    const inner=`${when}<div class="l"><div class="t">${esc(LANG==="en"&&e.title_en||e.title)}${e.free?` <span class="free">${h("free")}</span>`:""}</div>${sub?`<div class="d">${esc(sub)}</div>`:""}</div>`;
    return e.url?`<a class="row ic" href="${esc(e.url)}" target="_blank" rel="noopener">${inner}${svg("ext","ext")}</a>`:`<div class="row ic">${inner}</div>`;
  }).join("");
  return`<div class="gh">${h("ev")}</div><div class="grp">${rows}${more}</div>${rows?`<div class="gf">${esc(h("evNote"))}</div>`:""}`;
}
function heuteHTML(){
  const d=istDay(),rows=PG("pazar").g[0].r,market=(rows.find(r=>r[0]===u("days")[d]||r[0]===["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][d])||[])[1]||u("monMarket");
  const night=d===5||d===6||!!HOL[istDate(1)];
  return`<div id="heute"><div class="gh">${u("today")} · ${u("days")[d]}</div><div class="grp">
   ${wxRows()}${hintRows(d)}${fxRow()}
   <button class="row ic" data-go="pazar">${ico("market","--c8")}<div class="l"><div class="t">${esc(u("marketToday"))}</div><div class="d">${esc(market)}</div></div>${svg("chev","chev")}</button>
   <button class="row ic" data-go="nacht">${ico("moon","--c5")}<div class="l"><div class="t">${esc(night?u("nightYes"):u("nightNo"))}</div></div>${svg("chev","chev")}</button></div>
   ${evHTML()}</div>`;
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
   <button class="tile" data-go="istanbulkart"><b>46,20<small>TL</small></b><span>${u("t4")}</span></button>
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
      zaehl("vorschlag");$("smsg").textContent=u("fThanks");$("sf").reset();$("sdo").hidden=true;toast(u("fThanks"))}
    catch(err){$("smsg").textContent=u("fErr")}
    b.disabled=false};
}

/* ---------- Quellen ---------- */
const SOURCES=[
 {de:["Offizielle Seiten","İBB, Metro İstanbul, Istanbulkart, Şehir Hatları, Migrationsbehörde, Müzekart"],en:["Official sources","İBB, Metro İstanbul, Istanbulkart, Şehir Hatları, migration authority, Müzekart"]},
 {de:["Food-Spots","Empfehlungen von Studierenden, geprüft und ergänzt"],en:["Food spots","Recommendations from students, checked and extended"]}
];
const DK={de:{intro:"Die Infoseiten sind selbst geschrieben, nach offiziellen Seiten. Preise und Regeln ändern sich, im Zweifel gilt die offizielle Seite."},
 en:{intro:"The info pages are our own, written from official sources. Prices and rules change, if in doubt the official site applies."}};
function dankeHTML(){const t=DK[LANG];
  return`<p class="gf" style="margin:4px 16px 0">${t.intro}</p><div style="height:14px"></div><div class="grp">${SOURCES.map(s=>`<div class="row"><div class="l"><div class="t">${esc(s[LANG][0])}</div><div class="d">${esc(s[LANG][1])}</div></div></div>`).join("")}</div>`}

/* ---------- „Stimmt nicht mehr“ auf jeder Infoseite ---------- */
const RP={de:{btn:"Stimmt etwas nicht mehr?",ph:"Was ist falsch oder veraltet? z. B. „Einzelfahrt kostet jetzt 50 TL“",send:"Melden",thanks:"Danke! Wir prüfen das und passen die Seite an.",err:"Senden hat nicht geklappt. Bitte später nochmal.",note:"Bitte keine persönlichen Daten eintragen."},
 en:{btn:"Something out of date?",ph:"What’s wrong or outdated? e.g. “A single ride now costs 50 TL”",send:"Report",thanks:"Thanks! We’ll check it and update the page.",err:"Sending failed. Please try again later.",note:"Please don’t include personal data."}};
const reportHTML=()=>{const t=RP[LANG];return`<details class="report"><summary>${t.btn}</summary><form id="rf" class="grp form"><label class="row"><textarea id="rt" required minlength="3" maxlength="500" rows="3" placeholder="${esc(t.ph)}" aria-label="${esc(t.btn)}"></textarea></label></form>
  <button class="cta" form="rf" type="submit" id="rs">${t.send}</button><p class="gf" id="rm" role="status">${t.note}</p></details>`};
function bindReport(id){const f=document.getElementById("rf");if(!f)return;const t=RP[LANG];
  f.onsubmit=async e=>{e.preventDefault();const b=document.getElementById("rs");b.disabled=true;
    try{await rpc("report",{p_page:id,p_text:document.getElementById("rt").value,p_device:DEVICE});f.reset();document.getElementById("rm").textContent=t.thanks;toast(t.thanks)}
    catch(err){document.getElementById("rm").textContent=t.err}b.disabled=false}}

/* ---------- Datenschutz und Kontakt ---------- */
const OWNER="Muhammet Sancak",OWNER_MAIL="sancakmet@outlook.com";   /* OWNER_MAIL eintragen, sobald die Adresse feststeht */
const DS={
de:{intro:"Diese Seite ist ein privates, nicht kommerzielles Projekt. Hier steht, welche Daten anfallen und warum. Kurz: keine Accounts, keine Cookies, kein Tracking.",
 sec:[
  ["Verantwortlich",[OWNER+(OWNER_MAIL?" · "+OWNER_MAIL:""),"Kontakt auch über das Formular unten."]],
  ["Hosting (GitHub Pages)",["Die Seite liegt bei GitHub (GitHub Inc., USA). Beim Aufruf verarbeitet GitHub technisch nötige Daten wie IP-Adresse und Zeitpunkt, um die Seite auszuliefern und vor Angriffen zu schützen. Rechtsgrundlage: berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO)."]],
  ["Karte und Programmbibliothek",["Die Karte lädt Kartenbilder von Esri (Esri Inc., USA), die Kartenfunktion Leaflet liegt auf dieser Seite selbst. Beim Laden der Karte wird deine IP-Adresse an Esri übertragen. Ohne diesen Abruf funktioniert die Karte nicht. Rechtsgrundlage: berechtigtes Interesse."]],
  ["Bewertungen, Vorschläge, Meldungen",["Damit jede Person pro Spot nur einmal abstimmen kann, erzeugt die Seite eine zufällige Geräte-Kennung und speichert sie in deinem Browser. Sie enthält keinen Namen und keine Gerätedaten.","Zusammen mit deinen Stimmen, Vorschlägen, Fehlermeldungen und Nachrichten wird sie bei Supabase gespeichert (Server in Frankfurt, Supabase Inc., USA). Kontaktdaten aus dem Kontaktformular sind nicht öffentlich und werden nur zur Antwort genutzt.","Rechtsgrundlage: deine Einwilligung durch das aktive Abstimmen oder Absenden (Art. 6 Abs. 1 lit. a DSGVO)."]],
  ["Im Browser gespeichert",["Sprache, abgehakte Schritte, Rechner-Einstellungen und die Geräte-Kennung liegen nur in deinem Browser (Local Storage). Für den Offline-Modus legt die Seite Dateien im Browser-Cache ab. Das ist alles löschbar, siehe unten."]],
  ["Standort",["Nur wenn du „In der Nähe“ antippst, fragt der Browser nach deinem Standort. Er wird nur auf deinem Gerät zum Sortieren genutzt und nirgends gespeichert oder gesendet."]],
  ["Wetter, Wechselkurs, Events",["Die Startseite lädt das Wetter von Open-Meteo (Schweiz) und den Euro-Kurs der EZB über Frankfurter (frankfurter.dev). Dabei wird deine IP-Adresse an diese Dienste übertragen, sonst nichts. Die Event-Liste kommt von Supabase, ohne Geräte-Kennung. Die Werte werden im Browser zwischengespeichert. Rechtsgrundlage: berechtigtes Interesse."]],
  ["Links nach außen",["Links zu Google Maps, Google Docs, Instagram und anderen Seiten öffnen fremde Angebote. Dort gelten deren Datenschutzregeln."]],
  ["Deine Rechte",["Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch sowie auf Beschwerde bei einer Datenschutz-Aufsichtsbehörde. Eine Einwilligung kannst du jederzeit widerrufen.","Mit dem Knopf unten löschst du sofort alles, was zu deiner Geräte-Kennung gespeichert ist."]]
 ],
 forget:"Meine Daten löschen",forgetD:"Entfernt deine Stimmen, offenen Vorschläge und Nachrichten vom Server und setzt die Seite auf diesem Gerät zurück.",forgetOk:"Gelöscht. Die Seite ist auf diesem Gerät zurückgesetzt.",forgetConfirm:"Wirklich löschen? Tippe nochmal zum Bestätigen.",
 cH:"Kontakt",cIntro:"Fragen, Kooperationen oder Datenschutz-Anliegen.",topic:"Thema",topics:{kooperation:"Kooperation",datenschutz:"Datenschutz",sonstiges:"Sonstiges"},msg:"Nachricht",reply:"Antwort an (optional: E-Mail oder Instagram)",send:"Senden",thanks:"Danke! Wir melden uns, falls du eine Antwortadresse angegeben hast.",err:"Senden hat nicht geklappt. Bitte später nochmal.",stand:"Stand: November 2026"},
en:{intro:"This site is a private, non-commercial project. Here’s what data is processed and why. In short: no accounts, no cookies, no tracking.",
 sec:[
  ["Responsible",[OWNER+(OWNER_MAIL?" · "+OWNER_MAIL:""),"You can also use the contact form below."]],
  ["Hosting (GitHub Pages)",["The site is hosted by GitHub (GitHub Inc., USA). When you visit, GitHub processes technically necessary data such as your IP address and time of access to deliver the site and protect it from attacks. Legal basis: legitimate interest (Art. 6(1)(f) GDPR)."]],
  ["Map and library",["The map loads map images from Esri (Esri Inc., USA); the Leaflet map library is hosted on this site. Loading the map sends your IP address to Esri. The map can’t work without it. Legal basis: legitimate interest."]],
  ["Ratings, suggestions, reports",["So that everyone can vote only once per spot, the site creates a random device ID and stores it in your browser. It contains no name and no device data.","It is stored together with your votes, suggestions, reports and messages at Supabase (servers in Frankfurt, Supabase Inc., USA). Contact details from the credit or contact form are not public and only used to reply.","Legal basis: your consent by actively voting or sending (Art. 6(1)(a) GDPR)."]],
  ["Stored in your browser",["Language, checked steps, calculator settings and the device ID live only in your browser (local storage). For offline mode the site keeps files in the browser cache. You can delete all of it, see below."]],
  ["Location",["Only when you tap “Near me” does the browser ask for your location. It’s used on your device to sort the list and is never stored or sent."]],
  ["Weather, exchange rate, events",["The home page loads the weather from Open-Meteo (Switzerland) and the ECB euro rate via Frankfurter (frankfurter.dev). Your IP address is sent to these services, nothing else. The event list comes from Supabase, without the device ID. Values are cached in your browser. Legal basis: legitimate interest."]],
  ["External links",["Links to Google Maps, Google Docs, Instagram and other sites open third-party services with their own privacy rules."]],
  ["Your rights",["You have the right to access, correction, deletion, restriction, data portability and objection, and to complain to a data protection authority. You can withdraw consent at any time.","The button below instantly deletes everything stored for your device ID."]]
 ],
 forget:"Delete my data",forgetD:"Removes your votes, pending suggestions and messages from the server and resets the site on this device.",forgetOk:"Deleted. The site has been reset on this device.",forgetConfirm:"Really delete? Tap again to confirm.",
 cH:"Contact",cIntro:"Questions, partnerships or privacy requests.",topic:"Topic",topics:{kooperation:"Partnership",datenschutz:"Privacy",sonstiges:"Other"},msg:"Message",reply:"Reply to (optional: email or Instagram)",send:"Send",thanks:"Thanks! We’ll get back to you if you left a reply address.",err:"Sending failed. Please try again later.",stand:"Last updated: November 2026"}};
function datenschutzHTML(){const t=DS[LANG];
  return`<p class="gf" style="margin:4px 16px 0">${t.intro}</p>${t.sec.map(([h,ps])=>`<div class="gh">${esc(h)}</div><div class="grp">${ps.map(p=>`<div class="row txt">${esc(p)}</div>`).join("")}</div>`).join("")}
  <div style="height:14px"></div><div class="grp"><button class="row" id="forget"><div class="l"><div class="t" style="color:var(--red)">${t.forget}</div><div class="d">${t.forgetD}</div></div></button></div>
  <div class="gh">${t.cH}</div><p class="gf" style="margin:0 16px 10px">${t.cIntro}</p>
  <form id="kf" class="grp form" autocomplete="off">
   <label class="row"><span class="fl">${t.topic}</span><select id="kt">${Object.entries(t.topics).map(([k,v])=>`<option value="${k}">${v}</option>`).join("")}</select></label>
   <label class="row"><span class="fl">${t.msg}</span><textarea id="km" required minlength="3" maxlength="1000" rows="4"></textarea></label>
   <label class="row"><span class="fl">${t.reply}</span><input id="kr" maxlength="120"></label>
  </form><button class="cta" form="kf" type="submit" id="ks">${t.send}</button><p class="gf" id="kmsg" role="status"></p>
  <p class="foot">${t.stand}</p>`}
function bindDatenschutz(){const t=DS[LANG],$=id=>document.getElementById(id);let armed=false;
  $("forget").onclick=async()=>{if(!armed){armed=true;$("forget").querySelector(".d").textContent=t.forgetConfirm;return}
    try{await rpc("forget_me",{p_device:DEVICE})}catch(e){}
    try{["ist-device","ist-scores","ist-mine","ist-done","ist-calc","ist-lang"].forEach(k=>localStorage.removeItem(k))}catch(e){}
    try{(await caches.keys()).forEach(k=>caches.delete(k))}catch(e){}
    $("forget").querySelector(".d").textContent=t.forgetOk;toast(t.forgetOk);setTimeout(()=>location.reload(),1600)};
  $("kf").onsubmit=async e=>{e.preventDefault();const b=$("ks");b.disabled=true;
    try{await rpc("contact",{p_topic:$("kt").value,p_text:$("km").value,p_reply_to:$("kr").value,p_device:DEVICE});$("kf").reset();$("kmsg").textContent=t.thanks;toast(t.thanks)}
    catch(err){$("kmsg").textContent=t.err}b.disabled=false};
}

/* ---------- Tabs, Seiten, Navigation ---------- */
const tabT=t=>u(t.id);
function tabHTML(t){return`${navbar(tabT(t),"",langBtn())}<div class="wrap view"><h1 class="lt">${esc(tabT(t))}</h1><p class="sub">${esc(t.s[LANG])}</p>${t.g.map(g=>group({...g,h:g.h&&g.h[LANG]},pageRow)).join("")}<p class="foot">${u("tabFoot")}<br><a href="rechtliches.html" style="color:inherit">${LANG==="de"?"Kontakt · Datenschutz":"Contact · Privacy"}</a></p></div>`}
function pageHTML(id,back){const p=PG(id);
  const special={rechner:rechnerHTML,vorschlag:vorschlagHTML,danke:dankeHTML,datenschutz:datenschutzHTML}[id];
  const body=special?special():p.g.map(g=>group(g,rowHTML)).join("")+reportHTML();
  return`${navbar(p.t,back)}<div class="wrap body"><h1 class="lt">${esc(p.t)}</h1>${p.s?`<p class="sub">${esc(p.s)}</p>`:""}${body}</div>`}

const main=document.getElementById("main"),pane=document.getElementById("pane"),tabsEl=document.getElementById("tabs");
let tab="start",page=null;
function drawTabbar(){tabsEl.innerHTML=TABS.map(t=>`<button class="tab" data-tab="${t.id}" aria-current="${t.id===tab?"page":"false"}">${svg(t.i)}<span>${tabT(t)}</span></button>`).join("")}
function showTab(id,keepScroll){
  const t=TABS.find(x=>x.id===id)||TABS[0];tab=t.id;
  if(map&&t.id!=="essen"){map.remove();map=null}
  main.innerHTML=t.id==="start"?startHTML():t.id==="essen"?essenHTML():tabHTML(t);
  if(t.id==="start"){bindStart();loadLive()}if(t.id==="essen")bindEssen();
  drawTabbar();if(!keepScroll)window.scrollTo(0,0);navScroll();
}
function openPage(id){
  if(!P[id])return;page=id;
  pane.innerHTML=pageHTML(id,tabT(TABS.find(x=>x.id===tab)||TABS[0]));pane.scrollTop=0;
  const binds={rechner:bindRechner,vorschlag:bindVorschlag,datenschutz:bindDatenschutz};(binds[id]||bindReport)(id);
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
fetch("coords.json",{cache:"no-cache"}).then(r=>r.json()).then(c=>{COORDS=c;for(const s of SPOTS)s.ll=COORDS[s.id]||s.ll;if(tab==="essen")list(false)}).catch(()=>{});
loadRemote();
if("serviceWorker" in navigator&&location.protocol==="https:")navigator.serviceWorker.register("sw.js").catch(()=>{});
