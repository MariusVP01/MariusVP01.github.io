let x = 10
const y = 10
var z = 10 // gammel måte å deklarere variabler på

console.log(x)
x = x+5 
console.log(x)  

console.log(z)
z = z+5
console.log(z)
console.log(y) 
//y = y+5
console.log(y) 

if (true) {
    let a = 5
    var b = 5
    const c =5 
    console.log(a)
    console.log(b)
}

console.log(b)
console.log(a) // gir error fordi c er deklarert med const og er kun tilgjengelig i if-blokken
console.log(c) // gir error fordi a er deklarert med let og er kun tilgjengelig i if-blokken