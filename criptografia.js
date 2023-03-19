// Captura elementos HTML
const texto = document.getElementById("texto");
const resultado = document.getElementById("resultado");
const criptografarBotao = document.getElementById("criptografar");
const descriptografarBotao = document.getElementById("descriptografar");

var token = localStorage.getItem("authToken");

var headers = { Authorization: "Bearer " + token };
// var token = req.headers.authorization.split(" ")[1];
if (token !== "xyz123") {
  window.location.href = "/index.html";
}
// Fazer uma solicitação ao servidor com o cabeçalho Authorization

// Função para criptografar uma palavra
function criptografarPalavra(palavra) {
  let criptografado = "";
  for (let i = 0; i < palavra.length; i++) {
    criptografado += String.fromCharCode(palavra.charCodeAt(i) + 1);
  }
  return criptografado;
}

// Função para descriptografar uma palavra
function descriptografarPalavra(palavra) {
  let descriptografado = "";
  for (let i = 0; i < palavra.length; i++) {
    descriptografado += String.fromCharCode(palavra.charCodeAt(i) - 1);
  }
  return descriptografado;
}

// Função para criptografar um texto
function criptografarTexto(texto) {
  let palavras = texto.split(" ");
  let criptografado = "";
  for (let i = 0; i < palavras.length; i++) {
    criptografado += criptografarPalavra(palavras[i]) + " ";
  }
  return criptografado;
}

// Função para descriptografar um texto
function descriptografarTexto(texto) {
  let palavras = texto.split(" ");
  let descriptografado = "";
  for (let i = 0; i < palavras.length; i++) {
    descriptografado += descriptografarPalavra(palavras[i]) + " ";
  }
  return descriptografado;
}

// Função para criptografar um arquivo
function criptografarArquivo(arquivo) {
  // Implemente aqui a lógica para criptografar um arquivo
}

// Função para descriptografar um arquivo
function descriptografarArquivo(arquivo) {
  // Implemente aqui a lógica para descriptografar um arquivo
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

// Define o modo de criptografia inicial como criptografar
let modoCriptografia = "criptografar";

// Atualiza o resultado inicialmente
atualizarResultado();
