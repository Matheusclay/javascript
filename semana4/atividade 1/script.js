
class Pessoa {
    constructor(nome, email, dataNascimento, telefoneFixo, telefoneCelular) {
        this.nome = nome;
        this.email = email;
        this.dataNascimento = dataNascimento;
        this.telefoneFixo = telefoneFixo;
        this.telefoneCelular = telefoneCelular;
    }
}

class Professor extends Pessoa {
    constructor(nome, email, dataNascimento, telefoneFixo, telefoneCelular, areaAtuacao, matricula, linkLattes) {
        super(nome, email, dataNascimento, telefoneFixo, telefoneCelular);
        this.areaAtuacao = areaAtuacao;
        this.matricula = matricula;
        this.linkLattes = linkLattes;
    }
}

class Aluno extends Pessoa {
    constructor(nome, email, dataNascimento, telefoneFixo, telefoneCelular, curso, matricula) {
        super(nome, email, dataNascimento, telefoneFixo, telefoneCelular);
        this.curso = curso;
        this.matricula = matricula;
    }
}

// Mostrar o perfil selecionado e ocultar o outro ...
function atualizarCamposDinamicos() {
    var perfilProfessor = document.getElementById('professor').checked;
    var perfilAluno = document.getElementById('aluno').checked;

    var camposProfessor = document.getElementById('camposProfessor');
    var camposAluno = document.getElementById('camposAluno');

    if (perfilProfessor) {
        camposProfessor.style.display = 'block';
        camposAluno.style.display = 'none';
    } else if (perfilAluno) {
        camposProfessor.style.display = 'none';
        camposAluno.style.display = 'block';
    } else {
        camposProfessor.style.display = 'none';
        camposAluno.style.display = 'none';
    }
}

// Adicionar eventos de mudança de perfil
document.getElementById('professor').addEventListener('change', atualizarCamposDinamicos);
document.getElementById('aluno').addEventListener('change', atualizarCamposDinamicos);

// Validação dos campos ao perder o foco (onBlur)
function adicionarValidacaoOnBlur(campo, funcaoValidacao) {
    campo.addEventListener('blur', funcaoValidacao);
}

// Validação dos campos
function validarNome() {
    var nome = document.getElementById('nome');
    var erroNome = document.getElementById('erroNome');
    var nomeValor = nome.value.trim();
    if (!/^[A-Za-zÀ-ÖØ-öø-ÿ]+\s[A-Za-zÀ-ÖØ-öø-ÿ]+/.test(nomeValor)) {
        erroNome.textContent = 'Por favor, insira pelo menos nome e sobrenome.';
    } else {
        erroNome.textContent = '';
    }
}

function validarEmail() {
    var email = document.getElementById('email');
    var erroEmail = document.getElementById('erroEmail');
    var emailValor = email.value.trim();
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(emailValor)) {
        erroEmail.textContent = 'Por favor, insira um email válido.';
    } else {
        erroEmail.textContent = '';
    }
}

function validarDataNascimento() {
    var dataNascimento = document.getElementById('dataNascimento');
    var erroDataNascimento = document.getElementById('erroDataNascimento');
    var dataValor = dataNascimento.value.trim();
    var regexData = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/\d{4}$/;
    if (!regexData.test(dataValor)) {
        erroDataNascimento.textContent = 'Por favor, insira uma data no formato dd/mm/aaaa.';
    } else {
        erroDataNascimento.textContent = '';
    }
}

function validarTelefoneFixo() {
    var telefoneFixo = document.getElementById('telefoneFixo');
    var erroTelefoneFixo = document.getElementById('erroTelefoneFixo');
    var telefoneValor = telefoneFixo.value.trim();
    var regexTelefoneFixo = /^\(\d{2}\)\d{4}-\d{4}$/;
    if (!regexTelefoneFixo.test(telefoneValor)) {
        erroTelefoneFixo.textContent = 'Por favor, insira um telefone fixo no formato (xx)xxxx-xxxx.';
    } else {
        erroTelefoneFixo.textContent = '';
    }
}

function validarTelefoneCelular() {
    var telefoneCelular = document.getElementById('telefoneCelular');
    var erroTelefoneCelular = document.getElementById('erroTelefoneCelular');
    var telefoneValor = telefoneCelular.value.trim();
    var regexTelefoneCelular = /^\(\d{2}\)\d{5}-\d{4}$/;
    if (!regexTelefoneCelular.test(telefoneValor)) {
        erroTelefoneCelular.textContent = 'Por favor, insira um celular no formato (xx)xxxxx-xxxx.';
    } else {
        erroTelefoneCelular.textContent = '';
    }
}

function validarPerfil() {
    var perfilProfessor = document.getElementById('professor').checked;
    var perfilAluno = document.getElementById('aluno').checked;
    var erroPerfil = document.getElementById('erroPerfil');

    if (!perfilProfessor && !perfilAluno) {
        erroPerfil.textContent = 'Por favor, selecione um perfil.';
    } else {
        erroPerfil.textContent = '';
    }
}

function validarCamposEspecificos() {
    var perfilProfessor = document.getElementById('professor').checked;
    var perfilAluno = document.getElementById('aluno').checked;

    if (perfilProfessor) {
        validarAreaAtuacao();
        validarMatriculaProfessor();
        validarLinkLattes();
    } else if (perfilAluno) {
        validarCurso();
        validarMatriculaAluno();
    }
}

function validarAreaAtuacao() {
    var areaAtuacao = document.getElementById('areaAtuacao');
    var erroAreaAtuacao = document.getElementById('erroAreaAtuacao');
    if (!areaAtuacao.value.trim()) {
        erroAreaAtuacao.textContent = 'Por favor, preencha a área de atuação.';
    } else {
        erroAreaAtuacao.textContent = '';
    }
}

function validarMatriculaProfessor() {
    var matriculaProfessor = document.getElementById('matriculaProfessor');
    var erroMatriculaProfessor = document.getElementById('erroMatriculaProfessor');
    var matriculaValor = matriculaProfessor.value.trim();
    if (!/^\d{5}$/.test(matriculaValor)) {
        erroMatriculaProfessor.textContent = 'A matrícula deve conter exatamente 5 dígitos.';
    } else {
        erroMatriculaProfessor.textContent = '';
    }
}

function validarLinkLattes() {
    var linkLattes = document.getElementById('linkLattes');
    var erroLinkLattes = document.getElementById('erroLinkLattes');
    if (!linkLattes.value.trim()) {
        erroLinkLattes.textContent = 'Por favor, preencha o link do Lattes.';
    } else {
        erroLinkLattes.textContent = '';
    }
}

function validarCurso() {
    var curso = document.getElementById('curso');
    var erroCurso = document.getElementById('erroCurso');
    if (!curso.value.trim()) {
        erroCurso.textContent = 'Por favor, preencha o curso.';
    } else {
        erroCurso.textContent = '';
    }
}

function validarMatriculaAluno() {
    var matriculaAluno = document.getElementById('matriculaAluno');
    var erroMatriculaAluno = document.getElementById('erroMatriculaAluno');
    var matriculaValor = matriculaAluno.value.trim();
    if (!/^\d{10}$/.test(matriculaValor)) {
        erroMatriculaAluno.textContent = 'A matrícula deve conter exatamente 10 dígitos.';
    } else {
        erroMatriculaAluno.textContent = '';
    }
}


adicionarValidacaoOnBlur(document.getElementById('nome'), validarNome);
adicionarValidacaoOnBlur(document.getElementById('email'), validarEmail);
adicionarValidacaoOnBlur(document.getElementById('dataNascimento'), validarDataNascimento);
adicionarValidacaoOnBlur(document.getElementById('telefoneFixo'), validarTelefoneFixo);
adicionarValidacaoOnBlur(document.getElementById('telefoneCelular'), validarTelefoneCelular);
adicionarValidacaoOnBlur(document.getElementById('areaAtuacao'), validarAreaAtuacao);
adicionarValidacaoOnBlur(document.getElementById('matriculaProfessor'), validarMatriculaProfessor);
adicionarValidacaoOnBlur(document.getElementById('linkLattes'), validarLinkLattes);
adicionarValidacaoOnBlur(document.getElementById('curso'), validarCurso);
adicionarValidacaoOnBlur(document.getElementById('matriculaAluno'), validarMatriculaAluno);

// Máscara para telefones
function aplicarMascaraTelefone(event) {
    var input = event.target;
    var valor = input.value.replace(/\D/g, '');
    var id = input.id;

    if (id === 'telefoneFixo') {
        valor = valor.substring(0, 10);
        valor = valor.replace(/^(\d{2})(\d)/g, '($1)$2');
        valor = valor.replace(/(\d{4})(\d)/, '$1-$2');
    } else if (id === 'telefoneCelular') {
        valor = valor.substring(0, 11);
        valor = valor.replace(/^(\d{2})(\d)/g, '($1)$2');
        valor = valor.replace(/(\d{5})(\d)/, '$1-$2');
    }

    input.value = valor;
}

document.getElementById('telefoneFixo').addEventListener('input', aplicarMascaraTelefone);
document.getElementById('telefoneCelular').addEventListener('input', aplicarMascaraTelefone);

// Máscara para data de nascimento
function aplicarMascaraData(event) {
    var input = event.target;
    var valor = input.value.replace(/\D/g, '');
    valor = valor.substring(0, 8);
    valor = valor.replace(/(\d{2})(\d)/, '$1/$2');
    valor = valor.replace(/(\d{2})(\d)/, '$1/$2');
    input.value = valor;
}

document.getElementById('dataNascimento').addEventListener('input', aplicarMascaraData);

// Enviar o formulário e validar os campos feits
document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    validarNome();
    validarEmail();
    validarDataNascimento();
    validarTelefoneFixo();
    validarTelefoneCelular();
    validarPerfil();
    validarCamposEspecificos();

    var erros = document.querySelectorAll('.error');
    var formularioValido = true;

    erros.forEach(function(erro) {
        if (erro.textContent !== '') {
            formularioValido = false;
        }
    });

    if (formularioValido) {
        var nome = document.getElementById('nome').value.trim();
        var email = document.getElementById('email').value.trim();
        var dataNascimento = document.getElementById('dataNascimento').value.trim();
        var telefoneFixo = document.getElementById('telefoneFixo').value.trim();
        var telefoneCelular = document.getElementById('telefoneCelular').value.trim();

        var perfilProfessor = document.getElementById('professor').checked;
        var perfilAluno = document.getElementById('aluno').checked;

        if (perfilProfessor) {
            var areaAtuacao = document.getElementById('areaAtuacao').value.trim();
            var matriculaProfessor = document.getElementById('matriculaProfessor').value.trim();
            var linkLattes = document.getElementById('linkLattes').value.trim();

            var professor = new Professor(nome, email, dataNascimento, telefoneFixo, telefoneCelular, areaAtuacao, matriculaProfessor, linkLattes);
            console.log('Dados do Professor:', professor);
        } else if (perfilAluno) {
            var curso = document.getElementById('curso').value.trim();
            var matriculaAluno = document.getElementById('matriculaAluno').value.trim();

            var aluno = new Aluno(nome, email, dataNascimento, telefoneFixo, telefoneCelular, curso, matriculaAluno);
            console.log('Dados do Aluno:', aluno);
        }

        alert('Formulário enviado com sucesso!');
        document.getElementById('cadastroForm').reset();
        atualizarCamposDinamicos();
    } else {
        alert('Por favor, corrija os erros no formulário.');
    }
});

// Atualizar campos dinâmicos ao carregar a página (sumir com os campos que não estão selecionados)
window.addEventListener('load', atualizarCamposDinamicos);

// Limpar os erros ao clicar no botão de limpar (redefinir)
document.getElementById('cadastroForm').addEventListener('reset', function() {
    var erros = document.querySelectorAll('.error');
    erros.forEach(function(erro) {
        erro.textContent = '';
    });
    atualizarCamposDinamicos();
});
