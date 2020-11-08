// Config
const zoomAmount = 0.45;
const portfolioCoords = {x: 0, y: 1};
const contactCoords = {x: 1, y: 1};
// Global Vars
let currentPosition = {x: 0, y: 0};

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
        duration: 0.8,
        onComplete: move,
    })

    // Move to
    function move() {
        gsap.to("#container", {
            // We need to multiply by zoom amount to prevent scaling that sends the container flying
            left: `${(-destination.x * 100) * zoomAmount}vw`,
            top: `${(-destination.y * 100) * zoomAmount}vh`,
            duration: 1,
            easing: "power4.out",
            onComplete: zoomIn,
        });
    }

    // Zoom In
    function zoomIn() {
        gsap.to("#container", {
            left: `${-destination.x * 100}vw`,
            top: `${-destination.y * 100}vh`,
            scale: 1,
            duration: 1,
        }).then(() => {
            currentPosition = destination;
        });
    }

}

function init () {
    setInitialPositionsForSections();
    // Fade in header
    gsap.from("#header-name", {
        opacity: 0,
        y: 20,
        duration: 6,
        ease: "power2.out",
    })
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