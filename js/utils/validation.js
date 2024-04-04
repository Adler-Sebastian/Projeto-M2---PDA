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

  cpfMessage.innerHTML = "";
}

$(document).ready(function () {
  //celular
  $("#number").mask("(99) 99999-9999");
});
const city = document.getElementById("city");
const neighborhood = document.getElementById("neighborhood");
const road = document.getElementById("road");
const cepMessage = document.getElementById("cepMessage");
zipCode.addEventListener("input", address);
function address() {
  const zipCode = document.getElementById("zipCode").value;

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

let link = document.getElementById("link");
let cadastro = document.querySelector(".auth-container");
let loginForm = document.querySelector(".containerLogin");
let voltar = document.getElementById("voltarCadastro");

link.addEventListener("click", function (e) {
  e.preventDefault();
  cadastro.style.display = "none";
  loginForm.style.display = "block";
});
document.getElementById('voltarCadastro').addEventListener('click', function(e) {
  e.preventDefault();

  
});

voltar.addEventListener("click", function (e) {
  e.preventDefault();
  cadastro.style.display = "block";
  loginForm.style.display = "none";
});

let seePassword = document.getElementById("seePassword");
let seePassword2 = document.getElementById("seePassword2");
let password = document.getElementById("password");
let PasswordLogin = document.getElementById("PasswordLogin");
let passwordInput = document.getElementById("passwordInput");

seePassword.addEventListener("click", function () {
  if (password.getAttribute("type") == "password") {
    password.setAttribute("type", "text");
  } else {
    password.setAttribute("type", "password");
  }
});

seePassword2.addEventListener("click", function () {
  if (PasswordC.getAttribute("type") == "password") {
    PasswordC.setAttribute("type", "text");
  } else {
    PasswordC.setAttribute("type", "password");
  }
});

PasswordLogin.addEventListener("click", function () {
  if (passwordInput.getAttribute("type") == "password") {
    passwordInput.setAttribute("type", "text");
  } else {
    passwordInput.setAttribute("type", "password");
  }
});

let register = document.querySelector(".register");
let toClean = document.querySelector(".toClean");
let formCadastro = document.getElementById("formCadastro");

let name = document.getElementById("name");
let date = document.getElementById("date");
let number2 = document.getElementById("number");
let zipCode2 = document.getElementById("zipCode");
let login = document.getElementById("login");
let message = document.getElementById("message");
let num = document.getElementById("num");
const dateInput = document.getElementById("date");
const generoInputs = document.querySelectorAll('input[name="gender"]');
let generoSelecionado = false;
let complement = document.getElementById("complement");
let email = document.getElementById("email");

formCadastro.addEventListener("submit", (event) => {
  event.preventDefault();

  let generoSelecionado = false;
  generoInputs.forEach(function (input) {
    if (input.checked) {
      generoSelecionado = true;
    }
  });

  if (
    name.value !== "" &&
    zipCode2.value !== "" &&
    login.value !== "" &&
    password.value !== "" &&
    PasswordC.value !== "" &&
    city.value !== "" &&
    neighborhood.value !== "" &&
    road.value !== "" &&
    generoSelecionado &&
    dateInput.value !== "" &&
    num.value !== "" &&
    complement.value !== "" &&
    email.value !== "" &&
    cpf.value !== ""
  ) {
    message.innerHTML = "Cadastrado com sucesso!!";
    cadastro.style.display = "none";
    loginForm.style.display = "block";
  } else {
    message.innerHTML = "Campos inválidos";
  }
});

toClean.addEventListener("click", (event) => {
  event.preventDefault();
  name.value = "";
  login.value = "";
  login.value = "";
  zipCode2.value = "";
  password.value = "";
  PasswordC.value = "";
  city.value = "";
  neighborhood.value = "";
  road.value = "";
  generoInputs.forEach((input) => {
    input.checked = false;
  });
  dateInput.value = "";
  num.value = "";
  complement.value = "";
  email.value = "";
  cepMessage.innerHTML = "";
  cpfMessage.innerHTML = "";
  number2.value = "";
  cpf.value = "";
  
});


let logar = document.getElementById('logar')
let limpar = document.getElementById('limpar')
let inputLogin = document.getElementById('inputLogin')
let messageLogin = document.getElementById('messageLogin')

limpar.addEventListener('click', function(event){
  event.preventDefault();

  inputLogin.value=""
  passwordInput.value=""
  messageLogin.innerHTML = ""
});

logar.addEventListener("click", function(event)
{
  event.preventDefault();
  if (
    inputLogin.value !== "" &&
    passwordInput.value !== "" 
   
  ) {
    messageLogin.innerHTML = "Cadastrado com sucesso!!"
  } else {
    messageLogin.innerHTML = "Campos inválidos";
  }
})