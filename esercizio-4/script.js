/*
    In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
    chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/

const listaInvitati = [
    "Jay Gatsby", 
    "Nick Carraway", 
    "Daisy Buchanan", 
    "Tom Buchanan", 
    "George Wilson"
]
// console.log(listaInvitati);

const nomeUtente = prompt("Inserisci nome e cognome separati da uno spazio");

let ammissibilitaUtente = false;


// Ciclo utile a cambiare la variabile Booleana
for(let i = 0; i < listaInvitati.length; i++){
    if(listaInvitati[i] === nomeUtente){
        ammissibilitaUtente = true;
    }
}

// Stampo in base alla variabile Booleana
if(ammissibilitaUtente){
    console.log(nomeUtente, "è accettato?", ammissibilitaUtente);
    document.querySelector("h1").innerHTML = `${nomeUtente} è in lista`;
} else {
    console.log(nomeUtente, "è accettato?", ammissibilitaUtente);
    document.querySelector("h1").innerHTML = `${nomeUtente} non è in lista`;
}