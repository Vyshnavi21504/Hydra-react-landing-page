import React, { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Hamburger Icon */}
      <div
        className="md:hidden cursor-pointer bg-[#343045]"
        onClick={toggleMenu}
      >
        <div className="h-6 w-6 text-white">
          <div className="bg-black h-1 w-6 my-1"></div>
          <div className="bg-black h-1 w-6 my-1"></div>
          <div className="bg-black h-1 w-6 my-1"></div>
        </div>
      </div>
      

      {/* Navbar */}
      <nav
        className={`bg-[#343045] p-4 ${
          menuOpen ? 'flex flex-col items-center' : 'hidden'
        } md:flex md:items-center md:justify-between`}
      >
        {/* Logo section */}
        <div className="flex items-center mb-4 md:mb-0">
          <img
            src="./public/logohydra.svg"
            alt="Logo"
            className="h-19 w-18 mr-2"
          />
          <span className="text-white font-bold text-lg">
            <img src="./public/hydra.svg" alt="" />
          </span>
        </div>

        {/* Middle part - Navigation Links */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
          <a href="#" className="text-white hover:text-gray-300">
            ABOUT
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            SERVICE
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            TECHNOLOGIES
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            HOW TO
          </a>
        </div>

        {/* Right side - Buttons */}
        <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0">
          <button className="bg-[#343045] text-white px-5 py-4 rounded-full border border-white hover:text-gray-300 mb-2 md:mb-0 md:mr-5">
            Contact Us
          </button>
          <button className="bg-[#8176AF] text-[#343045] px-5 py-4 rounded-full hover:text-gray-300 font-semibold">
            Join Hydra
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
