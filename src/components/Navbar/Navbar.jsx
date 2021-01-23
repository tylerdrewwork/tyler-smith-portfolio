import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './navbar.scss';
import projectdata from 'data/projectdata';
import NavbarGroup from './NavbarGroup';

function Navbar () {
    const location = useLocation();
    return (
        <nav>
            {/* Projects Page */}
            <NavbarGroup to="/portfolio" name="Portfolio">
                {/* Project Links */}
                <ul>
                    {projectdata.map(p => <li><Link className='link link-h2'>{p.title}</Link></li>)}
                </ul>
            </NavbarGroup>

            {/* Gallery */}
            <NavbarGroup to='/gallery' name="Gallery"></NavbarGroup>
        </nav>
    );
};

export default Navbar;