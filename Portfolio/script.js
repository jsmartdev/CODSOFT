const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-menu");
const header = document.querySelector(".noggin")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})