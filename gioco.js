alert("Sono Javascript e sono pronto a servirti ;)");

let nomeGiocatore = window.prompt("Ciao! inserisci il tuo nome!");

document.getElementById("titolo") .innerHTML = "Benvenuto " + nomeGiocatore;

let sceltaUtente;

function cliccatoCarta(){
    sceltaUtente = "carta"
    alert("hai selezionato " + sceltaUtente)
}

function cliccatoForbici(){
    sceltaUtente = "forbici"
    alert("hai selezionato " + sceltaUtente)
}

function cliccatoSasso(){
    sceltaUtente = "sasso"
    alert("hai selezionato " + sceltaUtente)
}

function verdetto (){
    document.getElementById("carta").style.display ='none';
    document.getElementById("forbici").style.display ='none';
    document.getElementById("sasso").style.display ='none';
    document.getElementById("pulsante").style.display ='none';
    let sceltaComputer;
       if(sceltaUtente == "carta"){
          sceltaComputer = "forbici";
       }
       if(sceltaUtente == "forbici"){
        sceltaComputer = "sasso";
        }
        if(sceltaUtente == "sasso"){
            sceltaComputer = "carta";
            }
        document.getElementById("titolo").innerHTML = nomeGiocatore + " HAI PERSO AHAHAAHAHAHAAH";
    
        document.getElementById("informazioni").innerHTML = "Il computer ha scelto " + sceltaComputer + " Tu stupido hai scelto " + sceltaUtente;
}