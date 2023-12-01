let x = 3;
let y = 4;

/* UGUAGLIANZA */
if (x == y) {
    console.log('x è uguale a 4');
}
else {
    console.log('x è diverso da 4');
}

/* DIVERSITA */
if (x != y) {
    console.log('QUI x è diverso da 4');
}
else {
    console.log('QUI x è uguale 4');
}

/* MAGGIORE */
if (x > y) {
    console.log('x è maggiore di 4');
}
else {
    console.log('x non è maggiore di 4');
}

/* MINORE */
if (x < 3) {
    console.log('x è minore di 3');
}
else {
    console.log('x non è minore di 3');
}

/* MAGGIORE O UGUALE */
if (x >= 3) {
    console.log('x è maggiore o uguale a 3');
}
else {
    console.log('x non è maggiore o uguale a 3');
}

/* MINORE O UGUALE */
if (x <= 3) {
    console.log('x è minore o uguale a 3');
}
else {
    console.log('x non è minore o uguale a 3');
}

// let y = 7;
// if (y = 'ciao') {
//     console.log('Entra qui perché NON sto facendo un confronto, ma una assegnazione');
// }
// else {
//     console.log('Qui non ci entra');
// }

// let z;
// z = 0;
// if (z) {
//     console.log('Non entra nell if perché...');
// }
// else {
//     console.log('Entra nell else qui perché...');
// }

// if (z == 0) {
//     console.log('Qui ORA ci entra perché...');
// }
// else {
//     console.log('Non entra più qui perché...');
// }

if (1 == true) {
    console.log('è vero');
}
else {
    console.log('NON è vero');
}

/* IDENTITA */
if (1 === true) {
    console.log('ANCHE ORA è vero');
}
else {
    console.log('ANCHE ORA NON è vero');
}

if (1 == '1') {
    console.log('è vero');
}
else {
    console.log('NON è vero');
}

/* IDENTITA */
if (1 === '1') {
    console.log('ANCHE ORA è vero');
}
else {
    console.log('ANCHE ORA NON è vero');
}

if (0 == false) {
    console.log('Si');
}

if (0 !== false) {
    console.log('Ancora si');
}

if (0 === false) {
    console.log('Sono identici');
}
else {
    console.log('Non sono identici');
}


// if (!(x == 6)) {

// }



const faCaldo = true;
const ceSole = true;

if (faCaldo && ceSole) {
    console.log('vado al mare');
}
else {
    console.log('resto a casa');
}

const hoMangiatoBene = true;
const hoAccarezzatoAnimale = false;

if (hoMangiatoBene || hoAccarezzatoAnimale) {
    console.log('sono felice');
}
else {
    console.log('sono triste');
}


const nonDevoLavorare = false;

if (faCaldo && ceSole || nonDevoLavorare) {
    console.log('vado al mare');
}
else {
    console.log('resto a casa');
}


const a = 3;
const b = 4;
const c = -2;

if ((a == 3 || b == 5) && (c < 0 || b > 4)) {
    console.log('Ok');
}
else {
    console.log('Non ok');
}

// const eta = prompt('Dimmi la tua età');
// console.log('eta', eta, typeof eta);
// const etaInNumero = parseInt(eta);
// console.log('etaInNumero', etaInNumero, typeof etaInNumero);

// // if (isNaN(etaInNumero)) {
// //     alert('Basta drogarti! Inserisci un numero');
// // }
// // else if (etaInNumero >= 18) {
// //     alert('Sei maggiorenne');
// // }
// // else {
// //     alert('Sei minorenne');
// // }

// if (!isNaN(etaInNumero)) {
//     if (etaInNumero >= 18) {
//         alert('Sei maggiorenne');
//     }
//     else {
//         alert('Sei minorenne');
//     }
// }
// else {
//     alert('Basta drogarti! Inserisci un numero');
// }

	
const now = new Date();

console.log('now', now, typeof now);
console.log('now.getHours()', now.getHours(), typeof now.getHours());
console.log('now.getMinutes()', now.getMinutes(), typeof now.getMinutes());


// Numero casuale tra 0 e 0.99999999999999
console.log(Math.random());
// Numero casuale tra 0 e 9.9999999999999
console.log(Math.random() * 10);
// Numero casuale tra 0 e 9
console.log(Math.floor(Math.random() * 10));
// Numero casuale tra 0 e 99
console.log(Math.floor(Math.random() * 100));
// Numero casuale tra 1 e 100
console.log(Math.floor(Math.random() * 100) + 1);

// Numerom casuale tra 30 e 50
console.log(Math.floor(Math.random() * (50 - 30 + 1)) + 30);