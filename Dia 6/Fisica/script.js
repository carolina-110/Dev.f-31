
let resultado = 0;
let respuesta;
let op1 = "";
let op2 = "";
let op3 = "";




function obtener() {
    respuesta = document.getElementById("respuesta");
    console.log(respuesta);
}


function deshabilitar(velocidad, distancia, tiempo) {
    op1 = velocidad;
    op2 = distancia;
    op3 = tiempo
    if (op1 !== null && op2 !== null) {
        document.getElementById("tiempo").disabled = true;
        
    } else if (op3 && op2 !== "") {
        document.getElementById("velocidad").disabled = true;
    } else if (op3 && op1 !== "") {
        document.getElementById("distancia").disabled = true;
    }
    

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