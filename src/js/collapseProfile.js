export const collapseProfile = () => {
  // const nav = document.querySelector('.nav-links');
  const nav = document.querySelector(".profile");

  console.log(window);
  console.log(window.scrollY);
  window.addEventListener("scroll", () => {
    if (window.scrollY > window.screen.height * 0.3) {
      nav.classList.add("coll");
    } else {
      nav.classList.remove("coll");
    }
  });
};
