// 1. Вставить в разметку html теги input и div без js (просто предусмотреть в разметке). Обрабатывая событие input на теге input, выводить в консоль введенный текст каждый раз, как только клиент вписывает любой символ в поле (или стирает любой символ из поля)
// 1.1 Каждый раз при изменении данных в инпуте, в предусмотренный div должна вписываться фраза "Клиент набирает: ВСЕ_ЧТО_НАБРАНО_В_ИНПУТЕ".

const inputElement = document.querySelector('#input')
const wrapper = document.querySelector('#wrapper')

const listElement = document.createElement('ul')
wrapper.append(listElement)

inputElement.addEventListener('input', function () {
    console.log(this.value)

    const liElement = document.createElement('li')
    liElement.textContent = ('Клиент набирает: ' + this.value)
    listElement.append(liElement)
})


// 2. Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. Когда форма отправляется, добавлять в список тег li. Его содержимое - введенный текст. После отправки формы инпут должен быть очищен.

const formElement = document.querySelector('form')
const input = document.querySelector('#field')
const button = document.querySelector('button')

const ulElement = document.createElement('ul')
document.body.append(ulElement)

formElement.addEventListener('submit', function (event) {
    event.preventDefault()

    const liElement = document.createElement('li')
    ulElement.append(liElement)
    liElement.textContent = input.value
    // input.value = ''
    formElement.reset()
})


// 3*. Калькулятор. Создать в html форму с текстовым input, тегом select, вторым текстовым input и кнопкой. Добавить в html div. Опции select - арифметические знаки. В оба инпута пользователь вводит число. Когда пользователь отправляет форму, над двумя числами выполняется действие, выбранное в select. Результат отображается в div.

const calcFormElement = document.querySelector('.form2')
const firstNumElement = document.querySelector('#num1')
const secondNumElement = document.querySelector('#num2')
const operationElement = document.querySelector('#operation')
const equalsButton = document.querySelector('#equals')

const resultFieldElement = document.createElement('div')
document.body.append(resultFieldElement)

calcFormElement.addEventListener('submit', calcExprForm)

function calcExprForm(event) {
    event.preventDefault()

    const { value: operator } = operationElement
    const firstNumber = +firstNumElement.value
    const secondNumber = +secondNumElement.value
    let result = 0

    switch (operator) {
        case '+':
            result = firstNumber + secondNumber
            break
        case '-':
            result = firstNum - secondNum
            break
        case '/':
            result = firstNum / secondNum
            break
        case 'x':
            result = firstNum * secondNum
            break
    }

    resultFieldElement.textContent = result
}

