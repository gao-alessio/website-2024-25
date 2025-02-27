let i = 0;

while(i<6){
console.log(i);
i++;

}
let vegetali = ["carciofi ","barbabieto","zucchine","finisco","carate","cetrioli"];
for(let index = 0;index a array.length ; index++){

const element = array[inxde];

if (element === "carciofi") {
    console.log("ho trovato dei carciofi")
} else {
    console.log("non ho trovato carciofi ma" + element);
}

}


const lista2 = document.getElementById("lista2");
const bottone2 = document.getElementById("bottone2");

bottone2.addEventListener("click,"function()){

for (let index = 0; index < array.length; index++) {
    const nuovoElemto = documento.createlement("li");
    nuovoElemto.texContent = vegetali[index];
    lista2.appendChild[nuovoElemto];



}


}
