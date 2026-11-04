/* Treffen: Leute kennenlernen an guten Orten. Lädt nach start.js.
   Vorerst nur im Browser gespeichert (localStorage „ist-treffen“), die fünf Beispiele sind fest. */
const ORTE=[
 {id:"moda",n:"Moda Sahili",d:"Kadıköy",t:"Wiese am Meer, Sonnenuntergang",ll:[40.9787,29.0262]},
 {id:"kadikoy",n:"Kadıköy İskele",d:"Kadıköy",t:"Fähranleger, Treffpunkt Nr. 1 auf der Asien-Seite",ll:[40.9918,29.0228]},
 {id:"galata",n:"Galata Kulesi",d:"Beyoğlu",t:"Am Turm, dann durch die Gassen",ll:[41.0256,28.9742]},
 {id:"karakoy",n:"Karaköy İskele",d:"Beyoğlu",t:"Fähre, Simit, Cafés",ll:[41.0219,28.9763]},
 {id:"cihangir",n:"Cihangir Parkı",d:"Beyoğlu",t:"Kleiner Park mit Bosporus-Blick",ll:[41.0316,28.9829]},
 {id:"taksim",n:"Taksim Meydanı",d:"Beyoğlu",t:"Am Denkmal, Start für İstiklal",ll:[41.0369,28.9850]},
 {id:"besiktas",n:"Beşiktaş Çarşı",d:"Beşiktaş",t:"Am Adler, Frühstück und Bars",ll:[41.0428,29.0063]},
 {id:"ortakoy",n:"Ortaköy Meydanı",d:"Beşiktaş",t:"Moschee am Wasser, Kumpir",ll:[41.0474,29.0269]},
 {id:"bebek",n:"Bebek Sahili",d:"Beşiktaş",t:"Spazierweg am Bosporus",ll:[41.0772,29.0438]},
 {id:"uskudar",n:"Üsküdar Sahili",d:"Üsküdar",t:"Blick auf den Mädchenturm",ll:[41.0262,29.0106]},
 {id:"sultanahmet",n:"Sultanahmet Meydanı",d:"Fatih",t:"Zwischen Hagia Sophia und Blauer Moschee",ll:[41.0059,28.9769]},
 {id:"balat",n:"Balat",d:"Fatih",t:"Bunte Häuser, kleine Cafés",ll:[41.0293,28.9488]}
];
const ARTEN=[["cay","Çay trinken"],["essen","Essen gehen"],["laufen","Spazieren"],["lernen","Zusammen lernen"],["sport","Sport"],["abends","Abends raus"]];
/* Tag relativ zu heute, Uhrzeit, Leute (Initialen) */
const BEISPIELE=[
 {id:"b1",art:"cay",t:"Çay und Sonnenuntergang am Wasser",ort:"moda",tag:0,zeit:"17:00",leute:["LM","AK","JS","EB","TO","NR","MK"]},
 {id:"b2",art:"laufen",t:"Durch Galata bis Karaköy",ort:"galata",tag:0,zeit:"19:30",leute:["SB","FY","CL","DW"]},
 {id:"b3",art:"essen",t:"Simit, Fähre, Frühstück in Üsküdar",ort:"karakoy",tag:1,zeit:"10:00",leute:["HA","PM","EK","LR","VZ","IO"]},
 {id:"b4",art:"lernen",t:"Lernen im Café, danach Park",ort:"cihangir",tag:1,zeit:"14:00",leute:["MB","TS","NK"]},
 {id:"b5",art:"sport",t:"Laufen am Bosporus, danach Waffeln",ort:"bebek",tag:2,zeit:"09:30",leute:["JH","AO","RG","SE","KT","LB","MF","ZD","CA"]}
];
const FARBEN=["#1E6E7E","#2B4C9B","#D0553F","#E0A23A","#3F9C83","#8A4FA3","#B5533F"];
const farbeVon=s=>FARBEN[[...s].reduce((a,c)=>a+c.charCodeAt(0),0)%FARBEN.length];

let TR={eigene:[],dabei:{}};try{TR={...TR,...JSON.parse(localStorage.getItem("ist-treffen"))}}catch(e){}
const trSpeichern=()=>{try{localStorage.setItem("ist-treffen",JSON.stringify(TR))}catch(e){}};

function tagStart(v){const t=istZeit();t.setHours(0,0,0,0);t.setDate(t.getDate()+v);return t}
function zeitpunkt(x){const[h,m]=x.zeit.split(":").map(Number),t=x.datum?new Date(x.datum):tagStart(x.tag);t.setHours(h,m);return t}
/* Beispiele, die heute schon vorbei sind, rutschen einen Tag weiter */
function alleTreffen(){
  const jetzt=istZeit();
  return[...BEISPIELE.map(b=>{const x={...b,beispiel:1};if(zeitpunkt(x)<jetzt-36e5)x.tag+=1;return x}),...TR.eigene]
    .map(x=>({...x,wann:zeitpunkt(x),n:x.leute.length+(TR.dabei[x.id]?1:0)}))
    .filter(x=>x.wann>jetzt-2*36e5).sort((a,b)=>a.wann-b.wann);
}
function wannText(x){
  const tage=Math.round((new Date(x.wann).setHours(0,0,0,0)-tagStart(0))/864e5);
  const tag=tage===0?"Heute":tage===1?"Morgen":TAGE[x.wann.getDay()];
  const min=Math.round((x.wann-istZeit())/6e4);
  const bald=min<=0?"läuft gerade":min<60?`in ${min} Min.`:min<300?`in ${Math.round(min/60)} Std.`:"";
  return{tag,zeit:x.zeit,bald};
}
const ortVon=id=>ORTE.find(o=>o.id===id);
const avatare=(leute,du)=>`<span class="ava">${(du?["DU",...leute]:leute).slice(0,3).map(l=>`<i class="${l==="DU"?"du":""}" style="--a:${l==="DU"?"var(--tinte)":farbeVon(l)}">${l}</i>`).join("")}</span>`;

function treffenKarte(x){
  const w=wannText(x),o=ortVon(x.ort),d=!!TR.dabei[x.id];
  return`<article class="tk${d?" dabei":""}" data-id="${x.id}" data-ort="${x.ort}">
   <div class="tk-zeit"><span class="mono">${esc(w.tag.toUpperCase())}</span><b>${w.zeit}</b>${w.bald?`<small>${w.bald}</small>`:""}</div>
   <div class="tk-mitte"><b class="tk-titel">${esc(x.t)}</b><span class="tk-ort">${ic("pin")}${esc(o.n)}</span>
    <div class="tk-leute">${avatare(x.leute,d)}<span class="tk-n"><b class="zahl">${x.n}</b> dabei</span>${x.beispiel?'<span class="bsp mono">BEISPIEL</span>':""}</div></div>
   <button class="mit press" aria-label="${d?"Nicht mehr dabei":"Dabei sein"}" aria-pressed="${d}"><svg viewBox="0 0 24 24" class="i"><path class="plus-h" d="M5 12h14"/><path class="plus-v" d="M12 5v14"/><path class="haken" d="M5 12.5l4.5 4.5L19 7.5"/></svg></button>
  </article>`;
}

let tKarte=null,tMarker={},tFilter="alle",tOrt=null,tSeite=null;
function leafletLaden(){
  if(window.L)return Promise.resolve();
  return new Promise((ok,nein)=>{const c=document.createElement("link");c.rel="stylesheet";c.href="leaflet/leaflet.min.css";document.head.appendChild(c);
    const s=document.createElement("script");s.src="leaflet/leaflet.min.js";s.onload=ok;s.onerror=nein;document.head.appendChild(s)});
}
function markerHTML(o,n,an){return`<div class="pin${n?" voll":""}${an?" an":""}">${n?`<b>${n}</b>`:""}</div>`}
function markerSetzen(){
  const T=alleTreffen(),pro={};T.forEach(x=>pro[x.ort]=(pro[x.ort]||0)+x.n);
  ORTE.forEach(o=>{const n=pro[o.id]||0,g=n?38:16;
    const icon=L.divIcon({className:"pin-huelle",html:markerHTML(o,n,tOrt===o.id),iconSize:[g,g],iconAnchor:[g/2,g/2]});
    if(tMarker[o.id])tMarker[o.id].setIcon(icon);
    else{tMarker[o.id]=L.marker(o.ll,{icon,keyboard:false,title:o.n}).addTo(tKarte).on("click",()=>ortWaehlen(tOrt===o.id?null:o.id))}});
}
function karteBauen(el){
  leafletLaden().then(()=>{if(!el.isConnected)return;
    tKarte=L.map(el,{zoomControl:false,scrollWheelZoom:false,attributionControl:true}).setView([41.025,29.0],12);
    const ton=matchMedia("(prefers-color-scheme: dark)").matches?"Dark":"Light",esri=t=>`https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_${ton}_Gray_${t}/MapServer/tile/{z}/{y}/{x}`;
    L.tileLayer(esri("Base"),{maxZoom:16,attribution:'Esri, HERE, Garmin, &copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'}).addTo(tKarte);
    markerSetzen();tKarte.fitBounds(L.latLngBounds(ORTE.map(o=>o.ll)),{padding:[18,18]});
    /* Pins fallen nacheinander herein */
    Object.values(tMarker).forEach((m,i)=>{const p=m.getElement()?.firstChild;p&&p.animate([{transform:"translateY(-40px) scale(.4)",opacity:0},{transform:"none",opacity:1}],{duration:leise?1:330,delay:leise?0:200+i*35,easing:FEDER,fill:"backwards"})});
  }).catch(()=>{el.innerHTML='<p class="leer">Karte gerade nicht erreichbar.</p>'});
}
function ortWaehlen(id){
  tOrt=id;markerSetzen();
  const o=id&&ortVon(id),info=$("#ortInfo",tSeite);
  if(o){tKarte.flyTo(o.ll,14,{duration:leise?0:.9});
    const T=alleTreffen().filter(x=>x.ort===id),n=T.reduce((a,x)=>a+x.n,0);
    info.innerHTML=`<div><b>${esc(o.n)}</b><small>${esc(o.d)} · ${esc(o.t)}</small></div><span class="ort-n"><b>${n}</b><small>${T.length===1?"1 Treffen":T.length+" Treffen"}</small></span>
      <button class="knopf press" id="hierVorschlagen">Hier treffen</button>`;
    info.hidden=false;info.animate([{opacity:0,transform:"translateY(14px) scale(.97)"},{opacity:1,transform:"none"}],{duration:leise?1:260,easing:FEDER});
    $("#hierVorschlagen",info).onclick=()=>vorschlagen(id);
  }else{info.hidden=true;tKarte&&tKarte.flyTo([41.025,29.0],12,{duration:leise?0:.8})}
  liste();
}
function liste(){
  const l=$("#tListe",tSeite);if(!l)return;
  let T=alleTreffen();
  if(tFilter==="heute")T=T.filter(x=>wannText(x).tag==="Heute");
  if(tFilter==="dabei")T=T.filter(x=>TR.dabei[x.id]);
  if(tOrt)T=T.filter(x=>x.ort===tOrt);
  l.innerHTML=T.length?T.map(treffenKarte).join(""):`<p class="leer">${tFilter==="dabei"?"Noch bei nichts dabei. Tipp auf das Plus.":"Hier ist noch nichts geplant. Schlag doch was vor."}</p>`;
  staffeln($$(".tk",l),{abstand:45,dauer:260,von:"translateY(16px) scale(.97)"});
  $$(".tk",l).forEach(k=>{$(".mit",k).onclick=e=>{e.stopPropagation();mitmachen(k)};k.onclick=()=>ortWaehlen(k.dataset.ort)});
  oben();
}
function oben(){
  const T=alleTreffen(),heute=T.filter(x=>wannText(x).tag==="Heute").reduce((a,x)=>a+x.n,0);
  const z=$("#tHeute",tSeite);if(z&&z.dataset.v!==String(heute)){z.dataset.v=heute;rollen(z,String(heute))}
  const d=Object.keys(TR.dabei).filter(id=>T.some(x=>x.id===id)).length,b=$("#tDabeiZahl",tSeite);if(b)b.textContent=d?` ${d}`:"";
  tabZahl();
}
function mitmachen(k){
  const id=k.dataset.id,jetzt=!TR.dabei[id];
  if(jetzt)TR.dabei[id]=Date.now();else delete TR.dabei[id];trSpeichern();
  const x=alleTreffen().find(t=>t.id===id),b=$(".mit",k);
  k.classList.toggle("dabei",jetzt);b.setAttribute("aria-pressed",jetzt);b.setAttribute("aria-label",jetzt?"Nicht mehr dabei":"Dabei sein");
  $(".ava",k).outerHTML=avatare(x.leute,jetzt);rollen($(".zahl",k),String(x.n));
  if(jetzt){
    const r=b.getBoundingClientRect();funken(r.left+r.width/2,r.top+r.height/2);navigator.vibrate&&navigator.vibrate(12);
    $(".ava .du",k)?.animate([{transform:"scale(0) rotate(-30deg)"},{transform:"scale(1.25)",offset:.6},{transform:"none"}],{duration:leise?1:300,easing:SANFT});
    k.animate([{boxShadow:"0 0 0 0 color-mix(in srgb,var(--minze) 60%,transparent)"},{boxShadow:"0 0 0 14px transparent"}],{duration:leise?1:450});
    const w=wannText(x);toast(`Du bist dabei. ${w.tag} ${w.zeit}, ${ortVon(x.ort).n}`);
  }
  markerSetzen();const p=tMarker[x.ort]?.getElement()?.firstChild;p&&p.animate([{transform:"scale(1)"},{transform:"scale(1.35)"},{transform:"scale(1)"}],{duration:leise?1:250,easing:FEDER});
  oben();if(tFilter==="dabei"&&!jetzt)setTimeout(liste,400);
}

/* Unterblatt: Treffen vorschlagen in drei Schritten auf einem Blick */
function vorschlagen(ortId){
  const tage=[0,1,2,3].map(v=>{const t=tagStart(v);return[v,v===0?"Heute":v===1?"Morgen":TAGE[t.getDay()].slice(0,2)]});
  const zeiten=["10:00","13:00","16:00","18:00","19:30","21:00"];
  const wahl={art:"cay",tag:0,zeit:"18:00",ort:ortId||null,t:""};
  const hg=document.createElement("div");hg.className="blatt-hg";
  const s=document.createElement("div");s.className="blatt";s.setAttribute("role","dialog");s.setAttribute("aria-label","Treffen vorschlagen");
  const chips=(name,liste,akt)=>`<div class="chips" data-name="${name}">${liste.map(([v,l])=>`<button class="chip press" data-v="${v}" aria-pressed="${String(v)===String(akt)}">${esc(l)}</button>`).join("")}</div>`;
  s.innerHTML=`<i class="griff"></i><h2>Treffen vorschlagen</h2>
   <h3>Was</h3>${chips("art",ARTEN,wahl.art)}
   <input class="titel-feld" id="tTitel" maxlength="60" placeholder="Titel, z. B. Çay am Wasser" autocomplete="off">
   <h3>Wann</h3>${chips("tag",tage,wahl.tag)}${chips("zeit",zeiten.map(z=>[z,z]),wahl.zeit)}
   <h3>Wo</h3>${chips("ort",ORTE.map(o=>[o.id,o.n]),wahl.ort)}
   <button class="los press" id="tLos" disabled>Ort wählen</button>`;
  document.body.append(hg,s);
  hg.animate([{opacity:0},{opacity:1}],{duration:leise?1:200,fill:"both"});
  s.animate([{transform:"translateY(100%)"},{transform:"none"}],{duration:leise?1:320,easing:FEDER});
  staffeln($$("h2,h3,.chips,.titel-feld,.los",s),{abstand:30,dauer:260,start:60});
  const los=$("#tLos",s),pruefen=()=>{los.disabled=!wahl.ort;los.textContent=wahl.ort?`Vorschlagen · ${ortVon(wahl.ort).n}`:"Ort wählen"};pruefen();
  $$(".chips",s).forEach(c=>c.onclick=e=>{const b=e.target.closest(".chip");if(!b)return;
    $$(".chip",c).forEach(x=>x.setAttribute("aria-pressed",x===b));wahl[c.dataset.name]=c.dataset.name==="tag"?+b.dataset.v:b.dataset.v;
    if(c.dataset.name==="ort"){tOrt=wahl.ort;markerSetzen();tKarte&&tKarte.flyTo(ortVon(wahl.ort).ll,14,{duration:leise?0:.8})}
    if(c.dataset.name==="art"){const f=$("#tTitel",s);f.placeholder=`Titel, z. B. ${ARTEN.find(a=>a[0]===wahl.art)[1]}`}
    pruefen()});
  if(wahl.ort)requestAnimationFrame(()=>$(`[data-name=ort] [aria-pressed=true]`,s)?.scrollIntoView({inline:"center",block:"nearest"}));
  const zu=()=>{hg.animate([{opacity:1},{opacity:0}],{duration:leise?1:160,fill:"forwards"}).onfinish=()=>hg.remove();
    s.animate([{transform:"none"},{transform:"translateY(105%)"}],{duration:leise?1:200,easing:SANFT,fill:"forwards"}).onfinish=()=>s.remove()};
  hg.onclick=zu;
  /* nach unten ziehen = schließen */
  let y0=null;s.addEventListener("touchstart",e=>{y0=s.scrollTop<=0?e.touches[0].clientY:null},{passive:true});
  s.addEventListener("touchmove",e=>{if(y0!==null){const d=Math.max(0,e.touches[0].clientY-y0);s.style.transform=`translateY(${d}px)`}},{passive:true});
  s.addEventListener("touchend",e=>{if(y0!==null){const d=e.changedTouches[0].clientY-y0;s.style.transform="";if(d>90)zu()}y0=null});
  los.onclick=()=>{
    const art=ARTEN.find(a=>a[0]===wahl.art)[1],id="e"+Date.now().toString(36);
    TR.eigene.push({id,art:wahl.art,t:$("#tTitel",s).value.trim()||`${art} · ${ortVon(wahl.ort).n}`,ort:wahl.ort,tag:0,zeit:wahl.zeit,leute:[],
      /* fester Tag, damit der Vorschlag nicht mitwandert */datum:tagStart(wahl.tag).getTime()});
    TR.dabei[id]=Date.now();trSpeichern();zu();
    const r=los.getBoundingClientRect();funken(r.left+r.width/2,r.top);navigator.vibrate&&navigator.vibrate([10,40,10]);
    tFilter="alle";$$(".filter .chip",tSeite).forEach(x=>x.setAttribute("aria-pressed",x.dataset.f==="alle"));ortWaehlen(wahl.ort);
    setTimeout(()=>{const k=$(`.tk[data-id="${id}"]`,tSeite);if(k){k.scrollIntoView({behavior:"smooth",block:"center"});k.classList.add("neu")}},350);
    toast("Vorgeschlagen. Du bist automatisch dabei.");
  };
}
function treffenOeffnen(von){
  tFilter="alle";tOrt=null;tMarker={};tKarte=null;
  const s=oeffne(`<h1 class="s-gross">Treffen</h1>
    <p class="s-sub"><i class="live"></i><b id="tHeute">0</b>&nbsp;Leute treffen sich heute</p>
    <div class="t-karte"><div id="tKarte"></div><div class="ort-info" id="ortInfo" hidden></div></div>
    <button class="vorschlag press welle-an" id="tVorschlag">${ic("plus")}<span><b>Treffen vorschlagen</b><small>Ort aussuchen, Zeit wählen, fertig</small></span></button>
    <div class="filter chips"><button class="chip press" data-f="alle" aria-pressed="true">Alle</button><button class="chip press" data-f="heute" aria-pressed="false">Heute</button><button class="chip press" data-f="dabei" aria-pressed="false">Dabei<span id="tDabeiZahl"></span></button></div>
    <div id="tListe" class="t-liste"></div>
    <p class="fuss">Die fünf Beispiele zeigen, wie es aussieht. Deine Vorschläge und Zusagen bleiben vorerst nur auf diesem Gerät.</p>`,von,"Treffen");
  tSeite=s;s.classList.add("treffen-seite");
  karteBauen($("#tKarte",s));liste();
  $("#tVorschlag",s).onclick=()=>vorschlagen(tOrt);
  $$(".filter .chip",s).forEach(b=>b.onclick=()=>{$$(".filter .chip",s).forEach(x=>x.setAttribute("aria-pressed",x===b));tFilter=b.dataset.f;liste()});
  return s;
}
/* Zahl am Knopf in der Leiste: Treffen heute */
function tabZahl(){const b=$("#tabTreffen .badge");if(!b)return;const n=alleTreffen().filter(x=>wannText(x).tag==="Heute").length;b.textContent=n;b.hidden=!n}
