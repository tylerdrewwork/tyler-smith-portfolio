import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './sidebar.scss';
import projectdata from 'data/projectdata';

function Sidebar () {
    const location = useLocation();
    return (
        <nav>
            {/* Projects Page */}
            <Link className='link-h1' to="/portfolio">Portfolio</Link>
                {/* Project Links */}
                {projectdata.map(p => <Link className='link-h2'>{p.title}</Link>)}

            {/* Gallery */}
            <Link className='link-h1' to='/gallery'>Gallery</Link>
        </nav>
    );
};

export default Sidebar;