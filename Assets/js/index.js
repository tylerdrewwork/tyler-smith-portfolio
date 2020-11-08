let currentSection = "";
const zoomAmount = 0.25;
const portfolioCoordsX = 2500;
const portfolioCoordsY = 2500;

gsap.from("#header-name", {
    opacity: 0,
    y: 20,
    duration: 6,
    ease: "power2.out",
})

function showPortfolio () {
    $("#container").css("overflow", "visible");

    // Zoom Out
    gsap.to("#container", {
        scale: zoomAmount,
        duration: 1,
    });

    // Move to
    gsap.to("#container", {
        left: -portfolioCoordsX * zoomAmount,
        top: -portfolioCoordsY * zoomAmount,
        duration: 1,
        delay: 1,
    });

    // Zoom In
    gsap.to("#container", {
        left: -portfolioCoordsX,
        top: -portfolioCoordsY,
        scale: 1,
        duration: 1,
        delay: 2,
    })

}

function init () {
    gsap.set("#portfolio-container", {
        left: portfolioCoordsX,
        top: portfolioCoordsY,
    })
}

init();