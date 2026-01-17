"use client";

import { useEffect, useRef } from "react";

export default function StarCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const wrapper = document.getElementById("page-wrapper");
      if (!wrapper) return;

      const rect = wrapper.getBoundingClientRect();

      canvas.width = window.innerWidth;
      canvas.height = rect.height;

      // 🔒 Force plain black background
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    resize();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
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
