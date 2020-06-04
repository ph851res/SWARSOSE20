# Aufgaben Block 4

## Aufgabe 4
* In welchen Phasen eines Entwicklungsprozesses ist ein Software-Architekt tätig?  
Technischer Systementwurf Architektur   
Komponenten Spezifikation Detailliertes Design erstellen
* Welche Aufgaben hat ein Software-Architekt?  
Entwerfen der Architektur und das erstellen von Architektur-Dokumenten 
* Was ist der Input, was der Output seiner Tätigkeit in Bezug auf Dokumente?
  * Input: Software Anforderungen, Technische Einflussfaktoren, Organisatorische Einflussfaktoren
  * Output: Architektur-Dokument
* Was ist das Ziel der Software-Architektur?  
Qualität der Software soll gesteigert werden.
Die Beziehung der dargestellten Komponenten zueinander und zu der Umgebung.
* Was sollte eine Software-Architektur beschreiben?  
-> Beschreibung der Grobarchitekur   
-> Beschreibung der Feinarchitektur  
-> Beschreibung der Technologien  
-> Cross Cutting Concerns (Querschnittsaspekte)  
-> Werkzeuge  
-> Integrationsstrategie
* Welche Inhalte sollte ein Architekturdokument enthalten?  
(Bild)
* Woraufhin sollte man dieses Dokument prüfen? Wie kann man das machen? Was zeichnet ein gutes Dokument aus?   
Das Dokument sollte auf Heuristiken geprüft werden. Dies kann durch ein Review verwirklicht werden, indem Dritte z.B. Entwickler, Produktmanger oder ein anderer Architekt das Dokument prüfen. 
Wichtige Punkte sind hier:
-> Vollständigkeit
-> Verständlichkeit (Sprache, Diagramme)
-> Traceability Matrix 
  * Was eine gute Architektur?  
-> Abstraktion: Finden von Gemeinsamkeiten Vereinfachung durch Generalisierung  
-> Kapselung: Wenige Abhängigkeiten, Infos und Funktionalitäten sind „versteckt“  
-> Modularität: Zerlegung Komponentenbildung  
-> Hierarchie: Vererbungshierarchie, Zerlegung des Systems vom Groben ins Feine  
* Welche Einflussfaktoren sollte ein Architekt beachten?  
-> Technische Einflussfaktoren  
-> Organisatorische Einflussfaktoren
* Wie können sich diese und die Systemanforderungen widersprechen? Nennen Sie Beispiele.  
Der Einsatz neuer Technologien erfordert initiale Investitionen (Lizenzen, Ausbildung)  
Wenig Geld -> wenige Entwickler -> lange entwicklung  
Neue Technologien erhöhen das Entwicklungsrisiko 
Gesetze die mit den Systemanforderungen in Konflikt steht.

## Aufgabe 5

### Architektur-Dokument

* Meta-Informationen  
    * Versionshistorie: Version 1.0.0
    * Titel: NewsPortal
    * Dateiname: AD_01_NewsPortal
* Einführung
    * Leserkreis: Projektleiter, Entwickler, Key User, Projekparte (Woller)
    * Zweck des Systems: 
        * Abonnenten Nachrichten zum Abrufen bereitstellen. 
        * Mitarbeiter sollen Nachrichten erstellen können.
* Architekturtreiber
    * Geschäftskontext: Programmiersprache Java, Framework: Spring (Entwicklung Vorgegeben), Library: React, Softwarelösung mit Verbindung zu einem Server (geringe Latenz)
    * Stakeholder:
        * Nicht Moderne Firma: möchte ihr System digitalisieren    
        * Kunde: 
            * möchten ein reibungsloses User-Interface, 
            * Migration der Daten in ein digitales Umfeld 
            * das die Daten in Deutschland abgelegt werden
    * Begründung für Architektur: 
        * Best practice, mit bekanten Frameworks erprobt 
        * aus Kostengründen, Opensource
* Einflussfaktoren
    * Technische Einflussfaktoren:

        | Randbedingung | Erläuterung |
        |---------------|-------------|
        | Hardware-Infrastruktur | beispielsweise AWS |
        | Entwicklungswerkzeuge | IDE, Spring Framework, React.js |
        | Bestehende Systemlandschaft | Analoges Hängeregister |
        | Bestehende Architektur | - |
        | Grafische Oberfläche | Intuitives Responsives Design |

    * Organisatorische Einflussfaktoren: 

        | Randbedingung | Erläuterung |
        |---------------|-------------|
        | Budget | es gibt keine Budgetvorgaben |
        | Zeit | Deadlein |
        | Anzahl Enwickler | Ein Entwickler, Junior-Developer |
        | Make or Buy | Eigenfertigung mit Hilfe genannter Entwicklungswerkzeuge |
        | Unterbeauftragung möglich | nein |
        | Risikobereitschaft des Auftraggebers | kein Risiko |
        | Haftung | keine Haftung |

* Bausteinsicht  

    ![Komponentendiagramm](https://github.com/ph851res/SWARSOSE20/blob/master/SWAR_SS2020/Images/SwAr_Komponentendiagramm.png)

* Laufzeitsicht  

    ![Sequenzdiagramm](https://github.com/ph851res/SWARSOSE20/blob/master/SWAR_SS2020/Images/SwAr_Sequenzdiagramm.png)

* Verteilungssicht  

    ![Verteilungsdiagramm](https://github.com/ph851res/SWARSOSE20/blob/master/SWAR_SS2020/Images/SwAr_Verteilungsdiagramm.png)  

* Architekturaspekte
    * Persistenz: 
        * Die Datenspeicherung im neuen System übernimmt das Spring Framework auf der Basis von JDBC, genauer gesagt Java Persistence API. 
        * Mapping der Objektstruktur auf die relationale Datenbank wird vom Framework komplett übernommen.
    * Fehlerbehandlung:
        * Aufgrund der hohen Korrektheitsanforderungen der Auftraggeber werden sämtliche Ausnahmen beziehungsweise nicht migrierbaren Datensätze in einer Fehlertabelle gespeichert.
    * Transaktionssteurung
        * Durch das Speichern einzelner Migratiionsschritte ist zu jeder Zeit ein Wiederaufsetzen der gesamten Anwendung durch Neustart möglich. 
    * Logging
        * Zum Loggen wird das Apache LOG4J Framework verwendet, da es ein weitverbreitetes Framework ist und auf eine möglichst hohe Geschwindigkeit ausgelegt ist. Alle Nachrichten ab der Nachrichten-Stufe WARN sollen geloggt werden.

* Projektaspekte
    * Ansprechpartner
        * Auftraggeber
        * Entwickler 
    * Werkzeuge 
        * IDE, Java, Spring Framework, React Library
* Anhänge
    * Glossar
        * nicht vorhanden
    * Referenzen 
        * nicht vorhanden 