const plus = document.querySelector("#plus")
const minus = document.querySelector("#minus")
const gange = document.querySelector("#gange")
const dividere = document.querySelector("#dividere")
const form = document.querySelector("form")

document.querySelector("#knap").addEventListener("click", function(){
    
    if (form.tal1.value.length > 0 && form.tal2.value.length > 0) {
        plus.innerHTML = Number(form.tal1.value) + Number(form.tal2.value)
        minus.innerHTML = Number(form.tal1.value) - Number(form.tal2.value)
        gange.innerHTML = Number(form.tal1.value) * Number(form.tal2.value)
        dividere.innerHTML = Number(form.tal1.value) / Number(form.tal2.value)
    }
    else{
        alert("Mangler tal")
    }
})
