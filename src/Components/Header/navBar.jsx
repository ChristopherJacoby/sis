import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          Excelsior College
        </Link>
        <div className="navbar">
          <Link to="/signin" className="navbar-brand">
            Sign In
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
