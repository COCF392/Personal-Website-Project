// referencing elements for the image carousel
const previousButton = document.getElementById("prev_button");
const nextButton = document.getElementById("next_button");
const carousel = document.getElementById("carousel_view");

// variable to keep track of how far the carousel has moved
let carouselIndex = 0;
previousButton.classList.add("set_dimmed")

// functions for moving the carousel
function slideLeft() {
    // first checking if the right button has been dimmed, then correcting it
    if(carouselIndex == 3) {nextButton.classList.remove("set_dimmed");}
    carousel.scrollLeft -= 950 // 950 is the width of the items in the carousel plus their padding
    if (carouselIndex > 0) {carouselIndex--;}
    console.log(carouselIndex)
    if (carouselIndex == 0) {previousButton.classList.add("set_dimmed");}
}

function slideRight() {
    if (carouselIndex == 0) {previousButton.classList.remove("set_dimmed");}
    carousel.scrollLeft += 950
    if (carouselIndex < 3) {carouselIndex++;}
    console.log(carouselIndex)
    if(carouselIndex == 3) {nextButton.classList.add("set_dimmed");}
}

// this function makes it so that the carousel starts at the beginning if the page loads again
function setCarouselToStart() {
    console.log("The page has been loaded")
    carousel.scrollLeft = 0;
}

// event listeners for the buttons
previousButton.addEventListener("click", slideLeft);
nextButton.addEventListener("click", slideRight);
window.addEventListener("load", setCarouselToStart);