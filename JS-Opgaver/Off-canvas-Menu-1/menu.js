document.querySelector("#menu-icon").addEventListener("click", function () {
    document.querySelector("#navigation").classList.toggle("nav-active")
    document.querySelector(".menu-open").classList.toggle("hide")
    document.querySelector(".menu-close").classList.toggle("hide")
})
