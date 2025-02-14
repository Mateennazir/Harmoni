import React from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-amber-200">
      <div className="container mx-auto px-4 md:px-16lg:px-24 flex justify-between items-center">
        <div>
          <Link to="/">Harmoni</Link>
        </div>
        <div>
          <form>
            <input type="text" placeholder="Search Product" />
            <FaSearch></FaSearch>
          </form>
        </div>

        <div>
          <Link to="/cart">
            <FaShoppingCart />
          </Link>

          <button>Login| Register</button>
          <button>
            <FaUser />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
