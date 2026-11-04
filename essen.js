/* Essen in der neuen Oberfläche; keine Navigation zur alten App. */
window.IstanbulFood=(()=>{
const FOOD_CUISINES=[
 ["turkish","Türkisch & Anatolisch","Turkish & Anatolian",/kebap|döner|iskender|lahmacun|pide|mantı|konyalı|çiğköfte|pilav|karadeniz|hausmannskost|lokanta|zennup|tuğra|olden|1741|güzelburç/i],
 ["asian","Asiatisch & Sushi","Asian & sushi",/sushi|ramen|noodle|dumpling|gyoza|wok|konoha|pad thai|kroken|inari|inari|roka|hakkasan/i],
 ["uyghur","Uigurisch","Uyghur",/uygur|uigur|uyghur|kroren/i],
 ["middleeast","Orientalisch","Middle Eastern",/jemen|syrisch|libanes|persisch|afghan|pakistan|hadramout|mazaj|shamse|beirut|kudüs/i],
 ["italian","Italienisch & Pasta","Italian & pasta",/pizza|pasta|lasagne|italien|eataly|ravenna|cipriani|cecconi|say cheese|mac and cheese|sliceguy/i],
 ["burger","Burger & Fried Chicken","Burgers & fried chicken",/burger|smash|fried chicken|wings|wingo|hungry birds|bcante|grungy|bbq|chicken|schnitzel/i],
 ["mexican","Mexikanisch & Tacos","Mexican & tacos",/mexi|taco(?!s)/i],
 ["breakfast","Frühstück","Breakfast",/frühstück|breakfast|brekkie|gazebo|ethem efendi/i],
 ["coffee","Kaffee & Süßes","Coffee & sweets",/coffee|kahve|choco|bakery|pastry|dessert|cheese.?cake|baklava|churro|café|cafe|matcha/i],
 ["seafood","Fisch & Seafood","Fish & seafood",/balık|fisch|seafood|uskumru|sakhalin/i],
 ["african","Afrikanisch","African",/afrikanisch/i],
 ["other","Noch nicht zugeordnet","Not classified yet",null]
];
function foodMeta(s){
 const text=(s.n+" "+s.note).replace(/İ/g,"I");
 const tags=FOOD_CUISINES.filter(x=>x[3]&&x[3].test(text)).map(x=>x[0]);
 if(s.k==="c"&&!tags.includes("coffee"))tags.push("coffee");
 if(!tags.length)tags.push("other");
 // Relative Orientierung nach Lokaltyp; keine behaupteten aktuellen Menüpreise.
 const budget=s.k==="g"||/olden 1772|lokanta 1741|cecconi|eataly|inari|sushico/i.test(text)?"3":/preis-leistung|günstig|pilav arabası|çiğköfte|pasta to go|kızılkayalar/i.test(text)?"1":tags.some(t=>["burger","italian","asian","uyghur","middleeast","turkish","mexican","breakfast"].includes(t))?"2":"unknown";
 const styles=[];
 if(/rooftop|dachterrasse|terrace/i.test(text))styles.push("rooftop");
 if(/am wasser|sahil|bosphorus|paşalimanı/i.test(text))styles.push("water");
 if(/hausmannskost|lokanta/i.test(text))styles.push("lokanta");
 if(/burger|döner|dürüm|pilav|fried chicken|çiğköfte|sokak/i.test(text))styles.push("casual");
 if(s.k==="g"||budget==="3")styles.push("fine");
 return {tags,budget,styles};
}
const FOOD_PHOTOS={
 "Fatih|Lokanta 1741":{url:"https://lokanta1741.com/wp-content/uploads/2023/02/lokanta-1741-bottom-1.jpg",source:"https://lokanta1741.com/tr/anasayfa/"},
 "Fatih|Olden 1772":{url:"https://gengroups.com/wp-content/uploads/2023/05/olden_1.jpg",source:"https://gengroups.com/olden-1772/"}
};
const FOOD_STYLES=[["rooftop","Dachterrasse","Rooftop"],["water","Am Wasser","Waterfront"],["lokanta","Lokanta & Hausmannskost","Lokanta & home cooking"],["casual","Streetfood & unkompliziert","Street food & casual"],["fine","Gehoben essen","Fine dining"]];

 const read=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))??d}catch{return d}};
 const save=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch{}};
 const api="https://tdattimvlqyljahijyoo.supabase.co/rest/v1/rpc/",key="sb_publishable_GhyClAXoPp0t752Fvk1kUw_VxGZ0tuX";
 const rpc=async(fn,body={})=>{const r=await fetch(api+fn,{method:"POST",headers:{apikey:key,"Content-Type":"application/json"},body:JSON.stringify(body)});if(!r.ok)throw Error(r.status);return r.status===204?null:r.json()};
 const state={kind:"r",district:"all",cuisine:"all",style:"all",budget:"all",query:"",sort:"area"};
 let scores=read("ist-scores",{}),mine=read("ist-mine",{}),coords={},extra=[],me=null;
 const normal=s=>String(s).toLocaleLowerCase("tr").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/ı/g,"i");
 const id=s=>s.id||s.d+"|"+s.n;
 const all=()=>[...SPOTS,...extra].map(s=>({...s,id:id(s),ll:coords[id(s)]||null}));
 const distance=(a,b)=>{const t=Math.PI/180,x=Math.sin((b[0]-a[0])*t/2)**2+Math.cos(a[0]*t)*Math.cos(b[0]*t)*Math.sin((b[1]-a[1])*t/2)**2;return 12742*Math.asin(Math.sqrt(x))};
 const options=(items,value)=>items.map(([k,t])=>`<option value="${esc(k)}" ${k===value?"selected":""}>${esc(t)}</option>`).join("");
 function open(from){
  const s=oeffne(`<div class="ef-intro"><span class="mono">DEIN ISTANBUL · FOOD GUIDE</span><h1 class="s-gross">Worauf hast du Lust?</h1><p class="s-sub">Von der kleinen Lokanta bis zum Abend am Bosporus.</p></div>
   <div class="kats ef-kinds">${Object.entries(F).map(([k,v])=>`<button class="kat press" data-kind="${k}" aria-pressed="${k===state.kind}">${esc(v.t)}</button>`).join("")}</div>
   <form class="ef-filters" aria-label="Lokale filtern" onsubmit="return false">
    <label>Bezirk<select name="district"></select></label>
    <label>Küche / Richtung<select name="cuisine">${options([["all","Alle Küchen"],...FOOD_CUISINES.map(c=>[c[0],c[1]])],state.cuisine)}</select></label>
    <label>Stil / Atmosphäre<select name="style">${options([["all","Jeder Stil"],...FOOD_STYLES.map(c=>[c[0],c[1]])],state.style)}</select></label>
    <label>Budget<select name="budget">${options([["all","Jedes Budget"],["1","₺ · Günstig"],["2","₺₺ · Mittel"],["3","₺₺₺ · Gehoben"],["unknown","Noch offen"]],state.budget)}</select></label>
    <label class="ef-search">Lokal oder Gericht<input name="query" type="search" placeholder="Burger, Mantı, Moda …" value="${esc(state.query)}"></label>
    <div class="ef-filter-bottom"><span>Alles frei kombinierbar</span><button type="button" data-reset>Filter zurücksetzen</button></div>
   </form>
   <div class="ef-toolbar"><p data-count role="status" aria-live="polite"></p><label><span class="ef-sr">Sortieren</span><select name="sort">${options([["area","Nach Bezirk"],["top","Bestbewertet"],["near","In der Nähe"]],state.sort)}</select></label></div>
   <details class="ef-mapbox"><summary>${ic("pin")} <span>Auf der Karte entdecken</span></summary><div class="ef-map" aria-label="Karte der gefilterten Lokale"></div><p class="fuss" data-map-note>Die Kartenpunkte sind automatisch gesetzt und können leicht abweichen.</p></details>
   <div class="ef-results"></div>
   <p class="fuss ef-disclaimer">Budget: grobe Orientierung nach Lokaltyp, keine aktuellen Menüpreise. Fehlende Angaben bleiben offen. Zwei eindeutig zugeordnete Innenraumfotos sind vorhanden; bei weiteren Lokalen öffnet die Fotosuche.</p>
   <p class="fuss ef-status" role="status"></p>`,from,"Essen");
  s.classList.add("ef-page");const $e=q=>s.querySelector(q);let map=null,layer=null,busy=new Set(),closed=false;
  const notify=t=>{$e(".ef-status").textContent=t};
  function districts(){const ds=[...new Set(all().filter(x=>x.k===state.kind).map(x=>x.d))];if(state.district!=="all"&&!ds.includes(state.district))state.district="all";$e('[name="district"]').innerHTML=options([["all","Alle Bezirke"],...ds.map(d=>[d,d])],state.district)}
  function filtered(){const q=normal(state.query).trim().split(/\s+/).filter(Boolean);let xs=all().filter(x=>{const m=foodMeta(x);return x.k===state.kind&&(state.district==="all"||state.district===x.d)&&(state.cuisine==="all"||m.tags.includes(state.cuisine))&&(state.style==="all"||m.styles.includes(state.style))&&(state.budget==="all"||m.budget===state.budget)&&q.every(w=>normal(x.n+" "+x.note+" "+x.d).includes(w))});
   if(state.sort==="top")xs.sort((a,b)=>(scores[b.id]||0)-(scores[a.id]||0)||Number(b.top)-Number(a.top));
   else if(state.sort==="near"&&me)xs.sort((a,b)=>(a.ll?distance(me,a.ll):1e9)-(b.ll?distance(me,b.ll):1e9));
   else xs.sort((a,b)=>a.d.localeCompare(b.d,"tr"));return xs;
  }
  function card(x){const m=foodMeta(x),photo=FOOD_PHOTOS[x.id],saved=read("ist-lists",[]).some(l=>l.items.includes(x.id)),been=read("ist-been",{})[x.id];
   const photoSearch="https://www.google.com/search?tbm=isch&q="+encodeURIComponent(x.n+" "+x.d+" Istanbul interior iç mekan");
   return `<article class="ef-card" data-id="${esc(x.id)}">${photo?`<a class="ef-photo" href="${esc(photo.source)}" target="_blank" rel="noopener"><img src="${esc(photo.url)}" alt="Innenraum von ${esc(x.n)}" loading="lazy" decoding="async"><span>Innenraum · Bildquelle ↗</span></a>`:""}<div class="ef-card-body"><div class="ef-card-top"><span class="mono">${esc(x.d)}</span>${x.top?'<span class="ef-top">Gruppentipp</span>':""}</div><a class="ef-name" href="${maps(x)}" target="_blank" rel="noopener"><h2>${esc(x.n)}</h2>${ic("ext")}</a>${x.note?`<p class="ef-note">${esc(x.note)}</p>`:""}<div class="ef-tags">${m.tags.map(t=>`<span>${esc(FOOD_CUISINES.find(c=>c[0]===t)[1])}</span>`).join("")}<span>${m.budget==="unknown"?"Budget offen":"₺".repeat(+m.budget)+" · geschätzt"}</span>${me&&x.ll?`<span>${distance(me,x.ll).toFixed(1).replace(".",",")} km</span>`:""}</div><div class="ef-actions"><a href="${maps(x)}" target="_blank" rel="noopener">${ic("pin")} Karte</a>${!photo?`<a href="${photoSearch}" target="_blank" rel="noopener">Innenraumfotos ↗</a>`:""}<button data-save aria-pressed="${saved}" aria-label="${esc(x.n)} merken">${saved?"Gemerkt":"Merken"}</button><button data-been aria-pressed="${!!been}" aria-label="${esc(x.n)} als besucht markieren">${been?"✓ Besucht":"Besucht?"}</button></div><div class="ef-rating"><span>Stimmen aus der Gruppe</span><button data-vote="1" aria-label="${esc(x.n)} positiv bewerten" aria-pressed="${mine[x.id]===1}" ${busy.has(x.id)?"disabled":""}>↑</button><b>${scores[x.id]||0}</b><button data-vote="-1" aria-label="${esc(x.n)} negativ bewerten" aria-pressed="${mine[x.id]===-1}" ${busy.has(x.id)?"disabled":""}>↓</button></div></div></article>`;
  }
  function render(){if(closed)return;const xs=filtered();$e("[data-count]").textContent=`${xs.length} ${xs.length===1?"Ort":"Orte"}`;$e(".ef-results").innerHTML=xs.length?xs.map(card).join(""):'<div class="ef-empty"><h2>Heute etwas anderes?</h2><p>Kein Lokal passt zu dieser Auswahl. Ändere einen Filter oder setze die Auswahl zurück.</p><button data-reset>Filter zurücksetzen</button></div>';drawMap(xs);}
  function drawMap(xs){if(!map)return;layer.clearLayers();const points=xs.filter(x=>x.ll);for(const x of points){const content=document.createElement("div"),a=document.createElement("a");a.textContent=x.n;a.href=maps(x);a.target="_blank";a.rel="noopener";content.append(a);L.circleMarker(x.ll,{radius:7,color:"#fff",weight:2,fillColor:x.top?"#D0553F":"#1E6E7E",fillOpacity:1}).bindPopup(content).addTo(layer)}if(points.length)map.fitBounds(L.latLngBounds(points.map(x=>x.ll)).pad(.15),{maxZoom:15,animate:false});$e("[data-map-note]").textContent=`${points.length} von ${xs.length} Orten auf der Karte. Punkte sind automatisch gesetzt und können leicht abweichen.`;}
  $e(".ef-mapbox").ontoggle=()=>{if(!$e(".ef-mapbox").open)return;if(!window.L){notify("Die Karte ist gerade nicht verfügbar. Die Links bei den Lokalen funktionieren weiterhin.");return}if(!map){map=L.map($e(".ef-map"),{scrollWheelZoom:false}).setView([41.03,29],11);L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",{maxZoom:16,attribution:'Esri, HERE, Garmin · © OpenStreetMap'}).addTo(map);layer=L.layerGroup().addTo(map)}map.invalidateSize();drawMap(filtered())};
  s.onchange=e=>{const name=e.target.name;if(!["district","cuisine","style","budget","sort"].includes(name))return;if(name==="sort"&&e.target.value==="near"&&!me){if(!navigator.geolocation){notify("Standort nicht verfügbar. Wähle einen Bezirk.");e.target.value=state.sort;return}notify("Standort wird gesucht …");e.target.disabled=true;navigator.geolocation.getCurrentPosition(p=>{e.target.disabled=false;me=[p.coords.latitude,p.coords.longitude];state.sort="near";notify("");render()},()=>{e.target.disabled=false;e.target.value=state.sort;notify("Standort nicht verfügbar. Wähle einen Bezirk.")},{timeout:10000,maximumAge:60000});return}state[name]=e.target.value;render()};
  $e('[name="query"]').oninput=e=>{state.query=e.target.value;render()};
  s.addEventListener("click",async e=>{
   const reset=e.target.closest("[data-reset]"),kind=e.target.closest("[data-kind]");if(reset){Object.assign(state,{district:"all",cuisine:"all",style:"all",budget:"all",query:"",sort:"area"});for(const k of ["cuisine","style","budget","query","sort"])$e(`[name="${k}"]`).value=state[k];districts();render();return}if(kind){state.kind=kind.dataset.kind;s.querySelectorAll("[data-kind]").forEach(b=>b.setAttribute("aria-pressed",b===kind));districts();render();return}
   const c=e.target.closest(".ef-card"),b=e.target.closest("button");if(!c||!b)return;const spot=c.dataset.id;
   if(b.hasAttribute("data-save")){const ls=read("ist-lists",[]),existing=ls.some(l=>l.items.includes(spot));if(existing)ls.forEach(l=>l.items=l.items.filter(i=>i!==spot));else{let l=ls.find(l=>l.id==="m");if(!l){l={id:"m",name:"",items:[]};ls.push(l)}l.items.unshift(spot)}save("ist-lists",ls);render();return}
   if(b.hasAttribute("data-been")){const been=read("ist-been",{});if(been[spot])delete been[spot];else been[spot]=Date.now();save("ist-been",been);render();return}
   if(b.dataset.vote){if(busy.has(spot))return;const old=mine[spot]||0,value=old===+b.dataset.vote?0:+b.dataset.vote;let device=read("ist-device",null);if(!device){device=crypto.randomUUID();save("ist-device",device)}busy.add(spot);render();try{await rpc("vote",{p_spot:spot,p_device:device,p_value:value});scores[spot]=(scores[spot]||0)-old+value;if(value)mine[spot]=value;else delete mine[spot];save("ist-scores",scores);save("ist-mine",mine);notify("Bewertung gespeichert.")}catch{notify("Bewertung konnte nicht gespeichert werden. Bitte erneut versuchen.")}finally{busy.delete(spot);render()}}
  });
  districts();render();
  const observer=new MutationObserver(()=>{if(!s.isConnected){closed=true;map?.remove();observer.disconnect()}});observer.observe(document.body,{childList:true});
  fetch("coords.json").then(r=>r.json()).then(c=>{coords=c;render()}).catch(()=>{});
  const device=read("ist-device",null);Promise.all([rpc("get_scores"),device?rpc("my_votes",{p_device:device}):Promise.resolve([]),rpc("approved_suggestions")]).then(([sc,mv,suggestions])=>{scores=Object.fromEntries(sc.map(x=>[x.spot,x.score]));mine=Object.fromEntries(mv.map(x=>[x.spot,x.value]));save("ist-scores",scores);save("ist-mine",mine);extra=(suggestions||[]).map(x=>({id:x.district+"|"+x.name,n:x.name,d:x.district,k:x.kind,note:x.note||""})).filter(x=>!SPOTS.some(a=>id(a)===x.id));if(!closed){districts();render()}}).catch(()=>notify("Live-Bewertungen gerade nicht erreichbar. Gespeicherte Stimmen werden angezeigt."));
  return s;
 }
 return {open};
})();
