let bioImg = document.getElementById("bio-picture-img");
let bioImgSmall = document.getElementById("bio-picture-img--sm");

function imgMediaQuery(xWindowSize) {
    if (xWindowSize.matches === true) {
        console.log("Showing Great Than Medium Image!");
        bioImg.style.visibility = "visible";
        bioImgSmall.style.visibility = "hidden";
    } else {
        console.log("Shower Small and Lower Image!");
        bioImgSmall.style.visibility = "visible";
        bioImg.style.visibility = "hidden";
    }
}


let xWindowSize = window.matchMedia("(min-width: 992px)")
imgMediaQuery(xWindowSize);
xWindowSize.addListener(imgMediaQuery);