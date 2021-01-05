// import styled from 'styled-components';
// import { Navbar } from 'react-bootstrap';
// import { ResponsiveText, ResponsiveTextStatic, ResponsiveMaxWidth } from '../../utils/responsiveText';
// import colors from 'config/colors'
// import fonts from 'config/fonts';
// import containerborder from 'images/style/container-border-xy.png';

// export const LinkStyleFunc = ({ className, children, to, active }) => (
    // <Link className={className} to={to} active={active}>
        // {children}
    // </Link>
// );

// export const NavbarStyleFunc = ({ className, children, expand }) => (
//     <Navbar className={className} expand={expand}>
//         {children}
//     </Navbar>
// );

// export const HeaderStyled = styled(NavbarStyleFunc)`
//     font-family: 'Montserrat', sans-serif;
//     position: fixed;
//     top: 0 ;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 100%;
//     text-align: center;
//     z-index: 5;
//     /* Style */
//     border-bottom: 2px solid red;
//     background-color: rgba(255,255,255,0.75);
//     backdrop-filter: blur(2px);
//     -webkit-backdrop-filter: blur(2px);
//     /* background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0.5) 100%); */
    
//     /* box-shadow: 0px 4px 10px ${colors.black}; */

//     /* Tablet or smaller */
//     @media (max-width: 767px) {
//         justify-content: space-between;
//     }

//     & .navbar-toggler {
//         /* This is the button to toggle collapse */
//     }

//     & .navbar-nav {
//         width: 100%;
//         margin-right: auto;
//     }

//     & .header-img-wrapper {
//         display: flex;
//         height: 100%;
//         align-items: center;

//         &#header-logo-wrapper {
//             img {
//                 ${ResponsiveMaxWidth(100, 175, 350, 1300)}
//             }
//         }
//     }

//     & #basic-navbar-nav {
//         /* This is the div that holds the links and collapses */
//         flex-grow: 0;
//         /* The following is a hack to align the flexbox to the middle */
//         margin-right: 5%;
//     }
// `;

// // {sizeMin, sizeMax, viewportMin, viewportMax}
// const linkTextSize = {
//     sizeMin: 10,
//     sizeMax: 30,
//     viewportMin: 350,
//     viewportMax: 1475
// }

// export const LinkStyled = styled(LinkStyleFunc)`
//     ${ResponsiveText(18, 35, 350, 1625)}
//     /* ${ResponsiveTextStatic(10, 30)} */
//     /* ${fonts.Poppins} */
    
//     justify-content: center;
//     vertical-align: middle;
//     padding: 0px 1%;
//     text-decoration: none;
//     text-align: center;
//     /* color: ${colors.primary}; */
//     transition: font-size 0.2s;

//     /* Set Active */
//     &.link-active {
//         ${ResponsiveText(25, 45, 350, 1625)}
//         text-decoration: underline;
//     }
//     /* Style */
//     :hover {
//         color: ${props => props.theme.primarylight};
//     }
// `;