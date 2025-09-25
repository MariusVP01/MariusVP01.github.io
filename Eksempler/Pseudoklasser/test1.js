var Knapp5 = document.getElementById("Knapp5");
var Knapp6 = document.getElementById("Knapp6");

Knapp5.addEventListener("click", function() {
    alert("Du klikket på knappen!");
});

Knapp6.addEventListener("click", function() {
    if(Knapp5.disabled) {
        Knapp5.disabled = false;
    } else {
        Knapp5.disabled = true;
    }
}   );