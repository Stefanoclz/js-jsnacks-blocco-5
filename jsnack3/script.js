console.log('JS OK');

// Scrivi una funzione che accetti una stringa come argomento
// e la ritorni girata (es. Ciao -> oaiC)

function reverse(word) {

    let splitWord = word.split("");

    let reverseArray = splitWord.reverse();

    let arrayToString = reverseArray.join("");

    return arrayToString;
}

let reversed = document.getElementById('reverse');

const avviaBtn = document.getElementById('calcola');



avviaBtn.addEventListener('click', function () {

    let userWord = document.getElementById('word').value;

    let reverseWord = reverse(userWord);

    console.log(reverseWord);

    reversed.innerText = `L'inverso della parola inserita è: ${reverseWord}`;
})