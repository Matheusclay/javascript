function verificarTipoDado() {
    let dados = prompt("Por favor, insira um dado:");
    let verificacao = confirm("Você deseja verificar o tipo do dado informado?");
    
    if (verificacao) {
        if (!isNaN(parseFloat(dados)) ) {
            dados = parseFloat(dados);
        } else if (dados.toLowerCase() === "true" || dados.toLowerCase() === "false") {
            dados = (dados.toLowerCase() === "true");
        }
        
        alert("O tipo do dado informado é: " + typeof dados);
    } else {
        alert("Operação cancelada pelo usuário.");
    }
}

verificarTipoDado();
