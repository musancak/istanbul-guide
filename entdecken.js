/* Entdeckerpass: gemeinsame Ansicht für Startseite und App. Fotos: siehe Bildnachweise. */
const IstanbulPass=(()=>{
  const e=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const key='ist-orte-besucht-v1';
  let besucht={};
  try{const v=JSON.parse(localStorage.getItem(key));if(v&&typeof v==='object'&&!Array.isArray(v))besucht=v}catch(_){}
  const hat=id=>!!besucht[id];
  const anzahl=()=>IST_ORT.filter(o=>hat(o.id)).length;
  const text=(de,en,lang)=>lang==='en'?en:de;
  const karte=o=>'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(o.name+' Istanbul');
  function html(lang='de'){
    return `<section class="ep" data-pass lang="${lang}">
      <div class="ep-intro"><span class="ep-eyebrow">${text('DEIN ISTANBUL · DEIN PASS','YOUR ISTANBUL · YOUR PASSPORT',lang)}</span><h2>${text('Rausgehen. Entdecken. Stempeln.','Go out. Explore. Collect.',lang)}</h2><p>${text('Eine Insel nach der anderen. Ein neuer Lieblingsort nach dem nächsten. Sammle Erinnerungen an Orte, an denen du wirklich warst.','One island at a time. One new favourite place after another. Collect memories of places you have actually visited.',lang)}</p><div class="ep-progress"><b data-pass-count>${anzahl()} / ${IST_ORT.length}</b><span>${text('Orte entdeckt','places explored',lang)}</span></div><progress max="${IST_ORT.length}" value="${anzahl()}" aria-label="${text('Besuchte Orte','Visited places',lang)}"></progress></div>
      <div class="ep-filters" role="group" aria-label="${text('Orte filtern','Filter places',lang)}">${[['alle','Alle Orte','All places'],['insel','Inseln','Islands'],['stadt','Stadtlieblinge','City favourites'],['offen','Noch entdecken','To explore'],['besucht','Gestempelt','Stamped']].map(([id,de,en],i)=>`<button type="button" data-pass-filter="${id}" aria-pressed="${!i}">${text(de,en,lang)}</button>`).join('')}</div>
      <p class="ep-local">${text('Deine Stempel bleiben auf diesem Gerät. Tippe am Ort auf „Ich war hier“.','Your stamps stay on this device. Tap “I was here” after your visit.',lang)}</p>
      <div class="ep-grid">${IST_ORT.map((o,i)=>`<button type="button" class="ep-card" data-ort="${o.id}" data-art="${o.art}" aria-label="${e(o.name)} · ${text('Ort entdecken','Explore place',lang)}"><div class="ep-cover"><img src="${e(o.photos[0].src)}" width="960" height="640" alt="${e(o.photos[0].alt)}" loading="lazy" decoding="async"><span class="ep-number">${String(i+1).padStart(2,'0')}</span><span class="ep-badge" data-stamp="${o.id}" ${hat(o.id)?'':'hidden'}><b>${String(i+1).padStart(2,'0')}</b><small>İSTANBUL</small><span>✓ ${text('Besucht','Visited',lang)}</span></span></div><div class="ep-card-text"><small>${text(o.art==='insel'?'PRINZENINSEL':'STADTLIEBLING',o.art==='insel'?'PRINCES’ ISLAND':'CITY FAVOURITE',lang)}</small><h3>${e(o.name)}</h3><p>${e(lang==='en'?o.enTeaser:o.teaser)}</p><span>${text('Entdecken','Explore',lang)} <span aria-hidden="true">↗</span></span></div></button>`).join('')}</div><p class="ep-empty" hidden>${text('Hier ist noch Platz für neue Erinnerungen.','There is room for new memories here.',lang)}</p>
      <p class="ep-local">${text('Eine persönliche Auswahl zum Losziehen. Weitere Inseln sind privat, unbewohnt oder nur eingeschränkt zugänglich.','A personal selection to get you exploring. Other islands are private, uninhabited or have limited access.',lang)}</p>
    </section>`;
  }
  function refresh(root){
    const n=anzahl();root.querySelector('[data-pass-count]').textContent=`${n} / ${IST_ORT.length}`;root.querySelector('progress').value=n;
    root.querySelectorAll('[data-stamp]').forEach(b=>b.hidden=!hat(b.dataset.stamp));
    const f=root.querySelector('[data-pass-filter][aria-pressed="true"]')?.dataset.passFilter||'alle';let shown=0;
    root.querySelectorAll('[data-ort]').forEach(c=>{const show=f==='alle'||f===c.dataset.art||f==='besucht'&&hat(c.dataset.ort)||f==='offen'&&!hat(c.dataset.ort);c.hidden=!show;if(show)shown++});
    root.querySelector('.ep-empty').hidden=shown>0;
  }
  function bind(container,lang='de'){
    const root=container.querySelector('[data-pass]');if(!root||root.dataset.bound)return;root.dataset.bound='1';
    root.addEventListener('click',ev=>{const f=ev.target.closest('[data-pass-filter]');if(f){root.querySelectorAll('[data-pass-filter]').forEach(b=>b.setAttribute('aria-pressed',b===f));refresh(root)}const c=ev.target.closest('[data-ort]');if(c)open(c.dataset.ort,lang,c)});
    const update=()=>refresh(root);document.addEventListener('orte-gestempelt',update);
    const observer=new MutationObserver(()=>{if(!root.isConnected){document.removeEventListener('orte-gestempelt',update);observer.disconnect()}});observer.observe(document.body,{childList:true,subtree:true});
  }
  function open(id,lang,trigger){
    const o=IST_ORT.find(o=>o.id===id);if(!o)return;
    const d=document.createElement('dialog');d.className='ep-dialog';
    d.setAttribute('aria-labelledby','ep-place-title');d.lang=lang;
    d.innerHTML=`<div class="ep-dialog-inner"><button type="button" class="ep-close" aria-label="${text('Schließen','Close',lang)}">✕</button><div class="ep-gallery" role="region" aria-label="${text('Drei Bilder von','Three pictures of',lang)} ${e(o.name)}" aria-roledescription="${text('Diashow','slideshow',lang)}" tabindex="0">${o.photos.map((p,i)=>`<figure class="ep-slide" role="group" aria-label="${i+1} / 3"><img src="${e(p.src)}" width="960" height="640" alt="${e(p.alt)}" loading="${i?'lazy':'eager'}" decoding="async"><figcaption>${e(p.alt)}</figcaption></figure>`).join('')}</div><div class="ep-gallery-bar"><button type="button" data-prev aria-label="${text('Vorheriges Bild','Previous picture',lang)}">←</button><span data-image-count aria-live="polite">1 / 3</span><button type="button" data-next aria-label="${text('Nächstes Bild','Next picture',lang)}">→</button><button type="button" data-play aria-pressed="false">▶ ${text('Abspielen','Play',lang)}</button></div><div class="ep-detail"><span class="ep-eyebrow">${o.art==='insel'?text('INSELAUSZEIT','ISLAND ESCAPE',lang):text('DEIN NÄCHSTER LIEBLINGSORT','YOUR NEXT FAVOURITE PLACE',lang)}</span><h2 id="ep-place-title">${e(o.name)}</h2><p class="ep-lead">${e(lang==='en'?o.enTeaser:o.teaser)}</p><p>${e(lang==='en'?o.enBody:o.body)}</p><div class="ep-tip"><b>${text('Dein kleiner Plan','Your little plan',lang)}</b><p>${e(lang==='en'?o.enTip:o.tip)}</p></div><a class="ep-map" href="${karte(o)}" target="_blank" rel="noopener">${text('Auf der Karte öffnen','Open map',lang)} ↗</a><button type="button" class="ep-collect" aria-pressed="${hat(id)}"></button><p class="ep-local" data-save-status role="status"></p><details class="ep-credits"><summary>${text('Bildnachweise & Quelle','Photo credits & source',lang)}</summary>${o.photos.map(p=>`<p><a href="${e(p.source)}" target="_blank" rel="noopener">${e(p.title)}</a><br>${e(p.author)} · <a href="${e(p.licenseUrl)}" target="_blank" rel="noopener">${e(p.license)}</a> · ${text('Für die Galerie verkleinert; Ausschnitt in der Vorschau.','Resized for this gallery; cropped in previews.',lang)}</p>`).join('')}<p><a href="${e(o.source)}" target="_blank" rel="noopener">${text('Mehr zum Ort','More about this place',lang)} ↗</a></p></details></div></div>`;
    document.body.append(d);d.showModal();
    const gallery=d.querySelector('.ep-gallery'),slides=[...d.querySelectorAll('.ep-slide')],reduce=matchMedia('(prefers-reduced-motion: reduce)');let current=0,timer=0,frame=0;
    const play=d.querySelector('[data-play]');
    const stop=()=>{clearInterval(timer);timer=0;play.setAttribute('aria-pressed','false');play.textContent='▶ '+text('Abspielen','Play',lang)};
    const move=delta=>{current=(current+delta+3)%3;gallery.scrollTo({left:slides[current].offsetLeft-gallery.offsetLeft,behavior:reduce.matches?'auto':'smooth'})};
    d.querySelector('[data-prev]').onclick=()=>{stop();move(-1)};d.querySelector('[data-next]').onclick=()=>{stop();move(1)};
    play.onclick=()=>{if(timer)return stop();play.setAttribute('aria-pressed','true');play.textContent='Ⅱ '+text('Pause','Pause',lang);timer=setInterval(()=>{if(!document.hidden)move(1)},5000)};
    gallery.addEventListener('scroll',()=>{if(frame)return;frame=requestAnimationFrame(()=>{frame=0;current=Math.max(0,Math.min(2,Math.round(gallery.scrollLeft/gallery.clientWidth)));d.querySelector('[data-image-count]').textContent=`${current+1} / 3`})},{passive:true});
    gallery.addEventListener('pointerdown',stop,{passive:true});gallery.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight'||ev.key==='ArrowLeft'){ev.preventDefault();stop();move(ev.key==='ArrowRight'?1:-1)}});
    const collect=d.querySelector('.ep-collect'),label=()=>{collect.setAttribute('aria-pressed',hat(id));collect.textContent=hat(id)?'✓ '+text('Gestempelt · Besuch zurücknehmen','Stamped · Undo visit',lang):'✧ '+text('Ich war hier · Stempel sammeln','I was here · Collect stamp',lang)};label();
    collect.onclick=()=>{const next={...besucht};if(hat(id))delete next[id];else next[id]=new Date().toISOString();
      try{localStorage.setItem(key,JSON.stringify(next))}catch(_){d.querySelector('[data-save-status]').textContent=text('Speichern ist gerade nicht möglich. Bitte erlaube lokalen Speicher.','Unable to save. Please allow local storage.',lang);return}
      besucht=next;label();d.querySelector('[data-save-status]').textContent=hat(id)?text('Ein neuer Ort, eine neue Erinnerung. Stempel gespeichert.','A new place, a new memory. Stamp saved.',lang):text('Besuch zurückgenommen.','Visit removed.',lang);
      if(hat(id)&&!reduce.matches)collect.animate([{transform:'scale(.96)'},{transform:'scale(1.03)'},{transform:'none'}],{duration:360,easing:'ease-out'});
      document.dispatchEvent(new CustomEvent('orte-gestempelt',{detail:id}));
    };
    d.querySelector('.ep-close').onclick=()=>d.close();d.addEventListener('click',ev=>{if(ev.target===d)d.close()});
    d.addEventListener('close',()=>{stop();cancelAnimationFrame(frame);d.remove();trigger?.focus({preventScroll:true})},{once:true});
  }
  addEventListener('storage',ev=>{if(ev.key===key){try{const v=JSON.parse(ev.newValue);besucht=v&&typeof v==='object'&&!Array.isArray(v)?v:{}}catch(_){besucht={}}document.dispatchEvent(new CustomEvent('orte-gestempelt'))}});
  return {html,bind,hat,anzahl};
})();
