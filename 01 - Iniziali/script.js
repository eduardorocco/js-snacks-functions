/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function getFirstChar(array) {

   let result = []

   for (let i = 0; i < array.lenght; i++) {


    const element = array[i]
    const firsLetter = element.charAt(0)

    result.push(firstLetter)

   }

   return result
}

 console.log(getFirstChar(names))



let firstLetter = names.map(name => name.charAt(0))


// Invoca la funzione qui e stampa il risultato in console

console.log(firstLetter)

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]