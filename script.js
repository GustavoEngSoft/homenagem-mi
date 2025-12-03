// Mostrar a timeline somente após clicar no botão
const startScreen = document.getElementById("start-screen");
const startBtn = document.getElementById("start-btn");
const sections = document.querySelectorAll(".hidden-section");

startBtn.addEventListener("click", () => {
  startScreen.classList.add("fade-out");

  setTimeout(() => {
    sections.forEach(sec => sec.classList.add("show"));
  }, 600);
});

// Animação dos itens da timeline ao rolar
const items = document.querySelectorAll(".timeline-item");

function showOnScroll() {
  items.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    const trigger = window.innerHeight * 0.85;

    if (itemTop < trigger) {
      item.classList.add("show");
    }
  });
}

window.addEventListener("scroll", showOnScroll);
showOnScroll();
