// let demo =()=>{
//     console.log("Hola");
// }
// demo();


let producto = (a, b) => {
    return a * b
}

let multiplicacion = producto(5, 2)
console.log(multiplicacion);

//////////////////////////////////////////////////////////////////////////////////////////////////////

let curp = (nom, apeP, apeM, anio, mes, dia, homo) => {
    let vocal = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

    let guardar = []

    for (i = 1; i < apeP.length; i++) {
        for (j = 0; j < vocal.length; j++) {
            if (apeP[i] === vocal[j]) {
                guardar.push(apeP[i])
                break;

            }
        }
    }

    const rfc = (apeP[0] + guardar[0] + apeM[0] + nom[0] + anio[2] + anio[3] + mes + dia + homo).toUpperCase();

    return rfc;

}

let getCurp = curp("carolina", "pino", "sosa", "1996", "01", "12", "xxx");
console.log(getCurp);


///////////////////////////////////////////////////////////////////////////////////////////////////////////

edad = 15;
let evaluar = (edad) => {
    return edad >= 18 ? "Mayor de edad" : "Menor de edad"
}

let edades = evaluar(edad);
console.log(edades);



///////////////////////////////////////////////////////////////////////////////////////////////////////////////

let countries = ["Mexico", "Estados Unidos", "Belgica", "Brazil"];
let longest = ""



let largo = (arreglo) => {
    arreglo.forEach(indice => {
        longest = indice.length > longest.length ? indice : longest
    });
    return longest;
}

let final = largo(countries)
console.log(final)
