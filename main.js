$(document).ready(function () {

    var numeri = [];
    randomNumberRange (1, 100);
    creaNum(numeri, 100)
    console.log(numeri);
    $("#primo").html(numeri[0]);
    $("#secondo").html(numeri[1]);
    $("#terzo").html(numeri[2]);
    $("#quarto").html(numeri[3]);
    $("#quinto").html(numeri[4]);

    // Countdown di 10 secondi per memorizzare

    var count = 10;
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
//Far inserire uno alla volta i humeri che ha visto l'utente
//Confrontare numeri inserite con quelli generati
//Stampare risultato numeri indovinati





