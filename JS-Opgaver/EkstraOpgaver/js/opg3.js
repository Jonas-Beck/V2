// Løs opgave 3 ved at udfylde denne js-fil med variabler, event-listners og functions
const wrapper = document.querySelector("#wrapper")

document.querySelector("#knap").addEventListener("click", function(event){
    wrapper.style.backgroundColor = "lightgreen";
    event.target.style.backgroundColor = "blue"
    event.target.style.color = "white"
    event.target.disabled = "true"
}, false)