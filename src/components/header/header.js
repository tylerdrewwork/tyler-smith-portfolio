import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import './header.css';

const LinkStyleFunc = ({ className, children, to, active }) => (
    <Link className={className} to={to} active={active}>
        {children}
    </Link>
);

const HeaderStyled = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 5vh;
    text-align: center;

    background-color: ${props => props.theme.primary};
    box-shadow: 0px 2px 2px ${props => props.theme.black};
`;

const LinkStyled = styled(LinkStyleFunc)`
    height: 100%;
    line-height: 250%;
    vertical-align: middle;
    padding: 0px 1%;
    margin: 0px 0.5%;
    font-size: 1em;
    text-decoration: none;
    border-bottom: 3px solid transparent;
    color: ${props => props.theme.white};

    /* Set Active */
    &[active="true"] {
        color: ${props => props.theme.primarylight};
        border-bottom-color: ${props => props.theme.primarylight};
    }
    /* Style */
    :hover {
        color: ${props => props.theme.primarylight};
        border-bottom: 3px solid;
    }
`;

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