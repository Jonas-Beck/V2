const text = document.querySelector("#teksten")

document.querySelector(".roed").addEventListener("click", function(){
    text.style.color = "red"
})
document.querySelector(".groen").addEventListener("click", function(){
    text.style.color = "green"
})
document.querySelector(".blaa").addEventListener("click", function(){
    text.style.color = "blue"
})