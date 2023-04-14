const result = document.querySelector("#resultat")
const date = new Date();

document.querySelector("#knap").addEventListener("click", function(){
    const day = date.toLocaleString("en-GB", {weekday : "long"})
    result.innerHTML = day
})
