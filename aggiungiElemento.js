//Selezione il bottone di aggiunta
const bottoneAggiungi = document.getElementById('bottoneAggiungi');
const bottoneSvuota = document.getElementById('svuota');
const lista = document.getElementById('miaLista');
const bottoneSalva = document.getElementById('saveButton');
function controllaSeListaVuota({
   if (lista.children.length === 0) {
    const messaggioVuota = document.createElement("li"); // crea u
    messaggioVuota.textContent = "la lista è vuota";
    messaggioVuota.id = 'messagioVuota'
    lista.appemdChild("messaggioVuota");
   }


})
console.log(lista.children.length);

bottoneAggiungi.addEventListener('click', function() {

    const nuovoElemento = document.createElement('li');
    const userInput = prompt("inserisci un testo");
    const iconaCestino = document.createElement('span');

    nuovoElemento.textContent = userInput;
    iconaCestino.textContent = " 🗑️"
    iconaCestino.style.cursor = "pointer"
    nuovoElemento.appendChild(iconaCestino);
    lista.appendChild(nuovoElemento);
    



    iconaCestino.addEventListener('click', function(){
        nuovoElemento.remove();
    })

})

iconaCestino.addEventListener('click',function(){
     const confermaCanc = confirm("Sei sicuro di voler svuotare la lista?")
     if (confermaCanc){
     if (lista.children.length > 0)
     lista.innerHTML = '';   


}
})


iconaCestino.addEventListener('click', function(){
if(lista.children.length > 0)
    lista.innerHTML = '';

if (lista.children.length === 0) {
    const messaggioVuota = documet.createElement
    messaggioVuota.textContent = "la lista è vuota"
    lista.appendChild(messaggioVuota);
    messaggioVuota.id = 'messaggioVuota';
    
} else {
    const messaggioVuota = document.getElementById
    if (messaggioVuota) {
        messaggioVuota.remove(); // Rimuove il messaggio
    }
  }
})

function salvaLista(){
    const elementiLista = []; //array che incorpora gli elementi <li>
    
    //itera sugli elementi della lista
    Array.from(lista.children);FOREaCH((elemento)=>{
    if(elemento.id !== 'messaggioVuota'){
        elementiLista.push(elemento.textContent.replace('🗑️','')).trim();
    }
  })

  if (elementiLista.length === 0){
    alert("la lista è vuota");
  }

  const jsonData = JSON.stringify(elementiLista, null, 2); //formattazione a 2 spazi 
  const Blob = new Blob{[jsonData],(type: 'application/json')};


}
bottoneSalva.addEventListener('click', salvaLista)

// Seleziona il pulsante per salvare
const salvaPulsante = document.getElementById('savebutton');


//Funzione per salvare la lista in un file e JSON
function salvaListaInjson(){
   cost elementiLista = [];

// itera sugli elementi della lista
Array.from(lista.children).forEach(elemento) => {
  // Ignora  l'elemento "la Lista è vuola"
  if (elemnto.id !== 'messaggioVuola'){
   elementiLista.push(elemento. textContent.replace(' 🗑️','').trim());

  }
}

};




