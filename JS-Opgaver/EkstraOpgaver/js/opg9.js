document.querySelector("a").addEventListener("click", function(){
    alert("Du bliver sendt til google")
})
document.querySelectorAll("a")[1].addEventListener("click", function(){
    confirm("Er du sikker på at du vil bruge Bing?")
})