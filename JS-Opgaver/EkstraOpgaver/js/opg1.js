// Variabler

let knap = document.querySelector("#knap") // bruger hashtag for at vælge et ID
let overskrift1 = document.querySelector("#overskrift") // bruger hashtag for at vælge et ID
let overskrift2 = document.querySelector("h2") // bruger hverken . eller #, da vi styler direkte på et html-element

// Event listeners

knap.addEventListener("click", changeColor)


// Functions

function changeColor() {
    overskrift1.style.color = "red";
    overskrift2.style.color = "hotpink";
}

