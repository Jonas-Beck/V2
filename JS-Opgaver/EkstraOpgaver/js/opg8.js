const seasonimage = document.querySelector("#seasonimage > img")
const seasontext = document.querySelector("#seasontext")

window.onload = showSeason()

function showSeason() {
    const date = new Date();      
    const monthDate = date.getMonth()
    switch(true){
        case monthDate >= 2 && monthDate <= 4:
            seasontext.textContent = "Spring"
            seasonimage.src = "./img/spring.jpg"
            break
        case monthDate >= 5 && monthDate <= 7:
            seasontext.textContent = "Summer"
            seasonimage.src = "./img/summer.jpg"

            break
        case monthDate >= 8 && monthDate <= 10:
            seasontext.textContent = "Autumn"
            seasonimage.src = "./img/autumn.jpg"
            break
        default:
            seasontext.textContent = "Winter"
            seasonimage.src = "./img/winter.jpg"
            break
    }
}

