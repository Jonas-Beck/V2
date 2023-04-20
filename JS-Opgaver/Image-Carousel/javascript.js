// Image Carousel element
const imageCarousel = document.querySelector(".image-carousel")
// Carousel Items array
const carouselItems = document.querySelectorAll(".carousel-item")
// Index for current image shown
let index = 0

window.onload = function () {
    createDots()
    createArrows()
    setTimeout(slideshowSlider, 3000)
}

function slideshowSlider() {
    slideRight()
    setTimeout(slideshowSlider, 3000)
}

function createDots() {
    //Create carousel-dots div
    let div = document.createElement("div")
    div.classList.add("carousel-dots")
    // Create div element under .carousel-dots for each carousel-item
    carouselItems.forEach(function (value, i) {
        const dot = document.createElement("div")
        div.appendChild(dot)
    })
    // Add carousel-dots div to image carousel
    imageCarousel.appendChild(div)

    // Toggle dot-active class on first div element
    document.querySelector(".carousel-dots > div").classList.toggle("dot-active")

    //Add eventlistener to all dots
    document.querySelectorAll(".carousel-dots > div").forEach((item, i) => {
        item.addEventListener("click", function () {
            //Swap to image with same index as clicked dot
            slideIndex(i)
        })
    })
}

function createArrows() {
    // Create carousel-arrows div
    let div = document.createElement("div")
    div.classList.add("carousel-arrows")

    //Create left arrow with <i> tag
    const left = document.createElement("i")
    // Add font awesome class for icon
    left.classList = "fa-solid fa-chevron-left fa-xl"

    //Create right arrow with <i> tag
    const right = document.createElement("i")
    // Add font awesome class for icon
    right.classList = "fa-solid fa-chevron-right fa-xl"

    left.addEventListener("click", function () {
        slideLeft() // TODO Remove AutoSlide
    })
    right.addEventListener("click", function () {
        slideRight() // TODO Remove AutoSlide
    })

    div.appendChild(left)
    div.appendChild(right)

    imageCarousel.appendChild(div)
}

function slideLeft() {

    //Checks if index == first elemnt if true changes index to last element else index +1
    index == 0 ? slideIndex(carouselItems.length - 1): slideIndex(index - 1)
}

function slideRight() {
    //Checks if index == last elemnt if true changes index to first element else index +1
    index == carouselItems.length - 1 ? slideIndex(0) : slideIndex(index + 1)
}

function slideIndex(i) {
    //Save all dots in const
    const carouselDots = document.querySelectorAll(".carousel-dots > div")

    //Remove active class from previous selected element
    carouselItems[index].classList.toggle("item-active")
    carouselDots[index].classList.toggle("dot-active")

    index = i

    carouselItems[index].classList.toggle("item-active")
    carouselDots[index].classList.toggle("dot-active")
}
