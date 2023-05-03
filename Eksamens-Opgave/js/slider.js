/*Saving all html elements*/
const slides = document.querySelectorAll(".banner-slide")
const content = document.querySelectorAll(".banner-content")
const arrows = document.querySelector(".hero-slide-arrows")

/* Counter for current slide */
let index = 0

/* */
window.onload = function () {
    /*Toggle active class on slides[index] (always 0) after 1 sec*/
    setTimeout(() => {
        slides[index].classList.toggle("banner-slide-active")
    }, 1000)

    /*toggle active class on content[index] (Always 0) after 2 sec*/
    setTimeout(() => {
        content[index].classList.toggle("banner-content-active")
        arrows.style.opacity = "1"
    }, 2000)
}

/*Add event listener to both arrow images*/
document.querySelectorAll(".hero-slide-arrows > img").forEach((item) =>
    item.addEventListener("click", function () {
        /* Toggle active class the active slide */
        content[index].classList.toggle("banner-content-active")
        slides[index].classList.toggle("banner-slide-active")

        /* Update index */

        index == slides.length - 1 ? index = 0: index++

        // Example for slide left instead if there were more then 2 slides 
        // index == 0 ? index = slides.length - 1 : index--


        /* Toggle active class on next slide after 1 sec*/
        setTimeout(() => {
            content[index].classList.toggle("banner-content-active")
            slides[index].classList.toggle("banner-slide-active")
        }, 1000)
    })
)
