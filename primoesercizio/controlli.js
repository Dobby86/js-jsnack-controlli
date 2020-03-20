//test
alert("grazie in anticipo per la collaborazione");
console.log("ciao a tutti");
//1 - L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.
//----------------------------------------------------------
//l'utente inserisce la prima volta un numero con prompt
var primaDigitazione = prompt("inserire numero");


//l utente inserisce la seconda volta il numero con prompt
var secondaDigitazione = prompt("inserire numero");

//risultato maggiore
var risultatoPiuGrande ;

//ora facciamo i calcoli per stabilire chi e piu risultatoPiuGrande
if (primaDigitazione > secondaDigitazione) {
    risultatoPiuGrande = "la primaDigitazione e maggiore"
} else if (primaDigitazione< secondaDigitazione) {
    risultatoPiuGrande = "la secondaDigitazione e maggiore"
}
 console.log(risultatoPiuGrande);



//il numero maggiore viene stampato
document.getElementById('major').innerHTML = risultatoPiuGrande;
