/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
function sayHello(word) {
  return 'Ciao'
}

// Invoca la funzione qui e stampa il risultato in console
const sayName = prompt('Inserisci il tuo nome')
console.log(`${sayHello()} ${sayName}`);



//Risultato atteso se si passa 'Mario': // ciao Mario
