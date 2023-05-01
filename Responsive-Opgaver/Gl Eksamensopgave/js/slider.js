// slider Items array
const slideItems = document.querySelectorAll(".slide-item")
/*Array with all slide Images*/ 
const slideImages = document.querySelectorAll(".slide-item > img")
/*const with p tag inside .slide-desc*/ 
const slideDesc = document.querySelector(".slide-desc > p")


// Index for current image shown
let index = 0

window.onload = function () {
    setTimeout(autoSlide, 4000)
    slideDesc.innerHTML = slideImages[index].alt /*Set slide desc to first slide alt text*/
}

function autoSlide() {
    slideRight()
    setTimeout(autoSlide, 4000)
}

function slideRight() {
    //Remove active class from previous selected element
    slideItems[index].classList.toggle("slide-item-active")

    //Checks if index == last elemnt if true changes index to first element else index +1
    index == slideItems.length - 1 ? (index = 0) : index++

    slideItems[index].classList.toggle("slide-item-active")
    slideDesc.innerHTML = slideImages[index].alt /*Update slidedesc using next slide img alt text*/ 

}

