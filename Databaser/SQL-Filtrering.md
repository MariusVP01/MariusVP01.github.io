# SQL -- Filtrering, sortering og utvalg (SELECT)

Når vi bruker `SELECT`, ønsker vi ofte å:

- filtrere hvilke rader vi får
- sortere resultatet
- begrense antall rader
- fjerne duplikater
- gi kolonner nye navn

Dette gjøres med flere SQL-kommandoer.

---

# AS (Alias)

`AS` brukes for å gi **kolonner eller tabeller et midlertidig navn** i
resultatet.

## Syntaks

```sql
SELECT kolonne AS nytt_navn
FROM tabell;
```

## Eksempel

```sql
SELECT fornavn AS Fornavn,
       etternavn AS Etternavn
FROM Person;
```

Resultatet vil vise kolonnenavnene **Fornavn** og **Etternavn**.

---

# WHERE

`WHERE` brukes til å **filtrere hvilke rader som skal vises**.

## Syntaks

```sql
SELECT *
FROM tabell
WHERE betingelse;
```

## Eksempel

```sql
SELECT *
FROM Person
WHERE postnr = 5000;
```

Viser kun personer som bor i **postnummer 5000**.

---

# Vanlige operatorer i WHERE

Operator Betydning

---

= lik
!= eller \<\> ikke lik
\> større enn
\< mindre enn
\>= større eller lik
\<= mindre eller lik

### Eksempel

```sql
SELECT *
FROM Person
WHERE postnr > 5000;
```

---

# AND / OR

Brukes for å kombinere flere betingelser.

## AND

Begge betingelser må være sanne.

```sql
SELECT *
FROM Person
WHERE fornavn = 'Ola'
AND postnr = 5000;
```

## OR

Minst én betingelse må være sann.

```sql
SELECT *
FROM Person
WHERE postnr = 5000
OR postnr = 7000;
```

---

# LIKE

Brukes til **tekst-søk**.

Symbol Betydning

---

\% 0 eller flere tegn
\_ ett tegn

### Eksempel

```sql
SELECT *
FROM Person
WHERE etternavn LIKE 'H%';
```

---

# BETWEEN

Brukes for å filtrere **verdier innenfor et intervall**.

```sql
SELECT *
FROM Person
WHERE postnr BETWEEN 2000 AND 7000;
```

---

# IN

Brukes når vi vil sjekke **flere mulige verdier**.

```sql
SELECT *
FROM Person
WHERE postnr IN (5000, 7000, 0190);
```

---

# DISTINCT

`DISTINCT` fjerner **duplikater i resultatet**.

```sql
SELECT DISTINCT postnr
FROM Person;
```

Viser hvert postnummer **kun én gang**.

---

# ORDER BY

Brukes til å **sortere resultatet**.

## Stigende rekkefølge

```sql
SELECT *
FROM Person
ORDER BY etternavn ASC;
```

ASC = **stigende** (standard).

## Synkende rekkefølge

```sql
SELECT *
FROM Person
ORDER BY etternavn DESC;
```

DESC = **synkende**.

## Sortere på flere kolonner

```sql
SELECT *
FROM Person
ORDER BY postnr ASC, etternavn ASC;
```

Først sorteres etter **postnummer**, deretter **etternavn**.

---

# LIMIT

`LIMIT` brukes til å **begrense antall rader i resultatet**.

```sql
SELECT *
FROM Person
LIMIT 5;
```

Viser kun **5 første radene**.

## LIMIT med sortering

```sql
SELECT *
FROM Person
ORDER BY etternavn
LIMIT 10;
```

Viser **de 10 første personene alfabetisk**.

## LIMIT med OFFSET

```sql
SELECT *
FROM Person
LIMIT 10 OFFSET 20;
```

Henter **10 rader**, men hopper over de **20 første**.

---

# Oppsummering

Kommando Bruk

---

AS Gi kolonne nytt navn
WHERE Filtrere rader
AND / OR Kombinere betingelser
LIKE Tekstsøk
BETWEEN Intervall
IN Flere mulige verdier
DISTINCT Fjerne duplikater
ORDER BY Sortere resultat
LIMIT Begrense antall rader
