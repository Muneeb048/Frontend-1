// src/components/Navbar.tsx
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#030d13] sticky top-0 z-50 w-full py-5 px-8 flex items-center justify-between border-b-gray-900 border-b">
      <h1 className="text-3xl font-bold text-white ">
        group<span className=" text-teal-500">ups</span>
      </h1>
    </nav>
  );
};

export default Navbar;
