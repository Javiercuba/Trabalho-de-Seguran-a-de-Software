// Captura elementos HTML
const texto = document.getElementById("texto");
const resultado = document.getElementById("resultado");
const criptografarBotao = document.getElementById("criptografar");
const descriptografarBotao = document.getElementById("descriptografar");
const metodo = document.getElementById("opcaoMetodos");
var token = localStorage.getItem("authToken");

var headers = { Authorization: "Bearer " + token };
// var token = req.headers.authorization.split(" ")[1];
if (token !== "xyz123") {
  window.location.href = "/index.html";
}
const metodoSelecionado = metodo.value;
//pegar metodo selecionado
function opcaoSelecionada() {
  console.log(metodoSelecionado);
}

//Metodos de criptografia

function Metodo1(palavra) {
  let criptografado = "";
  for (let i = 0; i < palavra.length; i++) {
    criptografado += String.fromCharCode(palavra.charCodeAt(i) + 1);
  }
  return criptografado;
}
function MetodoAES(mensagem) {
  let mensagemCriptografada = "";
  let chave = "oitudobombb?";
  for (let i = 0; i < mensagem.length; i++) {
    let char = mensagem.charCodeAt(i);
    let chaveChar = chave.charCodeAt(i % chave.length);

    let charCriptografado = char ^ chaveChar; // Operação XOR
    mensagemCriptografada += String.fromCharCode(charCriptografado);
  }

  return mensagemCriptografada;
}

function CriptografaMetodo2(palavra) {
  criptografado = palavra
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  return criptografado;
}

function DescriptografarMetodo2(palavra) {
  let descriptografado = palavra
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  return descriptografado;
}

// Função para descriptografar uma palavra
function DescriptografarMetodo1(palavra) {
  let descriptografado = "";
  for (let i = 0; i < palavra.length; i++) {
    descriptografado += String.fromCharCode(palavra.charCodeAt(i) - 1);
  }
  return descriptografado;
}

function DescriptografarMetodoAES(mensagemCriptografada) {
  let mensagemDescriptografada = "";
  let chave = "oitudobombb?";
  for (let i = 0; i < mensagemCriptografada.length; i++) {
    let charCriptografado = mensagemCriptografada.charCodeAt(i);
    let chaveChar = chave.charCodeAt(i % chave.length);

    let charDescriptografado = charCriptografado ^ chaveChar; // Operação XOR
    mensagemDescriptografada += String.fromCharCode(charDescriptografado);
  }

  return mensagemDescriptografada;
}
// Função para criptografar um texto
function criptografarTexto(texto) {
  console.log("entrei");
  const metodoSelecionado = metodo.value;
  let palavras = texto.split(" ");
  let criptografado = "";
  for (let i = 0; i < palavras.length; i++) {
    switch (metodoSelecionado) {
      case "Metodo1":
        criptografado += Metodo1(palavras[i]) + " ";
        break;
      case "Metodo2":
        criptografado += CriptografaMetodo2(palavras[i]) + " ";
        break;
      case "Metodo3":
        criptografado += MetodoAES(palavras[i]) + " ";
        break;

      default:
        console.log("Metodo Não encontrador");
        break;
    }
  }

  return criptografado;
}

// Função para descriptografar um texto
function descriptografarTexto(texto) {
  const metodoSelecionado = metodo.value;
  let palavras = texto.split(" ");
  let descriptografado = "";
  for (let i = 0; i < palavras.length; i++) {
    switch (metodoSelecionado) {
      case "Metodo1":
        descriptografado += DescriptografarMetodo1(palavras[i]) + " ";
        break;
      case "Metodo2":
        descriptografado += DescriptografarMetodo2(palavras[i]) + " ";
        break;
      case "Metodo3":
        descriptografado += DescriptografarMetodoAES(palavras[i]) + " ";
        break;

      default:
        console.log("Metodo Não encontrador");
        break;
    }
  }
  return descriptografado;
}

// Função para atualizar o resultado
function atualizarResultado() {
  let valor = texto.value;
  if (modoCriptografia === "criptografar") {
    resultado.value = criptografarTexto(valor);
  } else {
    resultado.value = descriptografarTexto(valor);
  }
}
//Evento para selecionar o metodo
metodo.addEventListener("click", function () {
  console.log(metodo.value);
});

// Adiciona evento para atualizar o resultado quando o texto é alterado
texto.addEventListener("input", atualizarResultado);

criptografarBotao.addEventListener("click", function () {
  modoCriptografia = "criptografar";
  atualizarResultado();
});

// Adiciona evento para descriptografar quando o botão Descriptografar é clicado
descriptografarBotao.addEventListener("click", function () {
  modoCriptografia = "descriptografar";
  atualizarResultado();
});

let modoCriptografia = "criptografar";

// Atualiza o resultado inicialmente
atualizarResultado();
