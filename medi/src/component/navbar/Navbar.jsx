import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">MediCare</Link>
            </div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/order">Order</Link></li>
                <li><Link to="/login">Login</Link></li>
                {/* Signup link with dropdown */}
                <li className="dropdown">
                    <Link to="#" className="dropbtn">Signup</Link>
                    <div className="dropdown-content">
                        <Link to="/signup/user">User Signup</Link>
                        <Link to="/signup/admin">Admin Signup</Link>
                        <Link to="/signup/doctor">Doctor Signup</Link>
                        <Link to="/signup/pharmacy">Pharmacy Signup</Link>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;






