const header = document.querySelector("#overskrift")
const firstText = header.innerHTML

document.querySelector("#knap").addEventListener("click", function(){
    header.innerHTML == firstText ? header.innerHTML = "En ny overskrift" : header.innerHTML = firstText
}, false)