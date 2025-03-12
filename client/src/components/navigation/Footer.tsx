"use client";

import FooterAction from "./FooterAction";
import FooterContent from "./FooterContent";
import FooterFooter from "./FooterFooter";

const Footer = () => (
  <footer className="bg-primary text-gray-400 py-12 px-6 border-t border-gray-400/40">
    <div className="max-w-7xl mx-auto text-center md:text-left">
      <FooterAction />
      <FooterContent />
      <FooterFooter />
    </div>
  </footer>
);

export default Footer;
