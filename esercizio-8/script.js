/*
    "Chiedi un numero di 4 cifre all’utente
    e calcola la somma di tutte le cifre che compongono il numero.
    in questo caso possiamo sfruttare a nostro vantaggio il fatto che
    la funzione prompt restituisca una stringa anche se si è digitato un numero
    e recuperare una cifra alla volta usanto il ciclo for per scorrere la stringa numerica"
    ----
    Chiedo una stringa
    Divido la stringa per singoli digit e riempio un array?
    Sommo fra loro i singoli digit (trasformo in precedenza in numeri?)
*/

let numeroValido = false;
let sommaFinale = 0;

while(!numeroValido){

    let numeroRichiesto = prompt("Inserisci un numero di 4 cifre");
    console.log("il numero inserito è:", numeroRichiesto);

    if(!(isNaN(numeroRichiesto))){
        
        const arrayNumeroRichiesto = numeroRichiesto.split("");
        console.log(arrayNumeroRichiesto);

        for(let i = 0; i < numeroRichiesto.length; i++){
            sommaFinale = sommaFinale + parseInt(numeroRichiesto[i]);
            document.querySelector("h1").innerHTML = `La somma delle cifre inserite è di: ${sommaFinale}`;
            console.log(sommaFinale);
        }
        
        numeroValido = true;
        console.log("Il numero inserito è valido", numeroValido);
    }

}