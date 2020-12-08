import { css } from 'styled-components';
import { ResponsiveTextStatic } from '../../utils/responsiveText';

export const sectionHeadingStyle = css`
    /* Text */
    ${ResponsiveTextStatic(15, 40)}
    font-family: 'Lora', sans-serif;
    font-weight: 400;
    text-align: center;
    color: ${props => props.theme.primarylight};

    /* Horizontal Rule */
    & hr {
        border-color: ${props => props.theme.primarylight};
        border-width: 2px;
        border-style: solid;
        margin-top: 10px;
        width: 10vw;
    }
`