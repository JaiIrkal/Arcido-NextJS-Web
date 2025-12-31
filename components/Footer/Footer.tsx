import Link from "next/link";
import { footer_content } from "@/types/static-data";

export default function Footer() {
  return (
    <div className="flex flex-col bg-black w-full">

      {/* Top Footer */}
      <div
        className="w-full px-6 sm:px-12 lg:px-56 py-12
                   flex flex-col lg:flex-row justify-between gap-12 lg:gap-16"
      >
        {/* Footer Links */}
        <div
          className="grid grid-cols-2 gap-8
                     sm:grid-cols-2
                     lg:flex lg:gap-8"
        >
          {footer_content.map((group) => (
            <div key={group.id}>
              <h4 className="text-[14px] text-white">{group.title}</h4>
              <ul className="mt-2 space-y-1">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.url}>
                      <span className="text-xs text-white hover:underline">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social */}
        <div className="hidden sm:block">
          <h4 className="text-[14px] text-white">FOLLOW US</h4>
          <div className="flex mt-2 gap-3">
            <Link href="https://www.linkedin.com/company/arcido">
              <img
                src="/images/social-media/linkedin.svg"
                className="w-[20px] h-[20px]"
                alt="LinkedIn"
              />
            </Link>
            <Link href="https://www.instagram.com/the.arcido/">
              <img
                src="/images/social-media/instagram.png"
                className="w-[20px] h-[20px]"
                alt="Instagram"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="px-6 sm:px-12 lg:px-16 pb-8">
        {/* Logo + Social (mobile row) */}
        <div className="flex items-center justify-between sm:justify-start sm:gap-6">
          <img
            src="images/arcido-logo.png"
            className="w-[82px] h-[82px]"
            alt="Footer Logo"
          />

          {/* Social (mobile only here) */}
          <div className="-mt-5">
            <h4 className="text-[14px] text-white mb-2 sm:hidden">FOLLOW US</h4>
            <div className="flex gap-3 sm:hidden">
            <Link href="https://www.linkedin.com/company/arcido">
              <img
                src="images/social-media/linkedin.svg"
                className="w-[20px] h-[20px]"
                alt="LinkedIn"
              />
            </Link>
            <Link href="https://www.instagram.com/the.arcido/">
              <img
                src="images/social-media/instagram.png"
                className="w-[20px] h-[20px]"
                alt="Instagram"
              />
            </Link>
          </div>
          </div>
        </div>

        <div className="border-t border-[#262626] w-full mt-4"></div>

        <div
          className="flex flex-col sm:flex-row justify-between w-full mt-4
               text-xs text-gray-500 gap-2 sm:gap-0"
        >
          <p>Copyright © 2025 Arcido, Inc. All rights reserved.</p>
          <p>Terms of Use & Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}
