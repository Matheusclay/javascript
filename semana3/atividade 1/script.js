var valores = []; 

function adicionarValor() {
    var valor = document.getElementById("inputValue").value; 
    valores.push(valor); 
    valores.sort(); 
    mostrarValores(); 
    document.getElementById("inputValue").value = ""; 
}

function mostrarValores() {
    var lista = document.getElementById("listaValores");
    lista.innerHTML = ''; 
    for(var i = 0; i < valores.length; i++) {
        var item = document.createElement("li"); 
        item.innerText = valores[i]; 
        lista.appendChild(item); 
    }
}