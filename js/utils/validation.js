const cpf = document.getElementById("cpf");
const cpfMessage = document.getElementById("cpfMessage");

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
    "11111111111" ||
    "22222222222" ||
    "33333333333" ||
    "44444444444" ||
    "55555555555" ||
    "66666666666" ||
    "77777777777" ||
    "88888888888" ||
    "99999999999"
  ) {
    cpfMessage.innerHTML = "Não repita os números.";  
  }

  let soma = 0;
  let resto;

  for (let i = 0; i < 9; i++) {
    soma = soma + parseInt(cpfInput.charAt(i)) * (10 - i);
  }
  resto = (soma * 10) % 11;
  if (resto == 10 || resto == 11) resto = 0;
  if (resto != parseInt(cpfInput.charAt(9))) {
    cpfMessage.innerHTML = "inválido.";
    return;
  }

  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma = soma + parseInt(cpfInput.charAt(i)) * (11 - i);
  }
  resto = (soma * 10) % 11;
  if (resto == 10 || resto == 11) resto = 0;
  if (resto != parseInt(cpfInput.charAt(10))) {
    cpfMessage.innerHTML = " inválido.";
    return;
  }

  cpfMessage.innerHTML = "CPF válido.";
}
