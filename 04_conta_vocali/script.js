/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function returnVocals(str) {
  const vocals = ['a', 'e', 'i', 'o', 'u']
  const letter = []
  
  for (let i = 0; i < str.length; i++) {
    if (vocals.includes(str[i].toLowerCase())) {
      letter.push(str[i])
    }
    
  }
  return letter
}

// Invoca la funzione qui e stampa il risultato in console
console.log(returnVocals(word));



//Risultato atteso se si passa 'javascript': 3 (a, a, i)