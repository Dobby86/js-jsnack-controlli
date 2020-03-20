//test
alert("grazie in anticipo per la collaborazione");
console.log("ciao a tutti");
// 2 - L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

// l utente inserisce la prima parola  prompt
var primaParola = prompt ("inserisca parola d ordine");

//var che legge la lunghezza prima parola





//..................................

//l utente inserisce la seconda parola prompt
var secondaParola = prompt ("inserisca parola d ordine");

// var che legge la lunghezza seconda parola


var lunghezzaPrimaParola = primaParola.length;

var lunghezzaSecondaParola = secondaParola.length;

//stabilire quale parola e piu luna if else if
if (lunghezzaPrimaParola< lunghezzaSecondaParola) {

    document.getElementById("secondoex").innerHTML = primaParola + " " + secondaParola ;

} else if  (lunghezzaPrimaParola> lunghezzaSecondaParola) {

      document.getElementById("secondoex").innerHTML = secondaParola + " " + primaParola ;

} else {

    document.getElementById("secondoex").innerHTML = "le parole sono uguali di lunghezza" ;
}

console.log("txt");
//stampare DOC
