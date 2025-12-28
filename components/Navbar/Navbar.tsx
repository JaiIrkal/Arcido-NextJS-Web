import Link from "next/link";
import NavbarGroupComponent from "./NavbarGroupComponent";

export default function Navbar() {
  return (
    <div className="mt-4 flex h-22 w-full items-center justify-center bg-transparent gap-12 px-16 shadow-md">
      <Link href="/arcido-tech">
        <h4 className="text-sm text-white">ARCIDO TECH</h4>
      </Link>
      <Link href="/arcido-studio">
        <h4 className="text-sm text-white">ARCIDO STUDIO</h4>
      </Link>
      <NavbarGroupComponent/>
      <Link href="/arcido-flow">
        <h4 className="text-sm text-white">ARCIDO FLOW</h4>
      </Link>
      <Link href="/arcido-digital">
        <h4 className="text-sm text-white">ARCIDO DIGITAL</h4>
      </Link>
    </div>
  );
}