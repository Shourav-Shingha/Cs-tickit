import React from "react";

const Navber = () => {
  return (
    <div>
      <div className="navbar px-16 border-b border-gray-200 bg-white ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
             <li>
                <a>HOME</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
              <li>
                <a>Change log</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Downlode</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">CS — Ticket System</a>
        </div>
        
        <div className="navbar-end">
            <div className=" hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
                <a>HOME</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
              <li>
                <a>Change log</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Downlode</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
          </ul>
        </div>
          <a className="btn bg-linear-to-br from-purple-600 via-purple-500  to-pink-300  w-32 text-white p-0 font-semibold rounded-md">+ New Ticket</a>
        </div>
      </div>
    </div>
  );
};

export default Navber;