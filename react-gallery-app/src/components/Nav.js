import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
    <nav className="main-nav">
        <ul>
            <li><NavLink to='/cockatoos'>Cockatoos</NavLink></li>
            <li><NavLink to='/macaws'>Macaws</NavLink></li>
            <li><NavLink to='/eclectus'>Eclectus</NavLink></li>
        </ul>
    </nav>
);

export default Nav;