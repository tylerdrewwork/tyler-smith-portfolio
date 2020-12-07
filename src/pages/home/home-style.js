import { css } from 'styled-components';

const h1 = {
    sizeMin : "20", // size min
    sizeMax : "100", // size max
    viewportMin : "320", // viewport
    viewportMax : "1000",
}


function responsiveTextFormula (properties) {
    let {sizeMin, sizeMax, viewportMin, viewportMax} = properties;
    return `${sizeMin}px + (${sizeMax} - ${sizeMin}) * ((100vw - ${viewportMin}px) / (${viewportMax} - ${viewportMin}))`
}

export const HeadingNameStyle = css`
    /* Font-Size: Minimum */
    font-size: ${h1.sizeMin}px;
    /* Font-Size: Medium */
    @media screen and (min-width: ${h1.viewportMin}px) {
        font-size: calc(${responsiveTextFormula(h1)});
    }
    /* Font-Size: Maximum */
    @media screen and (min-width: ${h1.viewportMax}px) {
        font-size: ${h1.sizeMax}px;
    }
    
    font-family: 'Raleway', sans-serif;
    font-weight: 100;

    margin-top: 200px;
    letter-spacing: 0.2em;
    width: 100vw;
    text-align: center;

    color: ${props => props.theme.primarylight};
`