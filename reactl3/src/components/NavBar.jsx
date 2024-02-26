import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="flex flex-row gap-20 bg-primary text-one items-center justify-start min-h-10 flex-wrap">
      <Link className="font-bold" to="/">
        JOYTOWN
      </Link>
      <Link className=" hover:text-second" to="/">
        Home
      </Link>
      <Link className=" hover:text-second" to="contact">
        Contact
      </Link>
      <Link className=" hover:text-second" to="services">
        Services
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
