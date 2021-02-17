/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import './MainFX.scss';
import { gsap } from "gsap";

const MainFX = () => {

    // useEffect triggers once on page load, which triggers the animations
    useEffect (() => {
        // startAnimations();
    }, []);

    function startAnimations () {
        gsap.to("#main-fx-1",
        {
            backgroundPositionX: '250%', 
            yoyo: false,
            ease: "linear",
            duration: 180,
            repeat: -1,
        })
    }

    return (
        <>
        <div className="main-fx" id="main-fx-1"></div>
        <div className="main-fx" id="main-fx-2"></div>
        </>
    );
};

export default MainFX;