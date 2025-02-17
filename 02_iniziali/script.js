/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function firstLetter(letter) {

  const first = []

  for (let i = 0; i < letter.length; i++) {
    first.push(letter[i][0])
    
  }
  return first

}

// Invoca la funzione qui e stampa il risultato in console
const first = firstLetter(names)
console.log(first);



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]