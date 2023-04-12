// Opgave 1

const btnHello = document.querySelector(".btn-hello")

btnHello.addEventListener("click", function(){
    console.log("Hello World");
})


// const listItems = document.querySelectorAll("ul > li")

// listItems.forEach( item =>{
//     item.addEventListener("click", function(event){
//         event.target.style.vis
//     })
// })

// Opgave 2
function textAlert(evt){
    alert(evt.target.innerHTML)
}

const listParent = document.querySelector("ul")
listParent.addEventListener("click", textAlert, false)

//Opgave 3
const blueBox = document.querySelector(".bluebox")
document.querySelector(".btn-yellow").addEventListener("click", function(){
        blueBox.style.backgroundColor = "yellow"
}, false)


//Opgave 4
function bodyBackgroundColor(event){
    document.body.style.backgroundColor = event.target.innerHTML
}
document.querySelectorAll(".btn-bg").forEach((btn) => btn.addEventListener("click", bodyBackgroundColor, false))

//Opgave 5
const orangeBox = document.querySelector(".orangebox")

function showDiv(){
    if (orangeBox.style.visibility == "visible") {
        orangeBox.style.visibility = "hidden"
    }
    else{
        orangeBox.style.visibility = "visible"
    }
}

document.querySelector(".orangebox > button").addEventListener("click", showDiv, false)