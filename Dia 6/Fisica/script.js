


let respuesta;


// function obtener() {
//     respuesta = document.getElementById("respuesta");
//     console.log(respuesta);
// }





function deshabilitar() {
    op1 = document.getElementById("velocidad").value;
    op2 = document.getElementById("distancia").value;
    op3 = document.getElementById("tiempo").value;


    if (op1 !== "" && op2 !== "") {
        document.getElementById("tiempo").disabled = true;
    } else if (op3 !== "" && op2 !== "") {
        document.getElementById("velocidad").disabled = true;
    } else if (op3 !== "" && op1 !== "") {
        document.getElementById("distancia").disabled = true;

    }
}



function velocidadF() {

    if (op1 === "") {
        resultado = op2 / op3;
        return resultado
        //  alert(resultado);
        // document.getElementById('respuesta').innerHTML = velocidadF()


    } else if (op2 === "") {
        resultado = op1 * op3
        // alert(resultado);
        return resultado
    } else {
        resultado = op2 / op1
        // alert(resultado);
        return resultado
    }

}

function imprimirRespuesta() {
    document.getElementById('respuesta').innerHTML = velocidadF();
}