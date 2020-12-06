import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import './header.css';

const HeaderStyled = styled.header`
    width: 100vw;
    height: 5vh;
    text-align: center;
    background-color: ${props => props.theme.primarylight};
    box-shadow: 0px 2px 2px ${props => props.theme.black};
`;

const LinkStyleFunc = ({ className, children, to }) => (
    <Link className={className} to={to}>
        {children}
    </Link>
);

const LinkStyled = styled(LinkStyleFunc)`
    color: white;
    :hover {
        color: red;
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