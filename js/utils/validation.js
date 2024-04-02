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
