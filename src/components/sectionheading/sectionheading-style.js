import { css } from 'styled-components';
import { ResponsiveTextStatic } from '../../utils/responsiveText';

export const sectionHeadingStyle = css`
    /* Text */
    ${ResponsiveTextStatic(20, 80)}
    /* font-family: 'Montserrat', sans-serif; */
    text-align: center;
    color: ${props => props.theme.primarylight};

    /* Horizontal Rule */
    & hr {
        border-color: ${props => props.theme.primarylight};
        width: 50%;
    }
`