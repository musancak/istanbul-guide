// Gibt SQL aus, das die Tabelle spots (erlaubte Orte für Bewertungen) mit data.js abgleicht.
// Aufruf: node werkzeug/orte_sql.js > orte.sql  (danach in Supabase ausführen)
// ids wie in app.js buildSpots: `${Bezirk}|${Name}`
const fs=require("fs"),path=require("path");
const F=new Function(fs.readFileSync(path.join(__dirname,"..","data.js"),"utf8")+";return F")();
const ids=new Set();
for(const k in F)for(const d in F[k].d)for(const e of F[k].d[d]){const n=(e[0]==="*"?e.slice(1):e).split("|")[0];ids.add(`${d}|${n}`)}
const q=s=>"'"+s.replace(/'/g,"''")+"'";
console.log(`begin;\ncreate temp table neu(id text primary key) on commit drop;\ninsert into neu values\n${[...ids].map(i=>`(${q(i)})`).join(",\n")};\ninsert into public.spots(id) select id from neu on conflict do nothing;\ndelete from public.spots s where not exists(select 1 from neu where neu.id=s.id);\ncommit;`);
console.error(ids.size+" Orte");
