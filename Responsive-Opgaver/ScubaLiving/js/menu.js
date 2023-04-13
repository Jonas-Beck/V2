const menuBtn = document.querySelector(".menu-btn")
const navbarMain = document.querySelector(".navbar-main")
const navbar = document.querySelector(".navbar")

menuBtn.addEventListener("click", burgermenu, false)

function burgermenu(){
    navbarMain.classList.toggle("navbar-main-active")
    navbar.classList.toggle("navbar-active")
}