// let pikachu = {
//     name: "Pikachu",
//     description: "Es un raton electrico que puede hablar",
//     type: "Electric",
//     gender: "male",
//     level: 100,
//     image: "https://staticuestudio.blob.core.windows.net/buhomag/2018/11/detective-pikachu-1.jpg?auto=compress,format ",

// }




// let Alakazam = {
//     name: "Alakazam",
//     description: "Es un raton electrico que puede hablar",
//     type: "Psychic",
//     gender: "male",
//     level: 100,
//     image: "https://vignette.wikia.nocookie.net/es.pokemon/images/f/f5/Alakazam.png/revision/latest?cb=20170615171153",

// }


// class Pokemon {
//     constructor(name, type, level, gender, description, image) {
//         this.name = name;
//         this.type = type;
//         this.level = level;
//         this.gender = gender;
//         this.description = description;
//         this.image = image;
//     }
//     attack() {
//         alert(`${this.name} attacked.`)
//     }
// }

// let pikachu = new Pokemon("Pikachu", "Electric", 30, "female", "Es un pokemon de tipo electrico", "https://staticuestudio.blob.core.windows.net/buhomag/2018/11/detective-pikachu-1.jpg?auto=compress,format ");

// let alakazam = new Pokemon("Alakazam", "Psychic", 100, "male", "Es la ultima evolución de abra", "https://vignette.wikia.nocookie.net/es.pokemon/images/f/f5/Alakazam.png/revision/latest?cb=20170615171153");

// console.log(pikachu)
// console.log(alakazam)
// pikachu.attack();


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Persona {
    constructor(name, apelp, apelm, year, month, day, homo) {
        this.name = name;
        this.apelp = apelp;
        this.apelm = apelm;
        this.year = year;
        this.month = month;
        this.day = day;
        this.homo = homo;

    }

    getRfc() {

        let vocal = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

        let guardar = []

        for (let i = 1; i < this.apelp.length; i++) {
            for (let j = 0; j < vocal.length; j++) {
                if (this.apelp[i] === vocal[j]) {
                    guardar.push(this.apelp[i])
                    break;

                }
            }
        }


        return (this.apelp[0] + guardar[0] + this.apelm[0] + this.name[0] + this.year[2] + this.year[3] + this.month + this.day + this.homo).toUpperCase();

    }

    getEdad() {
        if (new Date().getFullYear() - this.year >= 18) {
            console.log("Es mayor de edad")
        } else if (new Date().getFullYear() - this.year < 18) {
            console.log("Es menor de edad")
        }
    }

}

let caro = new Persona("carolina", "pino", "sosa", "1996", "01", "12", "xxx")


// caro.getRfc();



caro.getEdad()
console.log(caro.getRfc())

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Futbolista extends Persona {
    constructor(name, apelp, apelm, year, month, day, team, goals, position, number, homo) {
        super(name, apelp, apelm, year, month, day, homo)
        this.team = team;
        this.goals = goals;
        this.position = position;
        this.number = number;
    }
}


let chicharito = new Futbolista("Javier", "Hernandez", "Balcazar", "1988", "6", "1", "Western Ham", "15", "Delantero", "17", "xxxx");

console.log(chicharito);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Pokemon {
    constructor(name, type, level, gender, description) {
        this.name = name;
        this.type = type;
        this.level = level;
        this.gender = gender;
        this.description = description;

    }

}

class Electrico extends Pokemon {
    constructor(name, type, level, gender, description) {
        super(name, type, level, gender, description)
    }
}

class Psychic extends Pokemon {
    constructor(name, type, level, gender, description) {
        super(name, type, level, gender, description)
    }
}

let pikachu = new Electrico("Pikachu", "Electrico", "100", "female", "Es un raton electrico")

let alakazam = new Psychic("Alakazam", "Psychic", "100", "male", "Es la ultima evolucion de abra")

console.log(pikachu);
console.log(alakazam);