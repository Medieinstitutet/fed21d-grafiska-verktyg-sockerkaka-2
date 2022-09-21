const menu = document.getElementById("menu");
const menuLinks = document.getElementById("menuLinks");

menu.onclick = function () {
  menu.classList.toggle("openMenu");
  menuLinks.classList.toggle("openMenuLinks");
  document.body.style.overflowY =
    document.body.style.overflowY === "hidden" ? "visible" : "hidden";
};
