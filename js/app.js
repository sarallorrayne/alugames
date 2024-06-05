let jogosAlugados = 0;

function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

    if (imagem.classList.contains("dashboard__item__img--rented")) {
        jogosAlugados--;
        if (confirm(`Você tem certeza de que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
            imagem.classList.remove("dashboard__item__img--rented");
            botao.classList.remove("dashboard__item__button--return");
            botao.textContent = 'Alugar';
            alert(`O jogo foi devolvido com sucesso.`);
            }
        } else {
            imagem.classList.add("dashboard__item__img--rented");
            botao.textContent = 'Devolver';
            botao.classList.add("dashboard__item__button--return");
            jogosAlugados++;
        }
        contarEExibirJogosAlugados();
}

document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
        contarEExibirJogosAlugados();
});