// mediaQuery variable to only run functions when screen size is > 1000px
const mediaQuery = window.matchMedia("(min-width: 1000px)")

/*Body const used to append lightbox div*/
const body = document.querySelector("body")

/*Add eventlistener to all #lightbox-image ids*/
document.querySelectorAll("#lightbox-image").forEach((item) =>
    item.addEventListener("click", function (e) {
        if (mediaQuery.matches) {
            // Create lightbox div
            const div = document.createElement("div")
            div.classList.add("lightbox")

            //Create image tag and change src to large version
            const img = document.createElement("img")
            img.src = e.target.src.replace("FriskFrugt", "lg_") // Editet all images so lg_ instead of Friskfrugt = large iamge

            // Append image div to lightbox div
            div.appendChild(img)

            // Create EventLIstener to lightbox to delete when clicked on
            div.addEventListener("click", function () {
                // TODO Create reusable lightbox instead
                div.remove()
            })

            // Append lightbox div to body
            body.appendChild(div)
        }
    })
)


/*Add eventlistener to all #lightbox-image ids*/
document.querySelectorAll("#lightbox-card").forEach((item) =>
    item.addEventListener("click", function (e) {
        if (mediaQuery.matches) {
            // Create lightbox div
            const div = document.createElement("div")
            div.classList.add("lightbox")

            //Create image tag and change src to large version
            const img = document.createElement("img")
            img.src = item.querySelector("img").src.replace(".jpg", "_lg.jpg")

            // Append image div to lightbox div
            div.appendChild(img)

            //Create div for text
            const text = document.createElement("div")

            // Append all p items inside item to text div created above
            item.querySelectorAll("p").forEach((textItem) => {
                const p = document.createElement("p")
                p.innerHTML = textItem.innerHTML
                text.appendChild(p)
            })

            div.appendChild(text)

            // Create EventLIstener to lightbox to delete when clicked on
            div.addEventListener("click", function () {
                // TODO Create reusable lightbox instead
                div.remove()
            })

            // Append lightbox div to body
            body.appendChild(div)
        }
    })
)
