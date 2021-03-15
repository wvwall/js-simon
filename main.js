$(document).ready(function () {



    //Generare 5 numeri casuali da presentare all'utente
    var numeri = [];
    var numeriUtente = [];
    randomNumberRange (1, 100);
    creaNum(numeri, 100);
    
    console.log(numeri);

    $("#primo").text(numeri[0]);
    $("#secondo").text(numeri[1]);
    $("#terzo").text(numeri[2]);
    $("#quarto").text(numeri[3]);
    $("#quinto").text(numeri[4]);

    // Countdown di 30 secondi per memorizzare +

    countdown30();

    $("#count_2").text("ATTENDI PER INSERIRE");

    //Far inserire uno alla volta i humeri che ha visto l'utente
    
    setTimeout(function() {
        for (var i = 0; i < 5; i++) {
            var numeroUtente = parseInt(prompt("Inserisci un numero:"));
            numeriUtente.push(numeroUtente);
        }
    },60000);
    console.log(numeriUtente);
    

  
    

});





//FUNCTIONS

//Generare 5 numeri casuali da presentare all'utente

function randomNumberRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// verifico per aggiungere in array

function creaNum(array, max) {
 while (array.length < 5 ) {
     var numero = randomNumberRange(1, max);

     if (!array.includes(numero)){
         array.push(numero);
     }
 }
 return array;
}




//Far partire un timer di 30 secondi
  // Countdown di 30 secondi per memorizzare
  function countdown30 (){
    var count = 30;
    var conta = setInterval(function () {
    if (count > 0) {
        $('#count').text(count);
    } else {
        clearInterval(conta);
        $('#count').text("VIA");
        $(".numeri").hide("slow");
    }
    count--;
    }, 1000);

};




//Confrontare numeri inserite con quelli generati
//Stampare risultato numeri indovinati





