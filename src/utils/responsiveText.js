import { css } from 'styled-components';

export function ResponsiveText (sizeMin, sizeMax, vpMin, vpMax) {
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

export function ResponsiveMaxWidth (sizeMin, sizeMax, vpMin, vpMax) {
    let cssArray = [
        css `max-width: ${sizeMin}px;`,
        css `@media screen and (min-width: ${vpMin}px) {
            max-width: calc(${sizeMin}px + (${sizeMax} - ${sizeMin}) * ((100vw - ${vpMin}px) / (${vpMax} - ${vpMin})));
        }`,
        css `@media screen and (min-width: ${vpMax}px) {
            max-width: ${sizeMax}px;
        }`,
    ];
    return (cssArray);
}