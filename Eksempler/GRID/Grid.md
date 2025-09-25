# CSS Grid – kort forklart (på norsk)

**Formål:** Toveis (2D) layoutsystem i CSS for å plassere elementer i rader **og** kolonner. Grid egner seg til komplekse grensesnitt, dashboards, sideoppsett og responsive design uten tunge hacks.

---

## Kjapp start
```css
.grid {
  display: grid;                    /* aktiverer grid-kontekst */
  grid-template-columns: 1fr 1fr;   /* to kolonner med lik bredde */
  grid-template-rows: auto;         /* radhøyder beregnes automatisk */
  gap: 1rem;                         /* jevnt mellomrom (row+column gap) */
}
.item-a { grid-column: 1; grid-row: 1; }
.item-b { grid-column: 2; grid-row: 1; }
```
> **Tips:** Bruk `fr`-enhet for fleksible spor (tracks). `1fr 2fr` betyr at andre kolonne får dobbelt så mye plass som den første.

---

## Kjerneidé
- **Containeren** definerer rutenettet (spor/linjer) – rader og kolonner.
- **Itemene** plasseres inni rutenettet ved å referere til linjenummer, navngitte områder eller auto-plassering.
- Grid er **to-dimensjonalt** (i motsetning til Flexbox som er 1D).

---

## Grunnbegreper
- **Spor (tracks):** rader og kolonner – definert i `grid-template-rows`/`grid-template-columns`.
- **Linjer:** grensene mellom spor, nummereres fra 1 (kan også navngis).
- **Celler:** skjæringspunktet mellom én rad og én kolonne.
- **Grid-område:** et rektangel som dekker flere celler (kan navngis via `grid-template-areas`).

---

## Kolonner og rader
```css
.grid {
  display: grid;
  grid-template-columns: 200px 1fr 2fr;     /* fast + fleksibel + mer fleksibel */
  grid-template-rows: auto 300px;           /* to rader, andre er 300px */
  gap: .75rem;
}
/* Repetisjon og minmax */
.grid-2 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);    /* 3 like kolonner */
  grid-auto-rows: minmax(120px, auto);      /* auto-høyde med minimum 120px */
}
```
- `repeat(n, verdi)` for korte definisjoner.
- `minmax(min, max)` gir kontrollert fleksibilitet.
- `auto-fit`/`auto-fill` sammen med `minmax()` er nyttig for responsive kort:
```css
.responsive {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}
```

---

## Grid-linjer (plassering med linjenummer/områder)
```css
.layout {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto auto 1fr;
  gap: 1rem;
}

/* Plasser med start-/sluttlinje (inkl. span) */
.header  { grid-column: 1 / -1;   grid-row: 1; }   /* strekker over alle kolonner */
.sidebar { grid-column: 1;         grid-row: 2 / span 2; }
.main    { grid-column: 2 / 3;     grid-row: 2; }
.extra   { grid-column: 3;         grid-row: 2; }
.footer  { grid-column: 1 / -1;    grid-row: 3; }
```
- **Linjenummer:** `1 / 3` betyr fra linje 1 til (men ikke inkludert) linje 3.
- **`-1`** refererer til siste linje.
- **`span N`** strekker seg over N spor fra startlinjen.

---

## Grid-container (viktige egenskaper)
```css
.container {
  display: grid | inline-grid;
  grid-template-columns: ...;
  grid-template-rows: ...;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-auto-columns: auto;
  grid-auto-rows: auto;
  grid-auto-flow: row | column | dense;   /* auto-plassering og tetting */
  gap: 1rem; /* == row-gap + column-gap */
  justify-items: stretch;   /* innhold i celler, horisontalt */
  align-items: stretch;     /* innhold i celler, vertikalt */
  justify-content: start | center | space-between; /* hele rutenettet */
  align-content: start | center | space-between;   /* hele rutenettet */
}
```
- `grid-auto-flow: dense` kan fylle “hull” (vær oppmerksom på leserekkefølge).

---

## Grid-item (viktige egenskaper)
```css
.item {
  grid-column: 2 / 4;           /* start/slutt (eller span) */
  grid-row: 1 / span 2;
  grid-area: navn | row-start / column-start / row-end / column-end;
  justify-self: start | center | end | stretch;  /* justerer innhold i cellen */
  align-self: start | center | end | stretch;
  place-self: center; /* shorthand for align-self + justify-self */
}
```
- `grid-area` kan være et **navn** definert via `grid-template-areas`:
```css
.shell {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 200px 1fr;
}
.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }
```

---

## Responsiv Grid
```css
.cards {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}
@media (max-width: 640px) {
  .layout {
    grid-template-columns: 1fr;   /* stack på mobil */
  }
}
```
- Bruk `auto-fit` + `minmax()` for flytende kolonner.
- Bytt layout ved breakpoint med media queries.

---

## @supports (feature queries)
Sjekk om nettleseren støtter en egenskap før du bruker den.
```css
/* Fallback først */
.container { display: block; }

/* Hvis grid støttes, bruk det */
@supports (display: grid) {
  .container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 1rem;
  }
}
```
- Du kan teste flere ting: `@supports (display: grid) and (gap: 1rem) { ... }`
- Brukes for progressive enhancements uten å bryte eldre nettlesere.

---

## Beste praksis og tips
- Bruk **semantikk** i HTML og la CSS Grid håndtere layout.
- Start enkelt: definer kolonner først, juster rader etter innhold.
- Preferér `gap` over margins for jevnt mellomrom.
- Bruk `minmax()` og `fr` for fleksibilitet; unngå faste piksler når mulig.
- Dokumentér navngitte **grid-områder** for vedlikeholdbarhet.

---

## Mini-ordliste
- **Spor (track):** rad eller kolonne i et grid.
- **Linje:** grense mellom spor (nummerert, kan navngis).
- **Område:** rektangel av flere celler (kan navngis).
- **Auto-plassering:** automatisk plassering når du ikke spesifiserer linjer.

---

## Referanser (W3Schools)
- CSS Grid – oversikt: https://www.w3schools.com/css/css_grid.asp
- Kolonner og rader: https://www.w3schools.com/css/css_grid_columns_rows.asp
- Grid-linjer: https://www.w3schools.com/css/css_grid_lines.asp
- Grid-container: https://www.w3schools.com/css/css_grid_container.asp
- Grid-item: https://www.w3schools.com/css/css_grid_item.asp
- `@supports`: https://www.w3schools.com/css/css_supports_rule.asp
