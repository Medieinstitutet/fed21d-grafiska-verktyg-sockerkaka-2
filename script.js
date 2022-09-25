// Menu
const menu = document.getElementById("menu");
const menuLinks = document.getElementById("menuLinks");

menu.addEventListener("click", () => {
  menu.classList.toggle("openMenu");
  menuLinks.classList.toggle("openMenuLinks");
  document.body.style.overflowY =
    document.body.style.overflowY === "hidden" ? "visible" : "hidden";
});

// Cookies
document.getElementById("cookieBtn").addEventListener("click", () => {
  document.getElementById("cookieContainer").style.display = "none";
});
