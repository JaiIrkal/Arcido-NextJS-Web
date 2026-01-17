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
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let mounted = true;

    const resize = () => {
  const wrapper = document.getElementById("page-wrapper");
  if (!wrapper) return;

  const rect = wrapper.getBoundingClientRect();

  canvas.width = window.innerWidth;
  canvas.height = rect.height;
};


    resize();
    window.addEventListener("resize", resize);

    /* ---------- Stars ---------- */
    const stars: Star[] = Array.from({ length: 400 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.2,
      s: Math.random() * 0.4 + 0.1,
    }));

    /* ---------- Comets ---------- */
    const createComet = (): Comet => ({
      x: -200,
      y: Math.random() * canvas.height * 0.6,
      vx: 5 + Math.random() * 2,
      vy: 2.5 + Math.random() * 1.5,
      length: 150 + Math.random() * 80,
    });

    const comets: Comet[] = Array.from({ length: 3 }, createComet);

    const drawComet = (c: Comet) => {
      const tx = c.x - c.vx * c.length;
      const ty = c.y - c.vy * c.length;

      const g = ctx.createLinearGradient(c.x, c.y, tx, ty);
      g.addColorStop(0, "rgba(255,255,255,0.9)");
      g.addColorStop(1, "rgba(255,255,255,0)");

      ctx.strokeStyle = g;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(c.x, c.y);
      ctx.lineTo(tx, ty);
      ctx.stroke();
    };

    const animate = () => {
      if (!mounted) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "white";
      for (const s of stars) {
        s.y -= s.s;
        if (s.y < 0) s.y = canvas.height;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }

      for (const c of comets) {
        c.x += c.vx;
        c.y += c.vy;
        drawComet(c);

        if (c.x > canvas.width + c.length) {
          Object.assign(c, createComet());
        }
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      mounted = false;
      window.removeEventListener("resize", resize);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10 pointer-events-none"
      aria-hidden
    />
  );
}
