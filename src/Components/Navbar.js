import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        //"Link to" and NavLink tags allows you to switch tabs without 
        //refreshing the page like hrefs in react (Must import line 2)
        <nav id='sticky-nav' className="nav-wrapper yellow darken-2">
            <div className="container">
                <a href="/" className="brand-logo">Charity</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/About">About</NavLink></li>
                    <li><NavLink to="/Contact">Contact</NavLink></li>
                    <li><NavLink to="/Donate">Donate</NavLink></li>
                </ul>

                
            </div>
        </nav>
        
    )
}

export default Navbar
