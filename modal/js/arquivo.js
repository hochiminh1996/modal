document.addEventListener("DOMContentLoaded", main);


function eventos(img) {
    const modal = document.querySelector(".modal-wrapper");
    const buttonModalOpen = document.querySelector("#openModal");
    const buttonModalClose = document.querySelector("#closeModal");
    // acessando o btn de abrir modal, fechar modal e o modal e si

    //quando for clicado em informações, ele adiciona um evento
    buttonModalOpen.addEventListener("click", () => {
        img.classList.add("remove-img");//adicionando a classe para remover a img do inicio

        //verifica se a classe já existe, para evitar processamento desnecessário
        if (modal.classList.contains("invisible")) {
            modal.classList.remove("invisible");//ele remove a classe que deixa a div invisível
            buttonModalOpen.classList.add("opacity");//remove o btn informações
        }

    })

    //fecha o modal se for pressionado o Escape ou esc
    document.addEventListener("keyup", (event) => {

        img.classList.remove("remove-img");//remove o display none, e a img volta

        const isEscKey = event.key === "Escape";
        //verifica se a tecla digitado foi o escape

        if (isEscKey) {
            buttonModalOpen.classList.remove("opacity");//retira a classe q deixa invisível o btn de informações, ele voltará a apaerecer

            modal.classList.add("invisible");//adiciona a classe invisível ao nosso modal, ele não vai aparecer mais
        }

    })

    //se for clicado em sair, dentro do input do modal
    buttonModalClose.addEventListener("click", () => {

        img.classList.remove("remove-img");//remove o display none, e a img volta

        modal.classList.add("invisible");//faz o modal ficar invisível
        buttonModalOpen.classList.remove("opacity");//faz ficar visível o nosso botão informação, já qu estamos romovendo a classe qeu deixava invisível
    })

}


function informacoes(modal) {
    const div_info = document.querySelector("#info");
    const btn_close = document.querySelector("#closeModal")

    const h1 = document.createElement("h1");
    const img = document.createElement("img");
    const p = document.createElement("p");


    h1.textContent = "Sobre mim";
    img.setAttribute("class", "imagem");
    img.title = "Olá, mundo";
    img.src = "img/img.jpg";
    p.setAttribute("class", "paragrafo")
    p.textContent = "Meu nome é Felippe Marques, sou estudante de Análise e Desenvolvimento de Sistemas (ADS) no Instituto Federal de São Paulo (IFSP). Tenho interesse em desenvolvimento de software e gosto de usar a tecnologia para resolver problemas e criar soluções inovadoras. No meu tempo livre, gosto de assistir séries, ler livros de ficção científica e geopolítica. Estou sempre procurando por novas oportunidades de aprendizado.";

    div_info.appendChild(h1);
    div_info.appendChild(img)
    div_info.appendChild(p);

}

function main() {
    const img = document.querySelector(".imagem");

    //função exclusiva para eventos
    eventos(img);

    //função para inserir elementos e informações do modal
    informacoes();




}




