// Ecoluxe Atelier — Evidence-based interaction design
document.addEventListener("DOMContentLoaded", () => {
  console.log("Ecoluxe Atelier — site initialized.");

  // Smooth fade-in for hero section and navigation
  const fadeInElements = document.querySelectorAll(".hero, .nav a, .feature, .cta");
  fadeInElements.forEach((el, i) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    setTimeout(() => {
      el.style.transition = "opacity 1s ease-out, transform 1s ease-out";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 300 + i * 150);
  });

  // Header color shift on scroll (luxury movement cue)
  const header = document.querySelector(".header");
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      header.style.backgroundColor = "rgba(27, 27, 27, 0.95)";
      header.style.boxShadow = "0 2px 12px rgba(0,0,0,0.2)";
    } else {
      header.style.backgroundColor = "var(--charcoal)";
      header.style.boxShadow = "none";
    }
  });

  // Scroll reveal for features — gradual luxury engagement
  const features = document.querySelectorAll(".feature");
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    features.forEach(feature => {
      const revealTop = feature.getBoundingClientRect().top;
      if (revealTop < windowHeight - 100) {
        feature.style.opacity = "1";
        feature.style.transform = "translateY(0)";
      }
    });
  };

  // Initialize feature positions
  features.forEach(feature => {
    feature.style.opacity = "0";
    feature.style.transform = "translateY(40px)";
    feature.style.transition = "all 1s ease-out";
  });

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Run on load in case elements are already visible
});