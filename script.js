// Navbar Scroll, Fade-In e Animazione M
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const hero = document.getElementById("hero");
  const mArt = document.getElementById("mArt");

  //Cambio colore navbar scroll
  function handleScroll() {
    const heroBottom = hero.getBoundingClientRect().bottom;
    const navbarHeight = navbar.offsetHeight;

    
    if (heroBottom <= navbarHeight + 10) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }

  document.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleScroll);
  handleScroll();