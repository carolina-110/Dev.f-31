let resultado = 0;
let respuesta;
let op1 = "";
let op2 = "";
let op3 = "";





function obtener() {
    respuesta = document.getElementById("respuesta");
    console.log(respuesta);
}


// function deshabilitar() {
    // op1 = document.getElementById("velocidad").value;
    // op2 = document.getElementById("distancia").value;
    // op3 = document.getElementById("tiempo").value;
//         console.log(op1)
//         console.log(op2)
//         console.log(op3)

//     if (op1 !== null && op2 !== null) {
//         document.getElementById("tiempo").addEventListener("keypress", myFunction);
//     } else if (op3 !== null && op2 !== null) {
//         document.getElementById("velocidad").addEventListener("keypress", myFunction);
//     } else if (op3 !== null && op1 !== null) {
//         document.getElementById("distancia").addEventListener("keypress", myFunction);
//     }
// }


function deshabilitar() {
    op1 = document.getElementById("velocidad").value;
    op2 = document.getElementById("distancia").value;
    op3 = document.getElementById("tiempo").value;
        console.log(op1)
        console.log(op2)
        console.log(op3)

    if (op1 !== " " && op2 !== " ") {
        document.getElementById("tiempo").addEventListener("keypress", myFunction);
    } else if (op3 !== " " && op2 !== " ") {
      //  document.getElementById("velocidad").addEventListener("keypress", myFunction);
    //   op1.disabled=true;
    } else if (op3 !== " " && op1 !== " ") {
        document.getElementById("distancia").addEventListener("keypress", myFunction);
    }
}


//  document.getElementById("tiempo").addEventListener("keypress", myFunction);



function myFunction() {
    
    document.getElementById("tiempo").disabled = true;
    document.getElementById("velocidad").disabled = true;
    document.getElementById("distancia").disabled = true;
}







function velocidad(velocidad, distancia, tiempo) {

    if (velocidad === null) {
        resultado = distancia / tiempo;
        return resultado;
    } else if (distancia === null) {
        resultado = velocidad * tiempo
        return resultado;
    } else {
        resultado = distancia / velocidad
        return resultado;
    }

}


console.log(velocidad(5, null, 2))