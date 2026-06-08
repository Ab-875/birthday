const openGiftBtn = document.getElementById("openGiftBtn");
const giftSection = document.getElementById("giftSection");

const catStickers = [
  "assets/cat-jump.gif",
  "assets/cat-shuffle.gif"
];

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function launchCatConfetti() {
  const amount = 48;

  for (let i = 0; i < amount; i++) {
    setTimeout(() => {
      const cat = document.createElement("img");
      cat.className = "cat-confetti";
      cat.src = catStickers[Math.floor(Math.random() * catStickers.length)];
      cat.alt = "";

      const size = randomBetween(38, 82);
      const startX = randomBetween(0, window.innerWidth);
      const moveX = randomBetween(-180, 180);
      const duration = randomBetween(3.2, 6.2);
      const spin = randomBetween(-900, 900);

      cat.style.left = `${startX}px`;
      cat.style.setProperty("--size", `${size}px`);
      cat.style.setProperty("--x-move", `${moveX}px`);
      cat.style.setProperty("--duration", `${duration}s`);
      cat.style.setProperty("--spin", `${spin}deg`);

      document.body.appendChild(cat);

      setTimeout(() => cat.remove(), duration * 1000 + 800);
    }, i * 55);
  }
}

function createFallingTulip() {
  const tulip = document.createElement("img");
  tulip.className = "falling-tulip";
  tulip.src = "assets/falling-tulip.png";
  tulip.alt = "";

  const size = randomBetween(24, 58);
  const startX = randomBetween(-40, window.innerWidth + 40);
  const moveX = randomBetween(-90, 90);
  const duration = randomBetween(7, 13);
  const spin = randomBetween(-220, 220);
  const opacity = randomBetween(0.28, 0.62);

  tulip.style.left = `${startX}px`;
  tulip.style.setProperty("--size", `${size}px`);
  tulip.style.setProperty("--x-move", `${moveX}px`);
  tulip.style.setProperty("--duration", `${duration}s`);
  tulip.style.setProperty("--spin", `${spin}deg`);
  tulip.style.setProperty("--opacity", opacity);

  document.body.appendChild(tulip);

  setTimeout(() => tulip.remove(), duration * 1000 + 500);
}

setInterval(createFallingTulip, 420);

for (let i = 0; i < 18; i++) {
  setTimeout(createFallingTulip, i * 220);
}

const music = document.getElementById("birthdayMusic");

openGiftBtn.addEventListener("click", () => {
  
  if (music.paused) {
    music.volume = 0.4;
    music.play();
  }

  giftSection.classList.add("show");
  launchCatConfetti();

  setTimeout(() => {
    giftSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 450);
});
