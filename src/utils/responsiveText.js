import { css } from 'styled-components';

/**
@param object Object containing sizeMin, sizeMax, viewportMin, viewportMax
*/
export function ResponsiveText (properties) {
    let {sizeMin, sizeMax, viewportMin, viewportMax} = properties;
    return `${sizeMin}px + (${sizeMax} - ${sizeMin}) * ((100vw - ${viewportMin}px) / (${viewportMax} - ${viewportMin}))`
}

const vpMin = "320";
const vpMax = "1000";
export function ResponsiveTextStatic (sizeMin, sizeMax) {
    let cssArray = [
        css `font-size: ${sizeMin}px;`,
        css `@media screen and (min-width: ${vpMin}px) {
            font-size: calc(${sizeMin}px + (${sizeMax} - ${sizeMin}) * ((100vw - ${vpMin}px) / (${vpMax} - ${vpMin})));
        }`,
        css `@media screen and (min-width: ${vpMax}px) {
            font-size: ${sizeMax}px;
        }`,
    ];
    return (cssArray);
}