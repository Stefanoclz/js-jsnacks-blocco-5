console.log('JS OK');

// Scrivi una funzione che accetti tre argomenti: un array e due numeri
// (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi
// dell’array). La funzione ritornerà un nuovo array con i valori
// che hanno la posizione compresa tra “a” e “b”



function newArrayGenerator(array, a, b) {
    for (let i = 0; i < array.length; i++) {
        if (i >= num1 && i <= num2) {
            newArray.push(array[i]);
        }
    }
}


const lista = ['pizza', 'wrustel', 'patate', 'formaggio', 'spinaci', 'pasta', 'pomodoro', 'guanciale', 'pecorino', 'radicchio', 'prezzemolo', 'origano'];

let newArray = [];

function randomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
}

let num2 = randomNumber(lista.length);

let num1 = randomNumber(num2);

console.log(num1, num2);

newArrayGenerator(lista, num1, num2);

console.log(newArray);


