"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  r: number;
  s: number;
};

type Comet = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  length: number;
};

export default function StarCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      const height = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        window.innerHeight
      );

      canvas.width = window.innerWidth;
      canvas.height = height;
    };

    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(document.body);

    /* ---------- Stars ---------- */
    const stars: Star[] = Array.from({ length: 300 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.2,
      s: Math.random() * 0.4 + 0.1,
    }));

    /* ---------- Comets ---------- */
    const comets: Comet[] = Array.from({ length: 3 }, () => createComet());

    function createComet(): Comet {
      return {
        x: Math.random() * window.innerWidth,
        y: Math.random() * canvas.height * 0.5,
        vx: 4 + Math.random() * 2,
        vy: 2 + Math.random() * 1.5,
        length: 120 + Math.random() * 80,
      };
    }

    function drawComet(comet: Comet) {
      const tailX = comet.x - comet.vx * comet.length;
      const tailY = comet.y - comet.vy * comet.length;

      const gradient = ctx.createLinearGradient(
        comet.x,
        comet.y,
        tailX,
        tailY
      );

      gradient.addColorStop(0, "rgba(255,255,255,0.9)");
      gradient.addColorStop(1, "rgba(255,255,255,0)");

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(comet.x, comet.y);
      ctx.lineTo(tailX, tailY);
      ctx.stroke();
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      /* Stars */
      ctx.fillStyle = "white";
      for (const star of stars) {
        star.y -= star.s;
        if (star.y < 0) star.y = canvas.height;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fill();
      }

      /* Comets */
      for (const comet of comets) {
        comet.x += comet.vx;
        comet.y += comet.vy;

        drawComet(comet);

        if (
          comet.x > canvas.width + comet.length ||
          comet.y > canvas.height + comet.length
        ) {
          Object.assign(comet, createComet());
          comet.x = -comet.length;
        }
      }

      requestAnimationFrame(animate);
    }

    animate();

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
}
