import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import './header.css';

const StyledHeader = styled.header`
    width: 100vw;
    height: 5vh;
    text-align: center;
    background-color: ${props => props.theme.black};
    box-shadow: 0px 2px 2px ${props => props.theme.black};
`

function Header () {
    return (
        <StyledHeader>
            <Link to="/">Home</Link>
            <Link to="">Projects</Link>
            <Link to="">Gallery</Link>
            <Link to="">About</Link>
            <Link to="">Contact</Link>
        </StyledHeader>
    )
}

export default Header;