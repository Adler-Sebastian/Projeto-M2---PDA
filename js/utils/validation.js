let cpf = document.getElementById("cpf");
let cpfMessage = document.getElementById("cpfMessage");
let number = document.getElementById("number");

cpf.addEventListener("input", cpfValidation);
function cpfValidation() {
  let cpfInput = cpf.value;
  let cpfDigits = cpfInput.replace(/\D/g, "");

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
let city = document.getElementById("city");
let neighborhood = document.getElementById("neighborhood");
let road = document.getElementById("road");
let cepMessage = document.getElementById("cepMessage");
zipCode.addEventListener("input", address);
function address() {
  let zipCode = document.getElementById("zipCode").value;

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

  let url = `https://viacep.com.br/ws/${zipCode}/json/`;

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
let registrationHide = document.querySelector(".auth-container");
let loginForm = document.querySelector(".containerLogin");
let backRegistration = document.getElementById("backRegistration");

link.addEventListener("click", function (e) {
  e.preventDefault();
  registrationHide.style.display = "none";
  loginForm.style.display = "block";
});
document
  .getElementById("backRegistration")
  .addEventListener("click", function (e) {
    e.preventDefault();
  });

backRegistration.addEventListener("click", function (e) {
  e.preventDefault();
  registrationHide.style.display = "block";
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
let dateInput = document.getElementById("date");
let generoInputs = document.querySelectorAll('input[name="gender"]');
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
    email.value !== "" &&
    cpf.value !== ""
  ) {
    let user = JSON.parse(localStorage.getItem("user") || "[]");
    user.push({
      nameLocalStorage: name.value,
      nameLogin: login.value,
      passwordLocalStorage: password.value,
    });
    localStorage.setItem("user", JSON.stringify(user));

    message.innerHTML = "Cadastrado com sucesso!!";
    registrationHide.style.display = "none";
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
  message.innerHTML = ''
  number2.value = "";
  cpf.value = "";
});

let logInto = document.getElementById("logInto");
let toCleanLogin = document.getElementById("toCleanLogin");
let inputLogin = document.getElementById("inputLogin");
let messageLogin = document.getElementById("messageLogin");

toCleanLogin.addEventListener("click", function (event) {
  event.preventDefault();

  inputLogin.value = "";
  passwordInput.value = "";
  messageLogin.innerHTML = "";
});

logInto.addEventListener("click", function (event) {
  event.preventDefault();
  let listaUser = [];
  let valid = {
    user: "",
    senha: "",
  };
  listaUser = JSON.parse(localStorage.getItem("user"));

  listaUser.forEach((item) => {
    if (
      inputLogin.value == item.nameLogin &&
      passwordInput.value == item.passwordLocalStorage
    ) {
      valid = {
        user: item.nameLogin,
        senha: item.passwordLocalStorage,
      };
    }
  });
  if(inputLogin.value == valid.user && passwordInput.value == valid.senha && valid.user != "" && valid.senha != ""){
    window.location.href = '../Dashboard/dashboard.html';
} else {
    messageLogin.innerHTML='Usuário não encontrado';
}

});
