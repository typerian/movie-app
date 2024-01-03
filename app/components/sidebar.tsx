"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/", title: "Inicio" },
  { href: "/now-playing", title: "Estrenandose ahora" },
  { href: "/popular", title: "Lo más Popular" },
  { href: "/top-rated", title: "Mejor votado" },
  { href: "/upcoming", title: "Próximas películas" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        className="fixed top-0 left-0 z-40 text-white m-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "X" : "Menu"}
      </button>
      {isOpen && (
        <div className="fixed top-0 left-0 h-full z-30 w-54 bg-gray-800 p-5 transition-all duration-300">
          <nav className="mt-8 flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.href}
                onClick={closeSidebar}
                href={item.href}
                className="hover:bg-gray-700 font-bold text-gray-300 text-center p-2 rounded transition-colors duration-200"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Sidebar;
