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

const LinkStyleFunc = ({ className, children }) => (
    <Link className={className}>
        {children}
    </Link>
);

const LinkStyled = styled(LinkStyleFunc)`
    color: red;
`;

function Header () {
    return (
        <HeaderStyled>
            <LinkStyled to="/">Home</LinkStyled>
            <LinkStyled to="">Projects</LinkStyled>
            <LinkStyled to="">Gallery</LinkStyled>
            <LinkStyled to="">About</LinkStyled>
            <LinkStyled to="">Contact</LinkStyled>
        </HeaderStyled>
    )
};

export default Header;