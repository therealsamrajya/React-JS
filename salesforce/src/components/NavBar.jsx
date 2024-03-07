import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaSalesforce, FaAngleDown } from "react-icons/fa";

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

  const handleMouseEnter = () => {
    setShowSubMenu(true);
  };

  const handleMouseLeave = () => {
    setShowSubMenu(false);
  };

  return (
    <div className="">
      <div className="flex flex-row items-center w-3/6 justify-between ml-[-3%] mt-[-2%] space-x-10">
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
      </div>
    </div>
  );
};

export default NavBar;
