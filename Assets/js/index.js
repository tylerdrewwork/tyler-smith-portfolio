// Config
const zoomAmount = 0.25;
const portfolioCoords = {x: 2, y: 2};
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
        default:
            break;
    }

    $("#container").css("overflow", "visible");

    // Zoom Out
    gsap.to("#container", {
        left: `${(-currentPosition.x * 100) * zoomAmount}vw`,
        top: `${(-currentPosition.y * 100) * zoomAmount}vh`,
        scale: zoomAmount,
        duration: 1,
    });

    // Move to
    gsap.to("#container", {
        // We need to multiply by zoom amount to prevent scaling that sends the container flying
        left: `${(-destination.x * 100) * zoomAmount}vw`,
        top: `${(-destination.y * 100) * zoomAmount}vh`,
        duration: 1,
        delay: 1,
    });

    // Zoom In
    gsap.to("#container", {
        left: `${-destination.x * 100}vw`,
        top: `${-destination.y * 100}vh`,
        scale: 1,
        duration: 1,
        delay: 2,
    }).then(() => {
        currentPosition = destination;
    });

}

function init () {
    // Fade in header
    gsap.from("#header-name", {
        opacity: 0,
        y: 20,
        duration: 6,
        ease: "power2.out",
    })
    setInitialPositionsForSections();
}

function setInitialPositionsForSections () {
    gsap.set("#portfolio-container", {
        left: `${portfolioCoords.x * 100}vw`,
        top: `${portfolioCoords.y * 100}vh`,
    });
}

init();