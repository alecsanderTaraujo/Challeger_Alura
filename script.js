function limparTexto(textarea) {
    if (textarea.value === "Digite sua mensagem!") {
        textarea.value = "";
        textarea.classList.add("digitando");
    }
}

function reporTexto(textarea) {
    if (textarea.value === "") {
        textarea.value = "Digite sua mensagem!";
        textarea.classList.remove("digitando");
    }
}

function criptografar() {
    const imagem = document.getElementById("conteudo__mostra__imagem");
    const textoInfo = document.getElementById("conteudo__mostra__info");
    const alternativo = document.getElementById("conteudo__mostra__alt");
    const textoLimpo = document.getElementById("conteudo__criptografia__caixa");
    const caixaTexto = document.getElementById("conteudo__mostra__resultado");

    trocaCena(textoLimpo, alternativo, imagem, textoInfo);

    if (textoLimpo.value !== "Digite sua mensagem!") {
        caixaTexto.value = textoLimpo.value
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
        textoLimpo.value = "Digite sua mensagem!";
    }
}

function descriptografar() {
    const imagem = document.getElementById("conteudo__mostra__imagem");
    const textoInfo = document.getElementById("conteudo__mostra__info");
    const alternativo = document.getElementById("conteudo__mostra__alt");
    const textoLimpo = document.getElementById("conteudo__criptografia__caixa");
    const caixaTexto = document.getElementById("conteudo__mostra__resultado");

    trocaCena(textoLimpo, alternativo, imagem, textoInfo);

    if (textoLimpo.value !== "Digite sua mensagem!") {
        caixaTexto.value = textoLimpo.value
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        textoLimpo.value = "Digite sua mensagem!";
    }
}

function copiar() {
    const caixaTexto = document.getElementById("conteudo__mostra__resultado");
    navigator.clipboard.writeText(caixaTexto.value);
}

function trocaCena(textoLimpo, alternativo, imagem, textoInfo) {
    if (textoLimpo.value !== "Digite sua mensagem!" && alternativo.style.display === "none") {
        imagem.style.display = "none";
        textoInfo.style.display = "none";
        alternativo.style.display = "flex";
    } else {
        if (window.innerWidth > 1024) {
            imagem.style.display = "block";
        }
        textoInfo.style.display = "flex";
        alternativo.style.display = "none";
    }
}
