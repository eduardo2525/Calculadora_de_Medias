const container = document.querySelector('.container');
const modal = document.querySelector('.modal');
const buttonModal = document.getElementById('button--modal')
const adicionar = document.getElementById('Adicionar');
const aprovadoImg = '<img src="./source/imagens/aprovado.png" alt="aprovado">';
const reprovadoImg = '<img src="./source/imagens/reprovado.png" alt="reporvado">';
let resultado;

const atividades = [];
const notas = [];

buttonModal.addEventListener('click', (e) => {
    e.preventDefault();
    const mensagemP = document.getElementById('mensagem--input');
    const inputModal = document.querySelector('.input--modal').value;
    resultado = inputModal;

    if (inputModal > 10) {
        mensagemP.style.display = 'block';
        document.querySelector('.input--modal').value = '';
    }else if (inputModal !== '') {
        modal.style.display = 'none';
        container.style.opacity = '1.0';
    }
})

let linhas = '';
adicionar.addEventListener('click', () => {
    
    adicionarLinha();
    atualizaTabela();
    calculoMedia()
    liparCampo();
})

function adicionarLinha() {
    let materia = document.getElementById('materia').value;
    let nota = parseInt(document.getElementById('nota').value);
    let media = document.getElementById('media-valor-final');

    

    if (nota >= 11) {
        document.getElementById('materia').value = '';
        document.getElementById('nota').value = '';
        media.value = '';
        mediaResultadoFinal.value = '';
    }

    atividades.push(materia)
    notas.push(parseFloat(nota));

        let linha = '<tr>';
        linha += `<td>${materia}</td>`;
        linha += `<td>${nota}</td>`;
        linha += `<td>${nota >= 6 ? aprovadoImg : reprovadoImg}</td>`;
        linha += '</tr>';

        linhas += linha;
    
}

function atualizaTabela() {
    let tbody = document.getElementById('tbody');
    tbody.innerHTML = linhas;
}

function calculoMedia() {
    let mediaFinal = document.getElementById('media-valor-final');
    let mediaResultadoFinal = document.getElementById('media-resultado-final');
    let somaDasNotas = 0;

    for(let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }

    let mediaDasNotas = somaDasNotas / atividades.length;
    console.log(mediaDasNotas)

    mediaFinal.innerHTML = mediaDasNotas.toFixed(2);

    if (mediaDasNotas >= resultado) {
        mediaResultadoFinal.innerText = 'Aprovado';
        mediaResultadoFinal.style.background = 'green';
        mediaResultadoFinal.style.color = 'white';
        mediaResultadoFinal.style.borderRadius = '16px';
    }else {
        mediaResultadoFinal.innerText = 'Reprovado';
        mediaResultadoFinal.style.background = 'red';
        mediaResultadoFinal.style.color = 'white';
        mediaResultadoFinal.style.borderRadius = '16px';
    }
}

function liparCampo() {
    document.getElementById('materia').value = '';
    document.getElementById('nota').value = '';
}