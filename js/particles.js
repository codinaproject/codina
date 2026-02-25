const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = 200;

const particles = [];
const particleCount = 40;

function chromaColor() {
  const rShift = Math.random() < 0.5 ? 5 : 0;
  const gShift = Math.random() < 0.5 ? 5 : 0;
  const bShift = Math.random() < 0.5 ? 5 : 0;
  return `rgb(${200 + rShift},${150 + gShift},${255 + bShift})`;
}

function createParticle() {
  const xCenter = canvas.width / 2;
  const yCenter = canvas.height / 2;

  particles.push({
    x: xCenter + (Math.random() * 20 - 10),
    y: yCenter + (Math.random() * 20 - 10),
    size: 5 + Math.random() * 5,
    speedX: (Math.random() - 0.5) * 1,
    speedY: -Math.random() * 1.5,
    life: 50 + Math.random() * 20,
    color: chromaColor()
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];

    p.x += p.speedX;
    p.y += p.speedY;
    p.life--;

    ctx.fillStyle = p.color;
    ctx.fillRect(p.x, p.y, p.size, p.size);

    if (p.life <= 0) {
      particles.splice(i, 1);
    }
  }

  requestAnimationFrame(animateParticles);
}

setInterval(createParticle, 100);
animateParticles();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = 200;
});
