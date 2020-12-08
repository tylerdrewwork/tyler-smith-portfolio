import { css } from 'styled-components';
import { ResponsiveTextStatic } from '../../utils/responsiveText';

export const headingNameStyle = css`
    ${ResponsiveTextStatic(20, 100)}

    font-family: 'Raleway', sans-serif;
    font-weight: 100;

    margin-top: 200px;
    letter-spacing: 0.2em;
    width: 100vw;
    text-align: center;

    color: ${props => props.theme.primarylight};
`