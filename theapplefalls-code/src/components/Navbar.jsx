import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-logo">
                <img src="/theapplefalls/logo.png" alt="The Apple Falls Logo" className="logo-img" />
                <span>The Apple Falls</span>
            </Link>
            <div className="nav-links">
                <Link to="/" className="nav-link">Home</Link>
                <a href="/theapplefalls/#about" className="nav-link">About</a>
                <a href="/theapplefalls/#roadmap" className="nav-link">Curriculum</a>
                <Link to="/sandbox" className="nav-link">Sandbox</Link>
            </div>
        </nav>
    );
};

export default Navbar;
