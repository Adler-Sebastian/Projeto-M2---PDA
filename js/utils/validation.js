const cpf = document.getElementById("cpf");
const cpfMessage = document.getElementById("cpfMessage");
const number = document.getElementById("number");

cpf.addEventListener("input", cpfValidation);
function cpfValidation() {
  const cpfInput = cpf.value;
  const cpfDigits = cpfInput.replace(/\D/g, "");

  if (cpfDigits.length !== 11) {
    cpfMessage.innerHTML = "Deve conter exatamente 11 dígitos.";
    return;
  }
  if (
    cpfInput === "00000000000" ||
    cpfInput === "11111111111" ||
    cpfInput === "22222222222" ||
    cpfInput === "33333333333" ||
    cpfInput === "44444444444" ||
    cpfInput === "55555555555" ||
    cpfInput === "66666666666" ||
    cpfInput === "77777777777" ||
    cpfInput === "88888888888" ||
    cpfInput === "99999999999"
  ) {
    cpfMessage.innerHTML = "Não repita os números.";

    return false;
  }
  let sum = 0;
  let rest;

  for (let i = 0; i < 9; i++) {
    sum = sum + parseInt(cpfInput.charAt(i)) * (10 - i);
  }
  rest = (sum * 10) % 11;
  if (rest == 10 || rest == 11) rest = 0;
  if (rest != parseInt(cpfInput.charAt(9))) {
    cpfMessage.innerHTML = "inválido.";
    return;
  }

  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum = sum + parseInt(cpfInput.charAt(i)) * (11 - i);
  }
  rest = (sum * 10) % 11;
  if (rest == 10 || rest == 11) rest = 0;
  if (rest != parseInt(cpfInput.charAt(10))) {
    cpfMessage.innerHTML = " inválido.";
    return;
  }

  cpfMessage.innerHTML = "CPF válido.";
}

$(document).ready(function () {
  //celular
  $("#number").mask("(99) 99999-9999");
});

zipCode.addEventListener("input", address);
function address() {
  const zipCode = document.getElementById("zipCode").value;
  const city = document.getElementById("city");
  const neighborhood = document.getElementById("neighborhood");
  const road = document.getElementById("road");
  const cepMessage = document.getElementById("cepMessage");

  if (zipCode.length !== 8) {
    city.value = "";
    neighborhood.value = "";
    road.value = "";
  }

  if (zipCode === "") {
    cepMessage.innerHTML = "";
    return;
  } else if (zipCode.length !== 8) {
    cepMessage.innerHTML = "Digite apenas os 8 dígitos do CEP!";
    return;
  }

  const url = `https://viacep.com.br/ws/${zipCode}/json/`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.erro) {
        cepMessage.innerHTML = "CEP não encontrado";
      } else {
        city.value = data.localidade;
        road.value = data.logradouro;
        neighborhood.value = data.bairro;
        cepMessage.innerHTML = "";
      }
    });
}

let PasswordC = document.getElementById("PasswordC");

PasswordC.addEventListener("input", verification);
function verification() {
  let password = document.getElementById("password").value;
  let PasswordCValue = PasswordC.value;
  let message = document.getElementById("message");

  if (password !== PasswordCValue && PasswordCValue !== "") {
    message.innerHTML = "As senhas não conferem";
  } else {
    message.innerHTML = "";
  }
}



let link = document.getElementById("link")
let cadastro = document.querySelector(".auth-container"); 
let loginForm = document.getElementById('toEnter')
let voltar = document.getElementById('voltarCadastro')


link.addEventListener("click", function (e) {
  e.preventDefault();
  cadastro.style.display = "none"; 
  loginForm.style.display = "block"; 
});

voltar.addEventListener("click", function (e) {
  e.preventDefault();
  cadastro.style.display = "block"; 
  loginForm.style.display = "none";
});