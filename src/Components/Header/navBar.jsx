import React from "react";
import { Link } from "react-router-dom";
import auth from "../../firebase/firebase.util";

const NavBar = ({ currentUser }) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          Excelsior College
        </Link>
        <div className="navbar">
          {currentUser ? (
            <div className="option" onClick={() => auth.signOut()}>
              Sign Out
            </div>
          ) : (
            <Link className="option" to="/signin">
              Sign In
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
