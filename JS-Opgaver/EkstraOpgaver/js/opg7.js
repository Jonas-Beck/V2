const dato = document.querySelector("#dato")
const date = new Date();

document.querySelector("#knap").addEventListener("click", function(){
    const dayOfWeek = date.getDay();
    switch (true) {
        case dayOfWeek >= 0 && dayOfWeek <=3:
            dato.innerHTML = "Øv det er hverdag"
            break;
        case dayOfWeek == 4:
            dato.innerHTML = "Hverdag men NÆSTEN weekend"
            break;
        case dayOfWeek >= 5 && dayOfWeek <= 6:
            dato.innerHTML = "Hurra - det er weekend"
            break;
        default:
            dato.innerHTML = "Der er sket en fejl"
            break;
    }
})
