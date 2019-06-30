

// 1.-Mediante un ciclo for, muestra todos los platillos
//    (recuerda la propiedad 'length')
// 2.-Mediante for e if, muestra solo la "Garnacha" y el "Tamal"
// 3.-Mediante for e if, muestra solo los elementos impares
// 4.-Mediante solo ciclo for, muestra los elementos que sean pares	
//                  0           1           2           3       4
let platillos = ["Empanada", "Tostada", "Garnacha", "Tamal", "Picadillos"]

for (i = 0; i <= platillos.length; i++) {
    platillos[i]
}
console.log(platillos)

////////////////////////////////////////////////////////////////////////////////////////////////
let plato = []

for (i = 0; i < platillos.length; i++) {
    if (i == 2 || i == 4) {
        plato.push(platillos[i])
    }
}
console.log(plato)

////////////////////////////////////////////////////////////////////////////////////////////////////

let pares = []
let impares = []

for (i = 0; i < platillos.length; i++) {
    if (i % 2 === 0) {
        pares.push(platillos[i])
    } else {
        impares.push(platillos[i])
    }
}
console.log(pares)
console.log(impares)

///////////////////////////////////////////////////////////////////////////////////////////////////////7

function pedirUber(a, b) {
    console.log("Tu conductor va en camisno a " + a);
    console.log("Vamos a " + b);
}

function cobro(monto) {
    montofinal = Math.round(monto * 1.1)
    console.log("Se te cobrara un monto de $" + montofinal)
}

let encuentro = "calle 22"
let destino = "plaza la isla"

pedirUber(encuentro, destino);
cobro(110);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////



function jugar(j1, j2) {
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

}

jugar("piedra", "papel ")

////////////////////////////////////////////////////////////////////////////

let numeros = ["3", "6", "1", "5", "12", "10", "90", "9", "12", "20"]

function no3(a) {

    let numeros2 = []

    for (i = 0; i < a.length; i++) {
        if (a[i] % 3 != 0) {
            numeros2.push(a[i])


        }
    }
    console.log(numeros2)
}

no3(numeros)

//////////////////////////////////////////////////////////

// Primera letra de tu primer apellido
// Primera vocal de tu primer apellido
// Primera letra del segundo apellido
// Primera letra primer nombre
// Dos últimos del año de nacimiento
// mes de nacimiento en dos dígitos
// Dos digitos del día de nacimiento
// HOMOCLAVE 


//nombre, apellidoP, apellidoM, dia, mes, año, homoclave

//let nombre = "".split("");




function curp(nom, apeP, apeM, anio, mes, dia, homo) {
    let vocal = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    //let apeP = "".split("");
    let guardar = []
    //debugger;
    for (i = 1; i < apeP.length; i++) {
        for (j = 0; j < vocal.length; j++) {
            if (apeP[i] === vocal[j]) {
                guardar.push(apeP[i])
                break;

            }
        }
    }

    const rfc = (apeP[0] + guardar[0] + apeM[0] + nom[0] + anio[2] + anio[3] + mes + dia + homo).toUpperCase();

    console.log(rfc)

}

curp("carolina", "pino", "sosa", "1996", "01", "12", "xxx")