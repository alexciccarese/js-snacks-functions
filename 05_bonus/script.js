/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function sayHello(str) {
  const hours = new Date().getHours()
  console.log(hours);
  
  if (hours < 13) {
    console.log('Buongiorno');
    
  } else if (hours < 17) {
    console.log('Buon pomeriggio');
    
  } else {
    console.log('Buonasera');
    
  }
  

}

sayHello()
// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.