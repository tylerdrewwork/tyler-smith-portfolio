import { css } from 'styled-components';

const headingSize = {
    sizeMin : "20",
    sizeMax : "100",
    viewportMin : "320",
    viewportMax : "1000",
    formula () {
        return `${this.sizeMin}px + (${this.sizeMax} - ${this.sizeMin}) * ((100vw - ${this.viewportMin}px) / (${this.viewportMax} - ${this.viewportMin}))`
    }
}

export const HeadingNameStyle = css`
    /* Font-Size: Minimum */
    font-size: ${headingSize.sizeMin}px;
    /* Font-Size: Medium */
    @media screen and (min-width: ${headingSize.viewportMin}px) {
        font-size: calc(${headingSize.formula()});
    }
    /* Font-Size: Maximum */
    @media screen and (min-width: ${headingSize.viewportMax}px) {
        font-size: ${headingSize.sizeMax}px;
    }
    
    font-family: 'Raleway', sans-serif;
    font-weight: 100;

    margin-top: 200px;
    letter-spacing: 0.2em;
    width: 100vw;
    text-align: center;

    color: ${props => props.theme.primarylight};
`