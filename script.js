let guia = 1;


/* descobre em qual guia estamos*/
const parametros = new URLSearchParams(window.location.search);

if (parametros.get("guia")) {
    guia = Number(parametros.get("guia"));
}


/* elementos da pag*/
const titulo = document.getElementById("titulo");
const mensagem = document.getElementById("mensagem");
const rato = document.getElementById("rato");
const contador = document.getElementById("contador");


/* configura a pag dependendo da guia*/
function configurarGuia() {

    contador.innerText = "Guia " + guia;


    /**guia um/ */
    if (guia === 1) {

        titulo.innerText = "ENCONTREM O RATO";

        mensagem.innerText =
            "O rato está escondido em algum lugar...";

    }


    /*guia dois */
    else if (guia === 2) {

        titulo.innerText = "ENCONTREM O RATO";

        mensagem.innerText =
            "O rato fugiu da guia anterior.";

    }


    /*guia tres*/
    else if (guia === 3) {

        titulo.innerText = "ENCONTREM O RATO";

        mensagem.innerText =
            "Vocês estão chegando perto...";

    }


    /*guia quatro*/
    else if (guia === 4) {

        titulo.innerText = "🐀";

        mensagem.innerText =
            "ELE ESTÁ AQUI!";

    }


    /*guia cinco*/
    else if (guia === 5) {

        titulo.innerText = "O RATO FUGIU NOVAMENTE KJKKKKKKKKKKKKKKKKKKKK.";

        mensagem.innerText =
            "Ele estava aqui. Vocês perderam.";

    }


    /*outras guias*/
    else {

        titulo.innerText = "🐀💨";

        mensagem.innerText =
            "O rato fugiu para outra guia.";

    }


    /*coloca o rato em uma posição diferente*/
    posicionarRato();
}


/* faz */
function posicionarRato() {

    const area = document.getElementById("area");

    const largura = area.clientWidth - 50;
    const altura = area.clientHeight - 50;

    const x = Math.random() * largura;
    const y = Math.random() * altura;

    rato.style.left = x + "px";
    rato.style.top = y + "px";
}


/* quando o usuario clica no rato*/
function ratoClicado() {

    const proximaGuia = guia + 1;


    window.open(
        "index.html?guia=" + proximaGuia,
        "_blank"
    );
}


configurarGuia();