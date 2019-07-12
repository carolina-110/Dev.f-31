let sensei = {
    name: "Carolina",
    age: 23,
    program: "Cinta blanca",
    isCool: true,
    favoriteFood: ["Chilaquiles", "Poc Chuc", "Negra Modelo"],
    teach: function () {
        console.log("Hoy estoy enseñando objetos")
    }
};
sensei.hungry = false
console.log(sensei);



sensei.teach()


// let pokemon = [pikachu,Alakazam]
// console.log(pokemon)


let pikachu = {
    name: "Pikachu",
    description: "Es un raton electrico que puede hablar",
    type: "Electric",
    height: "50 cm",
    moves: [
        "Thunderbolt",
        "Volt Tackle",
        "Thunder",
        "Surf"
    ],
    health: 100,
    image: "https://staticuestudio.blob.core.windows.net/buhomag/2018/11/detective-pikachu-1.jpg?auto=compress,format ",
    sprite: "http://pm1.narvii.com/6722/0ab8cce1e61ba0ef3beec0823b2c5321d1716fef_00.jpg",

    attack: function (move) {
        alert(`Pikachu used ${move}, It´s super efective.`)
        document.getElementById("alakazamHealth").value = document.getElementById("alakazamHealth").value - 30;
    }

}

document.getElementById("pokeName").innerHTML = pikachu.name;
document.getElementById("pokeType").innerHTML = pikachu.type;
document.getElementById("pokeDescription").innerHTML = pikachu.description;
document.getElementById("pokeImage").src = pikachu.image;
document.getElementById("pokeAvatar").src = pikachu.sprite;
document.getElementById("moveOne").innerHTML = pikachu.moves[0];
document.getElementById("moveTwo").innerHTML = pikachu.moves[1];
document.getElementById("moveThree").innerHTML = pikachu.moves[2];
document.getElementById("moveFour").innerHTML = pikachu.moves[3];



let Alakazam = {
    name: "Alakazam",
    description: "Es un raton electrico que puede hablar",
    type: "Psychic",
    height: "3 m",
    moves: [
        "Psychic",
        "Hypnosis",
        "Light Screenr",
        "Shadow Ball"
    ],
    health: 100,

    image: "https://vignette.wikia.nocookie.net/es.pokemon/images/f/f5/Alakazam.png/revision/latest?cb=20170615171153",
    sprite: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnhtyLomEaNCoXquMca1pb6EwVvu8077ll8QTkZOms7mEWNOWt",

    attack: function (move) {
        alert(`Alakazam used ${move}, It´s super efective.`)
        document.getElementById("pikachuHealth").value = document.getElementById("pikachuHealth").value - 30;
        if (document.getElementById("pikachuHealth").value <= 50 && document.getElementById("pikachuHealth").value >= 30) {
            document.getElementById("pikachuHealth").classList.remove("is-primary")
            document.getElementById("pikachuHealth").classList.add("is-warning")
        } else if (document.getElementById("pikachuHealth").value <= 30) {
            document.getElementById("pikachuHealth").classList.remove("is-warning")
            document.getElementById("pikachuHealth").classList.add("is-danger")
        }
    }
}




document.getElementById("AlapokeName").innerHTML = Alakazam.name;
document.getElementById("AlapokeType").innerHTML = Alakazam.type;
document.getElementById("AlapokeDescription").innerHTML = Alakazam.description;
document.getElementById("AlapokeImage").src = Alakazam.image;
document.getElementById("AlapokeAvatar").src = Alakazam.sprite;
document.getElementById("AlamoveOne").innerHTML = Alakazam.moves[0];
document.getElementById("AlamoveTwo").innerHTML = Alakazam.moves[1];
document.getElementById("AlamoveThree").innerHTML = Alakazam.moves[2];
document.getElementById("AlamoveFour").innerHTML = Alakazam.moves[3];