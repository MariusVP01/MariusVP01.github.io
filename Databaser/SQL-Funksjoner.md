# SQL -- Aggregatfunksjoner (summering og statistikk)

Aggregatfunksjoner brukes til å **beregne verdier basert på flere
rader** i en tabell. De brukes ofte sammen med `GROUP BY` for å lage
statistikk eller oppsummeringer.

Vanlige aggregatfunksjoner:

- COUNT()
- SUM()
- AVG()
- MIN()
- MAX()

---

# Eksempeltabell

## Salg

salg_id produkt pris antall by

---

1 Laptop 10000 2 Bergen
2 Mus 200 5 Bergen
3 Skjerm 3000 1 Oslo
4 Laptop 9500 1 Oslo
5 Mus 200 3 Trondheim

---

# COUNT()

`COUNT()` teller **antall rader**.

## Eksempel

```sql
SELECT COUNT(*)
FROM Salg;
```

Resultat: antall rader i tabellen.

---

## COUNT på en kolonne

```sql
SELECT COUNT(produkt)
FROM Salg;
```

Teller hvor mange rader som har en verdi i kolonnen.

---

# SUM()

`SUM()` summerer verdier i en kolonne.

```sql
SELECT SUM(pris)
FROM Salg;
```

Returnerer **summen av alle priser**.

---

## SUM med flere kolonner

```sql
SELECT SUM(pris * antall)
FROM Salg;
```

Her beregnes **total omsetning**.

---

# AVG()

`AVG()` finner **gjennomsnittet**.

```sql
SELECT AVG(pris)
FROM Salg;
```

Returnerer gjennomsnittsprisen.

---

# MIN()

`MIN()` finner **laveste verdi**.

```sql
SELECT MIN(pris)
FROM Salg;
```

Returnerer billigste produkt.

---

# MAX()

`MAX()` finner **høyeste verdi**.

```sql
SELECT MAX(pris)
FROM Salg;
```

Returnerer dyreste produkt.

---

# GROUP BY

`GROUP BY` brukes til å **gruppere rader** før vi bruker
aggregatfunksjoner.

## Eksempel

```sql
SELECT by, COUNT(*)
FROM Salg
GROUP BY by;
```

Resultat:

by antall salg

---

Bergen 2
Oslo 2
Trondheim 1

---

# GROUP BY med SUM

```sql
SELECT by, SUM(pris * antall) AS omsetning
FROM Salg
GROUP BY by;
```

Viser **total omsetning per by**.

---

# GROUP BY med flere kolonner

```sql
SELECT by, produkt, SUM(antall)
FROM Salg
GROUP BY by, produkt;
```

Her grupperes etter **både by og produkt**.

---

# HAVING

`HAVING` brukes til å filtrere **grupper** etter at `GROUP BY` er brukt.

```sql
SELECT by, SUM(pris * antall) AS omsetning
FROM Salg
GROUP BY by
HAVING omsetning > 10000;
```

Viser kun byer med **høy omsetning**.

---

# Oppsummering

| Funksjon \| Hva den gjør \|

\|---------\|--------------\| COUNT() \| Teller rader \| \| SUM() \|
Summerer verdier \| \| AVG() \| Gjennomsnitt \| \| MIN() \| Laveste
verdi \| \| MAX() \| Høyeste verdi \| \| GROUP BY \| Grupperer rader \|
\| HAVING \| Filtrerer grupper \|
