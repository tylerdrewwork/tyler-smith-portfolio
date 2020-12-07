import React from 'react';
import Header from '../../components/header';
import ProjectWrapper from '../../components/projectwrapper';
import styled from 'styled-components';
import { HeadingNameStyle } from './home-style';

const HeadingName = styled.h1`${HeadingNameStyle}`;

function Home () {
    return (
        <div>
            <Header page="home"/>
            <HeadingName>TYLER SMITH</HeadingName>
            <ProjectWrapper />
        </div>
    )
}

export default Home;