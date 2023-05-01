// Add eventlistener on .navbar-menu (Burgermenu icons div)
document.querySelector(".navbar-menu").addEventListener("click", function () {

    /*Toogle Active class on .navbar-links*/ 
    document.querySelector(".navbar-links").classList.toggle("navbar-links-active")

    /*Toggle on both burgermenu icons */
    document.querySelector(".menuopen").classList.toggle("navbar-menu-active")
    document.querySelector(".menuclose").classList.toggle("navbar-menu-active")
})
