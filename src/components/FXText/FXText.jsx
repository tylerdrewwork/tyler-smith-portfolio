import React, { useEffect } from 'react';
import './FXText.scss';

import _ from 'underscore';
import { gsap } from "gsap";

const FXText = (props) => {
    let overlayEls;
    
    function startAnimations () {
        const minDuration = 30;
        const maxDuration = 60;

        // Animate each overlay separately!
        for (let i = 0; i < overlayEls.length; i++) {
            
            gsap.to(overlayEls[i],
                {   // Overlay Animation Properties
                    backgroundPositionX: '1000px', 
                    yoyo: false,
                    ease: "linear",
                    duration: _.random(minDuration, maxDuration),
                    repeat: -1,
                })
            }
        }
        
    // useEffect triggers once on page load, which triggers the animations
    useEffect (() => {
        overlayEls = document.querySelectorAll(".fxtext__overlay")
        startAnimations();
    }, []);

    // This function renders multiple overlays
    function renderOverlays () {
        let layerCount;
        let renderedOverlays = [];
        // If no props.layers, then set count to 1 
        if (!props.layers) { layerCount = 1; }
        else { layerCount = props.layers; }

        for (let i = 0; i < layerCount; i++) {
            renderedOverlays.push(
                <div className={`fxtext__overlay ${props.className} ${props.overlayClass}`}>
                    {props.children}
                </div>
            )
        }

        return renderedOverlays;
    }

    return (
        <div className={"fxtext"}>
            {/* The actual text, using template literals for classes */}
            <div className={`fxtext__text ${props.className} ${props.textClass}`}>
                {props.children}
            </div>
            {/* The fx overlay */}
            {renderOverlays()}
        </div>
    );
};

export default FXText;