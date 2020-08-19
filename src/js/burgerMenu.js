export const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });

    burger.classList.toggle("toggle");
  });
};

export const navScroll = () => {
  // const nav = document.querySelector('.nav-links');
  const nav = document.querySelector(".nav-bg");

  console.log(window.scrollY);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.classList.add("shrink");
    } else {
      nav.classList.remove("shrink");
    }
  });
};
