class Tarefa {
    constructor(nome, descricao) {
        this.nome = nome;
        this.descricao = descricao;
        this.status = 'pendente'; 
    }

    concluir() {
        this.status = 'concluída';
    }

    detalhes() {
        return `Nome: ${this.nome}\nDescrição: ${this.descricao}\nStatus: ${this.status}`;
    }
}

class GerenciadorDeTarefas {
    constructor() {
        this._tarefas = [];
    }

    adicionarTarefa(tarefa) {
        this._tarefas.push(tarefa);
        this.listarTarefas();
    }

    listarTarefas() {
        const lista = document.getElementById('listaTarefas');
        lista.innerHTML = '';
        this._tarefas.forEach((tarefa, index) => {
            const item = document.createElement('li');
            if (tarefa.status === 'concluída') {
                item.classList.add('concluida');
            }

            const nomeTarefa = document.createElement('span');
            nomeTarefa.textContent = tarefa.nome;

            const botoes = document.createElement('div');

            const botaoDetalhes = document.createElement('button');
            botaoDetalhes.textContent = 'Detalhes';
            botaoDetalhes.classList.add('botao', 'botao-detalhes');
            botaoDetalhes.addEventListener('click', () => {
                this.visualizarDetalhes(index);
            });

            const botaoConcluir = document.createElement('button');
            botaoConcluir.textContent = 'Concluir';
            botaoConcluir.classList.add('botao', 'botao-concluir');
            botaoConcluir.addEventListener('click', () => {
                this.marcarComoConcluida(index);
            });

            const botaoRemover = document.createElement('button');
            botaoRemover.textContent = 'Remover';
            botaoRemover.classList.add('botao', 'botao-remover');
            botaoRemover.addEventListener('click', () => {
                this.removerTarefa(index);
            });

            botoes.appendChild(botaoDetalhes);
            botoes.appendChild(botaoConcluir);
            botoes.appendChild(botaoRemover);

            item.appendChild(nomeTarefa);
            item.appendChild(botoes);

            lista.appendChild(item);
        });
    }

    marcarComoConcluida(index) {
        this._tarefas[index].concluir();
        this.listarTarefas();
    }

    removerTarefa(index) {
        this._tarefas.splice(index, 1);
        this.listarTarefas();
    }

    visualizarDetalhes(index) {
        alert(this._tarefas[index].detalhes());
    }
}


const gerenciador = new GerenciadorDeTarefas();

document.getElementById('adicionarTarefa').addEventListener('click', () => {
    const nome = document.getElementById('nomeTarefa').value.trim();
    const descricao = document.getElementById('descricaoTarefa').value.trim();
    if (nome && descricao) {
        const tarefa = new Tarefa(nome, descricao);
        gerenciador.adicionarTarefa(tarefa);
        document.getElementById('nomeTarefa').value = '';
        document.getElementById('descricaoTarefa').value = '';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
