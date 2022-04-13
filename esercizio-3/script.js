/*
    Il software deve chiedere per 5 volte all’utente di inserire un numero.
    Il programma stampa la somma di tutti i numeri inseriti.
    Esegui questo programma in due versioni, con il for e con il while (facoltativo)
*/


    //Esempio con For

let numeroSomma = 0;
const numeriRichiesti = 5;

for(let i=0; i < numeriRichiesti; i++){
    const numeroInserito = parseInt(prompt('Perfavore, inserisci un numero'));
    numeroSomma = numeroSomma + numeroInserito;
    console.log(numeroInserito, numeroSomma);
}

document.querySelector("h1").innerHTML = `La somma dei numeri inseriti è ${numeroSomma}`;



    //Esempio con While
/*
let numeroSomma = 0;
let numeriRichiesti = 5;

while(numeriRichiesti > 0){
    const numeroInserito = parseInt(prompt("Perfavore, inserisci un numero"));
    numeroSomma = numeroSomma + numeroInserito;
    numeriRichiesti--;
    console.log(numeroInserito, numeroSomma);
}

document.querySelector("h1").innerHTML = `La somma dei numeri inseriti è ${numeroSomma}`;
*/