//  alert("Funciona!!!");

// const nombre = "Caro";
// let edad = 23;
// let mayorDeEdad = true;
// let x = 7;
// let suma = edad + x;

// console.log(nombre);
// console.log(edad);
// console.log(mayorDeEdad);
// console.log(x);
// console.log(suma);

// if(mayorDeEdad === true){
//     console.log("Soy mayor de edad");
// } else{
//     console.log("No soy mayor de edad");
// }


let j1 = "piedra";
let j2 = "papel";

if (j1 === "piedra" && j2 === "piedra") {
    console.log("Empataron");
} else if (j1 === "papel" && j2 === "papel") {
    console.log("Empataron");
} else if (j1 === "tijera" && j2 === "tijera") {
    console.log("Empataron");


} else if (j1 === "papel" && j2 === "tijera") {
    console.log("El ganador es j2");


} else if (j1 === "tijera" && j2 === "papel") {
    console.log("El ganador es jugador 1");



} else if (j1 === "piedra" && j2 === "papel") {
    console.log("El ganador es jugador 2");



} else if (j1 === "tijera" && j2 === "piedra") {
    console.log("El ganador es jugador 2");



} else if (j1 === "piedra" && j2 === "tijera") {
    console.log("El ganador es jugador 1");

} else if (j1 === "papel" && j2 === "piedra") {
    console.log("El ganador es jugador 1");
}


let numero = 7
if (numero / numero == 0 && numero / 1 == 0) {
    console.log("Es numero primo")
}
else {
    console.log("No es primo ")
}


if (numero % 2 == 0) {
    console.log("Es numero par")
}
else {
    console.log("No es  par")
}


for (let i = 100; i >= 1; i--) {
    if (i % 3 === 0 && i%5==0) {
        console.log("fizz buzz")
    } else if
        (i % 5 == 0) {
        console.log("Buzz")
    } else if (i % 3 == 0) {
        console.log("FIZZ");
    } else {
        console.log(i);
    }
}



    //console.log(i);




