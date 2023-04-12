// 1
const menu = document.querySelector("#menu")
console.log(menu);

//2
const active = menu.querySelector(".active")
console.log(active)

//3
const headers = document.querySelectorAll("h1")
for (let i = 0; i < headers.length; i++) {
    console.log(headers[i].innerHTML);
}

//4
const p = document.querySelectorAll("p")
for (let i = 0; i < p.length; i++) {
    console.log(p[i].innerHTML)
}

//5
const img = document.querySelectorAll("img")
for (let i = 0; i < img.length; i++) {
    img[i].alt = "Biledet er underlagt copyright"
}

//6  
// Primære overskrift ??
// Bruger første h1 fra opgave 3
headers[0].innerHTML = "Overskriften er udskiftet" 

//7
// Bruger headers const fra opgave 3
for (let i = 0; i < headers.length; i++) {
    headers[i].classList.add("title")
}

//8
const li = document.querySelectorAll("li")
li.forEach (listItem =>{
    console.log(listItem.innerHTML);
})

//9
function appendListItem(parent, string){
    let listItem = document.createElement("li")
    let text = document.createTextNode(string)
    listItem.appendChild(text)
    parent.appendChild(listItem)
}

const playground = document.querySelector("#playground")
let listElement = document.createElement("ul")

appendListItem(listElement, "Hello World1")
appendListItem(listElement, "Hello World2")
appendListItem(listElement, "Hello World3")

playground.appendChild(listElement)

//10
const photos = document.querySelectorAll("img")
let temp = photos[0].src
photos[0].src = photos[1].src
photos[1].src = temp

//11
document.querySelectorAll("#deleteme, #deletemetoo").forEach((elem) => elem.remove())


