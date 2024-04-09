// Determinação de variáveis no script

const header = document.querySelector("header")
const closeIcon = document.querySelector("#close-icon")
const menuIcon = document.querySelector("#menu-icon")

// Script para fechar o menu
closeIcon.addEventListener("click", () => {
    menuIcon.click();
});

// Script para abrir o menu
menuIcon.addEventListener("click", () => {
    header.classList.toggle("show-mobile-menu");
});