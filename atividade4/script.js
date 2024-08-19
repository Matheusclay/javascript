function verificarTipoDado() {

let dados = prompt("Por favor, insira um dado:");
        let verificacao = confirm("Você deseja verificar o tipo do dado informado?");
        if (verificacao) {
            alert ("O tipo do dado informado é: " + typeof dados);
        } else {
            alert ("Operação cancelada pelo usuário.");
        }

}

verificarTipoDado();