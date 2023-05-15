let formAdd = document.querySelector(".form")
let elInput = document.querySelector(".input")
let elpedeResult = document.querySelector(".pedestrian")
let elVeloResult = document.querySelector(".velo")
let elAutoResult = document.querySelector('.auto')
let elSamalyotResult = document.querySelector(".samalyot")

let pedeScore = 3.6 
let veloScore = 20.1
let autoScore = 70
let samalyotScore = 800

formAdd.addEventListener('submit', (evt) => {
    evt.preventDefault()
    let inputValue = Number(elInput.value)
    elpedeResult.textContent = (Math.floor(inputValue / pedeScore)) + " soat " + Math.ceil((((inputValue % pedeScore) / pedeScore) * 60)) + " minut"

    elVeloResult.textContent = (Math.floor(inputValue / veloScore)) + " soat " + Math.ceil((((inputValue % veloScore) / veloScore) * 60)) + " minut"

    elAutoResult.textContent = (Math.floor(inputValue / autoScore)) + " soat " + Math.ceil((((inputValue % autoScore) / autoScore) * 60)) + " minut"

    elSamalyotResult.textContent = (Math.floor(inputValue / samalyotScore)) + " soat " + Math.ceil((((inputValue % samalyotScore) / samalyotScore) * 60)) + " minut"
    
})
