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
  const resizeFrame = useRef<number | null>(null);
  const lastCanvasHeight = useRef<number>(0);


  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let mounted = true;

    const resize = () => {
      if (!mounted) return;

      if (resizeFrame.current !== null) {
        cancelAnimationFrame(resizeFrame.current);
      }

      resizeFrame.current = requestAnimationFrame(() => {
        const newHeight = Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight,
          window.innerHeight
        );

        const oldHeight = canvas.height || newHeight;

        canvas.width = window.innerWidth;
        canvas.height = newHeight;

        // ✅ PROPORTIONAL redistribution (the missing piece)
        if (oldHeight !== newHeight) {
          for (const star of stars) {
            star.y = (star.y / oldHeight) * newHeight;
          }
        }

        lastCanvasHeight.current = newHeight;
      });
    };



    // ⏳ wait for first paint
    requestAnimationFrame(resize);

    const observer = new ResizeObserver(resize);
    observer.observe(document.body);
    observer.observe(document.documentElement);

    /* ---------- Stars ---------- */
    const stars: Star[] = Array.from({ length: 300 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.2,
      s: Math.random() * 0.4 + 0.1,
    }));

    /* ---------- Comets ---------- */
    const createComet = (): Comet => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * canvas.height * 0.5,
      vx: 4 + Math.random() * 2,
      vy: 2 + Math.random() * 1.5,
      length: 120 + Math.random() * 80,
    });

    const comets: Comet[] = Array.from({ length: 3 }, createComet);

    const drawComet = (comet: Comet) => {
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
    };

    const animate = () => {
      if (!mounted) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "white";
      for (const star of stars) {
        star.y -= star.s;
        if (star.y < 0) star.y = canvas.height;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fill();
      }

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

      frameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      mounted = false;

      observer.disconnect();

      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }

      if (resizeFrame.current !== null) {
        cancelAnimationFrame(resizeFrame.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      aria-hidden
    />
  );
}
