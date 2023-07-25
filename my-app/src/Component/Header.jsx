import React, { useState } from "react";
import { Link } from "react-router-dom";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-dark shadow-lg ">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
          
            <span className="text-white text-xl font-semibold">Finance App</span>
          </div>
          <nav className="hidden md:flex md:text-white">
            <ul className="flex space-x-4">
              <li>
                <Link to="/income">Income</Link>
              </li>
              <li>
                <Link to="/expenses">Expenses</Link>
              </li>
            </ul>
          </nav>
          <button
            className="md:hidden text-white"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden text-white mt-4">
            <ul className="flex flex-col space-y-2">
              <li>
                <Link to="/income" onClick={toggleMenu}>Income</Link>
              </li>
              <li>
                <Link to="/expenses" onClick={toggleMenu}>Expenses</Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;