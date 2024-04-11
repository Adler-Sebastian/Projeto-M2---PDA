document.addEventListener('DOMContentLoaded', function () {
  const menuRadios = document.querySelectorAll('.menu-radio');

  function showPage(pageName) {
      const pages = document.querySelectorAll('.page-content');
      pages.forEach(page => {
          if (page.id === pageName + 'Page') {
              page.style.display = 'flex'; 
          } else {
              page.style.display = 'none'; 
          }
      });
  }

  menuRadios.forEach(radio => {
      radio.addEventListener('change', function () {
          const pageName = this.value;

          showPage(pageName); 
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

// Script de redirecionamento ao login

let register=document.getElementById("register"
)
register.addEventListener("click",function(){
    window.location.href="../../pages/Login/login.html"
})