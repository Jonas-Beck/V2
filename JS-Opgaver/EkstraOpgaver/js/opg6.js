const image = document.querySelector("img")

image.addEventListener("mouseenter", function(){
    image.src = "./img/tt2.gif"
})

image.addEventListener("mouseleave", function(){
    image.src = "./img/tt1.gif"
})