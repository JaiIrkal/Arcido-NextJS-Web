import Link from "next/link";

export default function NavbarGroupComponent() {
    return (
        <div className="border-2 border-[#4A4A4A] flex h-18 items-center justify-center bg-[#131313] gap-6 px-16 shadow-md rounded-4xl">
            <Link href="/">
                <div className="flex items-center">
                    <img
                        src="/images/arcido-logo.png"
                        className="h-8 w-8" alt="Arcido Logo"
                    />
                    <h4 className="relative text-sm text-white left-1">RCIDO</h4>
                </div>
            </Link>
            <Link href="/company/about-us">
                <h4 className="text-sm text-white">ABOUT US</h4>
            </Link>
            <div className="flex gap-2">
                <Link href="/">
                    <div className="border-2 border-[#4A4A4A] px-6 py-2 rounded-3xl">
                        <h4 className="text-sm text-white">LOGIN</h4>
                    </div>
                </Link>
                <Link href="/">
                    <div className="bg-white rounded-3xl px-4 py-2">
                        <h4 className="text-sm text-black">SIGNUP</h4>
                    </div>
                </Link>
            </div>
        </div>
    );
}