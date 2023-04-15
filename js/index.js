let header = document.querySelector("header");
let btnHamburger = document.querySelector(".header__hamburger-button");
let hamburgerList = document.querySelector(".header-nav__list");
let hamburgerLinks = document.querySelectorAll(".header-nav__link");

// Открываем гамбургер по нажатию
btnHamburger.addEventListener("click", function () {
  hamburgerList.classList.toggle("open");
  header.classList.toggle("open");
});

// Закрываем гамбургер при нажатии на ссылку
hamburgerLinks.forEach((a) => {
  a.addEventListener('click', () => {
    hamburgerList.classList.remove("open");
    header.classList.remove("open");
  })
})

// 
document.querySelectorAll('a[href*="#"]').forEach(anchor => anchor.addEventListener("click", function (e) {
  const anchorTargetID = anchor.getAttribute("href").substring(1);
  const $anchorTarget = document.getElementById(anchorTargetID);

  if (!$anchorTarget) return;

  e.preventDefault();
  $anchorTarget.scrollIntoView({ behavior: "smooth", block: "start" });
}));