const result = document.querySelector("#resultat")

document.querySelector("#knap").addEventListener("click", function(){
    result.innerHTML = ""
    const age = document.querySelector("#alder").value
    switch (true) {
        case age < 6:
            result.innerHTML += "På vej"
            break
        case age < 13:
            result.innerHTML += "Undervisningpligt"
            break
        case age < 15:
            result.innerHTML += "arbejde i fritiden"
            break
        case age < 17:
            result.innerHTML += "Fuldtidsarbejde"
            break
        case age == 17:
            result.innerHTML += "Bilkørekort"
            break
        case age < 21:
            result.innerHTML += "Fyrværkeri og tobak"
            break
        case age < 24:
            result.innerHTML += "Kørekort til bus og lastbil"
            break
        case age <= 65:
            result.innerHTML += "Køre kort til stor motorcykel"
            break
        case age > 65:
            result.innerHTML += "Folkepension"
            break
        default:
            break;
    }
})