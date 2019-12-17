// alert('Funziona la pagina?')
//
// console.log('provami');
//
// var number = 5;
//
// console.log(number);
//
// var variabileVuota;
//
// console.log(variabileVuota);
//
// variabileVuota = 'inserisco del testo nella variabile che prima era vuota';
//
// console.log(variabileVuota);
//
// variabileVuota = 'sovrascrivo la variabile di prima';
//
// console.log(variabileVuota);
//
// var nome = 'che nome hai?'
// console.log(nome);
//
// var somma = 4 + 4 + 4
// console.log(somma);
//
// var divisione = somma / 2
// console.log(divisione)

var nomeUtente = prompt ('Ciao, posso sapere il tuo nome?');
console.log(nomeUtente);
var cognomeUtente = prompt ('Grazie! Ora posso sapere il tuo cognome?');
console.log(cognomeUtente);
var colorePreferito = prompt ('Bene! Adesso ho bisogno di conoscere il tuo colore preferito!');
console.log(colorePreferito);
var numerObbligatorio = 19;
console.log(numerObbligatorio);

var password = nomeUtente + cognomeUtente + colorePreferito + numerObbligatorio;
console.log(password)


document.getElementById('password').innerHTML = password;
