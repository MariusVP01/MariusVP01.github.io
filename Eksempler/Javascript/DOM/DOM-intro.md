# 🌐 Introduksjon til DOM (Document Object Model)

## Hva er DOM?

**DOM = Document Object Model**

DOM er en **representasjon av HTML-dokumentet som et tre av noder (elementer)**.  
Når nettleseren laster inn en HTML-side, bygges det automatisk en DOM-struktur som JavaScript kan lese og manipulere.

JavaScript kan bruke DOM til å:

- Lese og endre **innhold** og **struktur** på en nettside,
- Legge til, fjerne eller endre **elementer** og **egenskaper**,
- **Reagere/Lytte** på hendelser som klikk, tastetrykk og musebevegelser.

💡 **Kort sagt:**

> HTML beskriver hva som finnes på siden.  
> DOM er nettleserens levende modell av siden.  
> JavaScript er verktøyet som kan endre denne modellen i sanntid.

---

## 🧩 Eksempel: HTML-struktur

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Min side</title>
  </head>
  <body>
    <h1 id="header">Velkommen til min side</h1>
    <div id="utskrift"></div>
    <nav>
      <ul>
        <li><a href="#home">Hjem</a></li>
        <li><a href="#about">Om oss</a></li>
        <li><a href="#contact">Kontakt</a></li>
      </ul>
    </nav>
  </body>
</html>
```

### DOM-tre (forenklet illustrasjon)

- html
  - head
    - title
  - body
    - h1 (id="header")
    - div (id="utskrift")
    - nav
      - ul
        - li
          - a
        - li
          - a
        - li
          - a

Alle elementene er **noder** i DOM-treet.  
JavaScript kan nå hente og endre disse.

---

## 🔍 Hente og endre elementer

### Eksempel 1 – bruke `getElementById`:

```javascript
let header = document.getElementById("header"); // finner element med id="header"
header.innerText = "Ny overskrift!"; // endrer teksten i elementet
```

### Eksempel 2 – bruke `querySelector`:

```javascript
let header = document.querySelector("#header"); // id = #
header.innerText = "Ny overskrift!";
```

### Eksempel 3 – hente flere elementer:

```javascript
let lenker = document.querySelectorAll("nav ul li a"); // alle lenker i nav
for (const lenke of lenker) {
  console.log(lenke.href); // skriver ut href-attributtet til hver lenke
}
```

📘 **Forskjell på utvalgsmetoder:**
| Metode | Beskrivelse | Returnerer |
|--------|--------------|------------|
| `getElementById("id")` | Ett element med gitt ID | Ett element |
| `getElementsByClassName("navn")` | Alle elementer med gitt klasse | HTMLCollection |
| `getElementsByTagName("p")` | Alle elementer av gitt type | HTMLCollection |
| `querySelector("selector")` | Første element som matcher CSS-selektor | Ett element |
| `querySelectorAll("selector")` | Alle elementer som matcher selektor | NodeList |

---

## ⚙️ DOM i praksis – enkel demonstrasjon

```html
<!DOCTYPE html>
<html lang="no">
  <head>
    <meta charset="UTF-8" />
    <title>DOM-demo</title>
  </head>
  <body>
    <h1 id="overskrift">Hei, verden!</h1>
    <p class="tekst">Dette er en paragraf.</p>
    <button id="knapp">Trykk meg</button>

    <script>
      // Hente elementer
      const overskrift = document.getElementById("overskrift");
      const tekst = document.querySelector(".tekst");
      const knapp = document.getElementById("knapp");

      // Endre tekst og stil
      overskrift.innerText = "Hei fra JavaScript!";
      overskrift.style.color = "blue";

      // Legg til hendelse
      knapp.addEventListener("click", () => {
        tekst.innerText = "Du trykket på knappen!";
        tekst.style.color = "red";
      });
    </script>
  </body>
</html>
```

🗣 **Forklar underveis:**

- `document` = hele nettsiden
- `innerText` = endrer tekstinnhold
- `style` = endrer CSS direkte
- `addEventListener` = lytter etter hendelser som klikk

---

## 🧑‍💻 Oppgaver i stigende vanskelighetsgrad

### 🔹 **Nivå 1: Hente og endre elementer**

1. Lag en side med en `<p>`-tag som inneholder “Hei”.
2. Hent den i JS og endre teksten til “Hei, verden!”.
3. Endre fargen på teksten.

🧭 _Mål:_ Forstå `document.getElementById`, `innerText`, og `style`.

---

### 🔹 **Nivå 2: Bruke knapp for å endre innhold**

1. Lag en knapp og en paragraf.
2. Når knappen trykkes, skal teksten i paragrafen endres.
3. Bonus: Bytt tekst mellom to meldinger for hvert trykk.

🧭 _Mål:_ Forstå hendelser og tilstandsvariabler.

---

### 🔹 **Nivå 3: Endre flere elementer**

1. Lag tre `<div>`-bokser med klassen “boks”.
2. Når du klikker på en knapp, skal **alle boksene** endre farge.
3. Bruk `document.querySelectorAll` og en **for-løkke** for å gå gjennom alle.

🧭 _Mål:_ Kombinere DOM og løkker.

---

### 🔹 **Nivå 4: Dynamisk innhold**

1. Lag et input-felt og en knapp.
2. Når du skriver noe i input og trykker knappen, skal teksten vises i en `<p>` under.
3. Bonus: Tøm input-feltet etterpå.

🧭 _Mål:_ Lese `value` fra input og oppdatere DOM dynamisk.

---

### 🔹 **Nivå 5: Mini-prosjekt – Fargevelger 🎨**

1. Lag tre knapper: “Rød”, “Grønn” og “Blå”.
2. Når du klikker på en knapp, skal bakgrunnsfargen på nettsiden endres.

🧭 _Mål:_ Repetere DOM, hendelser og funksjoner i praksis.

---

## 🧠 Oppsummering

- DOM er et **tre** av HTML-elementer som nettleseren bygger automatisk.
- JavaScript kan manipulere DOM for å endre **innhold, utseende og struktur**.
- Viktige begreper:
  - `document` → hele dokumentet
  - `innerText`, `innerHTML` → endre tekst/HTML
  - `style` → endre CSS
  - `addEventListener` → reagere på hendelser
  - `querySelector` og `querySelectorAll` → velge elementer fleksibelt

---

🎯 **Neste steg:**  
Når elevene mestrer disse grunnleggende operasjonene, kan dere begynne å bruke DOM-manipulasjon i små prosjekter — som interaktive skjemaer, spill (f.eks. “klikk-spill” eller “gjet tall”), og dynamiske lister.
