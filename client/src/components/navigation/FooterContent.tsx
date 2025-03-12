import Image from "next/image";
import Link from "next/link";
import React from "react";
import { footerLinks } from "@/components/navigation/footerLinks";

const FooterContent = () => {
  return (
    <div className="mt-10 flex justify-between items-center md:items-start border-t border-gray-400/40 pt-12">
      <Image src="/logo.png" alt="logo" width={30} height={30} />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-28 text-sm justify-items-end">
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h3 className="text-white !text-lg font-semibold mb-3">{title}</h3>
            <ul>
              {links.map((link) => (
                <li key={link.name} className="my-5">
                  <Link href={link.href} className="hover:text-white">
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
