
const pacman = document.querySelector("#pacman")


function left(){
    pacman.style.transform +="translateX(-50px)"
}
function right(){
    pacman.style.transform +="translateX(50px)"
}
function up(){
    pacman.style.transform +="translateY(-50px)"
}
function down(){
    pacman.style.transform +="translateY(50px)"
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