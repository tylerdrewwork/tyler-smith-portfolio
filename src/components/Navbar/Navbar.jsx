import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './navbar.scss';
import projectdata from 'data/projectdata';
import NavbarGroup from './NavbarGroup';
import NavbarSeparator from "./NavbarSeparator";

function Navbar () {
    const location = useLocation();
    return (
        <nav>
            {/* Projects Page */}
            <NavbarGroup to="/portfolio" name="Portfolio">
                {/* Project Links */}
                {/* <ul> */}
                    {projectdata.map(p => <Link className='link link-h2'>{p.title}</Link>)}
                {/* </ul> */}
            </NavbarGroup>

            <NavbarSeparator />

            {/* Gallery */}
            <NavbarGroup to='/gallery' name="Gallery"></NavbarGroup>

            <NavbarSeparator />

            {/* Contact */}
            <NavbarGroup to='/contact' name='Contact'></NavbarGroup>
        </nav>
    );
};

export default Navbar;