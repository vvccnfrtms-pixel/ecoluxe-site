// Ecoluxe Atelier — Evidence-based interaction design
document.addEventListener("DOMContentLoaded", () => {
  console.log("Ecoluxe Atelier — site initialized.");

  // Elements to fade in
  const fadeInElements = document.querySelectorAll(".hero, .nav a, .feature, .cta, .footer");
  fadeInElements.forEach((el, i) => {
    setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 300 + i * 150);
  });

  // Header color shift on scroll
  const header = document.querySelector(".header");
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      header.style.backgroundColor = "rgba(27,27,27,0.95)";
      header.style.boxShadow = "0 2px 12px rgba(0,0,0,0.2)";
    } else {
      header.style.backgroundColor = "var(--charcoal)";
      header.style.boxShadow = "none";
    }
  });

  // Scroll reveal for features and footer
  const scrollRevealElements = document.querySelectorAll(".feature, .footer");
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    scrollRevealElements.forEach(el => {
      const revealTop = el.getBoundingClientRect().top;
      if (revealTop < windowHeight - 100) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Run on load in case elements are visible
});