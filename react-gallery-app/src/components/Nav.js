import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Declares the 'Nav' Component that will return the navigation bar
 * @returns {JSX} "main-nac" - The container that contains the navigation bar
 */
const Nav = () => (
    <nav className="main-nav">
        <ul>
            <li><NavLink to='/cockatoo'>Cockatoos</NavLink></li>
            <li><NavLink to='/macaw'>Macaws</NavLink></li>
            <li><NavLink to='/eclectus'>Eclectus</NavLink></li>
        </ul>
    </nav>
);

export default Nav;