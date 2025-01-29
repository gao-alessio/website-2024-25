//per dichiarare la funziome

function stampaNome(Nome){

    console.log("Ciao "+ Nome);

}

//per chiamare la funziona
stampaNome("alessio");
stampaNome("Pinco")
stampaNome("palla")


function moltiplicazione(a,b){
    let moltiplicazione = a*b;
console.log("il risultato è= " + moltiplicazione);
}

moltiplicazione(56,100);


function moltiplicazione2(a,b){

    return a + b;

}

let risultatomoltiplicazione = moltiplicazione2(34,56);


//console.log("Il risultato della moltiplicazione è: " + risultatomoltiplicazione);

//------------Vrifica se il numero è pari------------------------------------------------------


function sePari(munero){
if(numero % 2===0){
    console.log("Il numero è pari");
   }else{
    console.log("Il numero è dispali");


    sePari(4);
 }

}
// console.log(calcolo(40,7,divisione));

// //-----------------------------------
function somma(afd,fd){
     return afd + fd;
}
function divisione(afd,fd){
   return afd / fd;
    
}

function sottrazione(afd,fd){
    return afd - fd;
}

function moltiplicazione(afd,fd){
     return afd * fd;

}

function calcolo(a,b,tipoDiCalcolo){
    var risultato = tipoDiCalcolo(a,b);
    return risultato;

}
 
console.log("Il risultato della somma è: " + calcolo(23,45,somma));
console.log("Il risultato della divisione è: + calcolo(200,40,divisione));
console.log("Il risultato del modulo di 8 e 3 è: " + calcolo(8,3,modulo));