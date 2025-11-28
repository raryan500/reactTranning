import React, { useEffect } from "react";

export default function FireworksContainer() {
  useEffect(() => {
    const canvas = document.getElementById("firework-canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ["#ff0043", "#14fc56", "#68d5ff", "#f7ff1c", "#ff9300"];

    function Firework() {
      this.x = Math.random() * canvas.width;
      this.y = canvas.height;
      this.targetY = Math.random() * (canvas.height / 2);
      this.speed = 2;
      this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    function Particle(x, y, color) {
      this.x = x;
      this.y = y;
      this.color = color;
      this.radius = Math.random() * 3 + 1;
      this.speedX = (Math.random() - 0.5) * 8;
      this.speedY = (Math.random() - 0.5) * 8;
      this.alpha = 1;
    }

    let fireworks = [];

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      fireworks.forEach((fw, fwIndex) => {
        if (fw.y > fw.targetY) {
          fw.y -= fw.speed;
        } else {
          // explode
          for (let i = 0; i < 50; i++) {
            particles.push(new Particle(fw.x, fw.y, fw.color));
          }
          fireworks.splice(fwIndex, 1);
        }
      });

      particles.forEach((p, pIndex) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.alpha -= 0.02;

        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        if (p.alpha <= 0) particles.splice(pIndex, 1);
      });

      if (Math.random() < 0.05) fireworks.push(new Firework());

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <canvas
      id="firework-canvas"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
      }}
    ></canvas>
  );
}
