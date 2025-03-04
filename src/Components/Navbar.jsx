import React from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-amber-300 shadow-md">
      <div className="container mx-auto px-4 md:px-16 lg:py-4 flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to="/">Harmoni</Link>
        </div>
        <div className="relative flex-1 mx-4">
          <form>
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full border rounded-xl py-2 px-4 bg-amber-50"
            />
            <FaSearch className="absolute top-3 right-3 text-black"></FaSearch>
          </form>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/cart">
            <FaShoppingCart className="text-lg" />
          </Link>

          <button className="hidden md:block"> Login | Register</button>
          <button className="block md:hidden">
            <FaUser />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-10 py-4 text-sm font-bold">
        <Link className="hover:underline">Home</Link>
        <Link className="hover:underline">Shop</Link>
        <Link className="hover:underline">Contact</Link>
        <Link className="hover:underline">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
