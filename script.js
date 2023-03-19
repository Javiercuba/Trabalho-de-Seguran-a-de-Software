const form = document.querySelector("form");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (usernameInput.value === "" || passwordInput.value === "") {
    alert("Por favor, preencha todos os campos.");
    return;
  }
  if (passwordInput.value.length < 6) {
    alert("A senha deve ter pelo menos 6 caracteres.");
    return;
  }
  if (
    !passwordInput.value.match(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).+$/
    )
  ) {
    alert(
      "A senha deve conter pelo menos uma letra maiúscula, um número e um símbolo."
    );
    return;
  }
  // Se chegamos até aqui, os campos foram preenchidos corretamente
  alert("Login realizado com sucesso!");
});

