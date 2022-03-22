console.log('JS OK');

// Crea un array di 10 oggetti che rappresentano una zucchina, indicando
// per ognuna varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine.

const zucchine = [
    {
        varietà: 'Nera',
        peso: 150,
        lunghezza: 15,
    },

    {
        varietà: 'Gialla',
        peso: 100,
        lunghezza: 11,
    },

    {
        varietà: 'Romanesca',
        peso: 200,
        lunghezza: 18,
    },

    {
        varietà: 'Croockneck',
        peso: 250,
        lunghezza: 20,
    },

    {
        varietà: 'Patisson',
        peso: 90,
        lunghezza: 9,
    },

    {
        varietà: 'Fiorentina',
        peso: 180,
        lunghezza: 13,
    },

    {
        varietà: 'Friuliano',
        peso: 300,
        lunghezza: 22,
    },

    {
        varietà: 'Tonda',
        peso: 110,
        lunghezza: 10,
    },

    {
        varietà: 'Trombetta',
        peso: 350,
        lunghezza: 25,
    },

    {
        varietà: 'Napoletana',
        peso: 80,
        lunghezza: 8,
    },
]

let sommaPeso = 0;

for (let i = 0; i < zucchine.length; i++) {
    sommaPeso += zucchine[i].peso;
}

console.log('La somma del peso delle zucchine è:', sommaPeso);