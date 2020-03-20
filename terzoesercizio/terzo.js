//test
alert("grazie in anticipo per la collaborazione");
console.log("ciao a tutti");
//3 - Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

// chiedere 1 volta num

var primaRi = prompt("inserisci prima volta");

var valorePrimaRi = primaRi * 1 ;

// chiedere 2 volta num

var secondaRi = prompt("inserisci seconda volta");

// trasformato in valore senza stringa le varialbili

var valoreSecondaRi = secondaRi * 1 ;

// chiedere3volta num

var terzaRi = prompt("inserisci  terza volta");

// trasformato in valore senza stringa le varialbili

var valoreTerzaRi = terzaRi * 1;




// chiedere 4volta num
var quartaRi = prompt("inserisci  quarta volta");

// trasformato in valore senza stringa le varialbili

var valoreQuartaRi = quartaRi * 1;



// chiedere 5 volta num
var quintaRi = prompt("inserisci  quinta volta");

// trasformato in valore senza stringa le varialbili

var valoreQuintaRi = quintaRi * 1;


// trasformato in valore senza stringa le varialbili

var addizione =valorePrimaRi + valoreSecondaRi + valoreTerzaRi +valoreQuartaRi + valoreQuintaRi ;



console.log("addizione");

document.getElementById('terzoex').innerHTML =
"il risultato e :  " + addizione ;
