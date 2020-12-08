import React from 'react';
import styled from 'styled-components';
// import './sectionheading.css';
import { sectionHeadingStyle } from './sectionheading-style';

const SectionHeadingStyled = styled.h2`${sectionHeadingStyle}`;

function SectionHeading (props) {
    return (
        <SectionHeadingStyled>
            <span>{props.children}</span>
            <hr />
        </SectionHeadingStyled>
    );
}

export default SectionHeading;