const body = document.querySelector("body")

document.querySelectorAll("#gallery img").forEach((item) =>
    item.addEventListener("click", function (e) {
        const div = document.createElement("div")
        div.classList.add("overlay")
        const img = document.createElement("img")
        img.src = e.target.src.replace("thumb_", "")
        div.appendChild(img)
        div.addEventListener("click", function () {
            div.remove()
        })
        body.appendChild(div)
    })
)
