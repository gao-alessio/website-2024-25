//Selezione il bottone di aggiunta

const bottoneAggiungi = document.getElementById('bottoneAggiungi');
const bottoneSvuota = document.getElementById('svuota');
const lista = document.getElementById('miaLista');

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
}
})
