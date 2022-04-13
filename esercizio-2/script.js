/*
    L’utente inserisce due parole in successione, 
    con due prompt.
    Il software stampa prima la parola più corta, 
    poi la parola più lunga.
*/

const primaParola = prompt("Inserisci una parola");
const secondaParola = prompt("Inserisce un'altra parola");

if(primaParola.length > secondaParola.length){
    document.querySelector("h1").innerHTML = `La parola ${primaParola} è più lunga della parola ${secondaParola}!`;
} else if(secondaParola.length > primaParola.length){
    document.querySelector("h1").innerHTML = `La parola ${secondaParola} è più lunga della parola ${primaParola}!`;
} else{
    document.querySelector("h1").innerHTML = `Le parole ${primaParola} e ${secondaParola} sono lunghe uguali!`;
}