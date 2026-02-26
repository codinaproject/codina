window.addEventListener("load", () => {

  const canvas = document.getElementById('particle-canvas');
  const ctx = canvas.getContext('2d');

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = 250;
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  const particles = [];

  function createParticle() {
    const logo = document.getElementById('logo-site');
    if (!logo) return;

    const rect = logo.getBoundingClientRect();

    const xCenter = rect.left + rect.width / 2;
    const yCenter = rect.top + rect.height / 2;

    particles.push({
      x: xCenter,
      y: yCenter,
      size: 4 + Math.random() * 4,
      speedX: (Math.random() - 0.5) * 3,
      speedY: (Math.random() - 0.5) * 3,
      life: 60,
      opacity: 1
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];

      p.x += p.speedX;
      p.y += p.speedY;
      p.life--;
      p.opacity -= 0.015;

      ctx.fillStyle = `rgba(255,150,255,${p.opacity})`;
      ctx.fillRect(p.x, p.y, p.size, p.size);

      if (p.life <= 0) particles.splice(i, 1);
    }

    requestAnimationFrame(animate);
  }

  setInterval(createParticle, 120);
  animate();

});
