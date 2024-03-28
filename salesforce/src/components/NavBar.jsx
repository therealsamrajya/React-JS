import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaSalesforce, FaAngleDown } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { RiEarthFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import Button from "./Button/Button";
const menu = [
  {
    id: 1,
    name: "Products",
    link: "/products",
  },
  {
    id: 2,
    name: "Industries",
    link: "/industries",
  },
  {
    id: 3,
    name: "Customers",
    link: "/customers",
  },
  {
    id: 4,
    name: "Learning",
    link: "/learning",
  },
  {
    id: 5,
    name: "Support",
    link: "/support",
  },
];

const NavBar = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showSubMenu1, setShowSubMenu1] = useState(false);

  const handleMouseEnter = () => {
    setShowSubMenu(true);
  };

  const handleMouseLeave = () => {
    setShowSubMenu(false);
  };

  const handleMouseEnter1 = () => {
    setShowSubMenu1(true);
  };

  const handleMouseLeave1 = () => {
    setShowSubMenu1(false);
  };

  return (
    <div className="w-full py-3 bg-white sticky top-0 border">
      <div className="w-11/12 mx-auto flex items-center gap-x-7 h-full">
        <NavLink to="/">
          <FaSalesforce className="w-[12vh] h-[12vh]" />
          <span className="hidden">Home </span>
        </NavLink>

        {menu.map((val) => (
          <NavLink
            key={val.id}
            to={val.link}
            className="text-primary font-sans font-semibold hover:text-secondary">
            {val.name}
          </NavLink>
        ))}

        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <button className="text-primary font-sans font-semibold hover:text-secondary focus:outline-none flex items-center">
            More <FaAngleDown className="ml-1" />
          </button>
          {showSubMenu && (
            <div className="absolute top-full left-[-120%] bg-white w-[40vh] h-[20vh] p-2 rounded-lg  text-primary font-sans font-semibold shadow-2xl">
              <NavLink
                to="/company"
                className="block text-gray-700 hover:text-primary mb-2 text-left py-2 ml-3 mt-3">
                Company
              </NavLink>
              <NavLink
                to="/salesforce"
                className="block text-gray-700 hover:text-primary text-left ml-3">
                Salesforce
              </NavLink>
            </div>
          )}
        </div>
        <div className="font-sans flex flex-col items-center  w-fit px-7 ">
          <a
            href="#"
            className="underline text-center truncate  text-secondary">
            Contact Us
          </a>
          <h3 className="text-primary text-base text-center font-sans">
            +65 6302 5700 (Intl)
          </h3>
        </div>

        <IoMdSearch className="w-6 h-6" />

        <RiEarthFill className="w-6 h-6 " />

        <div
          className="relative"
          onMouseEnter={handleMouseEnter1}
          onMouseLeave={handleMouseLeave1}>
          <button className="text-primary font-sans font-semibold hover:text-secondary focus:outline-none flex gap-x-1 items-center">
            <FaUser className="ml-1" />
            Login
          </button>
          {showSubMenu1 && (
            <div className="absolute top-full left-[-120%] bg-white w-[45vh] h-[55vh] p-2 rounded-lg  text-primary font-sans font-semibold shadow-2xl">
              <h3 className="block text-gray-700 hover:text-primary text-left  ml-3 mt-3 font-bold text-xl">
                Login
              </h3>
              <h3 className="block text-gray-700 hover:text-primary text-left  ml-3 mt-3">
                Products
              </h3>
              <NavLink
                to="/company"
                className="block text-gray-700 hover:text-primary mb-2 text-left py-2 ml-3 mt-3 underline">
                Salesforce
              </NavLink>
              <NavLink
                to="/salesforce"
                className="block text-gray-700 hover:text-primary text-left ml-3 underline">
                Marketing Cloud
              </NavLink>
              <hr className="mt-2" />
              <h3 className="text-left mt-4 ml-3 ">Experiences</h3>
              <NavLink
                to="/salesforce"
                className="block text-gray-700 hover:text-primary mt-2 text-left ml-3 underline">
                Trailblazer account
              </NavLink>
              <p className="ml-4 text-left mt-2  text-sm tracking-tight ">
                Access Trailhead, your Trailblazer profile, community, learning,
                original series, events, support, and more.
              </p>
            </div>
          )}
        </div>
        <Button
          value="Try for Free"
          className="w-fit px-5 py-3 rounded-lg text-white font-medium bg-green-700"
        />
      </div>
    </div>
  );
};

export default NavBar;
