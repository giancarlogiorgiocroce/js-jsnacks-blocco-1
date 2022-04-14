/*
    Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.
*/

let limite;
let limiteApprovato = false;

while(!limiteApprovato){
    let limite = parseInt(prompt("Inserisci un numero in cifre"));
    if(!(isNaN(limite))){
        limiteApprovato = true;
        console.log("il limite è valido?", limiteApprovato);
        document.querySelector("h4").append(limite);
    }

    for(let i = limite; i >= 0; i--){
        console.log(i);
        let numeroDaStampare = i;
        const cuboDelNumero = numeroDaStampare * numeroDaStampare *numeroDaStampare;
        document.querySelector("ul").innerHTML += `<li>Il cubo di ${numeroDaStampare} è ${cuboDelNumero}</li>`;
    }

}