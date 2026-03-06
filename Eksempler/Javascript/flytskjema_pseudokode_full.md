# Hva er flytskjema og pseudokode

## Hva er et flytskjema?

Et flytskjema (engelsk: *flowchart*) er en visuell representasjon av en
prosess, algoritme eller arbeidsflyt. Det bruker symboler som
rektangler, ovaler og piler for å illustrere steg i en prosess.
Flytskjemaer brukes ofte i programmering for å planlegge logikken før
koden skrives.

## Komponenter i et flytskjema

1.  **Oval (Start/Slutt):** Marker start- eller sluttpunkt.\
2.  **Rektangel (Prosess):** Viser en handling eller operasjon.\
3.  **Parallellogram (Input/Output):** For brukerinput eller utskrift.\
4.  **Rombe (Beslutning):** Et valg med to mulige utfall (ja/nei,
    sann/usann).\
5.  **Piler:** Viser prosessflyten.

## Eksempel: Sjekke om tall er partall eller oddetall

**Steg:** 1. Les inn et tall.\
2. Sjekk om tallet % 2 == 0.\
3. Hvis ja → skriv "Partall".\
4. Hvis nei → skriv "Oddetall".\
5. Slutt.

**Flytskjema (ASCII):**

    Start
      |
    Input: Les et tall
      |
    Er tallet % 2 == 0?
      |                \
     Ja                 Nei
      |                  \
    Skriv "Partall"   Skriv "Oddetall"
      |                  |
      ------- Slutt ------

## Hvordan brukes flytskjema i programmering?

### Planlegging

Gir oversikt over logikken før man koder.

### Problemløsning

Bryter ned komplekse prosesser.

### Kommunikasjon

Hjelper å forklare prosessflyt til andre.

### Feilsøking

Hjelper å identifisere hvor logiske feil kan ha oppstått.

### Dokumentasjon

Kan inngå som del av systemdokumentasjon.

## Fordeler

-   Enkelt å forstå komplekse prosesser\
-   Planlegging før koding\
-   Redusert feilrate\
-   Godt for samarbeid

## Begrensninger

-   Lite praktisk for svært komplekse systemer\
-   Må ofte oppdateres ved prosessendringer

## Eksempel: Bestillingsprosess

-   Ta imot bestilling\
-   Sjekk om kunde er registrert\
-   Hvis ikke: registrer kunde\
-   Registrer bestilling\
-   Sjekk om vare er på lager\
-   Hvis ikke: bestill fra leverandør\
-   Hvis ja: skriv pakkseddel\
-   Send varen\
-   Slutt

------------------------------------------------------------------------

# Hva er pseudokode?

Pseudokode beskriver logikken og strukturen i et program uten hensyn til
et spesifikt programmeringsspråk.

## Egenskaper ved pseudokode

-   **Språknøytral**\
-   **Fokus på logikk, ikke syntaks**\
-   **Lett å lese og forstå**

## Hvorfor bruke pseudokode?

-   Planlegging av algoritmer\
-   Kommunikasjon mellom utviklere\
-   Oppdag logiske feil før koding\
-   Enklere feilsøking

## Eksempel: Partall eller oddetall

### Pseudokode

    Start
        Les inn et tall
        Hvis tallet er delelig med 2
            Skriv "Tallet er et partall"
        Ellers
            Skriv "Tallet er et oddetall"
    Slutt

### Python

``` python
number = int(input("Skriv inn et tall: "))

if number % 2 == 0:
    print("Tallet er et partall")
else:
    print("Tallet er et oddetall")
```

## Eksempel: Finn største av tre tall

### Pseudokode

    Start
        Les inn tall1, tall2, tall3
        Hvis tall1 > tall2 og tall1 > tall3
            Største = tall1
        Ellers hvis tall2 > tall3
            Største = tall2
        Ellers
            Største = tall3
        Skriv "Det største tallet er Største"
    Slutt

### Python

``` python
t1 = int(input("Skriv inn første tall: "))
t2 = int(input("Skriv inn andre tall: "))
t3 = int(input("Skriv inn tredje tall: "))

if t1 > t2 and t1 > t3:
    største = t1
elif t2 > t3:
    største = t2
else:
    største = t3

print(f"Det største tallet er {største}")
```

## Fordeler med pseudokode

-   Forenkler komplekse algoritmer\
-   God kommunikasjon\
-   Enkel å endre

## Ulemper

-   Ingen standardform\
-   Kan bli for overfladisk

## Oppsummering

Pseudokode og flytskjema er verktøy som: - øker forståelse\
- forbedrer planlegging\
- reduserer feil\
- forbedrer samarbeid

Begge brukes for å planlegge programlogikk før koding.
