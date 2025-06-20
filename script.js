// Scroll-triggered fade-in
const sections = document.querySelectorAll("section");
const options = { threshold: 0.3 };

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, options);

sections.forEach((section) => observer.observe(section));

// Hero animation
window.addEventListener("load", () => {
  const h1 = document.querySelector("header h1");
  const p = document.querySelector("header p");
  h1.style.opacity = "1";
  h1.style.transform = "translateY(0)";
  setTimeout(() => {
    p.style.opacity = "1";
    p.style.transform = "translateY(0)";
  }, 500);
});
