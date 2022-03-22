console.log('JS OK');

// Crea 10 oggetti che rappresentano una zucchina. Dividi in due array separati
// le zucchine che misurano meno o più di 15cm. Infine stampa separatamente
// quanto pesano i due gruppi di zucchine.

const zucchineOver = [];

const zucchineUnder = [];

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

for (let i = 0; i < zucchine.length; i++) {
    if (zucchine[i].lunghezza < 15) {
        zucchineUnder.push(zucchine[i]);
    } else {
        zucchineOver.push(zucchine[i]);
    }
}

console.log('Over: ', zucchineOver);

console.log('Under: ', zucchineUnder)