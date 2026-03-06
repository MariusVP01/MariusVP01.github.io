# SQL Oppgaver

## Oppgave 1 – SELECT (hente data)

### a)

Hent alle kolonner fra tabellen `Person`.

---

### b)

Hent kun:

- fornavn
- etternavn

fra `Person`.

---

### c)

Hent følgende kolonner:

- person_id
- fornavn
- etternavn

Sorter etter `person_id`.

---

### d)

Vis følgende kolonner fra `Person`, men gi dem nye navn:

| original  | nytt navn |
| --------- | --------- |
| fornavn   | Fornavn   |
| etternavn | Etternavn |

---

### e)

Lag en spørring som viser fullt navn i én kolonne.

Kolonnen skal hete: Navn

---

# Oppgave 2 – WHERE (filtrering)

### a)

Finn alle personer med postnummer: 0190

---

### b)

Finn alle personer hvor:

fornavn = 'Per'

---

### c)

Finn alle personer hvor etternavnet starter med bokstaven **H**.

---

### d)

Finn alle personer hvor postnummer er **mellom 2000 og 7000**.

---

### e)

Finn alle personer hvor postnummer **ikke er 0190**.

---

# Oppgave 3 – ORDER BY og LIMIT

### a)

Vis alle personer sortert etter:

etternavn

---

### b)

Vis alle personer sortert etter: postnr

fra høyest til lavest.

---

### c)

Vis kun **de 5 første radene** fra tabellen `Person`.

---

### d)

Vis de **3 første personene sortert etter etternavn**.

---

# Oppgave 4 – JOIN (koble tabeller)

### a)

Vis:

- fornavn
- etternavn
- poststed

_Hint: koble `Person` og `Poststed`._

---

### b)

Vis:

- fornavn
- etternavn
- idrett

_Hint: bruk `Person_Idrett`._

---

### c)

Vis:

- fornavn
- etternavn
- idrett
- idrett_type

_Hint: bruk tre tabeller._

---

### d)

Lag en oversikt som viser:

- fullt navn
- poststed
- idrett
- draktnummer (`nr`)

---

### e)

Vis alle personer **selv om de ikke driver en idrett**.

_Hint: bruk `LEFT JOIN`._

---

# Oppgave 5 – DISTINCT

### a)

Finn alle **unike postnummer** fra `Person`.

---

### b)

Finn alle **unike idretter** fra `Person_Idrett`.

---

### c)

Finn alle **poststeder som finnes i databasen uten duplikater**.

---

# Oppgave 6 – GROUP BY og COUNT

### a)

Hvor mange personer finnes i databasen?

---

### b)

Finn hvor mange personer som bor i hvert **poststed**.

Resultatet skal vise:

- poststed
- antall personer

---

### c)

Finn hvor mange personer som driver hver **idrett**.

---

### d)

Sorter resultatet fra oppgave **c** etter **flest deltakere først**.

---

# Oppgave 7 – HAVING

### a)

Finn hvilke idretter som har **minst 2 deltakere**.

---

### b)

Finn hvilke poststeder som har **mer enn 1 person**.

---

# Oppgave 8 – INSERT

### a)

Legg inn et nytt poststed:

5000 Bergen

---

### b)

Legg inn en ny person:

Ola Nordmann
postnr = 5000

---

### c)

Legg inn en ny idrett:

Tennis
Individuell

---

### d)

Koble personen **Ola Nordmann** til idretten **Tennis**.

---

# Oppgave 9 – UPDATE

### a)

Endre postnummeret til **Ola Nordmann** til:

5012

---

### b)

Endre draktnummer (`nr`) til en person i en idrett.

---

# Oppgave 10 – DELETE

### a)

Slett koblingen mellom en person og en idrett.

---

### b)

Slett en person fra databasen.

_Hint: du må kanskje først slette fra `Person_Idrett`._

---

### c)

Slett en idrett fra databasen.

---

# Oppgave 11 – Litt mer avansert

### a)

Finn alle personer som driver **lag-idrett**.

---

### b)

Finn alle personer som **ikke driver noen idrett**.

---

### c)

Finn poststeder med **minst 2 personer**.

---

### d)

Finn personen som driver **flest idretter**.
