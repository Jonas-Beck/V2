const result = document.querySelector("#resultat")
const image = document.querySelector("img")


document.querySelector("#randomtal").addEventListener("click", function(){
    let random = Math.floor(Math.random() * 6) + 1; 
    result.innerHTML = random
    switch (random) {
        case 1:
            image.src = "./images/terning-1.png"
            break;
        case 2:
            image.src = "./images/terning-2.png"
            break;
        case 3:
            image.src = "./images/terning-3.png"
            break;
        case 4:
            image.src = "./images/terning-4.png"
            break;
        case 5:
            image.src = "./images/terning-5.png"
            break;
        case 6:
            image.src = "./images/terning-6.png"
            break;        
        default:
            break;
    }
})