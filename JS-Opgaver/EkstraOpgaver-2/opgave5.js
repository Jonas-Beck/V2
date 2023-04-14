const result = document.querySelector("#resultat")

document.querySelector("#knap").addEventListener("click", function(){
    result.innerHTML = ""
    for (let i = 0; i <= 1000; i += 7) {
        result.innerHTML += `${i} `
    }
})