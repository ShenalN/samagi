const menu = document.querySelector('.menu');
const navMenu = document.querySelector('.nav-menu')
menu.onclick = () => {
  navMenu.classList.toggle('c')
  menu.classList.toggle('menuclose');
  
}

navMenu.onclick = () => {
  navMenu.classList.toggle('c')
  menu.classList.toggle('menuclose')
}


