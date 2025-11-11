// Hente elementer fra HTML, alle variabler er ikke hentet enda

// Bilder
let bilde1 = document.getElementById("spiller1_bilde");
let bilde2 = document.getElementById("spiller2_bilde");

// Knapper
let stein = document.getElementById("knapp1");
let saks = document.getElementById("knapp2");
let papir = document.getElementById("knapp3");

let spill = document.getElementById("start");
let restart_knapp = document.getElementById("restart");

// Spillets tilstand
let spiller1_score = 0;
let maskin_score = 0;
let runder = 0;

stein.addEventListener("click", function () {
  bilde1.src = "bilder/stein.png";
});

saks.addEventListener("click", function () {
  bilde1.src = "bilder/saks.png";
});

papir.addEventListener("click", function () {
  bilde1.src = "bilder/papir.png";
});

// Funkjson som gir tilbake et random tall mellom 0 og lengde
function random(lengde) {
  return Math.floor(Math.random() * lengde);
}

// Denne funksjonen skal bestemme maskinens valg
function maskinValg() {
  //Tips lag liste av valg og bruk random funksjonen for å hente et tilfeldig valg eventuelt implementer logikken her
}

// Denne funksjonen skal sette bildene basert på valg
function settbilder(maskin, spiller) {
  //logikk for å sette bilder basert på valg
}

// Denne funksjonen skal bestemme vinneren av runden
function vinner(maskin, spiller) {
  //logikk for å bestemme vinneren av runden
}

// Denne funksjonen skal oppdatere brukergrensesnittet, altså hva klientsiden ser
function oppdaterUI() {
  //logikk for å oppdatere brukergrensesnittet, som score og antall runder
}

//Denne funksjonen skal kjøre spillet, altså en runde
function spillFunksjon() {
  //logikk for å spille en runde
}

// Denne funksjonen skal restarte spillet og dens verdier
function restart() {
  //logikk for å nullstille spillet og dets variabler
}
