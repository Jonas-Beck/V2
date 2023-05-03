// Add eventlistener on .navbar-menu (Burgermenu icons div)
document.querySelector(".navbar-icons").addEventListener("click", function () {
    /*Toogle Active class on .navbar-links*/
    document.querySelector(".navbar-links").classList.toggle("navbar-links-active")

    /*Toggle on both burgermenu icons */
    document.querySelector(".open").classList.toggle("hide")
    document.querySelector(".close").classList.toggle("hide")
})
