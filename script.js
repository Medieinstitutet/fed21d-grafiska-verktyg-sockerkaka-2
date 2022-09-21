const menu = document.getElementById("menu");
const menuLinks = document.getElementById("menuLinks");

menu.onclick = function () {
  menu.classList.toggle("openMenu");
  menuLinks.classList.toggle("openMenuLinks");
};
