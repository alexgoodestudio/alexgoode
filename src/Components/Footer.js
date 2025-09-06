import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-lime-100 text-center text-sm py-3">
      Copyright © {currentYear} <span className="mx-1 text-gray-400">•</span> Made Right Studio
    </div>
  );
}

export default Footer;
