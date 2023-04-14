const number1 = document.querySelector("#tal1")
const number2 = document.querySelector("#tal2")
const result = document.querySelector("#resultat")

document.querySelector("#plus").addEventListener("click", function(){
    result.innerHTML =  parseInt(number1.value) + parseInt(number2.value)
})
document.querySelector("#minus").addEventListener("click", function(){
    result.innerHTML =  parseInt(number1.value) - parseInt(number2.value)
})
document.querySelector("#gange").addEventListener("click", function(){
    result.innerHTML =  parseInt(number1.value) * parseInt(number2.value)
})
document.querySelector("#dividere").addEventListener("click", function(){
    result.innerHTML =  parseInt(number1.value) / parseInt(number2.value)
})