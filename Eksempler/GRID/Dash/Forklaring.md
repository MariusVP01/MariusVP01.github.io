# Dashboard Layout (HTML + CSS Grid)

Dette prosjektet er et eksempel på hvordan man kan bygge et **dashboard-layout** ved hjelp av **CSS Grid** og litt Flexbox.  
Målet er å skape en struktur som ligner et typisk admin-panel, med **sidebar**, **topbar** og et **grid-basert hovedinnhold**.

---

## 📐 Struktur

Layouten er delt inn i tre hovedområder:

1. **Sidebar (`.sidebar`)**
   - Inneholder logo/brand
   - Profilkort (med bilde og navn)
   - Navigasjonsmeny med seksjoner (Dashboard, Data, Pages, Charts)
   - Bruker `flexbox` i kolonne-retning

2. **Topbar (`.topbar`)**
   - Inneholder søkefelt
   - Handlingsknapper (innstillinger, varsler, nedlastingsknapp)
   - Bruker `flexbox` for å plassere elementene horisontalt

3. **Main (`.main`)**
   - Er et **CSS Grid** med 12 kolonner
   - Alle widgets (kort, grafer, tabeller) plasseres her
   - Hvert kort kan bruke `grid-column: span X` for å bestemme bredde
   - Grid-rader settes automatisk basert på innhold

---

## 🗂️ Inndeling av main-grid

`main`-området er satt opp slik:

- **Statistikk-kort (4 stk)**
  - Hver bruker `grid-column: span 3` → fire kort side om side i en 12-kolonners grid
  - Viser nøkkeltall (Emails sent, Sales, New Clients, Traffic)

- **Linje-graf**
  - Bruker `grid-column: span 8` og `grid-row: span 2`
  - Tar opp stor plass til venstre

- **Transaksjonsliste**
  - Bruker `grid-column: span 4` og `grid-row: span 2`
  - Viser siste transaksjoner i listeform

- **Tre små widgets nederst**
  - Pie chart (`grid-column: span 4`)
  - Bar chart (`grid-column: span 4`)
  - Geografisk kart (`grid-column: span 4`)

---

## 🎨 Stil og design

- **Farger:** Definert som CSS-variabler (`--bg`, `--panel`, `--accent`, etc.)
- **Kort:** Har `border-radius`, `padding` og `box-shadow` for å ligne widgets
- **Responsivt:**
  - Over 1100px: Sidebar normal bredde, 12-kolonne grid
  - Under 1100px: Sidebar krymper, widgets strekker seg over flere kolonner
  - Under 640px: Statistikk-kort vises i én kolonne

---

## 🛠️ Videre arbeid

- Bytte ut plassholder-diver (`.placeholder`) med faktiske grafer (f.eks. Chart.js)
- Legge til lys/mørk modus
- Koble til API for ekte data

## 📊 ASCII Grid-skissse

Grid = 12 kolonner → |---| representerer 1 kolonnebredde

<!-- 12-col grid sketch for README (renders in Markdown via HTML) -->
<table style="border-collapse:collapse; width:100%; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size:14px;">
  <colgroup>
    <col span="12" style="width:8.33%;">
  </colgroup>
  <tbody>
    <!-- Row 1: four stat cards (span 3 each) -->
    <tr>
      <td colspan="3"  style="border:1px solid #445; padding:8px; text-align:center; background:#0f1420; color:#cfe3ff;">Stat 1 (span 3)</td>
      <td colspan="3"  style="border:1px solid #445; padding:8px; text-align:center; background:#0f1420; color:#cfe3ff;">Stat 2 (span 3)</td>
      <td colspan="3"  style="border:1px solid #445; padding:8px; text-align:center; background:#0f1420; color:#cfe3ff;">Stat 3 (span 3)</td>
      <td colspan="3"  style="border:1px solid #445; padding:8px; text-align:center; background:#0f1420; color:#cfe3ff;">Stat 4 (span 3)</td>
    </tr>
     <!-- Row 2: big line chart (span 8) + transactions (span 4) -->
    <tr>
      <td colspan="8"  style="border:1px solid #445; padding:14px; text-align:center; background:#131b2c; color:#cfe3ff;">Line chart (span 8)</td>
      <td colspan="4"  style="border:1px solid #445; padding:14px; text-align:center; background:#131b2c; color:#cfe3ff;">Transactions (span 4)</td>
    </tr>
    <!-- Row 3: three small widgets (4+4+4) -->
    <tr>
      <td colspan="4"  style="border:1px solid #445; padding:12px; text-align:center; background:#151f33; color:#cfe3ff;">Pie (span 4)</td>
      <td colspan="4"  style="border:1px solid #445; padding:12px; text-align:center; background:#151f33; color:#cfe3ff;">Bar (span 4)</td>
      <td colspan="4"  style="border:1px solid #445; padding:12px; text-align:center; background:#151f33; color:#cfe3ff;">Geo (span 4)</td>
    </tr>
  </tbody>
</table>

<p style="margin-top:6px; font-size:12px; color:#9fb2d9;">
  12-kolonne grid. Hver celle er en “span” over N kolonner (via <code>colspan</code>).
</p>
