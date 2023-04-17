
const rollo = document.querySelector("#rollo")

rollo.style.position = "relative"
let posX = 370
let posY = -10
rollo.style.left = posX + "px"
rollo.style.top = posY + "px"




function left(){
    posX -= 20
    rollo.style.left = posX + "px"
    rollo.style.transform ="scaleX(1)"

}
function right(){
    rollo.style.transform ="scaleX(-1)"
    posX += 20
    rollo.style.left = posX + "px"
}
function up(){
    posY -= 20
    rollo.style.top = posY + "px"
}
function down(){
    posY += 20
    rollo.style.top = posY + "px"
}

document.addEventListener("keydown", function(event){
    switch (event.key) {
        case "ArrowLeft":
            left()
            break;
        case "ArrowUp":
            up()
            break;
        case "ArrowRight":
            right()
            break;
        case "ArrowDown":
            down()
            break;
     }
})

document.querySelector("#venstre").addEventListener("click", left)
document.querySelector("#hoejre").addEventListener("click", right)
document.querySelector("#op").addEventListener("click", up)
document.querySelector("#ned").addEventListener("click", down)