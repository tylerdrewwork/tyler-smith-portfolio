import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './navbar.scss';
import projectdata from 'data/projectdata';
import NavbarGroup from './NavbarGroup';
import NavbarSeparator from "./NavbarSeparator";

function Navbar (props) {
    // const location = useLocation();
    return (
        <> {/*JSX Fragment for multiple conditional renders*/}

        {/* IF ON HOMEPAGE, render the navbar that stays on bottom of the page */}
        {props.variant === "home" && 
        <nav class="variant-home">
            {/* Projects Page */}
            <NavbarGroup to="/portfolio" name="Portfolio">
                {/* Project Links */}
                    {projectdata.map(p => <Link className='link link-h2'>{p.title}</Link>)}
            </NavbarGroup>

            <NavbarSeparator />

            {/* Gallery */}
            <NavbarGroup to='/gallery' name="Gallery"></NavbarGroup>

            <NavbarSeparator />

            {/* Contact */}
            <NavbarGroup to='/contact' name='Contact'></NavbarGroup>
        </nav>}

        {/* IF variant is default */}
        {props.variant === "default" && 
        <nav class="variant-default">
            
        </nav>}
        </>
    )
};

export default Navbar;