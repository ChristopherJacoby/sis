import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <Link to="/" className="navbar-brand">Excelsior College</Link>
                <div className="navbar">
                    <Link to="/students" className="navbar-brand">View Students</Link>
                    <Link to="/majors" className="navbar-brand">View Majors</Link>
                    {/* <Link to="/signup" className="navbar-brand">Sign Up</Link>
                    <Link to="/signin" className="navbar-brand">Sign In</Link>
                    <Link to="/logout" className="navbar-brand">Log Out</Link> */}
                </div>
            </nav>
        </div>
    )
}

export default NavBar;