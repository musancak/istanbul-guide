/* Inhalte: P = Deutsch, PE = Englisch (gleiche ids), F = Food-Spots. Zeilen: [Bezeichnung, Wert] · "Text" · {l,u,d} Link · {s:[Schritte]} · {tb:{h,r}} */
const P={
flughafen:{t:"Vom Flughafen in die Stadt",i:"plane",c:"--c1",s:"IST und SAW",g:[
 {h:"Istanbul Airport (IST)",r:[["Metro","M11, dann M2 · 45–70 Min"],["Havaist-Bus","Taksim, Beşiktaş, Kadıköy · gut mit Gepäck"],["Taxi","24/7, nur mit Taxameter"],["WLAN","IGA WiFi, unbegrenzt · Code per SMS oder Pass am Kiosk scannen"]]},
 {h:"Sabiha Gökçen (SAW)",r:[["Metro","M4 nach Kadıköy · 60–80 Min"],["Havabus","Kadıköy und Taksim"],["Nachts","Bus E-10 nach Kadıköy · Sa-Nacht UM73"],["WLAN","60 Min gratis, PIN per SMS"]]},
 {h:"Tipps",r:["Istanbulkart direkt am Automaten im Flughafen kaufen.","Niemanden mitnehmen, der in der Halle „privates Taxi“ anbietet.","Mit Gepäck sind Bus oder Metro meist besser als Taxi.","Ziel als Screenshot aus Google Maps zeigen."]}]},
sim:{t:"SIM-Karte und Internet",i:"sim",c:"--c3",s:"Anbieter, Preise, eSIM",g:[
 {h:"Anbieter",r:[["Turkcell","Bestes Netz, schnellstes Internet"],["Vodafone","Bestes Angebot für Neukunden"],["Türk Telekom","Günstig, schwächeres Netz, aber stabil in der Metro"],["BİMcell","Sehr günstig, nur in BİM-Filialen, Netz von Türk Telekom"]]},
 {h:"Neue SIM ohne Paket",r:[["Turkcell","850–1.350 TL"],["Türk Telekom","900–1.100 TL"],["Vodafone","950–1.200 TL"],["BİMcell","820–1.050 TL"]],f:"In Taksim-Nebenstraßen teils schon ab 800 TL. Am Flughafen bis 2.000–3.000 TL."},
 {h:"Pakete",r:[["Vodafone Willkommen","25 GB · 1000 Min · 175 TL / 28 Tage"],["Turkcell","20 GB · 1000 Min · 175 TL / 4 Wochen"],["Turkcell","50 GB · 1000 Min · 350 TL / 4 Wochen"],["Türk Telekom","25 GB · 1000 Min · 465 TL / 28 Tage"],["BİMcell","15 GB · 750 Min · 290 TL"],["BİMcell","20 GB · 750 Min · 310 TL"]]},
 {h:"Gut zu wissen",r:[["Reisepass","Pflicht beim Kauf"],["Eigene Nummer","*101# wählen"],["IMEI anzeigen","*#06# wählen"],["APN","„internet“ (falls Daten nicht gehen)"],["Gratis-GB","Wöchentlich in der App: Salla Kazan (Turkcell), Hediye Çarkı (Vodafone), Sil Süpür (Türk Telekom)"]]},
 {h:"eSIM",r:["Turkcell, Vodafone und Türk Telekom bieten eSIM.","Globale eSIMs (Airalo, Holafly, Saily …) sind in der Türkei oft gesperrt. Vor der Ankunft kaufen und aktivieren.","Eine türkische Nummer brauchst du oft für Apps und Lieferdienste."]}]},
imei:{t:"Handy-Frist",i:"phone",c:"--c2",s:"120 Tage mit türkischer SIM",g:[
 {r:[["Frist","120 Tage mit türkischer SIM"],["Danach","Gerät wird für türkische SIMs gesperrt"],["Registrieren 2026","54.258 TL (ca. 1.056 €)"],["Nicht betroffen","Ausländische SIM, Roaming, internationale eSIM"]]},
 {h:"Praktisch",r:["Bei Dual-SIM läuft die ausländische Karte weiter.","Die Sperre gilt für das Gerät, nicht für die SIM-Karte."]}]},
istanbulkart:{t:"Istanbulkart",i:"card",c:"--c1",s:"Karten, Preise, Studentenkarte",g:[
 {h:"Karten",r:[["Anonym","165 TL"],["Personalisiert","140 TL"],["Student","140 TL"]]},
 {h:"Fahrpreise (Stand Aug. 2026)",r:[["Einzelfahrt","46,20 TL"],["Einzelfahrt Student","22,55 TL"],["Monat voll","3.628 TL · 180 Fahrten"],["Monat Student","653 TL · 200 Fahrten"],["Prinzeninseln","151,23 TL · Student 75,64 TL"]],f:"Metrobüs, Marmaray und manche Fähren rechnen nach Strecke. Dort beim Aussteigen erneut antippen."},
 {h:"Studentenkarte beantragen",r:[{s:["Aktuelle Studienbescheinigung beim Student Affairs Office holen","Beim International Office deiner Uni melden","Pass, Bescheinigung und eventuell Passfoto mitnehmen","In einem Istanbulkart-Center (İBM) beantragen","140 TL zahlen, Karte ist sofort nutzbar"]}],f:"Nicht berechtigt: Erasmus-Praktikant:innen, ESC-Freiwillige, Austausch ohne Einschreibung."},
 {h:"İBM-Center · Mo–Fr 8:30–19, Sa 8:30–17:30",r:[["Europa","Gayrettepe, Karaköy, Topkapı, Yenibosna, Avcılar"],["Asien","Kadıköy, Üsküdar, Kartal, Ümraniye, Sultanbeyli"]]},
 {h:"Bezahlen",r:[["Karte","Am Gerät antippen, Signalton abwarten"],["Bankkarte","Kontaktlos geht auch"],["QR","In der Istanbulkart-App"],["Aufladen","Biletmatik-Automat, App, Kiosk „Dolum“"]]},
 {h:"Auch nutzbar für",r:["Öffentliche Toiletten, İSBİKE-Leihräder, BELTUR-Cafés, Strände Caddebostan und Florya, Kassen bei BİM, A101, Şok, Migros, Carrefour."]},
 {h:"Achtung",r:["Zweimal im selben Bus tippen: die zweite Fahrt kostet voll und zählt nicht zum Monatslimit.","Rückerstattung: am Automaten „İade“ wählen.","Dolmuş-Minibusse nehmen keine Istanbulkart."]}]},
taxi:{t:"Taxi und Apps",i:"car",c:"--c4",s:"Preise, lizenzierte Apps",g:[
 {h:"Gelbes Taxi",r:[["Mindestpreis","230 TL"],["Grundgebühr","63,50 TL"],["Pro km","41,30 TL"]],f:"Brücken, Tunnel und Wartezeit kosten extra. Immer Taxameter verlangen."},
 {h:"Großraum",r:[["Türkis 8+1","ab 270 TL · 51,74 TL/km"],["Gelb 8-Sitzer","ab 385 TL · 57,19 TL/km"]]},
 {h:"Lizenzierte Apps",r:["BiTaksi, Uber, BinBin, inDrive, Valo, Yandex Go"]},
 {h:"Günstiger",r:[["MartıTAG","ca. 68 TL pro km · nicht von İBB lizenziert"],["Martı Scooter","Minutenpreis in der App"]]},
 {h:"Seetaxi",r:[["Start","500 TL"],["Pro Seemeile","750 TL"]]}]},
dolmus:{t:"Dolmuş und Minibus",i:"bus",c:"--c6",s:"Preise nach Strecke",g:[
 {h:"Minibus",r:[["0–4 km","32,50 TL"],["4–7 km","34 TL"],["7–11 km","35 TL"],["11–15 km","36 TL"],["15–20 km","39 TL"],["Student","ca. 32,50 TL"]],f:"Keine Istanbulkart. Nur bar oder per QR."},
 {h:"Dolmuş-Beispiele",r:[["Beşiktaş – Taksim","40 TL"],["Eminönü – Taksim","40 TL"],["Üsküdar – Kadıköy","40 TL"],["Beşiktaş – Bebek – Etiler","50 TL"],["Kadıköy – Taksim","100 TL inkl. Maut"]]}]},
nacht:{t:"Nachts unterwegs",i:"moon",c:"--c5",s:"Nachtmetro, Busse, Fähre",g:[
 {h:"Nachtmetro",r:[["Wann","Fr früh bis So 24 Uhr durchgehend"],["Linien","M1A, M1B, M2, M4, M5, M6, M7"],["Preis","00:30–05:30 doppelter Tarif"]]},
 {h:"Metrobüs",r:[["24/7","Söğütlüçeşme – Beylikdüzü"],["Nachts","alle 20 Min"]]},
 {h:"Nachtbusse",r:[["25G","Sarıyer – Levent – Mecidiyeköy – Taksim"],["15F","Beykoz – Kadıköy"],["19S","Sancaktepe – Kadıköy"],["55G","Gaziosmanpaşa – Beşiktaş"],["E-10","Sabiha Gökçen – Kadıköy"],["H-2","Mecidiyeköy – Istanbul Airport"]]},
 {h:"Nachtfähre · Fr/Sa und Sa/So",r:[{tb:{h:["Ab","Karaköy","An"],r:[["23:45","direkt","00:15"],["00:15","direkt","00:45"],["00:45","direkt","01:15"],["01:15","direkt","01:45"],["01:30","01:50","02:05"],["02:35","02:55","03:10"],["03:45","04:05","04:20"],["04:55","05:15","05:30"]]}}],f:"Gleiche Zeiten in beide Richtungen: Kadıköy → Beşiktaş und Beşiktaş → Kadıköy. Bis 01:15 alte Anlegestelle (Eski İskele), danach neue (Yeni İskele). An Feiertagen kann es anders sein."}]},
links:{t:"Karten und Planer",i:"link",c:"--c7",s:"Offizielle Seiten",g:[
 {r:[{l:"Routenplaner",d:"İstanbul Senin · nasıl giderim",u:"https://istanbulsenin.istanbul/nasil-giderim/"},{l:"Metro-Netzplan",d:"metro.istanbul",u:"https://www.metro.istanbul/en/YolcuHizmetleri/AgHaritalari"},{l:"Fähren-Linienkarte",d:"Şehir Hatları, PDF",u:"https://files.sehirhatlari.istanbul/Sefer-Haritasi-Line-Map.pdf"},{l:"Marmaray auf der Karte",d:"Google My Maps",u:"https://www.google.com/maps/d/viewer?mid=1P1GUsGI-jz2c6oUssfgK6_M_mno49365"},{l:"Istanbulkart-Center",d:"Alle Standorte",u:"https://www.istanbulkart.istanbul/applicationCenters"},{l:"Istanbulkart online",d:"istanbulkart.istanbul",u:"https://istanbulkart.istanbul/en"}]},
 {h:"Tipps",r:["Stoßzeiten 7–9 und 17–19 Uhr meiden.","An Bayram-Feiertagen fährt man in Istanbul oft gratis."]}]},
ausfluege:{t:"Fähren und Ausflüge",i:"boat",c:"--c6",s:"Inseln, Bursa, Schnellzug",g:[
 {h:"Fähren",r:[["Prinzeninseln","151,23 TL · Student 75,64 TL · ab Kabataş oder Kadıköy"],["Bursa","450 TL · Student 340 TL"],["Yalova","255 TL"]]},
 {h:"Schnellzug (13–26 Jahre)",r:[["Ankara","678 TL"],["Eskişehir","439 TL"],["Konya","991 TL"],["Edirne","285 TL"]]},
 {h:"Auf Büyükada essen",r:["Profiterol und kremalı börek, Tipp aus der Gruppe."]}]},
geld:{t:"Geld",i:"money",c:"--c3",s:"Abheben, wechseln, empfangen",g:[
 {h:"Abheben",r:[["Währung","Immer TRY, „Heimatwährung“ ablehnen"],["Wenig Gebühren","Ziraat, Halkbank, Vakıfbank, HSBC, PTT"],["Taktik","Selten, dafür größere Beträge"]],f:"Deine Heimatbank kann zusätzlich 1–3 % nehmen."},
 {h:"Wechseln",r:[["Großer Basar","Beste Kurse, mehrere vergleichen"],["Laleli","Sehr gut für größere Beträge"],["Çemberlitaş, Sirkeci","Schneller, etwas schlechter"]],f:"Immer nach dem Endkurs fragen."},
 {h:"Karten",r:[["Revolut, Wise","In der Gruppe am meisten empfohlen"],["Türkisches Konto","z. B. İş Bankası, Vakıfbank · Eröffnung aufwendig"]]},
 {h:"Geld empfangen",r:[["RIA, KoronaPay","Meist am günstigsten"],["MoneyGram","Mittel"],["Western Union","Am schnellsten, teuer · Pass und MTCN"]]}]},
einkaufen:{t:"Einkaufen",i:"cart",c:"--c4",s:"Supermärkte, Brot, Lieferung",g:[
 {r:[["Günstig","BİM, ŞOK, A101, Hakmar, Bizim, Tarım Kredi"],["Große Auswahl","Migros, CarrefourSA, Metro"],["Gourmet","Macrocenter, Eataly, File"],["Halk Ekmek","250 g Brot 15 TL am Kiosk"],["Lieferung","Getir, Yemeksepeti, Trendyol Go"],["Obst, Gemüse","Wochenmarkt (Pazar)"]]}]},
pazar:{t:"Wochenmärkte",i:"market",c:"--c8",s:"Pazar nach Wochentag",g:[
 {r:[["Dienstag","Kadıköy Salı Pazarı, der größte"],["Mittwoch","Fatih und Umgebung"],["Donnerstag","Beşiktaş Ulus, Beyoğlu Piyalepaşa"],["Freitag","Kadıköy, Kozyatağı, Fikirtepe"],["Samstag","Beşiktaş (gegenüber Ihlamur-Pavillon), Feriköy Bio-Markt"],["Sonntag","Feriköy Antikmarkt, Märkte in Şişli, Beyoğlu, Üsküdar"]],f:"Meist ab 8–9 Uhr bis nachmittags. Bargeld und eigene Tasche mitnehmen. Früh hingehen."}]},
wlan:{t:"Gratis-WLAN",i:"wifi",c:"--c1",s:"İBB Wi-Fi und mehr",g:[
 {h:"İBB Wi-Fi",r:[{s:["App „İstanbul Senin“ laden","Standort einschalten, registrieren","„Featured Apps“ → İBB Wi-Fi","Hotspot antippen, kein Passwort nötig"]}],f:"Auf Plätzen, in Parks, Bussen, Fähren und den Metrolinien M4, M7, M8."},
 {h:"Sonst",r:[["Cafés","Starbucks, Caffè Nero, Gloria Jean’s, fast alle kleinen Cafés"],["Malls","Zorlu, Kanyon, İstinye Park, Akmerkez"],["Ruhig lernen","Kadıköy-Bibliothek, SALT Galata"],["Netz in der Metro","Türk Telekom am stabilsten"]]}]},
wohnen:{t:"Wohnen",i:"house",c:"--c4",s:"Suche, Vertrag, Erdbeben",g:[
 {h:"Suche",r:[["Portale","Sahibinden, Hepsi Emlak, Emlakjet, Zingat"],["Kurzzeit","Airbnb"],["WG","Facebook-Gruppen „Sharing Flats in Istanbul“"],["Wohnheime","KYK, İBB (günstig, wenig Plätze)"]]},
 {h:"Vertrag",r:["Immer schriftlich: Miete, Fälligkeit, Kaution, Laufzeit, Kündigung.","Klären, wer Wasser, Strom, Gas, Internet und Aidat zahlt.","Für die Aufenthaltserlaubnis oft notariell (Noter) nötig.","Miete per Überweisung mit Verwendungszweck.","Beim Einzug Fotos mit Datum machen.","Grundbuch (Tapu) zeigen lassen."]},
 {h:"Betrug",r:["Nie Geld vor Besichtigung und Vertrag.","Zu billig oder „dringend“ heißt: Vorsicht."]},
 {h:"Erdbebenrisiko",r:[["Geringer","Sarıyer, Beykoz, Çekmeköy, Kağıthane (oben), Ümraniye (innen)"],["Mittel","Beşiktaş, Şişli, Beyoğlu, Fatih, Üsküdar (Hang)"],["Höher","Avcılar, Küçükçekmece, Esenyurt, Beylikdüzü, Küste von Bakırköy, Kadıköy, Maltepe, Kartal, Pendik, Prinzeninseln"]]},
 {h:"Gebäude prüfen",r:[["Baujahr","Nach 2000 besser, nach 2018 am besten"],["Höhe","Höchstens 5 Stockwerke"],["Versicherung","DASK vorhanden"],["Erdgeschoss","Kein Laden oder Parkplatz darunter"]],f:"Das Risiko wechselt von Straße zu Straße. Das Gebäude zählt mehr als der Bezirk."}]},
aufenthalt:{t:"Aufenthaltserlaubnis",i:"doc",c:"--c5",s:"e-İkamet für Erasmus",g:[
 {r:[["Wer","Alle, die länger als 90 Tage bleiben"],["Frist","30 Tage nach Ankunft"],["Karte","1–2 Wochen nach dem Termin"]]},
 {h:"Ablauf",r:[{s:["Konto auf e-ikamet.goc.gov.tr anlegen","Antrag ausfüllen: Daten, Adresse, Zweck","Dokumente hochladen","Gebühr online zahlen","Termin bei der Göç İdaresi buchen","Mit allen Originalen hingehen"]}]},
 {h:"Dokumente",r:["Pass mit Kopie","Zulassungsbrief der Gastuni","Mietvertrag oder Wohnheimbestätigung","Krankenversicherung für die ganze Zeit","4 biometrische Passfotos"]},
 {h:"Ämter",r:[["Fatih (Vatan)","Hauptamt · Mo–Fr 9–17 · sehr voll"],["Kumkapı","Kleiner, weniger los"],["Pendik","Für Kadıköy, Maltepe, Kartal · Mo–Fr 9–12:30"],["Esenyurt","Äußere Europa-Seite, oft schneller"],["Ümraniye","Asien-Seite, vormittags"]]},
 {h:"Tipps",r:["30–45 Min vor dem Termin da sein, Originale und Farbkopien mit.","Im Februar und März sind Termine schnell weg.","Umzug? Adresse sofort im e-İkamet ändern.","Keine Antwort nach 40 Tagen: 157 anrufen.","Türkische Wurzeln: Blaue Karte (Mavi Kart) beim Konsulat ist eine Alternative."]}]},
notfall:{t:"Notfall",i:"plus",c:"--c2",s:"Nummern und was zu tun ist",g:[
 {h:"Nummern",r:[["112","Alle Notdienste, Englisch möglich"],["155","Polizei"],["110","Feuerwehr"],["114","Giftnotruf"],["157","Touristenpolizei, auch Migrationshotline"]]},
 {h:"Im Ernstfall",r:["Immer zuerst 112, nicht nur Messenger.","„English please“ sagen.","Notaufnahme heißt „Acil Servis“, staatliche Krankenhäuser sind 24/7 offen.","Foto vom Pass aufs Handy, Live-Standort teilen.","Unsicher? In einen Laden oder ein Café gehen und um Hilfe bitten."]}]},
sehen:{t:"Top 10 Sehenswürdigkeiten",i:"dome",c:"--c8",s:"Mit kurzem Tipp",g:[
 {r:[["Hagia Sophia","Früh morgens hin"],["Topkapı-Palast","2–3 Std. einplanen, Schatzkammer nicht verpassen"],["Blaue Moschee","Bedeckte Kleidung, nicht zur Gebetszeit"],["Basilika-Zisterne","Nachmittags schönstes Licht"],["Großer Basar","Handeln, bei etwa der Hälfte anfangen"],["Ägyptischer Basar","Geröstete Nüsse probieren"],["Galataturm","Zum Sonnenuntergang"],["İstiklal und Taksim","Bequeme Schuhe"],["Bosporus-Fahrt","Nachmittags oder zum Sonnenuntergang"],["Prinzeninseln","Fähre ab Kabataş oder Kadıköy, Büyükada ist die größte"]]}]},
muzekart:{t:"Müzekart",i:"ticket",c:"--c4",s:"Museumskarte für Studierende",g:[
 {h:"Preise",r:[["Student","100 TL (Stand 2025)"],["Mit 99er-Aufenthalt","500 TL"],["Hagia Sophia mit Karte","425 TL"]]},
 {h:"Regeln",r:["Jedes Museum zweimal im Jahr.","Mit Foto auf der Karte 1 Jahr gültig, ohne nur 1 Woche.","In der Müzekart-App per QR-Code rein (GPS und Bluetooth an)."]},
 {h:"In Istanbul dabei",r:["Topkapı (ohne Harem, dienstags zu), Galataturm, Dolmabahçe (ohne Selamlık), Archäologische Museen, Museum für Türkische und Islamische Kunst, Rumeli Hisarı, Yıldız, Beylerbeyi, Mosaikmuseum, Galata Mevlevihanesi."]},
 {h:"Aus der Gruppe",r:["Dolmabahçe: Der schönste Teil (Selamlık) ist nicht drin. Lieber normales Ticket vor Ort."]},
 {r:[{l:"Verkaufsstellen",d:"muze.gov.tr",u:"https://muze.gov.tr/satis-noktasi?CatalogNo=KRT-MZA01-08-008"}]}]},
viertel:{t:"Viertel für Studierende",i:"pin",c:"--c1",s:"Wo man sich trifft",g:[
 {r:[["Beşiktaş","Jung, viele Cafés, Frühstücksstraße, Markt"],["Kadıköy und Moda","Street-Art, Vintage, Sonnenuntergang an der Küste"],["Beyoğlu und Taksim","Abends, Bars, Galerien, Galata"],["Şişli und Mecidiyeköy","Praktisch, Metro, Malls"],["Fatih und Sultanahmet","Geschichte, ruhige Cafés"],["Balat und Karaköy","Bunte Straßen für Fotos"]]}]},
rechner:{t:"Monatskarten-Rechner",i:"card",c:"--c3",s:"Lohnt sich die Monatskarte?",g:[]},
vorschlag:{t:"Spot vorschlagen",i:"plus",c:"--c2",s:"Erscheint nach kurzer Prüfung",g:[]},
danke:{t:"Danke und Quellen",i:"people",c:"--c5",s:"Woher die Infos kommen",g:[]}
};

const PE={
flughafen:{t:"From the airport to the city",s:"IST and SAW",g:[
 {h:"Istanbul Airport (IST)",r:[["Metro","M11, then M2 · 45–70 min"],["Havaist bus","Taksim, Beşiktaş, Kadıköy · good with luggage"],["Taxi","24/7, meter only"],["Wi-Fi","IGA WiFi, unlimited · code by SMS or scan passport at kiosk"]]},
 {h:"Sabiha Gökçen (SAW)",r:[["Metro","M4 to Kadıköy · 60–80 min"],["Havabus","Kadıköy and Taksim"],["At night","Bus E-10 to Kadıköy · Sat night UM73"],["Wi-Fi","60 min free, PIN by SMS"]]},
 {h:"Tips",r:["Buy your Istanbulkart at the machine in the airport.","Ignore anyone offering a “private taxi” in the hall.","With luggage, bus or metro is usually better than a taxi.","Show the driver a screenshot of your destination in Google Maps."]}]},
sim:{t:"SIM card and internet",s:"Operators, prices, eSIM",g:[
 {h:"Operators",r:[["Turkcell","Best coverage, fastest data"],["Vodafone","Best deal for new customers"],["Türk Telekom","Cheap, weaker network, but stable in the metro"],["BİMcell","Very cheap, only at BİM stores, Türk Telekom network"]]},
 {h:"New SIM without package",r:[["Turkcell","850–1,350 TL"],["Türk Telekom","900–1,100 TL"],["Vodafone","950–1,200 TL"],["BİMcell","820–1,050 TL"]],f:"Side streets in Taksim sometimes from 800 TL. At the airport up to 2,000–3,000 TL."},
 {h:"Packages",r:[["Vodafone welcome","25 GB · 1000 min · 175 TL / 28 days"],["Turkcell","20 GB · 1000 min · 175 TL / 4 weeks"],["Turkcell","50 GB · 1000 min · 350 TL / 4 weeks"],["Türk Telekom","25 GB · 1000 min · 465 TL / 28 days"],["BİMcell","15 GB · 750 min · 290 TL"],["BİMcell","20 GB · 750 min · 310 TL"]]},
 {h:"Good to know",r:[["Passport","Required to buy"],["Your number","Dial *101#"],["Show IMEI","Dial *#06#"],["APN","“internet” (if data doesn’t work)"],["Free GB","Weekly in the app: Salla Kazan (Turkcell), Hediye Çarkı (Vodafone), Sil Süpür (Türk Telekom)"]]},
 {h:"eSIM",r:["Turkcell, Vodafone and Türk Telekom offer eSIM.","Global eSIMs (Airalo, Holafly, Saily …) are often blocked in Turkey. Buy and activate before you arrive.","You often need a Turkish number for apps and delivery services."]}]},
imei:{t:"Phone deadline",s:"120 days with a Turkish SIM",g:[
 {r:[["Deadline","120 days with a Turkish SIM"],["After that","Phone is blocked for Turkish SIMs"],["Register 2026","54,258 TL (about €1,056)"],["Not affected","Foreign SIM, roaming, international eSIM"]]},
 {h:"In practice",r:["With dual SIM, your foreign card keeps working.","The block applies to the device, not the SIM card."]}]},
istanbulkart:{t:"Istanbulkart",s:"Cards, fares, student card",g:[
 {h:"Cards",r:[["Anonymous","165 TL"],["Personal","140 TL"],["Student","140 TL"]]},
 {h:"Fares (Aug 2026)",r:[["Single ride","46.20 TL"],["Single ride student","22.55 TL"],["Monthly full","3,628 TL · 180 rides"],["Monthly student","653 TL · 200 rides"],["Princes’ Islands","151.23 TL · student 75.64 TL"]],f:"Metrobüs, Marmaray and some ferries charge by distance. Tap again when you get off."},
 {h:"Get the student card",r:[{s:["Get a current student certificate from Student Affairs","Go to your university’s International Office","Bring passport, certificate and maybe a passport photo","Apply at an Istanbulkart center (İBM)","Pay 140 TL, card works right away"]}],f:"Not eligible: Erasmus trainees, ESC volunteers, exchange without enrolment."},
 {h:"İBM centers · Mon–Fri 8:30–19, Sat 8:30–17:30",r:[["Europe","Gayrettepe, Karaköy, Topkapı, Yenibosna, Avcılar"],["Asia","Kadıköy, Üsküdar, Kartal, Ümraniye, Sultanbeyli"]]},
 {h:"Paying",r:[["Card","Tap the reader, wait for the beep"],["Bank card","Contactless works too"],["QR","In the Istanbulkart app"],["Top up","Biletmatik machine, app, kiosk “Dolum”"]]},
 {h:"Also works for",r:["Public toilets, İSBİKE bikes, BELTUR cafés, beaches Caddebostan and Florya, checkouts at BİM, A101, Şok, Migros, Carrefour."]},
 {h:"Watch out",r:["Tapping twice on the same bus: the second ride is charged in full and doesn’t count toward the monthly limit.","Refund: choose “İade” at the machine.","Dolmuş minibuses don’t take the Istanbulkart."]}]},
taxi:{t:"Taxi and apps",s:"Fares, licensed apps",g:[
 {h:"Yellow taxi",r:[["Minimum fare","230 TL"],["Base fee","63.50 TL"],["Per km","41.30 TL"]],f:"Bridges, tunnels and waiting time cost extra. Always ask for the meter."},
 {h:"Large taxis",r:[["Turquoise 8+1","from 270 TL · 51.74 TL/km"],["Yellow 8-seater","from 385 TL · 57.19 TL/km"]]},
 {h:"Licensed apps",r:["BiTaksi, Uber, BinBin, inDrive, Valo, Yandex Go"]},
 {h:"Cheaper",r:[["MartıTAG","about 68 TL per km · not licensed by İBB"],["Martı scooter","Per-minute price in the app"]]},
 {h:"Sea taxi",r:[["Start","500 TL"],["Per nautical mile","750 TL"]]}]},
dolmus:{t:"Dolmuş and minibus",s:"Fares by distance",g:[
 {h:"Minibus",r:[["0–4 km","32.50 TL"],["4–7 km","34 TL"],["7–11 km","35 TL"],["11–15 km","36 TL"],["15–20 km","39 TL"],["Student","about 32.50 TL"]],f:"No Istanbulkart. Cash or QR only."},
 {h:"Dolmuş examples",r:[["Beşiktaş – Taksim","40 TL"],["Eminönü – Taksim","40 TL"],["Üsküdar – Kadıköy","40 TL"],["Beşiktaş – Bebek – Etiler","50 TL"],["Kadıköy – Taksim","100 TL incl. toll"]]}]},
nacht:{t:"Getting around at night",s:"Night metro, buses, ferry",g:[
 {h:"Night metro",r:[["When","Fri morning to Sun midnight non-stop"],["Lines","M1A, M1B, M2, M4, M5, M6, M7"],["Fare","00:30–05:30 double fare"]]},
 {h:"Metrobüs",r:[["24/7","Söğütlüçeşme – Beylikdüzü"],["At night","every 20 min"]]},
 {h:"Night buses",r:[["25G","Sarıyer – Levent – Mecidiyeköy – Taksim"],["15F","Beykoz – Kadıköy"],["19S","Sancaktepe – Kadıköy"],["55G","Gaziosmanpaşa – Beşiktaş"],["E-10","Sabiha Gökçen – Kadıköy"],["H-2","Mecidiyeköy – Istanbul Airport"]]},
 {h:"Night ferry · Fri/Sat and Sat/Sun",r:[{tb:{h:["Dep","Karaköy","Arr"],r:[["23:45","direct","00:15"],["00:15","direct","00:45"],["00:45","direct","01:15"],["01:15","direct","01:45"],["01:30","01:50","02:05"],["02:35","02:55","03:10"],["03:45","04:05","04:20"],["04:55","05:15","05:30"]]}}],f:"Same times both ways: Kadıköy → Beşiktaş and Beşiktaş → Kadıköy. Until 01:15 old pier (Eski İskele), after that new pier (Yeni İskele). May differ on holidays."}]},
links:{t:"Maps and planners",s:"Official sites",g:[
 {r:[{l:"Journey planner",d:"İstanbul Senin · nasıl giderim",u:"https://istanbulsenin.istanbul/nasil-giderim/"},{l:"Metro map",d:"metro.istanbul",u:"https://www.metro.istanbul/en/YolcuHizmetleri/AgHaritalari"},{l:"Ferry line map",d:"Şehir Hatları, PDF",u:"https://files.sehirhatlari.istanbul/Sefer-Haritasi-Line-Map.pdf"},{l:"Marmaray on a map",d:"Google My Maps",u:"https://www.google.com/maps/d/viewer?mid=1P1GUsGI-jz2c6oUssfgK6_M_mno49365"},{l:"Istanbulkart centers",d:"All locations",u:"https://www.istanbulkart.istanbul/applicationCenters"},{l:"Istanbulkart online",d:"istanbulkart.istanbul",u:"https://istanbulkart.istanbul/en"}]},
 {h:"Tips",r:["Avoid rush hours 7–9 and 17–19.","On Bayram holidays public transport in Istanbul is often free."]}]},
ausfluege:{t:"Ferries and day trips",s:"Islands, Bursa, fast train",g:[
 {h:"Ferries",r:[["Princes’ Islands","151.23 TL · student 75.64 TL · from Kabataş or Kadıköy"],["Bursa","450 TL · student 340 TL"],["Yalova","255 TL"]]},
 {h:"Fast train (age 13–26)",r:[["Ankara","678 TL"],["Eskişehir","439 TL"],["Konya","991 TL"],["Edirne","285 TL"]]},
 {h:"Eating on Büyükada",r:["Profiterole and kremalı börek, tip from the group."]}]},
geld:{t:"Money",s:"Withdraw, exchange, receive",g:[
 {h:"Withdrawing",r:[["Currency","Always TRY, decline “home currency”"],["Low fees","Ziraat, Halkbank, Vakıfbank, HSBC, PTT"],["Tactic","Fewer, larger withdrawals"]],f:"Your home bank may add 1–3 %."},
 {h:"Exchanging",r:[["Grand Bazaar","Best rates, compare several"],["Laleli","Very good for larger amounts"],["Çemberlitaş, Sirkeci","Faster, slightly worse"]],f:"Always ask for the final rate."},
 {h:"Cards",r:[["Revolut, Wise","Most recommended in the group"],["Turkish account","e.g. İş Bankası, Vakıfbank · opening takes effort"]]},
 {h:"Receiving money",r:[["RIA, KoronaPay","Usually cheapest"],["MoneyGram","Medium"],["Western Union","Fastest, expensive · passport and MTCN"]]}]},
einkaufen:{t:"Groceries",s:"Supermarkets, bread, delivery",g:[
 {r:[["Cheap","BİM, ŞOK, A101, Hakmar, Bizim, Tarım Kredi"],["Big selection","Migros, CarrefourSA, Metro"],["Gourmet","Macrocenter, Eataly, File"],["Halk Ekmek","250 g bread 15 TL at the kiosk"],["Delivery","Getir, Yemeksepeti, Trendyol Go"],["Fruit, veg","Weekly market (pazar)"]]}]},
pazar:{t:"Weekly markets",s:"Pazar by weekday",g:[
 {r:[["Tuesday","Kadıköy Salı Pazarı, the biggest"],["Wednesday","Fatih and around"],["Thursday","Beşiktaş Ulus, Beyoğlu Piyalepaşa"],["Friday","Kadıköy, Kozyatağı, Fikirtepe"],["Saturday","Beşiktaş (opposite Ihlamur Pavilion), Feriköy organic market"],["Sunday","Feriköy antique market, markets in Şişli, Beyoğlu, Üsküdar"]],f:"Usually from 8–9 am until the afternoon. Bring cash and your own bag. Go early."}]},
wlan:{t:"Free Wi-Fi",s:"İBB Wi-Fi and more",g:[
 {h:"İBB Wi-Fi",r:[{s:["Install the “İstanbul Senin” app","Turn on location, sign up","“Featured Apps” → İBB Wi-Fi","Tap a hotspot, no password needed"]}],f:"On squares, in parks, buses, ferries and metro lines M4, M7, M8."},
 {h:"Elsewhere",r:[["Cafés","Starbucks, Caffè Nero, Gloria Jean’s, almost every small café"],["Malls","Zorlu, Kanyon, İstinye Park, Akmerkez"],["Quiet study","Kadıköy library, SALT Galata"],["Signal in the metro","Türk Telekom is most stable"]]}]},
wohnen:{t:"Housing",s:"Search, contract, earthquakes",g:[
 {h:"Search",r:[["Portals","Sahibinden, Hepsi Emlak, Emlakjet, Zingat"],["Short term","Airbnb"],["Flatshare","Facebook groups “Sharing Flats in Istanbul”"],["Dorms","KYK, İBB (cheap, few places)"]]},
 {h:"Contract",r:["Always in writing: rent, due date, deposit, duration, notice.","Agree who pays water, electricity, gas, internet and aidat.","Often needs to be notarised (Noter) for the residence permit.","Pay rent by bank transfer with a reference.","Take dated photos when you move in.","Ask to see the title deed (Tapu)."]},
 {h:"Scams",r:["Never pay before viewing and signing.","Too cheap or “urgent” means: careful."]},
 {h:"Earthquake risk",r:[["Lower","Sarıyer, Beykoz, Çekmeköy, Kağıthane (upper), Ümraniye (inner)"],["Medium","Beşiktaş, Şişli, Beyoğlu, Fatih, Üsküdar (hillside)"],["Higher","Avcılar, Küçükçekmece, Esenyurt, Beylikdüzü, coast of Bakırköy, Kadıköy, Maltepe, Kartal, Pendik, Princes’ Islands"]]},
 {h:"Check the building",r:[["Year built","After 2000 better, after 2018 best"],["Height","5 floors or fewer"],["Insurance","DASK in place"],["Ground floor","No shop or car park underneath"]],f:"Risk changes street by street. The building matters more than the district."}]},
aufenthalt:{t:"Residence permit",s:"e-İkamet for Erasmus",g:[
 {r:[["Who","Everyone staying longer than 90 days"],["Deadline","30 days after arrival"],["Card","1–2 weeks after the appointment"]]},
 {h:"Steps",r:[{s:["Create an account on e-ikamet.goc.gov.tr","Fill in the form: details, address, purpose","Upload documents","Pay the fee online","Book an appointment at Göç İdaresi","Go with all originals"]}]},
 {h:"Documents",r:["Passport with copy","Acceptance letter from the host university","Rental contract or dorm confirmation","Health insurance for the whole stay","4 biometric passport photos"]},
 {h:"Offices",r:[["Fatih (Vatan)","Main office · Mon–Fri 9–17 · very busy"],["Kumkapı","Smaller, less busy"],["Pendik","For Kadıköy, Maltepe, Kartal · Mon–Fri 9–12:30"],["Esenyurt","Outer European side, often faster"],["Ümraniye","Asian side, mornings"]]},
 {h:"Tips",r:["Arrive 30–45 min early with originals and colour copies.","In February and March slots go fast.","Moved? Update your address in e-İkamet right away.","No reply after 40 days: call 157.","Turkish roots: the Blue Card (Mavi Kart) at the consulate is an alternative."]}]},
notfall:{t:"Emergency",s:"Numbers and what to do",g:[
 {h:"Numbers",r:[["112","All emergency services, English possible"],["155","Police"],["110","Fire"],["114","Poison control"],["157","Tourist police, also migration hotline"]]},
 {h:"If it happens",r:["Always call 112 first, not just messengers.","Say “English please”.","The emergency room is “Acil Servis”, public hospitals are open 24/7.","Keep a photo of your passport, share your live location.","Feel unsafe? Walk into a shop or café and ask for help."]}]},
sehen:{t:"Top 10 sights",s:"With a quick tip",g:[
 {r:[["Hagia Sophia","Go early in the morning"],["Topkapı Palace","Plan 2–3 hours, don’t miss the treasury"],["Blue Mosque","Covered clothing, not at prayer time"],["Basilica Cistern","Best light in the afternoon"],["Grand Bazaar","Bargain, start at about half"],["Spice Bazaar","Try the roasted nuts"],["Galata Tower","At sunset"],["İstiklal and Taksim","Comfortable shoes"],["Bosphorus cruise","Afternoon or sunset"],["Princes’ Islands","Ferry from Kabataş or Kadıköy, Büyükada is the largest"]]}]},
muzekart:{t:"Müzekart",s:"Museum card for students",g:[
 {h:"Prices",r:[["Student","100 TL (2025)"],["With 99 residence permit","500 TL"],["Hagia Sophia with card","425 TL"]]},
 {h:"Rules",r:["Each museum twice a year.","With a photo on the card valid for 1 year, without only 1 week.","Enter with the QR code in the Müzekart app (GPS and Bluetooth on)."]},
 {h:"Included in Istanbul",r:["Topkapı (without Harem, closed Tuesdays), Galata Tower, Dolmabahçe (without Selamlık), Archaeology Museums, Museum of Turkish and Islamic Arts, Rumeli Hisarı, Yıldız, Beylerbeyi, Mosaic Museum, Galata Mevlevihanesi."]},
 {h:"From the group",r:["Dolmabahçe: the nicest part (Selamlık) isn’t included. Better buy a normal ticket there."]},
 {r:[{l:"Where to buy",d:"muze.gov.tr",u:"https://muze.gov.tr/satis-noktasi?CatalogNo=KRT-MZA01-08-008"}]}]},
viertel:{t:"Student neighbourhoods",s:"Where people meet",g:[
 {r:[["Beşiktaş","Young, lots of cafés, breakfast street, market"],["Kadıköy and Moda","Street art, vintage, sunset on the coast"],["Beyoğlu and Taksim","Evenings, bars, galleries, Galata"],["Şişli and Mecidiyeköy","Practical, metro, malls"],["Fatih and Sultanahmet","History, quiet cafés"],["Balat and Karaköy","Colourful streets for photos"]]}]},
rechner:{t:"Monthly pass calculator",s:"Does the monthly pass pay off?",g:[]},
vorschlag:{t:"Suggest a spot",s:"Shown after a quick check",g:[]},
danke:{t:"Thanks and sources",s:"Where the info comes from",g:[]}
};

/* Food-Spots: Liste der Gruppe (Google Doc) + Tipps aus den Chats. "Name|Notiz" · * = Top */
const F={
r:{t:"Essen",d:{
 "Fatih":["Olden 1772","Lokanta 1741","Tarhan Uygur Restoranı|uigurisch","Baran Et","Ciğeristan","Hadramout|jemenitisch","Mazaj|syrisch","Zafer Uygur Restaurant|uigurisch","Kroren|uigurisch","Diver Karadeniz Mutfağı|Schwarzmeerküche"],
 "Beyoğlu":["*Dürümcü Mehmet Usta|Balık dürüm","Resto Galata Terrace","Moise Karaköy","Galata Frida House","Cihangir Mantıcısı|Mantı","Cihangir Doyum Mantı|Mantı","Emily’s Garden|Cihangir","Pad Thai|Cihangir","Kara Lounge Restaurant|afrikanisch","Cecconi’s|italienisch","Barnathan","Ala Rasi Restaurant|afghanisch, Fusion","Shamse Restaurant|persisch","Eniştenin Yeri|Kebap, Preis-Leistung, gutes Tatlı"],
 "Şişli":["Hacıbaşar Kebap Katmer","Tas Ramen & Sushi Bar","Bizim Lokanta|Nişantaşı, Hausmannskost","Sushico|Nişantaşı","Güzelburç Antakya|Nişantaşı","Smash House|Burger","Mahir Lokantası|einer der besten","Healin","Zoya’s House"],
 "Beşiktaş":["Sushi & Spice","Konoha","Luppen Fried Chicken","Wingo Fried Chicken","Really Fried Chicken","Hungry Birds","51 Wings","*Bcante|Burger","The Smashy|Burger","Balta Burger|Burger","The Grungy|Burger","Just BBQ","Choys Fried Chicken & Pizza","Authentic French Tacos","Pasta la Vista|Mac and Cheese, Akaretler","Say Cheese","Ravenna|Lasagne","Makana|uigurisch","İskender Kuruluş 1867|İskender","Coni & Co.|Zorlu Center, Chicken Bowl","Eataly|Zorlu Center","*Çıtır Pide|Malatya-Lahmacun bestellen","Kroken|Levent, asiatisch","Inari Sushi|Etiler"],
 "Sarıyer":["*Gazebo|Frühstück am Wasser","Tepe Restaurant Lounge","Zeytin Garden Breakfast|Frühstück","Yıldız Hisar Tesisleri","Nefes Vadi Restaurant & Cafe","Pomoot|Vadistanbul"],
 "Kadıköy":["*Ethem Efendi|Frühstück","Brekkie Breakfast Club|Moda, Frühstück","Snug|Moda","Strada|Suadiye","Ferida","Artois Cadde|Tantuni-Taco","Nom|Burger","Magnus|Burger","Catchy BBQ|Burger","Carbo Smash|Burger","Gaam Burger|Burger","Balta Burger|Burger","Fred Dinosaurs","Mustobarq Sokak Lezzetleri","Nitz Schnitzel & More","Tacoroll","Paitan Ramen and Gyoza House|authentisch","Bento Noodles","The Wokshop","Apartman","CM Noodle|Sushi-Burger","Le Perre|Çiğköfte-Sushi","Sliceguy|Knoblauchbrot, Pizza","Döner Zamanı|Döner","Agahoğlu|Tepsi mantı","Çilingir Sofrası","Günay Konyalı|Etli ekmek","Manhattan Cafe","Sinop Mantı|Mantı","Pilav Arabası"],
 "Üsküdar":["Fethi Paşa Sosyal Tesisi","Limon","Hünkar Pide & Börek","Arada Blue|libanesisch","DasHan the Uyghur|uigurisch","Nevmekan Sahil","Saklı Kubbe","Hangry 21 Burger Cafe|Burger","Yuzu Fried Chicken","Kudüs Han","Mr Dumpling","Pastafarian|Kuzguncuk","Pasta Al Dente|Çengelköy","Bartos Burger Place|Çengelköy","Paşalimanı","Nilhan Sultan Köşkü","Şeker Döner|Döner","Zeynel Kebap","Adıyaman Semsür Çiğköfte|Çiğköfte"],
 "Beykoz":["Liçi House|Kavacık","Bayramoğlu Döner|laut Gruppe der beste Döner","İntiba Döner|İskender","Sabancı Öğretmen Evi","Gümüşsuyu Restoran"],
 "Zeytinburnu":["Fişekhane|viele Cafés und Lokale","Zennup 1844","Doğuhan Kebap","Palude Restaurant","Meşhur Dönerci Hacı Osman’ın Yeri|Döner"],
 "Beylikdüzü":["Türk Pak Saray|pakistanisch","Koz Döner|Döner","Maroll|Çiğköfte"],
 "Başakşehir":["Saraylı Restoran|Sıra gecesi","Kuzubeyi"],
 "Bakırköy":["Mahsun Usta","Marna","Havuş","Şazeli|Florya"]}},
c:{t:"Cafés",d:{
 "Fatih":["*Fluffy Dip & Fly|japanischer Cheesecake","Evvelâ"],
 "Beyoğlu":["Gallant|Galata, Dubai Ball","Viyana Kahvesi","Choco Zuma|Karaköy","Karabatak|Karaköy","Cocodema|Karaköy","Books & Coffee|Karaköy","Fil Books|Karaköy","Minoa Pera|Taksim, Buchcafé","Türkisch-Deutsche Buchhandlung|Taksim, Buchcafé","Cafe Da Giovanni"],
 "Şişli":["Filosofia Pastry","Poco Coffee|Matcha","Hümaliva|Schokolade, Kaffee","Zoya’s House"],
 "Beşiktaş":["Suflör","La Vie Praline","Chocolate Sarayı","Death by Chocolate|San Sebastián, warme Cookies","Are You Chocolate","Minoa Beşiktaş|Buchcafé","The Qadayıf","*Lokmata|Dubai-Lokma","The Churrol","Pier Habib|kalte Baklava","Machi Machi","Pardon|Rumeli Hisarı","Season Artisan Bakery|Bebek","Poco Coffee|Bebek, Matcha"],
 "Sarıyer":["Espressolab|Eski Büyükdere İskelesi"],
 "Kadıköy":["Grandma","Ilyu","Küff","Happy Croissants","Boac Soft Serve","Swivel Cafe & Bakery","Choco Port","Meet Lab","Amata","Flare","Chromia","Beige Cafe","Lavinya Dessert & Coffee","Books & Coffee","Cha’ya|Moda, Baklava-Cheesecake","Hümaliva|Moda","Moda İskelesi Kütüphanesi|Bibliothekscafé","The Churrol","Noxus Chocolate & Cafe","Grön Hus|Bağdat Cd.","Zeyn Chocolate|Bağdat Cd., Dubai-Crêpe","Comfy|Bağdat Cd.","Perla|Bağdat Cd.","Melly|Bağdat Cd.","Bella Bakery & Coffee|Bağdat Cd., Tiramisu Latte"],
 "Üsküdar":["Cappadocia","Qubish","Leticia","İra Bakery","Moc","Sedir Kitap Kahve|Buchcafé","Aşiyan Books & Coffee","Payedar Kahve","Hakkı Zade","Cremia Cafe","Veronika Çikolata","Kaf Cafe Restaurant","Riff Specialty Coffee","Glow Coffee|Kuzguncuk, Crackle Coffee","La Vie Praline|Çengelköy"],
 "Beykoz":["Telgrafhane"]}},
s:{t:"Shisha",d:{
 "Beyoğlu":["Loi Bosphorus|neben Galataport","Azure Lounge","Zebra Lounge","Huqqabaz|auch Taksim, Vadistanbul"],
 "Beşiktaş":["PS Lounge|Etiler","Kaytan Lounge|Ortaköy","Most Hookah|Ortaköy","Kuruçeşme Kahvesi|Kuruçeşme","The Market Bosphorus|Kuruçeşme"],
 "Fatih":["Moss Lounge the Bosphorus","Lotiz Lounge","La Vista Bosphorus"],
 "Şişli":["Mayson Lounge"],"Bakırköy":["Seasha Lounge"],"Beykoz":["Ghalia Lounge"]}},
g:{t:"Gehoben",d:{
 "Beşiktaş":["Tuğra Restaurant|Çırağan-Palast","İnari Omakase|Kuruçeşme","Mezzenna|Kuruçeşme","Hakkasan|Kuruçeşme","Mandarin Oriental|Kuruçeşme","Feriye|Ortaköy","Visorante|Ortaköy","Sakhalin"],
 "Beyoğlu":["Roka|Galataport"],"Şişli":["Cipriani|Harbiye"],"Beykoz":["Uskumru Restaurant"]}},
t:{t:"Gruppe",d:{
 "Frühstück":["Çelebioğlu Sokak|Beşiktaş, eine Straße voller Frühstücksläden","Balkon|Beşiktaş","Siyah Beyaz|Beşiktaş","Lusnika|Kadıköy","Arada Beirut|Frühstück"],
 "Kebap, Döner, Lahmacun":["Şehzade Cağ Kebap|Sirkeci","Borsam Taşfırın|Kadıköy, Lahmacun","Bayramoğlu Döner|Beykoz","İntiba|İskender","Otantik|Taksim"],
 "Burger, Pizza, Snacks":["Kızılkayalar|Taksim, Islak Burger","Burger Yiyelim|günstige Kette","Crust & Co|Karaköy, Pizza","The Chicken Club","Mr Dumpling","Pasta To Go","Esmer Chef|Taksim, Nudeln","Nizam Pide|Taksim"],
 "Spät in Kadıköy":["Kokoreç|Kadıköy, nachts","Çorba|Kadıköy, Söğütlüçeşme"]}}
};
