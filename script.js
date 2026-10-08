const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");

  if (nav.classList.contains("active")) {
    menuToggle.textContent = "✕";
  } else {
    menuToggle.textContent = "☰";
  }
});


document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    menuToggle.textContent = "☰";
  });
});


document.getElementById("year").textContent =
  new Date().getFullYear();
