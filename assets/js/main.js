const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')
const btn5 = document.getElementById('btn5')
const submit = document.getElementById('submit')
let valueSubmit = 0
const container = document.getElementById('rating')
const thanksState = document.getElementById('thanks-state')
const starsNumber = document.getElementById('numberStars')

btn1.addEventListener('click', () => {
    btn1.classList.toggle('active')
    valueSubmit = 1
    if (btn1.className === 'active') {
        btn2.disabled = true
        btn3.disabled = true
        btn4.disabled = true
        btn5.disabled = true
    } else {
        btn2.disabled = false
        btn3.disabled = false
        btn4.disabled = false
        btn5.disabled = false
    }
})

btn2.addEventListener('click', () => {
    btn2.classList.toggle('active')
    valueSubmit = 2
    if (btn2.className === 'active') {
        btn1.disabled = true
        btn3.disabled = true
        btn4.disabled = true
        btn5.disabled = true
    } else {
        btn1.disabled = false
        btn3.disabled = false
        btn4.disabled = false
        btn5.disabled = false
    }
})

btn3.addEventListener('click', () => {
    btn3.classList.toggle('active')
    valueSubmit = 3
    if (btn3.className === 'active') {
        btn1.disabled = true
        btn2.disabled = true
        btn4.disabled = true
        btn5.disabled = true
    } else {
        btn1.disabled = false
        btn2.disabled = false
        btn4.disabled = false
        btn5.disabled = false
    }
})

btn4.addEventListener('click', () => {
    btn4.classList.toggle('active')
    valueSubmit = 4
    if (btn4.className === 'active') {
        btn1.disabled = true
        btn2.disabled = true
        btn3.disabled = true
        btn5.disabled = true
    } else {
        btn1.disabled = false
        btn2.disabled = false
        btn3.disabled = false
        btn5.disabled = false
    }
})

btn5.addEventListener('click', () => {
    btn5.classList.toggle('active')
    valueSubmit = 5
    if (btn5.className === 'active') {
        btn1.disabled = true
        btn2.disabled = true
        btn3.disabled = true
        btn4.disabled = true
    } else {
        btn1.disabled = false
        btn2.disabled = false
        btn3.disabled = false
        btn4.disabled = false
    }
})

submit.addEventListener('click', () => {
    console.log(valueSubmit)
    if (valueSubmit === 0) {
        alert('Please select a rating')
        return
    } else if (valueSubmit === 1) {
        starsNumber.innerHTML = '1'
    } else if (valueSubmit === 2) {
        starsNumber.innerHTML = '2'
    } else if (valueSubmit === 3) {
        starsNumber.innerHTML = '3'
    } else if (valueSubmit === 4) {
        starsNumber.innerHTML = '4'
    } else if (valueSubmit === 5) {
        starsNumber.innerHTML = '5' 
    }
    rating.style.display = 'none'
    thanksState.style.display = 'block'
})