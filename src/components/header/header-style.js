import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ResponsiveTextStatic } from '../../utils/responsiveText';

export const LinkStyleFunc = ({ className, children, to, active }) => (
    <Link className={className} to={to} active={active}>
        {children}
    </Link>
);

export const HeaderStyled = styled.header`
    font-family: 'Montserrat', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 5vh;
    text-align: center;

    background-color: ${props => props.theme.primary};
    box-shadow: 0px 2px 2px ${props => props.theme.black};
`;

export const LinkStyled = styled(LinkStyleFunc)`
    ${ResponsiveTextStatic(13,20)}
    /* font-size: 1em; */
    height: 100%;
    line-height: 250%;
    vertical-align: middle;
    padding: 0px 1%;
    margin: 0px 0.5%;
    text-decoration: none;
    border-bottom: 3px solid transparent;
    color: ${props => props.theme.white};

    /* Set Active */
    &[active="true"] {
        color: ${props => props.theme.primarylight};
        border-bottom-color: ${props => props.theme.primarylight};
    }
    /* Style */
    :hover {
        color: ${props => props.theme.primarylight};
        border-bottom: 3px solid;
    }
`;