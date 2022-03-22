console.log('JS OK');

// Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi)
// prendendo alternativamente gli elementi da uno e dall’altro, es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

const array1 = ['a', 'b', 'c', 'd', 'e', 'f'];

const array2 = [1, 2, 3, 4, 5, 6]


const arraySomma = [];

function concat(arg1, arg2) {

    for (let i = 0; i < arg1.length; i++) {
        let elem1 = arg1[i];
        let elem2 = arg2[i];


        arraySomma.push(elem1, elem2);
    }

}


concat(array1, array2);

console.log('array finale: ', arraySomma);