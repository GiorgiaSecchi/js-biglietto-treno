// # TRACCIA

// * Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

// * Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

// * - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// * - va applicato uno sconto del 20% per i minorenni
// * - va applicato uno sconto del 40% per gli over 65.
// * - L'output del prezzo finale va messo fuori in forma umana
// *   (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

/*********************************************************************************/

// # PROCEDURA

// ! RACCOLTA DATI

// * chiedere all'utente il numero di chilometri che vuole percorrere --> (numero km utente)
// *    SE (numero km utente) NON è un numero uguale OR maggiore di 5
// *        apparirà messaggio di errore

// * chiedere all'utente l'età del passeggero  --> (età del passeggero)
// *    SE (età del passeggero) NON è un numero compreso fra 1 AND 120
// *        apparirà messaggio di errore

// ! ELABORAZIONE

// * SE (numero km utente) AND (età del passeggero) sono validi
// *    calcolo in base a (numero km utente) il (prezzo km del biglietto)

// *    SE (età del passeggero) è minore OR uguale a 17
// *    applico sconto del 20% al (prezzo km del biglietto)
// *    apparirà messaggio con (prezzo km del biglietto scontato)

// *    SE (età del passeggero) è maggiore OR uguale di 65
// *    applico sconto del 40% al (prezzo km del biglietto)
// *    apparirà messaggio con (prezzo km del biglietto scontato)

// *    ALTRIMENTI SE (età del passeggero) è un numero compreso fra 18 AND 64
// *    apparirà messaggio con (prezzo km del biglietto)

// ! OUTPUT

// * stampo il messaggio che comunica il prezzo finale

/*********************************************************************************/

// ! RACCOLTA DATI

// * chiedere all'utente il numero di chilometri che vuole percorrere --> (numero km utente)
const MilesNumber = parseInt(
  prompt("Qual'è il numero di chilometri che vuoi percorrere?")
);

// * SE (numero km utente) NON è un numero uguale OR maggiore di 5
const isMilesNumberValid = !isNaN(MilesNumber) && MilesNumber >= 5;

// * apparirà messaggio di errore
if (!isMilesNumberValid) {
  alert("Il valore inserito non è valido");
}

// * chiedere all'utente l'età del passeggero --> (età del passeggero)
let UserAge = parseInt(prompt("Inserisci la tua età"));

// * SE (età del passeggero) NON è un numero compreso fra 1 AND 120
const isUserAgerValid = !isNaN(UserAge) && UserAge >= 1 && UserAge < 120;

// * apparirà messaggio di errore
if (!isUserAgerValid) {
  alert("Il valore inserito non è valido");
}


// ! ELABORAZIONE

// * SE (numero km utente) AND (età del passeggero) sono validi
if (isMilesNumberValid && )

// *    calcolo in base a (numero km utente) il (prezzo km del biglietto)

// *    SE (età del passeggero) è minore OR uguale a 17
// *    applico sconto del 20% al (prezzo km del biglietto)
// *    apparirà messaggio con (prezzo km del biglietto scontato)

// *    SE (età del passeggero) è maggiore OR uguale di 65
// *    applico sconto del 40% al (prezzo km del biglietto)
// *    apparirà messaggio con (prezzo km del biglietto scontato)

// *    ALTRIMENTI SE (età del passeggero) è un numero compreso fra 18 AND 64
// *    apparirà messaggio con (prezzo km del biglietto)