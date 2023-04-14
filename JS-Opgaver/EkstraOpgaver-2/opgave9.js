const result = document.querySelector("#resultat")


document.querySelector("#knap").addEventListener("click", function(){
    const firstName = document.querySelector("#fornavn").value
    const lastName = document.querySelector("#efternavn").value
    const email = document.querySelector("#email").value

    if(firstName.length > 0 && lastName.length > 0 && email.length > 0){
        result.innerHTML = `${firstName} ${lastName}`
    }
    else {
        alert("Alle felter skal udfyldes")
    }

})


