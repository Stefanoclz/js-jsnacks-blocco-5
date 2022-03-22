console.log('JS OK');

// Scrivi una funzione che accetti una stringa come argomento
// e la ritorni girata (es. Ciao -> oaiC)

let userWord = prompt('Inserisci la parola per ottenerla invertita');

function reverse(word) {

    let splitWord = word.split("");

    let reverseArray = splitWord.reverse();

    let arrayToString = reverseArray.join("");

    return arrayToString;
}


let reverseWord = reverse(userWord);

console.log(reverseWord);
