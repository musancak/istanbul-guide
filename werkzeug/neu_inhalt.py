# Ersetzt die Inhaltsseiten in data.js (P = Deutsch, PE = Englisch) durch eigene Texte
# nach offiziellen Quellen. Aufruf: python3 werkzeug/neu_inhalt.py
import json, os, re

HIER = os.path.dirname(os.path.abspath(__file__))
DATEI = os.path.join(HIER, "..", "data.js")
L = lambda l, d, u: {"l": l, "d": d, "u": u}

DE = {
"flughafen": dict(t="Vom Flughafen in die Stadt", i="plane", c="--c1", s="IST und SAW", g=[
  dict(h="Istanbul Airport (IST)", r=[["Metro", "M11 bis Gayrettepe, dort in die M2 · gut 1 Std."], ["Bus", "Havaist, u. a. nach Taksim, Beşiktaş und Kadıköy"], ["Taxi", "Am offiziellen Taxistand, mit Taxameter"]]),
  dict(h="Sabiha Gökçen (SAW)", r=[["Metro", "M4 bis Kadıköy · gut 1 Std."], ["Bus", "Havabus nach Kadıköy und Taksim"]]),
  dict(h="Gut zu wissen", r=["Die Istanbulkart gibt es an Automaten in beiden Flughäfen.", "Taxi nur am Taxistand nehmen, nicht von Leuten in der Ankunftshalle.", "Zieladresse als Screenshot bereithalten, das spart Erklärungen."]),
  dict(r=[L("Havaist", "Busse ab Istanbul Airport", "https://www.havaist.com"), L("Havabus", "Busse ab Sabiha Gökçen", "https://www.havabus.com"), L("Metro İstanbul", "Linien und Fahrzeiten", "https://www.metro.istanbul")])]),
"sim": dict(t="SIM-Karte und Internet", i="sim", c="--c3", s="Anbieter und Kauf", g=[
  dict(h="Anbieter", r=[["Turkcell", "Größter Anbieter, gute Abdeckung"], ["Vodafone", "Eigene Pakete für Touristen und Neukunden"], ["Türk Telekom", "Auch Glasfaser und Festnetz"]], f="Günstigere Marken laufen über diese Netze, z. B. BİMcell im Supermarkt BİM."),
  dict(h="Kaufen", r=["Im offiziellen Laden des Anbieters, der Reisepass ist Pflicht.", "Am Flughafen meist deutlich teurer als in der Stadt.", "Preise und Pakete ändern sich oft. Aktuell steht alles auf den Seiten der Anbieter.", "Alle drei bieten auch eSIM an."]),
  dict(h="Praktisch", r=[["IMEI anzeigen", "*#06# wählen"], ["Eigene Nummer", "Steht in der App des Anbieters"]]),
  dict(r=[L("Turkcell", "Pakete für Besucher", "https://www.turkcell.com.tr"), L("Vodafone", "Tarife und eSIM", "https://www.vodafone.com.tr"), L("Türk Telekom", "Mobilfunk", "https://www.turktelekom.com.tr")])]),
"imei": dict(t="Handy-Frist", i="phone", c="--c2", s="120 Tage mit türkischer SIM", g=[
  dict(r=[["Frist", "120 Tage, dann wird das Handy für türkische SIM-Karten gesperrt"], ["Gebühr 2026", "54.258 TL"], ["Nicht betroffen", "Deine ausländische SIM im Roaming"]], f="Die Sperre gilt für das Gerät. Wer nur ein Semester bleibt, kommt oft mit den 120 Tagen aus."),
  dict(h="Registrieren", r=[{"s": ["Gebühr beim Finanzamt oder einer Bank zahlen", "Mit Pass und Beleg zum Mobilfunkanbieter", "Gerät wird freigeschaltet"]}], f="Regeln und Gebühr ändern sich jedes Jahr. Vorher beim Anbieter nachfragen.")]),
"istanbulkart": dict(t="Istanbulkart", i="card", c="--c1", s="Fahrpreise und Studentenkarte", g=[
  dict(h="Fahrpreise (ab 20. Juli 2026)", r=[["Einzelfahrt", "46,20 TL"], ["Einzelfahrt Student", "22,55 TL"], ["Monatskarte", "3.628 TL"], ["Monatskarte Student", "653 TL"]], f="Gilt für Bus, Metro, Tram, Metrobüs, Marmaray und Stadtfähren. Bei Metrobüs und Marmaray hängt der Preis an der Strecke."),
  dict(h="Karte holen", r=["Normale Karte: an Automaten in Metrostationen, an Kiosken und in den Flughäfen.", "Studentenkarte: nur für eingeschriebene Studierende, mit Pass und Studienbescheinigung in einem Istanbulkart-Center.", "Das International Office deiner Uni weiß, ob du berechtigt bist."]),
  dict(h="Aufladen und Bezahlen", r=[["Aufladen", "Automat in der Station, Kiosk oder App"], ["Bezahlen", "Karte an das Lesegerät halten"], ["Umsteigen", "Weitere Fahrten kurz danach sind günstiger"]]),
  dict(r=[L("Istanbulkart", "Offizielle Seite und App", "https://istanbulkart.istanbul/en"), L("Istanbulkart-Center", "Alle Standorte", "https://www.istanbulkart.istanbul/applicationCenters")])]),
"taxi": dict(t="Taxi", i="car", c="--c4", s="Preise und Apps", g=[
  dict(h="Gelbes Taxi (ab 20. Juli 2026)", r=[["Mindestpreis", "230 TL"], ["Grundgebühr", "71,94 TL"], ["Pro km", "47,92 TL"]], f="Brücken- und Tunnelmaut kommen dazu. Das Taxameter muss laufen."),
  dict(h="Andere Taxis", r=[["Türkis (größer)", "ab 265 TL · 55,10 TL pro km"], ["8+1-Sitzer", "ab 300 TL · 62,29 TL pro km"]]),
  dict(h="Per App", r=["BiTaksi und Uber vermitteln normale Taxis mit Taxameter. Du siehst vorher Fahrer und Strecke."])]),
"dolmus": dict(t="Dolmuş und Minibus", i="bus", c="--c6", s="Preise nach Strecke", g=[
  dict(h="Minibus (ab 20. Juli 2026)", r=[["0–4 km", "43 TL"], ["4–7 km", "45 TL"], ["7–11 km", "46 TL"], ["11–15 km", "47 TL"], ["15–20 km", "52 TL"]], f="Meist bar. Beim Einsteigen dein Ziel sagen und zahlen."),
  dict(h="Dolmuş", r=["Gelbe oder türkise Sammeltaxis auf fester Strecke. Sie fahren los, wenn sie voll sind.", "Halten auf Zuruf, „İnecek var“ heißt: Ich will aussteigen."])]),
"nacht": dict(t="Nachts unterwegs", i="moon", c="--c5", s="Nachtmetro, Metrobüs, Fähre", g=[
  dict(h="Nachtmetro", r=[["Wann", "Nächte Fr auf Sa, Sa auf So und vor Feiertagen"], ["Linien", "M1A, M1B, M2, M4, M5, M6, M7"], ["Takt", "etwa alle 20 Min"]], f="Bei besonderen Anlässen gibt es Änderungen. Aktuell steht es bei Metro İstanbul."),
  dict(h="Sonst", r=[["Metrobüs", "Fährt rund um die Uhr"], ["Nachtbusse", "Einige IETT-Linien fahren durch, Routen in der App „İstanbul Senin“"], ["Fähren", "Şehir Hatları bietet am Wochenende teils späte Fahrten"]]),
  dict(r=[L("Metro İstanbul", "Fahrzeiten und Hinweise", "https://www.metro.istanbul"), L("Şehir Hatları", "Fährpläne", "https://sehirhatlari.istanbul/en")])]),
"links": dict(t="Karten und Planer", i="link", c="--c7", s="Offizielle Seiten", g=[
  dict(r=[L("Routenplaner", "İstanbul Senin · nasıl giderim", "https://istanbulsenin.istanbul/nasil-giderim/"), L("Metro-Netzplan", "metro.istanbul", "https://www.metro.istanbul/en/YolcuHizmetleri/AgHaritalari"), L("Fähren-Linienkarte", "Şehir Hatları, PDF", "https://files.sehirhatlari.istanbul/Sefer-Haritasi-Line-Map.pdf"), L("Busse und Fahrzeiten", "IETT", "https://iett.istanbul/en"), L("Istanbulkart-Center", "Alle Standorte", "https://www.istanbulkart.istanbul/applicationCenters")]),
  dict(h="Tipps", r=["Zu Stoßzeiten, etwa 7–9 und 17–19 Uhr, ist alles voll.", "An großen Feiertagen ist der Nahverkehr oft kostenlos. Das wird jeweils vorher angekündigt."])]),
"ausfluege": dict(t="Fähren und Ausflüge", i="boat", c="--c6", s="Inseln, Bursa, Schnellzug", g=[
  dict(h="Prinzeninseln", r=["Stadtfähren von Şehir Hatları fahren ab Kabataş, Kadıköy und Bostancı, bezahlt wird mit der Istanbulkart.", "Büyükada ist die größte Insel. Unter der Woche ist es ruhiger."]),
  dict(h="Weiter weg", r=[["Bursa, Yalova", "Schnellfähren von BUDO und İDO"], ["Ankara, Eskişehir, Konya", "Schnellzug YHT, junge Leute zahlen weniger"]]),
  dict(h="Aus der Gruppe", r=["Auf Büyükada Profiterol und kremalı börek probieren."]),
  dict(r=[L("Şehir Hatları", "Fahrpläne und Preise", "https://sehirhatlari.istanbul/en"), L("BUDO", "Fähren nach Bursa", "https://budo.burulas.com.tr"), L("İDO", "Schnellfähren", "https://www.ido.com.tr/en"), L("TCDD", "Zugtickets", "https://ebilet.tcddtasimacilik.gov.tr")])]),
"geld": dict(t="Geld", i="money", c="--c3", s="Abheben und wechseln", g=[
  dict(h="Abheben", r=[["Währung", "In Lira abheben und die Umrechnung des Automaten ablehnen"], ["Gebühren", "Unterscheiden sich je Bank, der Automat zeigt sie vorher an"], ["Taktik", "Lieber seltener, dafür mehr"]], f="Deine eigene Bank nimmt eventuell zusätzlich Gebühren."),
  dict(h="Wechseln", r=["Wechselstuben (Döviz) haben meist bessere Kurse als Banken und der Flughafen.", "Vorher nach dem Betrag fragen, den du am Ende bekommst."]),
  dict(h="Aus der Gruppe", r=["Karten wie Revolut oder Wise werden oft empfohlen."])]),
"einkaufen": dict(t="Einkaufen", i="cart", c="--c4", s="Supermärkte, Brot, Lieferung", g=[
  dict(r=[["Günstig", "BİM, A101, ŞOK"], ["Große Auswahl", "Migros, CarrefourSA"], ["Brot", "Halk Ekmek: günstiges Brot an Kiosken der Stadt"], ["Lieferung", "Getir, Yemeksepeti, Trendyol Go"], ["Obst und Gemüse", "Auf dem Wochenmarkt (Pazar)"]])]),
"pazar": dict(t="Wochenmärkte", i="market", c="--c8", s="Pazar nach Wochentag", g=[
  dict(r=[["Dienstag", "Kadıköy Salı Pazarı, einer der größten"], ["Samstag", "Feriköy Bio-Markt"], ["Sonntag", "Feriköy Antikmarkt"]], f="Fast jedes Viertel hat an einem Wochentag seinen eigenen Markt. Frag Nachbarn oder suche „semt pazarı“ und den Viertelnamen."),
  dict(h="Tipps", r=["Früh hingehen, dann ist die Auswahl am größten.", "Bargeld und eine eigene Tasche mitnehmen.", "Gegen Ende wird es oft billiger."])]),
"wlan": dict(t="Gratis-WLAN", i="wifi", c="--c1", s="İBB Wi-Fi", g=[
  dict(h="İBB Wi-Fi", r=[{"s": ["App „İstanbul Senin“ installieren und registrieren", "Darin İBB Wi-Fi öffnen", "Mit einem Hotspot in der Nähe verbinden"]}], f="An vielen Plätzen, in Parks, Fähren und manchen Bussen und Metrolinien."),
  dict(h="Sonst", r=["Fast alle Cafés und Einkaufszentren haben WLAN. Das Passwort steht oft auf dem Kassenbon."]),
  dict(r=[L("İstanbul Senin", "App der Stadt, auch für WLAN", "https://istanbulsenin.istanbul")])]),
"wohnen": dict(t="Wohnen", i="house", c="--c4", s="Suche, Vertrag, Erdbeben", g=[
  dict(h="Suche", r=[["Portale", "Sahibinden, Hepsiemlak, Emlakjet"], ["WG", "Facebook-Gruppen und die Gruppenchats"], ["Wohnheime", "Bei deiner Uni fragen, Plätze sind knapp"]]),
  dict(h="Vertrag", r=["Alles schriftlich: Miete, Kaution, Laufzeit, Kündigung, Nebenkosten (Aidat).", "Die Adresse brauchst du für die Aufenthaltserlaubnis. Kläre vorher, dass du dich anmelden darfst.", "Miete überweisen, nicht bar.", "Beim Einzug Fotos machen."]),
  dict(h="Betrug", r=["Nie Geld zahlen, bevor du die Wohnung gesehen und den Vertrag hast.", "Sehr billig und sehr eilig sind Warnzeichen."]),
  dict(h="Erdbeben", r=[["Baujahr", "Nach 2000 gelten strengere Regeln, 2018 kamen neue dazu"], ["Versicherung", "Nach der DASK-Police fragen"], ["Gebäude", "Zählt mehr als der Bezirk"]], f="Für die Wohnungssuche gibt es auf der Seite der Stadt Karten zur Bodenbeschaffenheit.")]),
"aufenthalt": dict(t="Aufenthaltserlaubnis", i="doc", c="--c5", s="e-İkamet", g=[
  dict(r=[["Wer", "Alle, die länger als 90 Tage bleiben"], ["Wann", "Rechtzeitig, bevor Visum oder visumfreie Zeit enden"], ["Wo", "Online beantragen, dann Termin bei der Migrationsbehörde"]]),
  dict(h="Ablauf", r=[{"s": ["Konto auf e-ikamet.goc.gov.tr anlegen", "Antrag ausfüllen, Zweck: Studium", "Gebühr zahlen und Termin buchen", "Mit allen Unterlagen hingehen", "Karte kommt per Post"]}]),
  dict(h="Unterlagen", r=["Welche genau, zeigt e-İkamet am Ende des Antrags an. Meist: Pass mit Kopie, biometrische Fotos, Studienbescheinigung, Adressnachweis."]),
  dict(h="Tipps", r=["Dein International Office hilft meist beim Antrag.", "Umzug? Neue Adresse innerhalb der Frist melden.", "Fragen an die Behörde: Hotline 157 (YİMER), auch auf Englisch."]),
  dict(r=[L("e-İkamet", "Antrag online", "https://e-ikamet.goc.gov.tr"), L("Göç İdaresi", "Migrationsbehörde", "https://en.goc.gov.tr")])]),
"notfall": dict(t="Notfall", i="plus", c="--c2", s="Nummern und was zu tun ist", g=[
  dict(h="Nummern", r=[["112", "Polizei, Feuerwehr und Rettung"], ["114", "Giftnotruf"], ["157", "YİMER, Hotline für Ausländer"]], f="Die alten Nummern 155 (Polizei) und 110 (Feuerwehr) werden auf 112 umgeleitet."),
  dict(h="Im Ernstfall", r=["Ruf 112 an und sag „English please“.", "Notaufnahme heißt „Acil Servis“.", "Ein Foto vom Pass auf dem Handy hilft.", "Unsicher unterwegs? In einen Laden gehen und um Hilfe bitten."])]),
"sehen": dict(t="Top 10 Sehenswürdigkeiten", i="dome", c="--c8", s="Mit kurzem Tipp", g=[
  dict(r=[["Hagia Sophia", "Morgens ist es am ruhigsten"], ["Topkapı-Palast", "Mehrere Stunden einplanen"], ["Blaue Moschee", "Schultern und Knie bedeckt, Gebetszeiten meiden"], ["Basilika-Zisterne", "Gut bei Hitze oder Regen"], ["Großer Basar", "Handeln gehört dazu"], ["Ägyptischer Basar", "Gewürze, Tee und Nüsse"], ["Galataturm", "Abends schöne Aussicht"], ["İstiklal Caddesi", "Vom Taksim-Platz bis Tünel laufen"], ["Bosporus", "Mit der normalen Fähre fahren, das ist günstiger als eine Tour"], ["Prinzeninseln", "Ein Tag ohne Autos"]])]),
"muzekart": dict(t="Müzekart", i="ticket", c="--c4", s="Karte für staatliche Museen", g=[
  dict(r=["Mit der Müzekart kommst du ein Jahr lang in viele staatliche Museen und Ausgrabungsstätten.", "Es gibt verschiedene Varianten, auch für Studierende und für Leute mit Aufenthaltserlaubnis. Preise und Bedingungen ändern sich, aktuell steht alles auf muze.gov.tr.", "Die Karte läuft auch digital in der Müzekart-App."]),
  dict(h="In Istanbul zum Beispiel", r=["Topkapı-Palast, Archäologische Museen, Museum für Türkische und Islamische Kunst, Galataturm, Rumeli Hisarı."], f="Nicht alles ist dabei. Für manche Bereiche gibt es Extra-Tickets."),
  dict(r=[L("Müzekart", "Offizielle Seite", "https://muze.gov.tr/muzekart")])]),
"viertel": dict(t="Viertel für Studierende", i="pin", c="--c1", s="Wo man sich trifft", g=[
  dict(r=[["Beşiktaş", "Studentisch, Cafés, Frühstück, nah am Wasser"], ["Kadıköy und Moda", "Bars, Second-Hand, Sonnenuntergang an der Küste"], ["Beyoğlu", "Ausgehen, Galerien, Galata"], ["Şişli", "Zentral, Metro, Einkaufszentren"], ["Fatih", "Altstadt, Moscheen, ruhige Teegärten"], ["Balat", "Bunte Häuser, gut für Fotos"]])]),
}

EN = {
"flughafen": dict(t="From the airport to the city", s="IST and SAW", g=[
  dict(h="Istanbul Airport (IST)", r=[["Metro", "M11 to Gayrettepe, change to M2 · about 1 hr"], ["Bus", "Havaist, e.g. to Taksim, Beşiktaş and Kadıköy"], ["Taxi", "At the official taxi rank, meter on"]]),
  dict(h="Sabiha Gökçen (SAW)", r=[["Metro", "M4 to Kadıköy · about 1 hr"], ["Bus", "Havabus to Kadıköy and Taksim"]]),
  dict(h="Good to know", r=["You can buy an Istanbulkart from machines at both airports.", "Only take taxis from the rank, not from people in the arrivals hall.", "Keep your address as a screenshot, it saves explaining."]),
  dict(r=[L("Havaist", "Buses from Istanbul Airport", "https://www.havaist.com"), L("Havabus", "Buses from Sabiha Gökçen", "https://www.havabus.com"), L("Metro İstanbul", "Lines and hours", "https://www.metro.istanbul")])]),
"sim": dict(t="SIM card and internet", s="Providers and buying", g=[
  dict(h="Providers", r=[["Turkcell", "Largest provider, good coverage"], ["Vodafone", "Own packages for tourists and new customers"], ["Türk Telekom", "Also fibre and landline"]], f="Cheaper brands run on these networks, e.g. BİMcell at BİM supermarkets."),
  dict(h="Buying", r=["In the provider’s official shop, your passport is required.", "Usually much more expensive at the airport than in town.", "Prices and packages change often. Check the providers’ sites for current ones.", "All three also offer eSIM."]),
  dict(h="Handy", r=[["Show IMEI", "Dial *#06#"], ["Your number", "Shown in the provider’s app"]]),
  dict(r=[L("Turkcell", "Packages for visitors", "https://www.turkcell.com.tr"), L("Vodafone", "Plans and eSIM", "https://www.vodafone.com.tr"), L("Türk Telekom", "Mobile", "https://www.turktelekom.com.tr")])]),
"imei": dict(t="Phone deadline", s="120 days with a Turkish SIM", g=[
  dict(r=[["Deadline", "120 days, then the phone is blocked for Turkish SIM cards"], ["Fee 2026", "54,258 TL"], ["Not affected", "Your foreign SIM on roaming"]], f="The block applies to the device. If you stay one semester, 120 days are often enough."),
  dict(h="Registering", r=[{"s": ["Pay the fee at the tax office or a bank", "Go to your mobile provider with passport and receipt", "The phone gets unlocked"]}], f="Rules and fee change every year. Ask your provider first.")]),
"istanbulkart": dict(t="Istanbulkart", s="Fares and student card", g=[
  dict(h="Fares (from 20 July 2026)", r=[["Single ride", "46.20 TL"], ["Single ride student", "22.55 TL"], ["Monthly pass", "3,628 TL"], ["Monthly pass student", "653 TL"]], f="Valid on buses, metro, tram, Metrobüs, Marmaray and city ferries. On Metrobüs and Marmaray the fare depends on distance."),
  dict(h="Getting a card", r=["Regular card: machines in metro stations, kiosks and at the airports.", "Student card: only for enrolled students, with passport and enrolment certificate at an Istanbulkart centre.", "Your university’s international office knows if you qualify."]),
  dict(h="Top-up and paying", r=[["Top-up", "Machine in the station, kiosk or app"], ["Paying", "Hold the card to the reader"], ["Transfers", "Rides shortly after are cheaper"]]),
  dict(r=[L("Istanbulkart", "Official site and app", "https://istanbulkart.istanbul/en"), L("Istanbulkart centres", "All locations", "https://www.istanbulkart.istanbul/applicationCenters")])]),
"taxi": dict(t="Taxi", s="Fares and apps", g=[
  dict(h="Yellow taxi (from 20 July 2026)", r=[["Minimum fare", "230 TL"], ["Base fare", "71.94 TL"], ["Per km", "47.92 TL"]], f="Bridge and tunnel tolls are extra. The meter must be on."),
  dict(h="Other taxis", r=[["Turquoise (larger)", "from 265 TL · 55.10 TL per km"], ["8+1 seater", "from 300 TL · 62.29 TL per km"]]),
  dict(h="By app", r=["BiTaksi and Uber book regular metered taxis. You see driver and route in advance."])]),
"dolmus": dict(t="Dolmuş and minibus", s="Fares by distance", g=[
  dict(h="Minibus (from 20 July 2026)", r=[["0–4 km", "43 TL"], ["4–7 km", "45 TL"], ["7–11 km", "46 TL"], ["11–15 km", "47 TL"], ["15–20 km", "52 TL"]], f="Usually cash. Tell the driver where you’re going and pay when you get on."),
  dict(h="Dolmuş", r=["Yellow or turquoise shared taxis on a fixed route. They leave when full.", "They stop on request, “İnecek var” means: I want to get off."])]),
"nacht": dict(t="Getting around at night", s="Night metro, Metrobüs, ferry", g=[
  dict(h="Night metro", r=[["When", "Fri to Sat, Sat to Sun and before public holidays"], ["Lines", "M1A, M1B, M2, M4, M5, M6, M7"], ["Frequency", "about every 20 min"]], f="Special events can change this. Metro İstanbul has the latest."),
  dict(h="Other options", r=[["Metrobüs", "Runs around the clock"], ["Night buses", "Some IETT lines run all night, routes in the “İstanbul Senin” app"], ["Ferries", "Şehir Hatları runs some late sailings at weekends"]]),
  dict(r=[L("Metro İstanbul", "Hours and notices", "https://www.metro.istanbul"), L("Şehir Hatları", "Ferry timetables", "https://sehirhatlari.istanbul/en")])]),
"links": dict(t="Maps and planners", s="Official sites", g=[
  dict(r=[L("Route planner", "İstanbul Senin · nasıl giderim", "https://istanbulsenin.istanbul/nasil-giderim/"), L("Metro map", "metro.istanbul", "https://www.metro.istanbul/en/YolcuHizmetleri/AgHaritalari"), L("Ferry line map", "Şehir Hatları, PDF", "https://files.sehirhatlari.istanbul/Sefer-Haritasi-Line-Map.pdf"), L("Buses and times", "IETT", "https://iett.istanbul/en"), L("Istanbulkart centres", "All locations", "https://www.istanbulkart.istanbul/applicationCenters")]),
  dict(h="Tips", r=["Rush hours, around 7–9 and 17–19, are packed.", "On major public holidays public transport is often free. It’s announced beforehand."])]),
"ausfluege": dict(t="Ferries and day trips", s="Islands, Bursa, fast train", g=[
  dict(h="Princes’ Islands", r=["Şehir Hatları city ferries leave from Kabataş, Kadıköy and Bostancı, you pay with the Istanbulkart.", "Büyükada is the largest island. Weekdays are quieter."]),
  dict(h="Further away", r=[["Bursa, Yalova", "Fast ferries by BUDO and İDO"], ["Ankara, Eskişehir, Konya", "YHT fast train, young people pay less"]]),
  dict(h="From the group", r=["On Büyükada, try profiterol and kremalı börek."]),
  dict(r=[L("Şehir Hatları", "Timetables and fares", "https://sehirhatlari.istanbul/en"), L("BUDO", "Ferries to Bursa", "https://budo.burulas.com.tr"), L("İDO", "Fast ferries", "https://www.ido.com.tr/en"), L("TCDD", "Train tickets", "https://ebilet.tcddtasimacilik.gov.tr")])]),
"geld": dict(t="Money", s="Withdrawing and exchanging", g=[
  dict(h="Withdrawing", r=[["Currency", "Withdraw lira and decline the ATM’s conversion"], ["Fees", "Differ by bank, the ATM shows them first"], ["Tactic", "Fewer, larger withdrawals"]], f="Your home bank may charge extra."),
  dict(h="Exchanging", r=["Exchange offices (Döviz) usually beat banks and the airport.", "Ask for the final amount you’ll get."]),
  dict(h="From the group", r=["Cards like Revolut or Wise are often recommended."])]),
"einkaufen": dict(t="Shopping", s="Supermarkets, bread, delivery", g=[
  dict(r=[["Cheap", "BİM, A101, ŞOK"], ["Big range", "Migros, CarrefourSA"], ["Bread", "Halk Ekmek: cheap bread from city kiosks"], ["Delivery", "Getir, Yemeksepeti, Trendyol Go"], ["Fruit and veg", "At the weekly market (pazar)"]])]),
"pazar": dict(t="Weekly markets", s="Pazar by weekday", g=[
  dict(r=[["Tuesday", "Kadıköy Salı Pazarı, one of the biggest"], ["Saturday", "Feriköy organic market"], ["Sunday", "Feriköy antiques market"]], f="Almost every neighbourhood has its own market on one weekday. Ask neighbours or search “semt pazarı” plus the area."),
  dict(h="Tips", r=["Go early for the best choice.", "Bring cash and your own bag.", "Prices often drop towards closing."])]),
"wlan": dict(t="Free Wi-Fi", s="İBB Wi-Fi", g=[
  dict(h="İBB Wi-Fi", r=[{"s": ["Install the “İstanbul Senin” app and sign up", "Open İBB Wi-Fi in it", "Connect to a hotspot nearby"]}], f="In many squares, parks, on ferries and some buses and metro lines."),
  dict(h="Otherwise", r=["Almost all cafés and malls have Wi-Fi. The password is often on the receipt."]),
  dict(r=[L("İstanbul Senin", "City app, also for Wi-Fi", "https://istanbulsenin.istanbul")])]),
"wohnen": dict(t="Housing", s="Search, contract, earthquakes", g=[
  dict(h="Search", r=[["Portals", "Sahibinden, Hepsiemlak, Emlakjet"], ["Shared flats", "Facebook groups and the group chats"], ["Dorms", "Ask your university, places are limited"]]),
  dict(h="Contract", r=["Everything in writing: rent, deposit, term, notice, service charges (aidat).", "You need the address for your residence permit. Make sure you’re allowed to register there.", "Pay rent by transfer, not cash.", "Take photos when you move in."]),
  dict(h="Scams", r=["Never pay before you’ve seen the flat and have a contract.", "Very cheap and very urgent are warning signs."]),
  dict(h="Earthquakes", r=[["Year built", "Stricter rules after 2000, new ones in 2018"], ["Insurance", "Ask for the DASK policy"], ["Building", "Matters more than the district"]], f="The city publishes ground maps that help when choosing a flat.")]),
"aufenthalt": dict(t="Residence permit", s="e-İkamet", g=[
  dict(r=[["Who", "Anyone staying longer than 90 days"], ["When", "In good time, before your visa or visa-free period ends"], ["Where", "Apply online, then an appointment at the migration office"]]),
  dict(h="Steps", r=[{"s": ["Create an account on e-ikamet.goc.gov.tr", "Fill in the form, purpose: study", "Pay the fee and book an appointment", "Bring all documents", "The card arrives by post"]}]),
  dict(h="Documents", r=["e-İkamet shows the exact list at the end of the form. Usually: passport and copy, biometric photos, enrolment certificate, proof of address."]),
  dict(h="Tips", r=["Your international office usually helps with the application.", "Moving? Report your new address within the deadline.", "Questions for the authority: hotline 157 (YİMER), English available."]),
  dict(r=[L("e-İkamet", "Apply online", "https://e-ikamet.goc.gov.tr"), L("Göç İdaresi", "Migration authority", "https://en.goc.gov.tr")])]),
"notfall": dict(t="Emergency", s="Numbers and what to do", g=[
  dict(h="Numbers", r=[["112", "Police, fire and ambulance"], ["114", "Poison hotline"], ["157", "YİMER, hotline for foreigners"]], f="The old numbers 155 (police) and 110 (fire) are redirected to 112."),
  dict(h="If something happens", r=["Call 112 and say “English please”.", "The emergency room is called “Acil Servis”.", "A photo of your passport on your phone helps.", "Feeling unsafe? Walk into a shop and ask for help."])]),
"sehen": dict(t="Top 10 sights", s="With a quick tip", g=[
  dict(r=[["Hagia Sophia", "Quietest in the morning"], ["Topkapı Palace", "Plan several hours"], ["Blue Mosque", "Shoulders and knees covered, avoid prayer times"], ["Basilica Cistern", "Good when it’s hot or raining"], ["Grand Bazaar", "Bargaining is part of it"], ["Spice Bazaar", "Spices, tea and nuts"], ["Galata Tower", "Great views in the evening"], ["İstiklal Avenue", "Walk from Taksim Square to Tünel"], ["Bosphorus", "Take the regular ferry, cheaper than a tour"], ["Princes’ Islands", "A day without cars"]])]),
"muzekart": dict(t="Müzekart", s="Pass for state museums", g=[
  dict(r=["The Müzekart gets you into many state museums and sites for a year.", "There are several versions, including for students and residence permit holders. Prices and conditions change, muze.gov.tr has the latest.", "The card also works digitally in the Müzekart app."]),
  dict(h="In Istanbul, for example", r=["Topkapı Palace, Archaeological Museums, Museum of Turkish and Islamic Arts, Galata Tower, Rumeli Hisarı."], f="Not everything is included. Some areas need an extra ticket."),
  dict(r=[L("Müzekart", "Official site", "https://muze.gov.tr/muzekart")])]),
"viertel": dict(t="Student neighbourhoods", s="Where people meet", g=[
  dict(r=[["Beşiktaş", "Student vibe, cafés, breakfast, by the water"], ["Kadıköy and Moda", "Bars, second-hand, sunset on the coast"], ["Beyoğlu", "Nights out, galleries, Galata"], ["Şişli", "Central, metro, malls"], ["Fatih", "Old town, mosques, quiet tea gardens"], ["Balat", "Colourful houses, good for photos"]])]),
}

js = lambda o: json.dumps(o, ensure_ascii=False, separators=(",", ":"))
def eintrag(k, v):
    keys = ["t", "i", "c", "s", "g"]
    return k + ":{" + ",".join(f"{x}:{js(v[x])}" for x in keys if x in v) + "}"

s = open(DATEI).read()
for block, neu in (("const P={", DE), ("const PE={", EN)):
    a = s.index(block)
    e = s.index("\n};", a)
    teil = s[a:e]
    for k, v in neu.items():
        m = re.search(r"\n" + k + r":\{.*?(?=\n[a-z0-9]+:\{|$)", teil, re.S)
        assert m, k
        alt = m.group(0)
        komma = "," if alt.rstrip().endswith(",") else ""
        teil = teil.replace(alt, "\n" + eintrag(k, v) + komma, 1)
    s = s[:a] + teil + s[e:]
open(DATEI, "w").write(s)
print("ok", len(DE), "Seiten")
