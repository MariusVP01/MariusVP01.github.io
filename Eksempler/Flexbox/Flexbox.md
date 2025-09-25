# Flexbox – kort forklart

**Formål:** Fleksibel layout i én dimensjon (rad _eller_ kolonne). Perfekt for å fordele plass, sentrere innhold og lage responsive rader/kolonner uten float eller kompliserte hacks.

**Flexbox** står kort for Flexible Box Layout Module
En av to hovedmåter å strukturerer layouts som vi kommer til å bruke, det finnes flere men de må utforskes på egenhånd

---

## Kjapp start
```css
.container {
  display: flex;           /* aktiverer flex-kontekst */
  gap: 1rem;               /* moderne "mellomrom" mellom barn */
  /* flex-direction: row | row-reverse | column | column-reverse; */
  /* flex-wrap: nowrap | wrap | wrap-reverse; */
  /* justify-content: flex-start | center | space-between | space-around | space-evenly; */
  /* align-items: stretch | flex-start | center | baseline | flex-end; */
  /* align-content: stretch | flex-start | center | space-between | space-around | flex-end; */
}
.item {
  /* order: 0;               rekkefølge */
  /* flex-grow: 0;           vokseforhold */
  /* flex-shrink: 1;         krympeforhold */
  /* flex-basis: auto;       startstørrelse */
  /* flex: 0 1 auto;         shorthand: grow shrink basis */
  /* align-self: auto | flex-start | center | baseline | flex-end | stretch; */
}
```

---

## Kjerneidé
- **Containeren** styrer retning, wrapping og fordeling av _ledig plass_.
- **Elementene (items)** bestemmer hvordan de vokser/krymper i denne retningen.
- Flexbox er **én-dimensjonal**: enten rad **eller** kolonne (bruk CSS Grid for ekte 2D).

---

## Viktige egenskaper (container)

### `display: flex | inline-flex`
Aktiverer flex-kontekst (blokkelement vs. inline-boks).

### `flex-direction`
- `row` (standard) – horisontal, venstre→høyre (i LTR)
- `column` – vertikal, topp→bunn

### `flex-wrap`
- `nowrap` (standard) – alt på én linje
- `wrap` – bryt til ny linje/kolonne ved behov

### `flex-flow`
Shorthand for `flex-direction` + `flex-wrap`.  
Eksempel: `flex-flow: row wrap;`

### `justify-content` (langs **hovedaksen**)
- `flex-start` (standard), `center`, `flex-end`
- `space-between`, `space-around`, `space-evenly`

### `align-items` (langs **tverraksen**)
- `stretch` (standard), `flex-start`, `center`, `baseline`, `flex-end`

### `align-content` (flere linjer)
Gjelder når **wrap** gir flere linjer/kolonner; fordeler **linjene** mot containeren.

### `gap`, `row-gap`, `column-gap`
Innbyrdes avstand uten margins. Støttes i moderne nettlesere.

---

## Viktige egenskaper (items)

### `order`
Rekkefølge uten å endre HTML (vær obs på rekkefølge for tastatur/skjermleser).

### `flex-grow`
Hvor mye et element **vokser** relativt til søsken når det finnes ledig plass.  
Eksempel: `flex-grow: 2` vokser dobbelt så fort som `flex-grow: 1`.

### `flex-shrink`
Hvor mye et element **krymper** relativt til søsken når plassen er for liten.

### `flex-basis`
Startstørrelse langs hovedaksen: `auto`, `0`, `200px`, `30%`, osv.

### `flex` (shorthand)
`flex: <grow> <shrink> <basis>`  
- `flex: 1;`  → `1 1 0` (vanlig “kort og godt vokse-kort”)  
- `flex: 0 0 auto;`  → ingen vekst/krymp, naturlig bredde/høyde  
- `flex: 0 0 250px;` → fast basis på 250px

### `align-self`
Overstyrer `align-items` for ett enkelt element.

---

## Vanlige oppsett

### 1) Sentrere alt i en boks
```css
.centerbox {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

### 2) Navbar med plass mellom
```css
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

### 3) Like brede kort i rad med wrap
```css
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.cards > .card {
  flex: 1 1 220px; /* vokser, krymper, startbredde */
}
```

### 4) Sticky footer-layout (enkel variant)
```css
.page {
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
}
.page main { flex: 1; }
```

---

## Responsive tips
- Bruk `flex-wrap: wrap;` og `flex-basis` i prosent/`clamp()` for flytende kort.
- Kombinér med **media queries** for å endre `flex-direction` (f.eks. kolonne på mobil).
- `gap` fremfor margins for jevnt mellomrom.
- Husk at bilder/innhold kan trenge `min-width` eller `min-height`.

```css
.layout {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.item { flex: 1 1 clamp(200px, 33%, 400px); }
@media (max-width: 640px) {
  .layout { flex-direction: column; } /* enklere stacking */
}
```

---

## Fallgruver og beste praksis
- **Aksene snur** når du bruker `flex-direction: column;` (hovedakse = vertikal).
- `align-content` gjør ingenting uten **wrap** og **flere linjer**.
- Ikke misbruk `order` – det kan forvirre tastaturnavigasjon og skjermlesere.
- Bruk `gap` i stedet for “margins på alle kanter”.

---

## Mini-ordliste
- **Hovedakse**: den retningen `flex-direction` peker (rad eller kolonne).
- **Tverrakse**: vinkelrett på hovedaksen.
- **Linje**: rad/kolonne med flex-items; flere linjer krever `flex-wrap`.

---

## Referanser (W3Schools)
- Flexbox – oversikt: https://www.w3schools.com/css/css3_flexbox.asp
- Flex container: https://www.w3schools.com/css/css3_flexbox_container.asp
- Flex items: https://www.w3schools.com/css/css3_flexbox_items.asp
- Flexbox responsiv: https://www.w3schools.com/css/css3_flexbox_responsive.asp
