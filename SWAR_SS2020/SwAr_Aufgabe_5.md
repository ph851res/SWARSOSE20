# Aufgaben Block 4
## Aufgabe 5

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

* Bausteinsciht
![Komponentendiagramm](https://github.com/ph851res/SWARSOSE20/blob/master/SWAR_SS2020/Images/SwAr_Wireframe_Registrierung_01.png)
* Laufzeitsicht
![Sequenzdiagramm](https://github.com/ph851res/SWARSOSE20/blob/master/SWAR_SS2020/Images/SwAr_Wireframe_Registrierung_01.png)  
* Verteilungssicht
![Verteilungsdiagramm](https://github.com/ph851res/SWARSOSE20/blob/master/SWAR_SS2020/Images/SwAr_Wireframe_Registrierung_01.png)  
* Architekturaspekte
    * Persistenz: 
        * Die Datenspeicherung im neuen System übernimmt das Spring Framework auf der Basis von JDBC, genauer gesagt Java Persistence API. 
        * Mapping der Objektstruktur auf die relationale Datenbank wird vom Framework komplett übernommen.
    * Fehlerbehandlung:
        * Aufgrund der hohen Korrektheitsanforderungen der Auftraggeber werden sämtliche Ausnahmen beziehungsweise nicht migrierbaren Datensätze in einer Fehlertabelle gespeichert.
    * Transaktionssteurung
        * Durch das Speichern einzelner Migratiionsschritte ist zu jeder Zeit ein Wiederaufsetzen der gesamten Anwendung durch Neustart möglich. 
    * Logging

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