import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBars } from "react-icons/fa";
import { BiSolidJoystick } from "react-icons/bi";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" border-gray-200 bg-primary">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-bold whitespace-nowrap text-one">
            <BiSolidJoystick className="w-10 h-10 inline" />
            JOYTOWN
          </span>
        </Link>
        <div className="flex items-center space-x-3">
          <input
            className="rounded-lg"
            type="text"
            placeholder="Search.."></input>
          <button className="">
            <FaSearch />
          </button>
        </div>
        <button
          onClick={toggleMenu}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden hover:bg-gray-100"
          aria-controls="navbar-default"
          aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <FaBars className="w-5 h-5" aria-hidden="true" />
        </button>
        <div
          className={`w-full md:block md:w-auto ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <Link
                to="/"
                className="block py-2 px-3  md:border-0 md:p-0 text-second hover:text-one ">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="block py-2 px-3  md:border-0 md:p-0 text-second hover:text-one ">
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/highlights"
                className="block py-2 px-3  md:border-0 md:p-0 text-second hover:text-one ">
                Highlights
              </Link>
            </li>
            <li>
              <Link
                to="/aboutus"
                className="block py-2 px-3  md:border-0 md:p-0 text-second hover:text-one ">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
