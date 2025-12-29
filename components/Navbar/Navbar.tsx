"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // install lucide-react if not installed
import NavbarGroupComponent from "./NavbarGroupComponent";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative mt-4 flex h-22 w-full items-center justify-between bg-transparent px-6 md:px-16 shadow-md">

      {/* Desktop Menu */}
      <div className="hidden md:flex w-full items-center justify-center gap-12">
        <Link href="/arcido-tech">
          <h4 className="text-sm text-white">ARCIDO TECH</h4>
        </Link>

        <Link href="/arcido-studio">
          <h4 className="text-sm text-white">ARCIDO STUDIO</h4>
        </Link>

        <NavbarGroupComponent />

        <Link href="/arcido-flow">
          <h4 className="text-sm text-white">ARCIDO FLOW</h4>
        </Link>

        <Link href="/arcido-digital">
          <h4 className="text-sm text-white">ARCIDO DIGITAL</h4>
        </Link>
      </div>

      {/* Mobile Hamburger */}
      {/* Mobile Header */}
      <div className="flex md:hidden w-full items-center justify-between px-6">

        {/* Arcido Logo */}
        <Link href="/">
          <img
            src="/images/arcido-logo.png"
            alt="Arcido Logo"
            className="w-8 h-8"
          />
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white"
          aria-label="Toggle Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>


      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-black/90 backdrop-blur-md flex flex-col items-center gap-6 py-6 md:hidden z-50">
          <Link href="/arcido-tech" onClick={() => setOpen(false)}>
            <h4 className="text-sm text-white">ARCIDO TECH</h4>
          </Link>

          <Link href="/arcido-studios" onClick={() => setOpen(false)}>
            <h4 className="text-sm text-white">ARCIDO STUDIOS</h4>
          </Link>

          <Link href="/arcido-flow" onClick={() => setOpen(false)}>
            <h4 className="text-sm text-white">ARCIDO FLOW</h4>
          </Link>

          <Link href="/arcido-digital" onClick={() => setOpen(false)}>
            <h4 className="text-sm text-white">ARCIDO DIGITAL</h4>
          </Link>
        </div>
      )}
    </nav>
  );
}
