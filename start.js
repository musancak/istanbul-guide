/* Bausteine der Startseite. Lädt nach data.js und icons.js. */
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const ic=(k,c="i")=>`<svg viewBox="0 0 24 24" class="${c}" aria-hidden="true">${I[k]||""}</svg>`;
const FEDER="linear(0,.06 2%,.24 5%,.52 9%,.79 14%,.95 19%,1.03 24%,1.05 29%,1.03 37%,1.005 48%,.998 60%,1)";
const SANFT="cubic-bezier(.2,.8,.2,1)";
const leise=matchMedia("(prefers-reduced-motion: reduce)").matches;
/* Alles ruhiger: jede Web-Animation läuft LANGSAM-mal so lang wie angegeben */
const LANGSAM=2;
{const a=Element.prototype.animate;Element.prototype.animate=function(k,o){if(!leise)o=typeof o==="number"?o*LANGSAM:o&&{...o,duration:(o.duration||0)*LANGSAM,delay:(o.delay||0)*LANGSAM};return a.call(this,k,o)}}

/* Themen wie in der App */
const THEMEN=[
 {id:"verkehr",t:"Verkehr",s:"Istanbulkart, Taxi, Nacht",i:"train",farbe:"#3E6E9E",r:["istanbulkart","flughafen","taxi","dolmus","nacht","ausfluege","links"]},
 {id:"essen",t:"Essen",s:"Food-Spots mit Karte",i:"fork",farbe:"#B5533F",r:[]},
 {id:"alltag",t:"Alltag",s:"Die ersten Wochen",i:"bag",farbe:"#2E7A5A",r:["sim","imei","aufenthalt","wohnen","geld","einkaufen","pazar","wlan","arzt","notfall"]},
 {id:"entdecken",t:"Entdecken",s:"Sehen, Museen, Viertel",i:"compass",farbe:"#A8782A",r:["events","sehen","muzekart","viertel"]}
].map(t=>({...t,r:t.r.filter(id=>P[id]&&P[id].g&&P[id].g.length)}));

/* Food-Spots */
const SPOTS=[];
for(const k in F)for(const d in F[k].d)for(const e of F[k].d[d]){const top=e[0]==="*",[n,note=""]=(top?e.slice(1):e).split("|");SPOTS.push({k,d,n,note,top})}
const tagNr=Math.floor((Date.now()+3*36e5)/864e5);
const spotDesTages=(v=0)=>{const t=SPOTS.filter(s=>s.top&&s.k==="r");return t[(tagNr+v)%t.length]};
const maps=s=>`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.n+" "+s.d+" Istanbul")}`;

/* Live-Werte: Wetter, Kurs, Events (30 Minuten im Browser zwischengespeichert) */
const WX=c=>c===0?["Klar","sun"]:c<=3?["Wolkig","cloud"]:c<=48?["Nebel","cloud"]:c<=67||c>=80&&c<=82?["Regen","rain"]:c<=77||c===85||c===86?["Schnee","cloud"]:c>=95?["Gewitter","rain"]:["Regen","rain"];
async function live(){
  let c=null;try{c=JSON.parse(localStorage.getItem("ist-start-live"))}catch(e){}
  if(c&&Date.now()-c.zeit<18e5)return c;
  const j=u=>fetch(u).then(r=>r.ok?r.json():null).catch(()=>null);
  const SB="https://tdattimvlqyljahijyoo.supabase.co/rest/v1/rpc/get_events",K="sb_publishable_GhyClAXoPp0t752Fvk1kUw_VxGZ0tuX";
  const [w,f,ev]=await Promise.all([
    j("https://api.open-meteo.com/v1/forecast?latitude=41.01&longitude=28.98&current=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&forecast_days=1&timezone=Europe%2FIstanbul"),
    j("https://api.frankfurter.dev/v1/latest?base=EUR&symbols=TRY"),
    fetch(SB,{method:"POST",headers:{apikey:K,"Content-Type":"application/json"},body:"{}"}).then(r=>r.ok?r.json():[]).catch(()=>[])]);
  c={zeit:Date.now(),
    temp:w?Math.round(w.current.temperature_2m):15,code:w?w.current.weather_code:2,
    max:w?Math.round(w.daily.temperature_2m_max[0]):17,min:w?Math.round(w.daily.temperature_2m_min[0]):11,
    auf:w?w.daily.sunrise[0].slice(11):"07:00",unter:w?w.daily.sunset[0].slice(11):"17:56",
    kurs:f?f.rates.TRY:55.9,ev:(ev||[]).slice(0,8)};
  try{localStorage.setItem("ist-start-live",JSON.stringify(c))}catch(e){}
  return c;
}
const istZeit=()=>new Date(Date.now()+(new Date().getTimezoneOffset()+180)*6e4);
const TAGE=["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],MON=["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"];
const zahl=(n,d=0)=>n.toLocaleString("de-DE",{minimumFractionDigits:d,maximumFractionDigits:d});

/* Inhalt einer Seite aus data.js */
function seiteHTML(id){
  const p=P[id];if(!p)return"";
  const zeile=r=>{
    if(typeof r==="string")return`<div class="z txt">${esc(r)}</div>`;
    if(Array.isArray(r))return`<div class="z kv"><b>${esc(r[0])}</b><span>${esc(r[1])}</span></div>`;
    if(r.u)return`<a class="z link" href="${esc(r.u)}" target="_blank" rel="noopener"><span><b>${esc(r.l)}</b>${r.d?`<small>${esc(r.d)}</small>`:""}</span>${ic("ext")}</a>`;
    if(r.s)return`<ol class="schritte">${r.s.map(x=>`<li>${esc(x)}</li>`).join("")}</ol>`;
    if(r.tb)return`<div class="z txt">${r.tb.r.map(x=>esc(x.join(" · "))).join("<br>")}</div>`;
    return"";
  };
  return p.g.map(g=>`${g.h?`<h3>${esc(g.h)}</h3>`:""}<div class="gruppe">${g.r.map(zeile).join("")}</div>${g.f?`<p class="fuss">${esc(g.f)}</p>`:""}`).join("");
}

/* Detailseite, die aus dem angetippten Element herauswächst (Clip-Pfad-Morph) */
let offen=null;
function oeffne(html,von,titel){
  const r=von?von.getBoundingClientRect():{left:innerWidth/2-40,top:innerHeight/2-40,right:innerWidth/2+40,bottom:innerHeight/2+40};
  const s=document.createElement("section");s.className="seite";s.setAttribute("role","dialog");s.setAttribute("aria-label",titel||"Seite");
  s.innerHTML=`<header class="s-kopf"><button class="zurueck press" aria-label="Zurück">${ic("backc")}</button><span class="s-titel">${esc(titel||"")}</span></header><div class="s-inhalt">${html}</div>`;
  document.body.appendChild(s);
  const clip=`inset(${r.top}px ${innerWidth-r.right}px ${innerHeight-r.bottom}px ${r.left}px round 22px)`;
  const anim=leise?{duration:1}:{duration:620,easing:FEDER};
  s.animate([{clipPath:clip},{clipPath:"inset(0 0 0 0 round 0px)"}],anim);
  $$(".s-inhalt>*",s).forEach((el,i)=>el.animate([{opacity:0,transform:"translateY(18px)",filter:"blur(6px)"},{opacity:1,transform:"none",filter:"blur(0)"}],{duration:leise?1:520,delay:leise?0:80+i*28,easing:SANFT,fill:"backwards"}));
  von&&von.animate([{opacity:1},{opacity:.0},{opacity:1}],{duration:700});
  const schliessen=()=>{const a=s.animate([{clipPath:"inset(0 0 0 0 round 0px)",opacity:1},{clipPath:clip,opacity:.4}],{duration:leise?1:420,easing:SANFT});a.onfinish=()=>s.remove();offen=null;history.state&&history.state.seite&&history.back()};
  $(".zurueck",s).onclick=schliessen;
  /* vom linken Rand wischen = zurück */
  let x0=null;s.addEventListener("touchstart",e=>{x0=e.touches[0].clientX<30?e.touches[0].clientX:null},{passive:true});
  s.addEventListener("touchend",e=>{if(x0!==null&&e.changedTouches[0].clientX-x0>80)schliessen();x0=null});
  offen=schliessen;try{history.pushState({seite:1},"")}catch(e){}
  s.addEventListener("scroll",()=>s.classList.toggle("gerollt",s.scrollTop>40),{passive:true});
  return s;
}
addEventListener("popstate",()=>{if(offen){const f=offen;offen=null;f()}});
function themaHTML(t){
  return`<h1 class="s-gross">${esc(t.t)}</h1><p class="s-sub">${esc(t.s)}</p><div class="gruppe">${t.r.map(id=>`<button class="z pfeil" data-seite="${id}"><span class="mini" style="--f:${t.farbe}">${ic(P[id].i||"doc")}</span><span><b>${esc(P[id].t)}</b><small>${esc(P[id].s||"")}</small></span>${ic("chev","chev")}</button>`).join("")}</div>`;
}
/* Stempelheft: jede neu gelesene Seite gibt einen Stempel */
let GELESEN={};try{GELESEN=JSON.parse(localStorage.getItem("ist-gelesen"))||{}}catch(e){}
const ALLE_SEITEN=THEMEN.flatMap(t=>t.r);
function stempeln(id){if(GELESEN[id])return false;GELESEN[id]=1;try{localStorage.setItem("ist-gelesen",JSON.stringify(GELESEN))}catch(e){}
  document.dispatchEvent(new CustomEvent("gestempelt",{detail:id}));return true}
function seiteOeffnen(id,von){
  const neu=stempeln(id);
  if(neu)setTimeout(()=>{const st=document.createElement("div");st.className="stempel";st.innerHTML=`<b>${Object.keys(GELESEN).length}/${ALLE_SEITEN.length}</b><span>Gestempelt</span>`;document.body.appendChild(st);
    st.animate([{transform:"scale(2.4) rotate(-24deg)",opacity:0},{transform:"scale(.92) rotate(-10deg)",opacity:1,offset:.55},{transform:"scale(1) rotate(-12deg)",opacity:1}],{duration:leise?1:650,easing:SANFT,fill:"both"});
    setTimeout(()=>st.animate([{opacity:1},{opacity:0,transform:"scale(.9) rotate(-12deg)"}],{duration:400,fill:"forwards"}).onfinish=()=>st.remove(),2800)},1300);
  return oeffne(`<h1 class="s-gross">${esc(P[id].t)}</h1>${P[id].s?`<p class="s-sub">${esc(P[id].s)}</p>`:""}${seiteHTML(id)}<a class="in-app press" href="app.html#${id}">In der App öffnen</a>`,von,P[id].t)}
function themaOeffnen(t,von){
  if(t.id==="essen")return essenOeffnen(von);
  const s=oeffne(themaHTML(t),von,t.t);
  $$("[data-seite]",s).forEach(b=>b.onclick=()=>seiteOeffnen(b.dataset.seite,b));return s;
}
function essenOeffnen(von){
  const kat=Object.keys(F);
  const s=oeffne(`<h1 class="s-gross">Essen</h1><p class="s-sub">${SPOTS.length} Spots aus der Gruppe</p>
   <div class="kats">${kat.map((k,i)=>`<button class="kat press" aria-pressed="${i===0}" data-k="${k}">${esc(F[k].t)}</button>`).join("")}</div><div class="gruppe" id="spotliste"></div>
   <a class="in-app press" href="app.html#essen">Karte und Bewertungen in der App</a>`,von,"Essen");
  const zeig=k=>{const l=$("#spotliste",s);l.innerHTML=SPOTS.filter(x=>x.k===k).slice(0,40).map(x=>`<a class="z link" href="${maps(x)}" target="_blank" rel="noopener"><span><b>${esc(x.n)}${x.top?' <i class="stern"></i>':""}</b><small>${esc([x.d,x.note].filter(Boolean).join(" · "))}</small></span>${ic("ext")}</a>`).join("");
    $$(".z",l).forEach((el,i)=>el.animate([{opacity:0,transform:"translateX(24px)"},{opacity:1,transform:"none"}],{duration:leise?1:420,delay:i*18,easing:FEDER,fill:"backwards"}))};
  $$(".kat",s).forEach(b=>b.onclick=()=>{$$(".kat",s).forEach(x=>x.setAttribute("aria-pressed",x===b));zeig(b.dataset.k)});zeig(kat[0]);return s;
}

/* Animations-Werkzeuge */
function rollen(el,text){ /* jede Ziffer rollt einzeln herein */
  const alt=el.dataset.v||"";el.dataset.v=text;el.classList.add("roll");
  el.innerHTML=[...text].map((ch,i)=>`<span class="${leise||ch===alt[i]?"":"neu"}" style="animation-delay:${i*90}ms">${ch===" "?"&nbsp;":esc(ch)}</span>`).join("");
}
function zaehlen(el,ziel,d=0,dauer=1100){ /* Zahl zählt hoch */
  if(leise){el.textContent=zahl(ziel,d);return}
  const t0=performance.now();const f=t=>{const p=Math.min(1,(t-t0)/dauer),e=1-Math.pow(1-p,4);el.textContent=zahl(ziel*e,d);if(p<1)requestAnimationFrame(f)};requestAnimationFrame(f);
}
function unscharfRein(el,start=0){ /* Wörter erscheinen aus der Unschärfe */
  const w=el.textContent.split(" ");el.innerHTML=w.map((x,i)=>`<span class="w" style="transition-delay:${start+i*140}ms">${esc(x)}</span>`).join(" ");
  requestAnimationFrame(()=>requestAnimationFrame(()=>el.classList.add("da")));
}
function wirbeln(el,ziel,dauer=1800){ /* Buchstaben-Scramble */
  if(leise){el.textContent=ziel;return}
  const Z="ABCDEFGHIJKLMNOPRSTUVYZÇĞİÖŞÜ";const t0=performance.now();
  const f=t=>{const p=Math.min(1,(t-t0)/dauer),n=Math.floor(p*ziel.length);
    el.textContent=ziel.slice(0,n)+[...ziel.slice(n)].map(c=>c===" "?" ":Z[Math.random()*Z.length|0]).join("").toLowerCase();if(p<1)requestAnimationFrame(f);else el.textContent=ziel};
  requestAnimationFrame(f);
}
function staffeln(els,{dauer=560,abstand=45,von="translateY(22px) scale(.96)",start=0}={}){
  els.forEach((el,i)=>el.animate([{opacity:0,transform:von,filter:"blur(4px)"},{opacity:1,transform:"none",filter:"blur(0)"}],{duration:leise?1:dauer,delay:leise?0:start+i*abstand,easing:FEDER,fill:"backwards"}));
}
function kippen(el,staerke=8){ /* 3D-Neigung unter dem Finger */
  if(leise)return;
  el.addEventListener("pointermove",e=>{const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;el.style.transform=`perspective(700px) rotateX(${-y*staerke}deg) rotateY(${x*staerke}deg) scale(.985)`;el.style.setProperty("--gx",(x+.5)*100+"%");el.style.setProperty("--gy",(y+.5)*100+"%")});
  const weg=()=>{el.style.transition="transform 1.2s "+FEDER;el.style.transform="";setTimeout(()=>el.style.transition="",1200)};
  el.addEventListener("pointerleave",weg);el.addEventListener("pointerup",weg);el.addEventListener("pointercancel",weg);
}
function wellen(el,e){ /* Welle beim Antippen */
  if(leise)return;const r=el.getBoundingClientRect(),w=document.createElement("i");w.className="welle";
  const g=Math.max(r.width,r.height)*2;w.style.cssText=`width:${g}px;height:${g}px;left:${e.clientX-r.left-g/2}px;top:${e.clientY-r.top-g/2}px`;el.appendChild(w);
  w.animate([{transform:"scale(0)",opacity:.35},{transform:"scale(1)",opacity:0}],{duration:650,easing:SANFT}).onfinish=()=>w.remove();
}
function toast(t){let el=$("#toast");if(!el){el=document.createElement("div");el.id="toast";el.setAttribute("role","status");document.body.appendChild(el)}
  el.textContent=t;el.classList.add("an");clearTimeout(el._t);el._t=setTimeout(()=>el.classList.remove("an"),2400)}
document.addEventListener("pointerdown",e=>{const b=e.target.closest(".welle-an");if(b)wellen(b,e)});
