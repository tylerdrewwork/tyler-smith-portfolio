import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import './header.css';

const LinkStyleFunc = ({ className, children, to }) => (
    <Link className={className} to={to}>
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

    background-color: ${props => props.theme.primarylight};
    box-shadow: 0px 2px 2px ${props => props.theme.black};
`;

const LinkStyled = styled(LinkStyleFunc)`
    height: 100%;
    vertical-align: middle;
    padding: 0px 20px;
    font-size: 1.5em;
    text-decoration: none;

    /* Style */
    color: white;
    :hover {
        color: ${props => props.theme.primaryLight};
        border-bottom: 3px solid ${props => props.theme.primaryLight};
    }
`;

function Header () {
    return (
        <HeaderStyled>
            <LinkStyled to="/">Home</LinkStyled>
            <LinkStyled to="/projects">Projects</LinkStyled>
            <LinkStyled to="/gallery">Gallery</LinkStyled>
            <LinkStyled to="/about">About</LinkStyled>
            <LinkStyled to="/contact">Contact</LinkStyled>
        </HeaderStyled>
    )
};

export default Header;