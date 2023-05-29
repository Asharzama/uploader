import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-end px-10 h-24 items-center bg-slate-100">
      <ul className="flex items-center space-x-10 font-medium text-xl text-gray-600">
        <Link to="/">
          <li className="cursor-pointer hover:text-gray-400">Photo</li>
        </Link>
        <Link to="/audio">
          <li className="cursor-pointer hover:text-gray-400">Audio</li>
        </Link>
        <Link to="/video">
          <li className="cursor-pointer hover:text-gray-400">Video</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
