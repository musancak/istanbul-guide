/* Ergänzungen aus dem Gruppenchat (29.09.–01.11.2026): node werkzeug/chat_nov.js */
const fs=require("fs"),path=require("path");
const file=path.join(__dirname,"..","data.js");
let src=fs.readFileSync(file,"utf8");
const ctx={};new Function("ctx",src.replace(/^const (P|PE|F)=/gm,"ctx.$1=")+";")(ctx);
const {P,PE}=ctx;
const L=(l,d,u)=>({l,d,u});

/* 1 Aufenthaltserlaubnis */
P.aufenthalt.g.splice(2,0,{h:"Nach dem Online-Antrag",r:[{s:[
 "Krankenversicherung: Das TA11-Formular deiner Krankenkasse beim SGK bestätigen lassen und sagen, dass es für das İkamet ist (z. B. Beşiktaş, Kadıköy, Göztepe). Alternativ eine private Versicherung, die in der Türkei gilt.",
 "Fingerabdruck bei der Migrationsbehörde: Antragsausdruck und Pass mitnehmen. Es geht auch ein anderes Büro als im Termin, zum Beispiel in Fatih.",
 "Steuernummer: zuerst online auf ivd.gib.gov.tr versuchen, sonst beim Finanzamt (Vergi Dairesi).",
 "Falls die Gebühr noch offen ist: bar beim Finanzamt zahlen, im Herbst 2026 waren es 964 TL. Prüfen, ob der Name auf der Quittung stimmt.",
 "Alles im International Office abgeben, möglichst innerhalb von 7 Tagen nach dem Online-Antrag.",
 "Warten: Die Karte kommt per Post oder an die Uni. Kommt nach einem Monat nichts, bei der Migrationsbehörde nachfragen."]}],
 f:"Erfahrungen aus der Gruppe, kann je nach Uni und Büro abweichen. In Fatih liegen Migrationsbehörde und Finanzamt nur etwa 400 m auseinander, mindestens 2 Stunden einplanen."});
PE.aufenthalt.g.splice(2,0,{h:"After the online application",r:[{s:[
 "Health insurance: have the TA11 form from your insurer confirmed at the SGK and say it’s for the ikamet (e.g. Beşiktaş, Kadıköy, Göztepe). Or a private insurance valid in Türkiye.",
 "Fingerprints at the migration office: bring the application printout and your passport. Another office than the one in your appointment works too, e.g. Fatih.",
 "Tax ID: try online at ivd.gib.gov.tr first, otherwise at the tax office (Vergi Dairesi).",
 "If the fee is still open: pay it in cash at the tax office, in autumn 2026 it was 964 TL. Check that your name on the receipt is right.",
 "Hand everything in at the International Office, ideally within 7 days of the online application.",
 "Wait: the card comes by post or to your university. Nothing after a month? Ask the migration office."]}],
 f:"Experiences from the group chats, may differ by university and office. In Fatih the migration office and the tax office are only about 400 m apart, plan at least 2 hours."});
const tipDE=P.aufenthalt.g.find(x=>x.h==="Tipps"), tipEN=PE.aufenthalt.g.find(x=>x.h==="Tips");
tipDE.r.unshift("Die e-İkamet-Seite hakt oft. Bei Fehlern einen anderen Standort wählen oder es später nochmal versuchen.");
tipDE.r.push("Solange die Karte unterwegs ist, nicht ausreisen.");
tipEN.r.unshift("The e-İkamet site is often buggy. If you get errors, pick another location or try again later.");
tipEN.r.push("Don’t leave the country while your card is on its way.");
P.aufenthalt.g.at(-1).r.push(L("Steuernummer","Online beantragen","https://ivd.gib.gov.tr"));
PE.aufenthalt.g.at(-1).r.push(L("Tax ID","Apply online","https://ivd.gib.gov.tr"));

/* 2 Geld */
P.geld.g[0].r[0]=["Währung","In Lira abheben und am Ende „in TL belasten“ wählen, nicht Euro. Sonst kommen bis zu 8 % dazu"];
PE.geld.g[0].r[0]=["Currency","Withdraw lira and choose “charge in TL” at the end, not euros. Otherwise up to 8 % is added"];
P.geld.g.find(x=>x.h==="Aus der Gruppe").r.push("Automaten der Post (PTT) sind oft gebührenfrei, mit gutem Kurs.","Halkbank ist meist ohne Gebühr. In Einkaufszentren und Touristengegenden wollen manche Automaten bis zu 8 %.");
PE.geld.g.find(x=>x.h==="From the group").r.push("Post office (PTT) ATMs are often free, with a good rate.","Halkbank is usually free. Some ATMs in malls and tourist areas want up to 8 %.");

/* 3 Istanbulkart */
const ik=(g,h,r)=>g.splice(g.length-1,0,{h,r});
ik(P.istanbulkart.g,"Aus der Gruppe",[
 "Jemand fährt mit? Karte zweimal hintereinander auflegen. Die zweite Fahrt kostet den normalen Preis und geht vom Guthaben ab.",
 "Das Studenten-Abo verlängerst du am Automaten oder an Kiosken (Büfe).",
 "Zeigt die Karte plötzlich kein Guthaben oder zu wenige Fahrten, ist das oft ein Systemfehler, der am nächsten Tag weg ist.",
 "Online anmelden klappt ohne türkische Nummer oft nicht. Dann im Istanbulkart-Center vor Ort machen lassen."]);
ik(PE.istanbulkart.g,"From the group",[
 "Someone riding with you? Tap the card twice in a row. The second ride costs the regular fare and comes off your balance.",
 "Renew the student pass at a machine or a kiosk (büfe).",
 "If the card suddenly shows no balance or too few rides, it’s often a system glitch that’s gone the next day.",
 "Signing up online often fails without a Turkish number. Then do it in person at an Istanbulkart center."]);

/* 4 Müzekart */
P.muzekart.g.splice(1,0,{h:"Für Studierende",r:[
 "Die Studentenkarte gibt es zum Beispiel am Verkaufsstand beim Galataturm. Mitbringen: Pass, Studentenausweis und die Immatrikulationsbescheinigung der Uni hier, am besten mit Matrikelnummer.",
 "Ohne Studentenausweis (z. B. an der Marmara) wurden manche abgewiesen, der Zulassungsbrief reichte nicht immer.",
 "Mit türkischem Ausweis (Kimlik) geht es auch direkt in der App.",
 "Im Archäologischen Museum zahlten Erasmus-Studierende mit Studentenausweis 100 TL."],f:"Erfahrungen aus der Gruppe vom Oktober 2026."});
PE.muzekart.g.splice(1,0,{h:"For students",r:[
 "You can get the student card e.g. at the sales booth by Galata Tower. Bring your passport, student ID and the enrolment certificate from your university here, ideally with your student number.",
 "Without a student ID (e.g. at Marmara) some were turned away, the acceptance letter wasn’t always enough.",
 "With a Turkish ID (kimlik) it also works directly in the app.",
 "At the Archaeological Museum, Erasmus students with a student ID paid 100 TL."],f:"Experiences from the group chats, October 2026."});

/* 5 Ausflüge */
P.ausfluege.s="Inseln, Bursa, Kappadokien";
PE.ausfluege.s="Islands, Bursa, Cappadocia";
P.ausfluege.g[0].r.push("Tipp aus der Gruppe: zum Sonnenuntergang hoch zur Kirche auf Büyükada, Fahrrad fahren oder die Insel umrunden. Unten gibt es Fischrestaurants.");
PE.ausfluege.g[0].r.push("Tip from the group: go up to the church on Büyükada for sunset, rent a bike or walk around the island. There are fish restaurants by the water.");
const after=(g,o)=>g.splice(1,0,o);
after(P.ausfluege.g,{h:"Kappadokien",r:["Viele raten, mit Freunden selbst zu planen statt einer Gruppenreise: hin und zurück fliegen, Unterkunft selbst buchen, beim Ballonfahren handeln. Dann macht ihr, worauf ihr Lust habt."]});
after(PE.ausfluege.g,{h:"Cappadocia",r:["Many recommend planning it yourselves instead of a group tour: fly there and back, book your own place, haggle for the balloon ride. Then you do what you feel like."]});

/* 6 Arzt und Krankenhaus */
P.arzt={t:"Arzt und Krankenhaus",i:"plus",c:"--c6",s:"Privat, staatlich, Apotheke",g:[
 {r:[["Private Klinik","Schnell dran, oft ohne Termin. Kostet, die Auslandskrankenversicherung erstattet meist"],["Staatliches Krankenhaus","Mit SGK günstig, aber Wartezeiten"],["Notaufnahme","„Acil Servis“, rund um die Uhr"]],f:"Im Notfall immer 112."},
 {h:"Aus der Gruppe",r:[
  "Vorher bei deiner Versicherung fragen, ob private Ärzte übernommen werden, und alle Rechnungen aufheben.",
  "Kurz in der Klinik anrufen, ob gerade ein Termin frei ist. Private Kliniken haben meist auch samstags offen.",
  "Die YUPASS-Nummer (TA11 über das SGK) ist oft nur einige Wochen aktiv, das Datum steht auf dem Zettel. Damit gibt es meist nur in staatlichen Häusern und im Notfall Leistungen.",
  "Das staatliche Krankenhaus in Göztepe kennt sich mit der Versicherung aus. Auch dort musste man manchmal einen kleinen Teil selbst zahlen."]},
 {h:"Apotheke",r:["Apotheke heißt „Eczane“. Nachts und am Wochenende hat eine Notdienst-Apotheke („Nöbetçi Eczane“) offen, welche, hängt an jeder Apotheke aus.",
  L("Nöbetçi Eczane","Notdienst-Apotheken in Istanbul","https://www.istanbuleczaciodasi.org.tr/nobetci-eczane/")]}]};
PE.arzt={t:"Doctor and hospital",s:"Private, public, pharmacy",g:[
 {r:[["Private clinic","Seen quickly, often without an appointment. You pay, travel health insurance usually refunds it"],["Public hospital","Cheap with SGK, but waiting times"],["Emergency room","“Acil Servis”, around the clock"]],f:"In an emergency, always 112."},
 {h:"From the group",r:[
  "Ask your insurer first whether private doctors are covered, and keep all invoices.",
  "Call the clinic quickly to ask if there’s a slot. Private clinics are usually open on Saturdays too.",
  "The YUPASS number (TA11 via the SGK) is often only active for a few weeks, the date is on the paper. It usually only covers public hospitals and emergencies.",
  "The public hospital in Göztepe knows its way around the insurance. Even there, people sometimes paid a small share."]},
 {h:"Pharmacy",r:["A pharmacy is an “eczane”. At night and on weekends an on-duty pharmacy (“nöbetçi eczane”) is open, each pharmacy posts which one.",
  L("Nöbetçi Eczane","On-duty pharmacies in Istanbul","https://www.istanbuleczaciodasi.org.tr/nobetci-eczane/")]}]};

/* zurückschreiben, Format wie gehabt */
const line=(id,o)=>{const head=Object.entries(o).filter(([k])=>k!=="g").map(([k,v])=>k+":"+JSON.stringify(v)).join(",");return id+":{"+head+",g:"+JSON.stringify(o.g)+"}"};
for(const [name,obj] of [["P",P],["PE",PE]]){
 const start=src.indexOf("const "+name+"={"), end=src.indexOf("\n};",start);
 const body=Object.entries(obj).map(([id,o])=>line(id,o)).join(",\n");
 src=src.slice(0,start)+"const "+name+"={\n"+body+"\n"+src.slice(end+1);
}
fs.writeFileSync(file,src);
console.log("ok");
