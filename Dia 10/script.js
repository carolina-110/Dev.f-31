


class Pokemon {
    constructor(name, id, sprite, move1, move2, move3, move4) {
        this.name = name
        this.id = id
        this.srite = sprite
        this.move1 = move1
        this.move2 = move2
        this.move3 = move3
        this.move4 = move4
    }
}


let pokemon;






function busqueda() {
    let name = (document.getElementById("pokeInput").value).toLowerCase()
    //Inicia peticion
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(data => {
            data.json().then(info => {
                pokemon = new Pokemon(

                    info.name,
                    info.id,
                    info.sprites.front_default,
                    info.moves[0].move.name,
                    info.moves[1].move.name,
                    info.moves[2].move.name,
                    info.moves[3].move.name,
                )
                document.getElementById("pokeImage").src = pokemon.srite;
                document.getElementById("pokeName").innerHTML = pokemon.name;
                document.getElementById("move1").innerHTML = pokemon.move1;
                document.getElementById("move2").innerHTML = pokemon.move2;
                document.getElementById("move3").innerHTML = pokemon.move3;
                document.getElementById("move4").innerHTML = pokemon.move4;
            })
                .catch(() => swal("Error", "Pokemon no encontrado", "error"));
        })
    //Termina peticion

}





// busqueda("dialga").then(data => {
//     pokemon = new Pokemon(
//         data.name,
//         data.id, 
//         data.sprites.front_default,
//         data.moves[0].move.name,
//         data.moves[1].move.name,
//         data.moves[2].move.name,
//         data.moves[3].move.name,
//         );
// })





setTimeout(function () {
    console.log(pokemon);
}, 10000)




console.log(pokemon)