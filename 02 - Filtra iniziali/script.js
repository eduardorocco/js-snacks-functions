/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

const letter = "A"

function filter(array, letter) {

    return array.filter(word => word.startsWith(letter))
}

// Invoca la funzione qui e stampa il risultato in console

const result = filter(names, letter);

console.log(result)


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]



// Esempio di utilizzo


