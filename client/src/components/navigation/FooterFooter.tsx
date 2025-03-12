import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaXTwitter, FaGithub } from "react-icons/fa6";

const socialLinks = [
  {
    Icon: FaFacebook,
    href: "https://www.facebook.com/profile.php?id=100088160328549",
  },
  { Icon: FaInstagram, href: "https://www.instagram.com/c__technology/" },
  { Icon: FaXTwitter, href: "https://x.com/CTechCole" },
  { Icon: FaGithub, href: "https://github.com/colesites" },
];

const FooterFooter = () => {
  return (
    <div className="mt-10 flex flex-col md:flex-row justify-between items-center text-sm border-t border-gray-400/40 pt-12">
      <p>© 2025 C Tech, Inc. All rights reserved.</p>
      <div className="flex gap-6 mt-4 md:mt-0">
        {socialLinks.map(({ Icon, href }) => (
          <Link key={href} href={href} className="hover:text-white text-lg">
            <Icon />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterFooter;
