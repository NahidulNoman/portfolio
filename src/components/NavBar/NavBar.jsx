import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

  const menuItems = (
    <>
      <li className="font-semibold ">
        <Link to="/home" className="rounded-lg">
          Home
        </Link>
      </li>
      <li className="font-semibold">
        <a href="#about" className="rounded-lg">
          About
        </a>
      </li>
      <li className="font-semibold">
        <Link to="/skill" className="rounded-lg">
        Skill
        </Link>
      </li>
      <li className="font-semibold">
        <Link to="/portfolio" className="rounded-lg">
        Portfolio
        </Link>
      </li>
      <li className="font-semibold">
        <a href="#contact" className="rounded-lg">
        Contact
        </a>
      </li>
    </>
  );

  return (
    <div className="navbar text-white shadow-sm rounded-lg flex justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={1}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-600 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
       <div>
       <Link to="/" className="font-semibold text-2xl">
          Nahidul
        </Link>
       </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
    </div>
  );
};

export default NavBar;