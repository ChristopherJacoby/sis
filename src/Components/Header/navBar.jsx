import React from "react";
import { Link } from "react-router-dom";
import SignOut from "../signOut/signOut";

const NavBar = ({ currentUser }) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          Excelsior College
        </Link>
        <div className="navbar">
          <span>{currentUser}</span>
          {currentUser ? <SignOut /> : <Link to="/signin">Sign In</Link>}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
