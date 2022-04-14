/*
    Crea un array vuoto.
    Chiedi per 6 volte all’utente di inserire un numero,
    se è dispari inseriscilo nell’array
*/

let numeriDispari = [];
const limiteInserimenti = 6;

for(let i = 0; i < limiteInserimenti; i++){
    const numeroInserito = parseInt(prompt("Inserisci un numero in cifre"));
    // console.log(numeroInserito);

    if(numeroInserito % 2){
        numeriDispari.push(numeroInserito);
        document.querySelector("ul").innerHTML += `<li>${numeroInserito}</li>`;
    }
}

// console.log(numeriDispari);