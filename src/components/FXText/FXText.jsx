import React, { useEffect } from 'react';
import './FXText.scss';

// import _ from 'underscore';
import { gsap } from "gsap";

// NOTE FXText NEEDS to have an ID on it

const FXText = (props) => {
    let overlayEls;
    
    function startAnimations () {
        let currentDuration = 90; // the starting duration
        let currentScale = 2000; // the starting scale

        const durationModVal = 20;
        const scaleModVal = 600;

        // Animate each overlay separately!
        for (let i = 0; i < overlayEls.length; i++) {
            // Set simulated layer for particles. Each loop makes the particles get smaller and faster
            gsap.set(overlayEls[i], {
                backgroundSize: currentScale,
            })
            currentScale -= scaleModVal; // reduce scale

            // Animate Particles
            gsap.to(overlayEls[i],
            {   // Overlay Animation Properties
                backgroundPositionX: -currentScale + 'px', 
                yoyo: false,
                ease: "linear",
                duration: currentDuration,
                repeat: -1,
            })
            currentDuration -= durationModVal; // increase duration
        }
    }
        
    // useEffect triggers once on page load, which triggers the animations
    useEffect (() => {
        // Select the current overlay by selecting overlays with the prop id
        overlayEls = document.querySelectorAll(`.fxtext#${props.id} .fxtext__overlay`);
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
        <div className={"fxtext"} id={props.id}>
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