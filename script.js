// Trocar categoria ativa
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    link.classList.add("active");
  });
});

// Simples alerta no botão Watch
document.querySelector(".hero button").addEventListener("click", () => {
  alert("Opening movie...");
});
