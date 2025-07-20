const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  // animação do botão
  menuToggle.classList.toggle('ativo');

  // animação do menu
  menu.classList.toggle('aberto');
});
