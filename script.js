const form = document.querySelector("form");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");

var senha = document.getElementById("password").value;

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (usernameInput.value === "" || passwordInput.value === "") {
    document.querySelector(".error-message").textContent =
      "Preencha todos os campos";
    return;
  }
  if (passwordInput.value.length < 6) {
    document.querySelector(".error-message").textContent =
      "A senha deve ter no mínimo 6 caracteres.";
    return;
  }
  if (!passwordInput.value.match(/^(?=.*\d)/)) {
    document.querySelector(".error-message").textContent =
      "A senha deve conter pelo menos um numero.";
    return;
  }
  // Se chegamos até aqui, os campos foram preenchidos corretamente
  alert("Login realizado com sucesso!");
  var token = "xyz123";
  // Armazenar o token de autenticação no localStorage
  localStorage.setItem("authToken", token);
  window.location.href = "criptografia.html";
});

document.getElementById("pass").addEventListener("mousedown", function () {
  document.getElementById("cpf").type = "text";
  document.getElementById("password").type = "text";
});

document.getElementById("pass").addEventListener("mouseup", function () {
  document.getElementById("cpf").type = "password";
  document.getElementById("password").type = "password";
});

// Para que o password não fique exposto apos mover a imagem.
document.getElementById("pass").addEventListener("mousemove", function () {
  document.getElementById("cpf").type = "password";
  document.getElementById("password").type = "password";
});
