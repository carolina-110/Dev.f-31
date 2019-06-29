let days = ["Gluglulunes", "Mamartes", "Mierkocteles", "Juevebes", "Beviernes", "Sabadrink", "Dormingo"];

console.log(days[3]);

console.log(days);

for (i = 0; i < days.length; i++) {
    console.log(days[i]);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let countries = ["Mexico", "Estados Unidos", "Belgica", "Brazil"];
let longest = ""
let c = "mexico"
console.log(c.length);


for (i = 0; i < countries.length; i++) {
    if (countries[i].length > longest.length) {
        longest = countries[i]
    }

}

console.log(longest)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const numbers = [0, -5, 3, 9, -2, -3, -19]
let negatives = [];
let positives = [];

for (i = 0; i < numbers.length; i++) {

    if (numbers[i] > 0) {
        negatives.push(numbers[i]);

    } else if (numbers[i] < 0) {
        positives.push(numbers[i]);
    }


}
console.log(negatives)
console.log(positives)

let otro = []

for (i = 0; i < numbers.length; i++) {

    if (numbers[i] != null) {
        otro.push(numbers[i] * numbers[i]);

    }

}
console.log(otro)




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let numero = [];

for (let i = 100; i >= 1; i--) {
    if (i % 3 === 0 && i % 5 == 0) {

        numero.push("fizz buzz");
    } else if (i % 5 == 0) {

        numero.push("buzz");
    } else if (i % 3 == 0) {

        numero.push("fizz");
    } else {

        numero.push(i);

    }

}
console.log(numero);

