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
