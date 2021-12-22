const inputElm = document.querySelector('#input')
const formElm = document.querySelector('form')
const winScoreElm = document.querySelector('.winScore')


let winScore = 20

formElm.addEventListener('submit', e => {
    e.preventDefault()
    //seting data layer
    winScore = +inputElm.value
    //setting view layer
    winScoreElm.textContent = inputElm.value
    //console.log(typeof inputElm.value)

    //clearing the input field
    inputElm.value = ''
})








