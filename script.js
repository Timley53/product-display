"strict mode";

////////////product object
const menuBar = document.querySelector(".menu");
const closeMobileNav = document.querySelector(".close-mobile-nav");
const navCart = document.querySelector(".nav-cart");

/////// menus
menuBar.addEventListener("click", function () {
  navCart.classList.toggle("mobile-nav");
  navCart.classList.toggle("translate");
});
closeMobileNav.addEventListener("click", function () {
  navCart.classList.toggle("mobile-nav");
  navCart.classList.toggle("translate");
});
///////////
