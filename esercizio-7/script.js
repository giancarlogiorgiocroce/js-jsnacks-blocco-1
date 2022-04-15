/*
    Stampa le potenze di 2 fino a 1000.
    (questo snack cela un trabocchetto:  1000 non è una potenza di 2
    perciò per fermarsi prima di 1000 bisogna stampare la potenza 
    prima di incrementarla perché altrimenti il controllo viene 
    fatto dopo e si sfora)
*/

let risultato = 2;
const potenza = 2;
const limite = 1000;

while(risultato < limite){
    document.querySelector("ul").innerHTML += `<li>${risultato}</li>`;
    risultato = risultato * potenza;
    console.log(risultato);
}

// Con il suggerimento è stato troppo facile, ma altrimenti non credo ci
// sarei arrivato mai :D