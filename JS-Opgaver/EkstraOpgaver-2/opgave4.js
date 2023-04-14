const img = document.querySelector("#imgvalgt")

document.querySelector("#fuglfiskalien").addEventListener("change", function(){
    const value = document.querySelector("#fuglfiskalien").value
    img.src = `./images/${value}.png`
})