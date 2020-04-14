# Software Architektur - Aufgaben Block 1
## Übung 3 - Software-Systemanforderungen - 26.04.2020
### Mockups erstellen mit balsamiq.
#### 1. Registrierung
*Bedingungen* 

![Registrierung_01](https://github.com/ph851res/SWARSOSE20/blob/master/SWAR_SS2020/Images/SwAr_Wireframe_Registrierung_01.png)  

*Nutzerdaten eingeben*  

![Registrierung_02](https://github.com/ph851res/SWARSOSE20/blob/master/SWAR_SS2020/Images/SwAr_Wireframe_Registrierung_02.png)  

*Zahlungsmethode wählen*  

![Registrierung_03](https://github.com/ph851res/SWARSOSE20/blob/master/SWAR_SS2020/Images/SwAr_Wireframe_Registrierung_03.png)  

*Abonnement abschließen* 

![Registrierung_04](https://github.com/ph851res/SWARSOSE20/blob/master/SWAR_SS2020/Images/SwAr_Wireframe_Registrierung_04.png)  

#### 2. Newsletter verfassen
*Newsletter verfassen auswählen*  

![NewsVerfassen_01](https://github.com/ph851res/SWARSOSE20/blob/master/SWAR_SS2020/Images/SwAr_Wireframe_NewsVerfassen_01.png)  

*Newsletter verfassen*  

![NewsVerfassen_02](https://github.com/ph851res/SWARSOSE20/blob/master/SWAR_SS2020/Images/SwAr_Wireframe_NewsVerfassen_02.png)  

*Newsletter freigeben*  

![NewsVerfassen_03](https://github.com/ph851res/SWARSOSE20/blob/master/SWAR_SS2020/Images/SwAr_Wireframe_NewsVerfassen_03.png)
___
### Wie kann eine SRS geliedert sein?
* Aufbau SRS
    * Einleitung
        * Projektbeschreibung / Zweck
        * Ziel
    * Beschreibung des zu entwicklenden Systems
        * Nutzergruppen 
        * Kernaufgaben
        * Teilaufgaben
        * Nutzungsanforderungen
        * Systemanforderungen 
            * Kontextdiagramm
            * UI-Benutzerschnittstellen
                * Statisches Verhalten
                * Dynamisches Verhalten
            * Datenschnittstellen
            * Teschnische Schnittstellen
            * Laufzeitumgebung
            * Sonstige Anforderungen an das Produkt
                * Lizenzmangement
                * Update Upgrade
                * Gesetzliche Vorgaben
___
### Erstellen Sie eine komplette SRS.
* Einleitung  
    * *Projektbeschreibung*  
    In diesem Projekt soll ein Software-System erstellt werden, welches Abonnenten eines Newsletters, die Möglichkeit bietet ihre Newsletter online im System abzurufen und zu lesen. Außerdem sollen Administratoren/Mitarbeiter Newsletter erstellen und diese Abonnenten zur Verfügung stellen können. Abonnenten sollen nach Erstellung eines Newsletters automatisiert via E-Mail benachrichtig werden, dass ein neuer Newsletter im System abrufbar ist. Des weiteren soll es Mitarbeitern möglich sein Abonnenten administrativ über das System zu betreuen.

    * *Ziel*  
    Ziel dieses Dokuments ist es im Folgenden, die im Vorherigen beschrieben Funktionalität der Software genau zu spezifizieren und alle nötigen Anforderungen offenzulegen.  

* Beschreibung des zu entwicklenden Systems
    * *Nutzergruppen*  
    Mitarbeiter (Administratoren), Kunden (Abonnenten), Gäste (Besucher der frei verfügbaren Website), Gesetzgeber, Betreiber, Auftraggeber (Professor)

    * *Kernaufgaben*  
    siehe vorheriges Dokument  

    * *Teilaufgaben*  
    siehe vorheriges Dokument  

    * *Nutzungsanforderungen*  
    siehe vorheriges Dokument  

    * *Systemanforderungen*  

        * Kontextdiagramm  
        ![Kontextdiagramm](https://github.com/ph851res/SWARSOSE20/blob/master/SWAR_SS2020/Images/SwAr_Kontextdiagramm.png)  

        * UI-Benutzerschnittstellen  
            * Statisches Aussehen  
            <br>*Mockups*  
            siehe Abschnitt "Mockups erstellen mit balsamiq".  
            <br>*Style Guide*  
            ![StyleGuide](https://github.com/ph851res/SWARSOSE20/blob/master/SWAR_SS2020/Images/SwAr_SytleGuide_01.PNG) 
            * Dynamisches Verhalten 
            1. Registrierung  
            <br>*Bedingungen*  
            ![Registrierung_01](https://github.com/ph851res/SWARSOSE20/blob/master/SWAR_SS2020/Images/SwAr_Wireframe_Registrierung_01.png)  
            (1) Der Nutzer muss das Häkchen setzen, um den Bedingungen zuzustimmen.  
            (2) "Registrieren" kann gedrückt werden, sobald validiert ist, dass das Häkchen gesetzt ist.   
            <br>*Nutzerdaten eingeben*  
            ![Registrierung_02](https://github.com/ph851res/SWARSOSE20/blob/master/SWAR_SS2020/Images/SwAr_Wireframe_Registrierung_02.png)  
            (3) "Vorname", "Nachname", "E-Mail", "E-Mail-Adresse bestätigen" und "Passwort erstellen" müssen ausgefüllt werden.  
            (4) Es muss valiidiert sein, dass alle Eingaben getätigt wurden, erst dann kann auf "Fortfahren" gedrückt werden.  
            <br>**Zahlungsmethode wählen**  
            ![Registrierung_03](https://github.com/ph851res/SWARSOSE20/blob/master/SWAR_SS2020/Images/SwAr_Wireframe_Registrierung_03.png)  
            (5) Der Nutzer kann zwischen den beiden Zahlungsmethoden wählen und wird ja nach Wahl, auf die entsprechende Zahlungsmethoden-Seite weiter geleitet, um den Zahlungsvorgang abzuschließen.  
            <br>*Abonnement abschließen*  
            ![Registrierung_04](https://github.com/ph851res/SWARSOSE20/blob/master/SWAR_SS2020/Images/SwAr_Wireframe_Registrierung_04.png)  
            (6) Nach Klicken des Buttons wird der Nutzer auf die Newsletter-Übersichtsseite weitergeleitet.  

            2. Newsletter verfassen  
            <br>*Newsletter verfassen auswählen*  
            ![NewsVerfassen_01](https://github.com/ph851res/SWARSOSE20/blob/master/SWAR_SS2020/Images/SwAr_Wireframe_NewsVerfassen_01.png)   
            (1) Durch klicken auf "Create News" wird der Nutzer auf die nächste Ansicht weiter geleitet auf der ein neue News erstellen kann.  
            <br>*Newsletter verfassen*  
            ![NewsVerfassen_02](https://github.com/ph851res/SWARSOSE20/blob/master/SWAR_SS2020/Images/SwAr_Wireframe_NewsVerfassen_02.png)        
            (2) Der Nutzer muss die Felder Title, Subtitle und Content ausfüllen.  
            (3) Der Nutzer kann optional ein Bild für die News hochladen.  
            (4) Um mit "Create News" fortzufahren müssen die vorherigen Pflichteingaben getätigt werden. Danach wird der Nutzer auf die "Release Article" Ansicht weitergeleitet.  
            <br>*Newsletter freigeben*  
            ![NewsVerfassen_03](https://github.com/ph851res/SWARSOSE20/blob/master/SWAR_SS2020/Images/SwAr_Wireframe_NewsVerfassen_03.png)  
            (5) Der Nutzer wird durch klicken des "Edit" Button zurück auf die vorherige Seite geleitet um Änderungen vorzunehmen.  
            (6) Durch klicken des "Release"-Buttons wird eine E-Mail versendet, welche die Abonnenten des Newsletters über die neue News informiert und die News im System angezeigt wird, sodass Abonnenten darauf zugreifen können. 



