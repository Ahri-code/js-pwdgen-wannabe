// Variabili

let nome;
let cognome;
let colore;

// inputs

nome = prompt("Prima di accedere inserisci il tuo nome");

cognome = prompt("Anche il cognome");

colore = prompt("Perché non mettere anche il colore preferito?");

// outputs

document.getElementById("title").innerHTML = `${nome}-${cognome}-${colore}-2023`;