/*
    "Calcola la somma e la media dei primi 10 numeri."
*/

const limite = 10;
let numero;
let somma = 0;
let media;

for(let i = 1; i <= limite; i++){
    numero = i;
    // console.log(numero);

    somma = somma + numero;
    // console.log(`La somma di ${somma - numero} e ${numero} è:`,somma);

    media = somma / numero;
    // console.log(`la media di ${somma} diviso ${numero} è:`,media);

    document.getElementById("somma").innerHTML = `La somma dei primi dieci numeri è: ${somma}`;
    document.getElementById("media").innerHTML = `La media dei primi dieci numeri è: ${media}`;
}

