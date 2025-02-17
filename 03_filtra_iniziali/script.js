/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function firstLetter(arr, letter) {

  const typeLetter = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0].toLowerCase() === letter[0].toLowerCase()) {

      typeLetter.push(arr[i])
    }
    
  }
  return typeLetter

}
// Invoca la funzione qui e stampa il risultato in console
const letterChoise = 'A'
const letter = firstLetter(names, letterChoise)

console.log(letter);



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]