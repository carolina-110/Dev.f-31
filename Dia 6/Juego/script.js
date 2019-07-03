// $('.carousel').carousel({
//     interval:5000
// })

let j1 = ""
let j2 = ""

// function demo() {
//     alert("Juego en desarollo");
// }

function habilitar() {
    if (j1 !== "" && j2 !== "") {
        document.getElementById("jugar").classList.remove("disabled")
    }
}

function seleccionaJ1(option) {
    j1 = option;
    if (j1 === "piedra") {
        document.getElementById("j1Papel").classList.add("disabled")
        document.getElementById("j1Tijera").classList.add("disabled")
    } else if (j1 === "papel") {
        document.getElementById("j1Piedra").classList.add("disabled")
        document.getElementById("j1Tijera").classList.add("disabled")
    } else if (j1 === "tijera") {
        document.getElementById("j1Piedra").classList.add("disabled")
        document.getElementById("j1Papel").classList.add("disabled")
    }
    habilitar();

}

function seleccionaJ2(option) {
    j2 = option;
    if (j2 === "piedra") {
        document.getElementById("j2Papel").classList.add("disabled")
        document.getElementById("j2Tijera").classList.add("disabled")
    } else if (j2 === "papel") {
        document.getElementById("j2Piedra").classList.add("disabled")
        document.getElementById("j2Tijera").classList.add("disabled")
    } else if (j2 === "tijera") {
        document.getElementById("j2Piedra").classList.add("disabled")
        document.getElementById("j2Papel").classList.add("disabled")
    }
    habilitar();
}



function jugar() {
    if (j1 === "piedra" && j2 === "piedra") {
        document.getElementById("ganador").innerHTML = "Empate";
    } else if (j1 === "papel" && j2 === "papel") {
        document.getElementById("ganador").innerHTML = "Empate";
    } else if (j1 === "tijera" && j2 === "tijera") {
        document.getElementById("ganador").innerHTML = "Empate";


    } else if (j1 === "papel" && j2 === "tijera") {
        document.getElementById("ganador").innerHTML = "El ganador es jugador 2";


    } else if (j1 === "tijera" && j2 === "papel") {
        document.getElementById("ganador").innerHTML = "El ganador es jugador 1";



    } else if (j1 === "piedra" && j2 === "papel") {
        document.getElementById("ganador").innerHTML = "El ganador es jugador 2";



    } else if (j1 === "tijera" && j2 === "piedra") {
        document.getElementById("ganador").innerHTML = "El ganador es jugador 2";



    } else if (j1 === "piedra" && j2 === "tijera") {
        document.getElementById("ganador").innerHTML = "El ganador es jugador 1";

    } else if (j1 === "papel" && j2 === "piedra") {
        document.getElementById("ganador").innerHTML = "El ganador es jugador 1";
    }

}

