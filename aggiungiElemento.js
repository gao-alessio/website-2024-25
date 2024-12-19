//Selezione il bottone di aggiunta

const bottoneAggiungi = document.getElementById('bottoneAggiungi');
const bottoneTong = document.getElementById('bottonetong');
const lista = document.getElementById('miaLista');

console.log(lista.children.length);

bottoneAggiungi.addEventListener('click', function() {

    const nuovoElemento = document.createElement('li');
    const userInput = prompt("inserisci un testo");
    const nuovoElemento = document.createElement('span');

    nuovoElemento.textContent = userInput;
    iconaCestino.textContent = " 🗑️"
    iconaCestino.style.cursor = "pro"
    nuovoElemento.appendChild(iconaCestino);
    lista.appendChild(nuovoElemento);
    



    iconaCestino.addEventListener('click', function(){
        nuovoElemento.remove();
    })

})


