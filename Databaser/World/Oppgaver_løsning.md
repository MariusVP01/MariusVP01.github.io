# SQL Løsningsforslag – World Database

## Tabeller

- **country**
- **city**
- **countrylanguage**

---

## 1. List opp alle land

Hente bestemte kolonner eks: Name fra tabellen country

```sql
SELECT Name
FROM country;
```

Eventuelt gi kolonnen et nytt navn:

```sql
SELECT Name as Land
FROM country;
```

## 2. Finn hovedstaden til et spesifikt land

Eksempel: Norge

Viktig! Siden hovedstad bare er lagred som en fremmednøkkel, og bruker ID istedet for navn som primærnøkkel vil den bare gi refereanse til id

```sql
SELECT Name, Capital
FROM country
WHERE Name = "Norway";
```

Her må vi sammenslå tabellene for et forståelig resultat;

```sql
SELECT country.Name AS Land, city.Name AS Hovedstad
FROM country
JOIN city ON country.Capital = city.ID
WHERE country.Name = 'Norway';
```

## 3. List byer med befolkning over 5 millioner

Bruke WHere statment som en betingelse (Population > 5 000 000 )

```sql
SELECT Name, Population
FROM city
WHERE Population > 5000000;
```

## 4. Vis land med over 100 millioner innbyggere

Samme her, bare endre tabell vi søker i

```sql
SELECT Name, Population
FROM country
WHERE Population > 100000000;
```

## 5. Finn landet med høyest forventet levealder

Finner riktige kolonner fra riktig tabell og sorterer i motsatt rekkefølge (DESC) som gir høyeste resultater først, LIMIT begrenserer svarene til en rad

```sql
SELECT Name, LifeExpectancy
FROM country
ORDER BY LifeExpectancy DESC
Limit 1;
```

## 6. List de 5 mest befolkede landene i verden

Samme som, bare endrer kolonner og bergensninger til 5

```sql
SELECT Name, Population
FROM country
ORDER BY Population DESC
LIMIT 5;
```

## 7. Vis befolkningen til hver verdensdel

SUM(Population) legger sammen befolkningen, mens GROUP BY Continent bestemmer at summen skal beregnes for hver verdensdel.
GROUP BY bestemmer hvordan radene grupperes, og SUM() bestemmer hva som beregnes for hver gruppe.

```sql
SELECT Continent, SUM(Population) AS TotalBefolkning
FROM country
GROUP BY Continent;
```

Eksempel Region

```sql
SELECT Region, SUM(Population) AS TotalBefolkning
FROM country
GROUP BY Region;
```

## 8. Finn land som snakker engelsk

Må koble sammen tabellene:

```sql
SELECT country.Name AS Land
FROM country
JOIN countrylanguage
ON country.Code = countrylanguage.CountryCode
WHERE countrylanguage.Language = 'English';
```

## 9. Sorter land etter befolkning i synkende rekkefølge

```sql
SELECT Name, Population
FROM country
ORDER BY Population DESC;
```

## 10. Tell antall land i hver verdensdel

COUNT(\*) teller hvor mange rader som finnes.
GROUP BY Continent deler først radene inn i grupper etter verdensdel.
Deretter teller COUNT(\*) hvor mange rader som finnes i hver gruppe.

```sql
SELECT Continent, COUNT(*) AS AntallLand
FROM country
GROUP BY Continent;
```

---

## 11. Vis byen i hvert land som har flest innbyggere

```sql
SELECT country.Name AS Land, city.Name AS StørsteBy, city.Population
FROM country
JOIN city ON country.Code = city.CountryCode
WHERE city.Population = (
    SELECT MAX(c2.Population)
    FROM city c2
    WHERE c2.CountryCode = country.Code
);
```

---

## 12. Finn alle offisielle språk i Europa

```sql
SELECT country.Name AS Land, countrylanguage.Language AS OffisieltSprak
FROM country
JOIN countrylanguage
ON country.Code = countrylanguage.CountryCode
WHERE country.Continent = 'Europe'
AND countrylanguage.IsOfficial = 'T'
ORDER BY country.Name;
```

---

## 13. Finn de 5 største landene

```sql
SELECT Code, Name, Population
FROM country
ORDER BY Population DESC
LIMIT 5;
```

---

## 14. Finn de 5 største byene

```sql
SELECT ID, Name, Population
FROM city
ORDER BY Population DESC
LIMIT 5;
```

---

## Eksempel: Oppdatere flere land samtidig

```sql
UPDATE country
SET Population = CASE Code
    WHEN 'CHN' THEN 1439323776
    WHEN 'IND' THEN 1428627663
    WHEN 'USA' THEN 339996563
    WHEN 'IDN' THEN 216422446
    WHEN 'BRA' THEN 203062512
END
WHERE Code IN ('CHN','IND','USA','IDN','BRA');
```

---

## Eksempel: Oppdatere flere byer samtidig

```sql
UPDATE city
SET Population = CASE Name
    WHEN 'Tokyo' THEN 37339385
    WHEN 'Delhi' THEN 32941308
    WHEN 'Shanghai' THEN 23074000
    WHEN 'Sao Paulo' THEN 22619736
    WHEN 'Mexico City' THEN 22125000
END
WHERE Name IN ('Tokyo','Delhi','Shanghai','Sao Paulo','Mexico City');
```
