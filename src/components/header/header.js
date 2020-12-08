import React from 'react';
import { HeaderStyled, LinkStyled } from './header-style';

function Header (props) {
    return (
        <HeaderStyled>
            <LinkStyled to="/" active={props.page === "home" ? "true" : "false"} >Home</LinkStyled>
            <LinkStyled to="/projects" active={props.page === "projects" ? "true" : "false"}>Projects</LinkStyled>
            <LinkStyled to="/clients" active={props.page === "clients" ? "true" : "false"}>Clients</LinkStyled>
            <LinkStyled to="/about" active={props.page === "about" ? "true" : "false"}>About</LinkStyled>
            <LinkStyled to="/contact" active={props.page === "contact" ? "true" : "false"}>Contact</LinkStyled>
        </HeaderStyled>
    )
};

export default Header;