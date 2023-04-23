import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <p className="navbar-logo">
                    Korean Language Academy
                </p>
                <ul className="navbar-menu">
                    <li className="navbar-item">
                        <Link to="/" className="navbar-link">
                            Home
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/about" className="navbar-link">
                            About Us
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/contact" className="navbar-link">
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
