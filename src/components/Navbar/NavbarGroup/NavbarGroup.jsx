import React from 'react';
import { Link } from 'react-router-dom';

function NavbarGroup (props) {
    return (
        <div className="navbar-group">
            <Link className='link link-h1' to={props.to}>
                {props.name}
            </Link>
            {props.children}
        </div>
    )
}

export default NavbarGroup;