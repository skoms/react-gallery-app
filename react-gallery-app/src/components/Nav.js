import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ({handleOnClick}) => (
    <nav className="main-nav">
        <ul>
            <li><NavLink to='/cockatoo'>Cockatoos</NavLink></li>
            <li><NavLink to='/macaw'>Macaws</NavLink></li>
            <li><NavLink to='/eclectus'>Eclectus</NavLink></li>
        </ul>
    </nav>
);

export default Nav;