import Link from "next/link";
import { footer_content } from "@/src/types/static-data";

export default function Footer() {
  return (
    <div className="flex flex-col bg-black w-full">
      <div className="flex w-full justify-center gap-16 px-16 py-12">
        {footer_content.map((group) => (
          <div key={group.id}>
            <h4 className="text-[14px] text-white">{group.title}</h4>
            <ul className="mt-2">
              {group.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.url}>
                    <span className="text-xs text-white">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Logo aligned to flex start */}
      <div className="flex flex-col items-start px-16 pb-8">
        <img
          src="images/arcido-logo.png"
          className="w-[82px] h-[82px]"
          alt="Footer Logo"
        />
        <div className="border-t-1 border-[#262626] w-full mx-auto"></div>
        <div className="flex justify-between w-full mt-4 text-xs text-gray-500 mt-2">
            <p>Copyright @ 2025 Arcido, Inc. All rights reserved.</p>
            <p>Terms of Use & Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}