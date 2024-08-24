// Código JavaScript
function verificarParidade(num) {
    if (num >= 0) {

        if (num % 2 == 0) {
            alert("O número é par!");
        } else {
            alert("O número é ímpar!");
        }
    } else {
        alert("O número é negativo!");
    }

}

numero = prompt("Digite um número: ");
verificarParidade(numero);








