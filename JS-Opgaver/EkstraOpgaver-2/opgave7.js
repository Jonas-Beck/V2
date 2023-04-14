const result = document.querySelector("#resultat")

document.querySelector("#knap").addEventListener("click", function(){
    const input = document.querySelector("#dato")
    const date = new Date(input.value);
    const day = date.toLocaleString("en-GB", {weekday : "long"})
    result.innerHTML = day
})
