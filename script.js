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

  //Effetto fade in
  const fadeElements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  fadeElements.forEach((el) => observer.observe(el));

  //EXTRA M'S

  const sizes = ["small", "medium", "large"];
  const letters = [];

  function createM() {
    const span = document.createElement("span");
    span.className = "m " + sizes[Math.floor(Math.random() * sizes.length)];
    span.textContent = "M";

    // Posizione casuale
    const x = Math.random() * (mArt.clientWidth - 50);
    const y = Math.random() * (mArt.clientHeight - 50);
    span.style.left = `${x}px`;
    span.style.top = `${y}px`;

    mArt.appendChild(span);
    letters.push(span);
  }

  // Crea una serie iniziale
  function seedLetters() {
    letters.forEach((el) => el.remove());
    letters.length = 0;
    const count = Math.max(24, Math.floor(mArt.clientWidth / 24));
    for (let i = 0; i < count; i++) {
      createM();
    }
  }

  // Effetto e leggeri spostamenti
  function flicker() {
    if (letters.length === 0) return;
    const m = letters[Math.floor(Math.random() * letters.length)];
    m.classList.toggle("bright");

    const dx = (Math.random() - 0.5) * 10;
    const dy = (Math.random() - 0.5) * 10;
    const newLeft = Math.min(
      Math.max(0, parseFloat(m.style.left) + dx),
      mArt.clientWidth - 50
    );
    const newTop = Math.min(
      Math.max(0, parseFloat(m.style.top) + dy),
      mArt.clientHeight - 50
    );
    m.style.left = `${newLeft}px`;
    m.style.top = `${newTop}px`;

    setTimeout(() => m.classList.toggle("bright"), 300 + Math.random() * 400);
  }

  window.addEventListener("load", seedLetters);
  window.addEventListener("resize", seedLetters);
  setInterval(flicker, 120);
});
