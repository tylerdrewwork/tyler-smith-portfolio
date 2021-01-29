import React from 'react';
import { Link } from 'react-router-dom';
// import { HeaderStyled, LinkStyled } from './header-style';
import { Navbar, Nav } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import './header.scss';

function Header (props) {
    const location = useLocation();
    return (
        <Navbar id="header" expand="md">
            {/* // Imgs are wrapped so they can be positioned evenly in the header */}
            <Navbar.Brand className="header-img-wrapper" id="header-logo-wrapper">
                {/* <img alt="ELT Construction Logo" src={eltlogo}/> */}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>

            <Navbar.Collapse id="basic-navbar-nav">
                {/* // The below is for mapping out the header links */}
                <Nav>
                    {props.pages.map(page => (
                        <Link to={page.url} key={page.id} className={page.url === location.pathname ? "link-active header-link" : "header-link"}>
                            {page.display}
                        </Link>
                    ))}
                </Nav>
            </Navbar.Collapse>            
        </Navbar>

        // <HeaderStyled expand="md">
        //     <Navbar.Brand>ELT</Navbar.Brand>
        //     <Navbar.Collapse>
        //         <Nav>
        //             test
        //         </Nav>
        //     </Navbar.Collapse>
        // </HeaderStyled>
    )
}

export default Header;