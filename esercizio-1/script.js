/*
 L’utente inserisce due numeri in successione con due prompt.
 Il software stampa il maggiore.
*/

const primoNumero = prompt("inserisci un numero");
const secondoNumero = prompt("inserisci un altro numero");

console.log(primoNumero);
console.log(secondoNumero);

if(primoNumero > secondoNumero){
    document.querySelector('h1').innerHTML = `${primoNumero} è maggiore!`;
} else if(secondoNumero > primoNumero){
    document.querySelector('h1').innerHTML = `${secondoNumero} è maggiore!`;
} else{
    document.querySelector('h1').innerHTML = `${primoNumero} e ${secondoNumero} sono lo stesso numero :/`;
}