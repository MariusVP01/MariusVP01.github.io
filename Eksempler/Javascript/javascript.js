let handleliste = ["melk", "brød", "ost", "smør"];

function fjernVare(vare) {
  let indeks = handleliste.indexOf(vare);
  if (indeks !== -1) {
    handleliste.splice(indeks, 1);
    console.log(`${vare} er fjernet fra handlelista 🗑️`);
  } else {
    console.log(`${vare} finnes ikke i lista`);
  }
}

fjernVare("ost");
fjernVare("egg");
console.log(handleliste);
