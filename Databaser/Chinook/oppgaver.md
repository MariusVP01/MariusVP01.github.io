# Oppgaver til Chinook-databasen

Last ned databasen her: https://www.sqlitetutorial.net/sqlite-sample-database/

---

## Tabellene i databasen

Bli kjent med Chinook-databasen. Den inneholder blant annet disse tabellene:

- `employees`
- `customers`
- `invoices`
- `invoice_items`
- `artists`
- `albums`
- `media_types`
- `genres`
- `tracks`
- `playlists`
- `playlist_track`

---

# Oppgaver - JO bjørnar

Skriv deretter fylgjande spørringar:

1. Alle artistane som ligg inne hjå dette plateselskapet.
2. Alle artistane og kva album dei har.
3. Alle artistane sine album, og kor mange låtar det er per album.

---

# Del 1 – Enkle SELECT-spørringer

## Oppgave 1

Hent **alle kolonner** fra tabellen `artists`.

## Oppgave 2

Hent bare kolonnene:

- `FirstName`
- `LastName`

fra tabellen `employees`.

## Oppgave 3

Vis alle kunder fra tabellen `customers`.

## Oppgave 4

Hent navnene på alle spillelister fra `playlists`.

## Oppgave 5

Vis alle spor (`tracks`) med kolonnene:

- `Name`
- `Composer`
- `Milliseconds`

---

# Del 2 – WHERE, sortering og utvalg

## Oppgave 6

Finn alle kunder som bor i **Brazil**.

## Oppgave 7

Finn alle kunder som bor i **Norway**.

## Oppgave 8

Vis alle spor som har sjangeren **Rock**.

> Tips: Her må du sannsynligvis bruke `genres` sammen med `tracks`.

## Oppgave 9

Finn alle spor som varer mer enn **5 minutter**.

> Tips: `Milliseconds` er lagret i millisekunder.

## Oppgave 10

Vis de 10 lengste sporene i databasen.

## Oppgave 11

Finn alle album sortert alfabetisk etter tittel.

## Oppgave 12

Finn alle fakturaer (`invoices`) med totalbeløp større enn 10.

## Oppgave 13

Vis de 5 nyeste fakturaene basert på `InvoiceDate`.

## Oppgave 14

Finn alle ansatte som har en leder (`ReportsTo` ikke er tom).

## Oppgave 15

Vis alle kunder som ikke har registrert firma (`Company` er tom eller `NULL`).

---

# Del 3 – JOIN mellom tabeller

## Oppgave 16

Vis alle album med tilhørende artistnavn.

**Ønsket kolonner:**

- albumtittel
- artistnavn

## Oppgave 17

Vis alle spor med tilhørende album.

**Ønsket kolonner:**

- spornavn
- albumtittel

## Oppgave 18

Vis alle spor med tilhørende sjanger.

**Ønsket kolonner:**

- spornavn
- sjangernavn

## Oppgave 19

Vis alle spor med tilhørende medietype.

## Oppgave 20

Vis alle kunder sammen med fakturaene deres.

**Ønsket kolonner:**

- kundens fornavn
- kundens etternavn
- fakturanummer / faktura-id
- fakturadato
- totalbeløp

## Oppgave 21

Vis alle fakturalinjer (`invoice_items`) sammen med navnet på sporet de gjelder.

## Oppgave 22

Vis alle ansatte sammen med navnet på lederen deres.

> Tips: Her må du joine `employees` med seg selv.

---

# Del 4 – GROUP BY og aggregatfunksjoner

## Oppgave 23

Tell hvor mange kunder det finnes i hvert land.

## Oppgave 24

Finn hvor mange album hver artist har.

## Oppgave 25

Finn hvor mange spor det finnes i hver sjanger.

## Oppgave 26

Regn ut gjennomsnittlig lengde på spor i databasen.

## Oppgave 27

Finn total omsetning i tabellen `invoices`.

## Oppgave 28

Finn total omsetning per land basert på kundens land.

> Tips: Her må du koble `customers` og `invoices`.

## Oppgave 29

Vis hvor mange fakturaer hver kunde har.

## Oppgave 30

Finn den dyreste enkeltlinjen i `invoice_items`.

> Tips: Se på `UnitPrice` og `Quantity`.

---

# Del 5 – Flere JOINs og litt mer sammensatte oppgaver

## Oppgave 31

Vis alle spor sammen med:

- spor-navn
- artistnavn
- albumtittel
- sjanger

## Oppgave 32

Finn alle spor som tilhører artisten **AC/DC**.

## Oppgave 33

Finn alle album som tilhører artisten **Queen**.

## Oppgave 34

Vis alle spillelister med antall spor i hver spilleliste.

> Tips: Bruk `playlists` og `playlist_track`.

## Oppgave 35

Finn alle spor som finnes i spillelisten **Music**.

## Oppgave 36

Finn hvor mange spillelister hvert spor er med i.

## Oppgave 37

Finn alle kunder som har kjøpt minst én sang i sjangeren **Jazz**.

> Tips: Dette krever flere joiner mellom `customers`, `invoices`, `invoice_items`, `tracks` og `genres`.

## Oppgave 38

Finn alle artister som har minst ett spor i databasen.

## Oppgave 39

Finn artisten som har flest spor totalt.

## Oppgave 40

Finn hvilket album som inneholder flest spor.

---

# Del 6 – Delspørringer (subqueries)

## Oppgave 41

Finn alle spor som er lengre enn gjennomsnittlig sporlengde.

## Oppgave 42

Finn kunder som har brukt mer enn gjennomsnittlig totalbeløp per faktura.

## Oppgave 43

Finn artister som har flere album enn gjennomsnittet.

## Oppgave 44

Finn det dyreste sporet/sporene basert på `UnitPrice`.

## Oppgave 45

Finn den kunden som har brukt mest penger totalt.

---

# Del 7 – Mange-til-mange-relasjoner

## Oppgave 46

Forklar med egne ord hvorfor forholdet mellom `playlists` og `tracks` er **mange-til-mange**.

## Oppgave 47

Hvilken tabell brukes for å koble `playlists` og `tracks` sammen?

## Oppgave 48

Lag en spørring som viser:

- navn på spilleliste
- navn på spor

for alle koblinger mellom spillelister og spor.

## Oppgave 49

Finn alle spor som finnes i mer enn én spilleliste.

## Oppgave 50

Finn spillelisten som inneholder flest spor.

---

# Del 8 – Analyseoppgaver

## Oppgave 51

Hvilket land har flest kunder?

## Oppgave 52

Hvilken sjanger har flest spor?

## Oppgave 53

Hvilken artist har flest album?

## Oppgave 54

Hvilken kunde har høyest samlet kjøpesum?

## Oppgave 55

Hvilket spor har blitt solgt flest ganger?

> Tips: Bruk `invoice_items` og summer `Quantity`.

## Oppgave 56

Hvilken spilleliste ser ut til å være størst?

## Oppgave 57

Hvilken ansatt ser ut til å være leder for flest ansatte?

---

# Del 9 – Utfordringer

## Oppgave 58

Lag en spørring som viser de 10 mest solgte sporene.

**Ønsket kolonner:**

- spornavn
- antall solgte enheter

## Oppgave 59

Lag en spørring som viser de 5 mest innbringende artistene.

> Tips: Du må koble salg tilbake til spor, album og artist.

## Oppgave 60

Lag en spørring som viser hvilke kunder som aldri har kjøpt noe.

> Tips: Tenk på `LEFT JOIN`.

## Oppgave 61

Finn alle artister som ikke har noen album.

## Oppgave 62

Finn alle album som ikke har noen spor.

## Oppgave 63

Finn gjennomsnittlig pris per sjanger.

## Oppgave 64

Finn total spilletid per artist.

## Oppgave 65

Lag en rapport som viser for hver kunde:

- navn
- land
- antall fakturaer
- total brukt sum

---

# Del 10 – Teorioppgaver

## Oppgave 66

Hvilken tabell ville du startet med hvis du skulle finne:

- hvilke kunder som har kjøpt musikk
- hvilke artister som har album
- hvilke spor som er i en spilleliste

Forklar hvorfor.

## Oppgave 67

Hvorfor er `invoice_items` nødvendig i tillegg til `invoices`?

## Oppgave 68

Hvorfor er `playlist_track` nødvendig i tillegg til `playlists` og `tracks`?

## Oppgave 69

Forklar forskjellen på disse relasjonene i Chinook-databasen:

- én-til-mange
- mange-til-mange

Gi minst ett konkret eksempel fra databasen.

## Oppgave 70

Finn tre eksempler på fremmednøkler i databasen og forklar hva de kobler sammen.

---
