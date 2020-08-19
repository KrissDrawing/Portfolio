import "./styles/styles.scss";
import { appearOnScroll } from "./js/appearOnScroll";
import { navSlide, navScroll } from "./js/burgerMenu";
import { collapseProfile } from "./js/collapseProfile";

window.addEventListener("DOMContentLoaded", (event) => {
  appearOnScroll();
  navSlide();
  navScroll();
  collapseProfile();
});
