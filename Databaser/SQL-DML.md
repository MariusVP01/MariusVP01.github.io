# SQL -- Syntaks -- De viktigste

## DML (Data Manipulation Language)

DML brukes til å **legge inn, hente, endre og slette data i databasen**.

De viktigste DML-kommandoene er:

- `INSERT INTO` -- legge inn data
- `SELECT` -- hente data
- `UPDATE` -- endre data
- `DELETE` -- slette data

---

## INSERT INTO

Brukes til å **legge inn nye rader i en tabell**.

### Syntaks

```sql
INSERT INTO tabellnavn (kolonne1, kolonne2, kolonne3)
VALUES (verdi1, verdi2, verdi3);
```

### Eksempel

```sql
INSERT INTO Person (fornavn, etternavn, postnr)
VALUES ('Ola', 'Nordmann', 5000);
```

Dette legger inn en ny rad i tabellen **Person**.

---

### Legge inn flere rader

```sql
INSERT INTO Person (fornavn, etternavn, postnr)
VALUES
('Kari', 'Hansen', 0190),
('Per', 'Johansen', 5000),
('Anne', 'Olsen', 7000);
```

---

## SELECT

Brukes til å **hente data fra databasen**.

### Syntaks

```sql
SELECT kolonne1, kolonne2
FROM tabellnavn;
```

### Eksempel

```sql
SELECT fornavn, etternavn
FROM Person;
```

Henter **fornavn og etternavn fra alle personer**.

---

### Hente alle kolonner

```sql
SELECT *
FROM Person;
```

`*` betyr **alle kolonner**.

---

### SELECT med filtrering

```sql
SELECT *
FROM Person
WHERE postnr = 5000;
```

Henter alle personer som bor i **postnummer 5000**.

---

## UPDATE

Brukes til å **endre eksisterende data** i en tabell.

### Syntaks

```sql
UPDATE tabellnavn
SET kolonne1 = verdi1,
    kolonne2 = verdi2,
    kolonne3 = verdi3
WHERE betingelse;
```

### Eksempel

```sql
UPDATE Person
SET fornavn = 'Ole',
    etternavn = 'Hansen',
    postnr = 5050
WHERE person_id = 1;
```

Dette **oppdaterer postnummeret til Ola**.

⚠ Viktig: Hvis man ikke bruker `WHERE`, oppdateres **alle rader**.

```sql
UPDATE Person
SET postnr = 0000;
```

Dette vil endre **alle postnummer i hele tabellen**.

---

## DELETE

Brukes til å **slette rader fra en tabell**.

### Syntaks

```sql
DELETE FROM tabellnavn
WHERE betingelse;
```

### Eksempel

```sql
DELETE FROM Person
WHERE fornavn = 'Per';
```

Sletter alle personer som heter **Per**.

⚠ Hvis man ikke bruker `WHERE`, slettes **alle rader i tabellen**.

```sql
DELETE FROM Person;
```

Dette **tømmer hele tabellen**.

---

## Oppsummering

Kommando Bruk

---

INSERT INTO Legge inn data
SELECT Hente data
UPDATE Endre data
DELETE Slette data

Disse kommandoene utgjør **DML (Data Manipulation Language)** i SQL.
