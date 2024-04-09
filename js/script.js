document.addEventListener('DOMContentLoaded', function () {
  const menuRadios = document.querySelectorAll('.menu-radio');

  // Função para exibir a página correspondente e ocultar as outras
  function showPage(pageName) {
      const pages = document.querySelectorAll('.page-content');
      pages.forEach(page => {
          if (page.id === pageName + 'Page') {
              page.style.display = 'flex'; // Exibe a página correspondente
          } else {
              page.style.display = 'none'; // Oculta as outras páginas
          }
      });
  }

  // Adiciona um evento de mudança a cada input de rádio do menu
  menuRadios.forEach(radio => {
      radio.addEventListener('change', function () {
          const pageName = this.value; // Obtém o valor do input de rádio

          showPage(pageName); // Exibe a página correspondente
      });
  });
});
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
