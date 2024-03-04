import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Products from "../Pages/Products/Products";

const NavBar = () => {
  return (
    <div className="flex flex-row gap-20 bg-primary text-one items-center justify-start min-h-10 flex-wrap sticky top-0 z-50">
      <Link className="font-bold" to="/">
        JOYTOWN
      </Link>
      <Link className=" hover:text-second" to="/">
        Home
      </Link>
      <Link className=" hover:text-second" to="/products">
        Products
      </Link>
      <Link className=" hover:text-second" to="/highlights">
        Highlights
      </Link>
      <Link className=" hover:text-second" to="/aboutus">
        AboutUs
      </Link>
      <div className="ml-auto">
        <input
          className="rounded-lg "
          type="text"
          placeholder="Search.."></input>
        <button className="">
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
