# SQL -- JOIN (koble sammen tabeller)

JOIN brukes når vi vil **hente data fra flere tabeller samtidig**.

Dette gjøres ved å koble tabellene sammen via **fremmednøkler (foreign
keys)** eller andre relaterte kolonner.

Vanlige JOIN-typer:

- INNER JOIN
- LEFT JOIN
- RIGHT JOIN
- FULL OUTER JOIN
- JOIN med flere tabeller

---

# Eksempeldatabase

Vi bruker disse tabellene i eksemplene.

## Person

person_id | fornavn | etternavn | postnr

---

1.          1 | Ola | Hansen | 5000
2.          2 | Kari | Olsen | 7000
3.          3 | Per | Johansen | 5000

## Postadresse

postnr | poststed

---

1.          5000 | Bergen
2.          7000 | Trondheim
3.          8000 | Bodø

---

# INNER JOIN

`INNER JOIN` returnerer **kun rader som finnes i begge tabellene**.

## Syntaks

```sql
SELECT kolonner
FROM tabell1
INNER JOIN tabell2
ON tabell1.kolonne = tabell2.kolonne;
```

## Eksempel

```sql
SELECT Person.fornavn, Person.etternavn, Postadresse.poststed
FROM Person
INNER JOIN Postadresse
ON Person.postnr = Postadresse.postnr;
```

Resultat:

fornavn etternavn poststed

---

Ola Hansen Bergen
Kari Olsen Trondheim
Per Johansen Bergen

---

# LEFT JOIN

`LEFT JOIN` returnerer:

- alle rader fra **venstre tabell**
- matchende rader fra høyre tabell

Hvis ingen match finnes → `NULL`.

## Syntaks

```sql
SELECT *
FROM tabell1
LEFT JOIN tabell2
ON tabell1.kolonne = tabell2.kolonne;
```

## Eksempel

```sql
SELECT Person.fornavn, Postadresse.poststed
FROM Person
LEFT JOIN Postadresse
ON Person.postnr = Postadresse.postnr;
```

Alle personer vises, selv om postnummeret ikke finnes i posttabellen.

---

# RIGHT JOIN

`RIGHT JOIN` returnerer:

- alle rader fra **høyre tabell**
- matchende rader fra venstre tabell

## Eksempel

```sql
SELECT Person.fornavn, Postadresse.poststed
FROM Person
RIGHT JOIN Postadresse
ON Person.postnr = Postadresse.postnr;
```

Alle poststeder vises, selv om ingen personer bor der.

⚠ Merk: SQLite støtter normalt **ikke RIGHT JOIN direkte**.

---

# FULL OUTER JOIN

`FULL OUTER JOIN` returnerer:

- alle rader fra begge tabeller
- matcher der det finnes
- NULL der det ikke finnes match

## Eksempel

```sql
SELECT Person.fornavn, Postadresse.poststed
FROM Person
FULL OUTER JOIN Postadresse
ON Person.postnr = Postadresse.postnr;
```

Dette viser:

- alle personer
- alle poststeder

⚠ SQLite støtter vanligvis ikke FULL OUTER JOIN direkte.

---

# JOIN med alias

Alias gjør JOIN-spørringer **kortere og mer lesbare**.

```sql
SELECT p.fornavn, p.etternavn, pa.poststed
FROM Person AS p
INNER JOIN Postadresse AS pa
ON p.postnr = pa.postnr;
```

---

# JOIN med flere tabeller

Vi kan koble **flere tabeller samtidig**.

## Eksempelstruktur

Person → Postadresse → Land

### Land

land_id land

---

1 Norge
2 Sverige

### Postadresse

postnr poststed land_id

---

5000 Bergen 1
7000 Trondheim 1

---

## JOIN med tre tabeller

```sql
SELECT p.fornavn, pa.poststed, l.land
FROM Person p
INNER JOIN Postadresse pa
ON p.postnr = pa.postnr
INNER JOIN Land l
ON pa.land_id = l.land_id;
```

Resultatet kombinerer informasjon fra **alle tre tabeller**.

---

# Oppsummering

| JOIN-type \| Hva returneres \|

\|-----------\|---------------\| INNER JOIN \| Kun rader som matcher \|
\| LEFT JOIN \| Alle fra venstre tabell \| \| RIGHT JOIN \| Alle fra
høyre tabell \| \| FULL OUTER JOIN \| Alle rader fra begge tabeller \|

JOIN er en av de **viktigste funksjonene i SQL**, fordi databaser ofte
er **normalisert og delt opp i flere tabeller**.
