const $ = document
const body = $.body
const inputColorA = $.querySelector('#color-a')
const inputColorB = $.querySelector('#color-b')
const buttonsArrow = $.querySelectorAll('.buttons button')
const textarea = $.querySelector('textarea')
const buttonGenerate = $.querySelector('#submit')
const copyBtn = $.getElementById('copy')

let arrow = $.querySelector('button.active').getAttribute('data-arrow')

const generateColor = () =>{
    body.style.background = `linear-gradient(${arrow}, ${inputColorA.value}, ${inputColorB.value})`
    textarea.value = `linear-gradient(${arrow}, ${inputColorA.value}, ${inputColorB.value})`
}
generateColor()

const copyLinearGradient = () =>{
    textarea.select()
    $.execCommand('copy')
    alert('کپی شد')
}

buttonsArrow.forEach(buttonArrow =>{
    buttonArrow.addEventListener('click', () =>{
        let btnActive = $.querySelector('.active')
        arrow = buttonArrow.getAttribute('data-arrow')
        btnActive.classList.remove('active')
        buttonArrow.classList.add('active')
    })
})

buttonGenerate.addEventListener('click', generateColor)
copyBtn.addEventListener('click', copyLinearGradient)