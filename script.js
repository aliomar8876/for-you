const screens = document.querySelectorAll(".screen");
const nextButtons = document.querySelectorAll(".next-btn");
const forgiveBtn = document.getElementById("forgiveBtn");
const runBtn = document.getElementById("runBtn");
const loader = document.getElementById("loader");
const loaderText = document.getElementById("loaderText");

setTimeout(() => {
  loaderText.textContent = "جاهز... بس الكلام مهم شوية ❤️";
}, 1200);

setTimeout(() => {
  loader.classList.add("hide");
}, 2600);

function showScreen(number) {
  screens.forEach(screen => screen.classList.remove("active"));
  document.getElementById(`screen-${number}`).classList.add("active");

  if (number === "7" || number === 7) {
    burstHearts();
  }
}

nextButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    showScreen(btn.dataset.next);
  });
});

forgiveBtn.addEventListener("click", () => {
  showScreen(7);
});

function moveRunButton() {
  const btnRect = runBtn.getBoundingClientRect();
  runBtn.style.position = "fixed";

  const maxX = window.innerWidth - btnRect.width - 20;
  const maxY = window.innerHeight - btnRect.height - 20;

  const x = Math.max(20, Math.random() * maxX);
  const y = Math.max(20, Math.random() * maxY);

  runBtn.style.left = `${x}px`;
  runBtn.style.top = `${y}px`;
}

runBtn.addEventListener("mouseover", moveRunButton);
runBtn.addEventListener("click", moveRunButton);
runBtn.addEventListener("touchstart", moveRunButton);

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = Math.random() > 0.5 ? "❤️" : "💕";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 14 + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, 650);

function burstHearts() {
  for (let i = 0; i < 45; i++) {
    setTimeout(createHeart, i * 45);
  }
}
