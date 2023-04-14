const result = document.querySelector("#resultat")
const dateToday = new Date().toDateString()

document.querySelector("#knap").addEventListener("click", function(){
    const input = document.querySelector("#dato")
    const dateSelected = new Date(input.value).toDateString()
    dateToday === dateSelected ? result.innerHTML = "JA" : result.innerHTML = "NEJ"

})







