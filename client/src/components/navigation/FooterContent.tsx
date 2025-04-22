import Image from "next/image";
import Link from "next/link";
import React from "react";
import { footerLinks } from "@/components/navigation/footerLinks";

const FooterContent = () => {
  return (
    <div className="mt-10 flex flex-col sm:flex-row justify-between items-center border-t border-gray-400/40 pt-12 px-4 sm:px-6">
      <div className="mb-8 sm:mb-0">
        <Image src="/logo.png" alt="logo" width={30} height={30} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 md:gap-28 text-sm w-full sm:w-auto">
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title} className="text-center sm:text-left">
            <h3 className="text-white max-sm:text-center !text-lg font-semibold mb-3">{title}</h3>
            <ul>
              {links.map((link) => (
                <li key={link.name} className="my-3 sm:my-5">
                  <Link 
                    href={link.href} 
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterContent;
