const botoes = document.querySelectorAll('.botao');
const filmes = document.querySelectorAll(".filme");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        desselecionarBotao();
        desselecionarFilme();

        botao.classList.add("selecionado");

        filmes[indice].classList.add("selecionado");
    });
});

function desselecionarFilme() {
    const filmeSelecionado = document.querySelector(".filme.selecionado");
    filmeSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

