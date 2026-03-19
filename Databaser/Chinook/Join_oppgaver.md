# Chinook – 15 JOIN-oppgaver

Dette oppgavesettet fokuserer på **Chinook-databasen** og på å koble sammen flere tabeller med `JOIN`.

Last ned databasen her: https://www.sqlitetutorial.net/sqlite-sample-database/

Du må tenke på:

- hvilke tabeller som må kobles sammen
- hvilke fremmednøkler som brukes
- når det passer med `INNER JOIN`
- når det passer med `LEFT JOIN`
- hvordan flere relasjoner kan kobles i én spørring

---

# Viktige tabeller i Chinook

## Musikk

- `artists`
- `albums`
- `tracks`
- `genres`
- `media_types`

## Spillelister

- `playlists`
- `playlist_track`

## Kjøp

- `customers`
- `invoices`
- `invoice_items`

## Ansatte

- `employees`

---

![Semantisk](Database_chinook.jpg)

# Viktige koblinger

- `albums.ArtistId → artists.ArtistId`
- `tracks.AlbumId → albums.AlbumId`
- `tracks.GenreId → genres.GenreId`
- `tracks.MediaTypeId → media_types.MediaTypeId`
- `playlist_track.PlaylistId → playlists.PlaylistId`
- `playlist_track.TrackId → tracks.TrackId`
- `invoices.CustomerId → customers.CustomerId`
- `invoice_items.InvoiceId → invoices.InvoiceId`
- `invoice_items.TrackId → tracks.TrackId`
- `employees.ReportsTo → employees.EmployeeId`

---

## Oppgave 1

Vis alle spor sammen med:

- spor-navn
- albumtittel
- artistnavn

Sorter resultatet alfabetisk etter artistnavn.

**Tabeller som trengs:**

- `tracks`
- `albums`
- `artists`

## Oppgave 2

Vis alle spor sammen med:

- spor-navn
- sjanger
- mediatype

Sorter på sjanger og deretter spor-navn.

**Tabeller som trengs:**

- `tracks`
- `genres`
- `media_types`

---

## Oppgave 3

Vis alle spor sammen med:

- spor-navn
- albumtittel
- artistnavn
- sjanger

Filtrer slik at bare spor i sjangeren **Rock** vises.

**Tabeller som trengs:**

- `tracks`
- `albums`
- `artists`
- `genres`

---

## Oppgave 4

Vis alle spillelister sammen med sporene de inneholder.

Kolonner:

- spillelistenavn
- spor-navn

Sorter etter spillelistenavn.

**Tabeller som trengs:**

- `playlists`
- `playlist_track`
- `tracks`

---

## Oppgave 5

Vis alle spillelister sammen med:

- spillelistenavn
- spor-navn
- artistnavn
- albumtittel

Sorter først etter spilleliste, deretter artist.

**Tabeller som trengs:**

- `playlists`
- `playlist_track`
- `tracks`
- `albums`
- `artists`

---

## Oppgave 6

Vis alle kunder med etternavn som starter på "M" sammen med fakturaene deres.

Kolonner:

- kundens fornavn
- kundens etternavn
- faktura-ID
- fakturadato
- totalbeløp

Sorter etter fakturadato, nyeste først.

**Tabeller som trengs:**

- `customers`
- `invoices`

---

## Oppgave 7

Vis alle kjøp med, men kun totalbeløp over 5

- kundens navn
- fakturadato
- spor-navn
- pris
- antall

Sorter etter kundens etternavn.

**Tabeller som trengs:**

- `customers`
- `invoices`
- `invoice_items`
- `tracks`

---

## Oppgave 8

Vis alle kjøp med:

- kundens navn
- fakturadato
- spor-navn
- artistnavn
- albumtittel

Sorter etter kundenavn og fakturadato.

**Tabeller som trengs:**

- `customers`
- `invoices`
- `invoice_items`
- `tracks`
- `albums`
- `artists`

---

## Oppgave 9

Vis alle kjøpte spor sammen med:

- kundens navn
- spor-navn
- sjanger
- mediatype
- pris
- antall

Dette krever at du kobler butikkdelen og musikkdelen av databasen sammen.

**Tabeller som trengs:**

- `customers`
- `invoices`
- `invoice_items`
- `tracks`
- `genres`
- `media_types`

---

## Oppgave 10

Vis alle ansatte og hvem de rapporterer til.

Kolonner:

- ansattens fornavn
- ansattens etternavn
- lederens fornavn
- lederens etternavn

Ta med alle ansatte, også de som ikke rapporterer til noen.

**Hint:**
Du må koble `employees` med seg selv.

---

## Oppgave 11

Vis alle kunder og eventuelle fakturaer.

Kolonner:

- kundens navn
- faktura-ID
- fakturadato

Ta med også kunder som ikke har noen fakturaer.

**Hint:**
Her passer det med `LEFT JOIN`.

---

## Oppgave 12

Vis alle artister og eventuelle album.

Kolonner:

- artistnavn
- albumtittel

Ta med også artister som ikke har album.

**Hint:**
Start med `artists`.

---

## Oppgave 13

Vis alle album og eventuelle spor.

Kolonner:

- albumtittel
- spor-navn
- artistnavn

Ta med også album som eventuelt ikke har spor.

**Tabeller som trengs:**

- `albums`
- `tracks`
- `artists`

---

## Oppgave 14

Vis alle spor og hvilke spillelister de ligger i.

Kolonner:

- spor-navn
- spillelistenavn

Ta med også spor som ikke ligger i noen spilleliste.

**Hint:**
Start med `tracks` og bruk `LEFT JOIN`.

---

## Oppgave 15

Lag en sammensatt spørring som viser:

- spillelistenavn
- spor-navn
- artistnavn
- albumtittel
- sjanger
- mediatype

Dette er en større oppgave som kombinerer store deler av musikkdelen og spillelistedelen i Chinook.

**Tabeller som trengs:**

- `playlists`
- `playlist_track`
- `tracks`
- `albums`
- `artists`
- `genres`
- `media_types`

---

# Tips

- Start med å finne **hovedtabellen**.
- Se etter hvilken kolonne som er **primærnøkkel** og hvilken som er **fremmednøkkel**.
- Bruk alias for å gjøre spørringen mer lesbar.
- Tenk på koblingsveien før du skriver SQL.

Eksempel på alias:

```sql
SELECT t.Name, al.Title, ar.Name
FROM tracks t
JOIN albums al ON t.AlbumId = al.AlbumId
JOIN artists ar ON al.ArtistId = ar.ArtistId;
```

---

# Ekstra refleksjon

For hver oppgave kan du spørre:

1. Hvilken tabell bør stå i `FROM`?
2. Hvorfor passer `INNER JOIN` eller `LEFT JOIN` her?
3. Hvilken vei går koblingen mellom tabellene?
4. Er det noen tabeller som bare fungerer som koblingstabeller?

I Chinook er `playlist_track` et godt eksempel på en koblingstabell i en mange-til-mange-relasjon.
