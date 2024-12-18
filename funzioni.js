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

