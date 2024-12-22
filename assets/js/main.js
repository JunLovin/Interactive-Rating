const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')
const btn5 = document.getElementById('btn5')

const btnSelected = (button) => {
    button.classList.toggle('active')
}

btn1.addEventListener('click', () => {
    btnSelected(btn1)
})
btn2.addEventListener('click', () => {
    btnSelected(btn2)
})
btn3.addEventListener('click', () => {
    btnSelected(btn3)
})
btn4.addEventListener('click', () => {
    btnSelected(btn4)
})
btn5.addEventListener('click', () => {
    btnSelected(btn5)
})