// Config
const zoomAmount = 0.45;
const portfolioCoords = {x: 0, y: 1};
const contactCoords = {x: 0, y: 2};
// Global Vars
let isInsideIndex = true;
let currentPosition = {x: 0, y: 0};

function init () {
    // This is the code that places the sections in different parts of the site for the camera zoom in/out special fx
    // setInitialPositionsForSections();
    startBackgroundScrollScrub();
    fogFX();

    // Fade out Splash
    gsap.to("#splash", {
        opacity: 0,
        duration: 1,
        ease: "power1.in",
    });

    // Fade in header
    gsap.from("#header-name", {
        opacity: 0,
        y: 20,
        duration: 6,
        delay: 1,
        ease: "power2.out",
    });
}

function moveToSection (section) {
    let destination = {x: undefined, y: undefined};
    switch (section) {
        case "index":
            destination.x = 0;
            destination.y = 0;
            break;
        case "portfolio":
            destination = portfolioCoords;
            break;
            case "contact":
            destination = contactCoords;
            break;
        default:
            break;
    }

    $("#container").css("overflow", "visible");

    // Zoom Out
    gsap.to("#container", {
        left: `${(-currentPosition.x * 100) * zoomAmount}vw`,
        top: `${(-currentPosition.y * 100) * zoomAmount}vh`,
        scale: zoomAmount,
        ease: "power3.inOut",
        duration: 0.4,
        onComplete: move,
    })

    // Move to
    function move() {
        gsap.to("#container", {
            // We need to multiply by zoom amount to prevent scaling that sends the container flying
            left: `${(-destination.x * 100) * zoomAmount}vw`,
            top: `${(-destination.y * 100) * zoomAmount}vh`,
            duration: 0.4,
            ease: "power1.out",
            onComplete: zoomIn,
        });
    }

    // Zoom In
    function zoomIn() {
        gsap.to("#container", {
            left: `${-destination.x * 100}vw`,
            top: `${-destination.y * 100}vh`,
            ease: "power3.in",
            scale: 1,
            duration: 0.6,
        }).then(() => {
            currentPosition = destination;
        });
    }

}

function fogFX () {
    const possibleColors = ["b82d2d", "83d164", "2d4cd4"]
    const xStartingRange = 500;
    const yStartingRange = 400;
    const xTranslationRange = 500;
    const durationMin = 5;
    const durationMax = 20;
    const delayRange = 3;

    // Actual Fog Animation Timeline
    const fogTimeline = gsap.timeline({
        repeat: -1,
        yoyo: true,
    });

    // Index Scrolltrigger
    gsap.timeline({
        scrollTrigger: {
            trigger: "#index-container",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            markers: true,
            onEnterBack: () => { 
                isInsideIndex = true; 
                fogTimeline.play();
            },
            onLeave: () => { 
                isInsideIndex = false; 
            },
        }
    });

    fogTimeline.play(); // Start moving fog once, when page loads

    gsap.set(".fog-particle", {
        x: () => { return random(-xStartingRange, xStartingRange); },
        y: () => { return random(-yStartingRange, yStartingRange); },
        background: () => {
            let color = possibleColors[random(0, possibleColors.length)];
            console.log("color: ", color);
            return `radial-gradient(circle, #${color} -30%, rgba(208,210,215,0) 60%, rgba(228,230,237,0) 100%)`;
        }
    });
    
    fogTimeline.to(".fog-particle", { 
        x: () => { return random(-xTranslationRange, xTranslationRange); },
        duration: () => { return random(durationMin, durationMax); },
        delay: () => { return random(delayRange); },
    });
}

function startBackgroundScrollScrub () {
    const bgTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: "#container",
            start: "top top",
            end: "bottom bottom",
            scrub: true,
        }
    });

    bgTimeline.to("#background-image", {backgroundPositionY: "200px"})
    // bgTimeline.to("#portfolio-container", {width: 10})
    // bgTimeline.to("#contact-container", {width: 10})
}

function random (min, max) {
    return Math.floor(min + Math.random() * (max - min));
}

function setInitialPositionsForSections () {
    gsap.set("#portfolio-container", {
        left: `${portfolioCoords.x * 100}vw`,
        top: `${portfolioCoords.y * 100}vh`,
    });
    gsap.set("#contact-container", {
        left: `${contactCoords.x * 100}vw`,
        top: `${contactCoords.y * 100}vh`,
    })
}

init();