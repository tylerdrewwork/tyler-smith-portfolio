import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';
import projectdata from 'data/projectdata';
import NavbarGroup from './NavbarGroup';
import NavbarSeparator from "./NavbarSeparator";

function Navbar (props) {
    // const location = useLocation();
    const variant = props.variant;

    return (
        <> 
        {/* ANCHOR Conditionally puts the variant into the classname, which matters!! Also, some of these elements will be conditionally rendered */}
        {/* The classname here for example would be "variant-home" for the homepage */}
        <nav className={`variant-${variant} ${props.className}`}> 
            {/* Projects Page */}
            <NavbarGroup to="/portfolio" name="Portfolio">
                {/* Project Links */}
                    {projectdata.map(p => 
                        <Link className='link link-h2' key={"nav-link-" + p.title}>{p.title}</Link>
                    )}
            </NavbarGroup>

            <NavbarSeparator />

            {/* Gallery */}
            <NavbarGroup to='/gallery' name="Gallery"></NavbarGroup>

            <NavbarSeparator />

            {/* Contact */}
            <NavbarGroup to='/contact' name='Contact'></NavbarGroup>
        </nav>
        </>
    )
}

export default Navbar;