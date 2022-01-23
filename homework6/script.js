// 1. Сделать кнопку со счетчиком, при клике на нее счетчик увеличивается на 1 (Счетчик 1, Счетчик 2, Счетчик 3 ...). Используем событие 'click' на данной кнопке. Если счетчик превышает значение 10, то кнопка красится в красный цвет.

const buttonElement = document.createElement('button')
buttonElement.textContent = 'Клик'
buttonElement.style.margin = '50px'
document.body.append(buttonElement)
num = 0
let isOverTen = false

// способ 1
buttonElement.addEventListener('click', () => {
    num++
    buttonElement.textContent = 'Клик ' + num

    if (num > 10 && !isOverTen) {
        isOverTen = true
        buttonElement.setAttribute('style', 'background-color: red; border: none; margin: 50px')
        console.log('optimization')
    }
})

//  способ 2
buttonElement.onclick = () => {
    num++
    buttonElement.textContent = 'Клик ' + num
    if (num > 10) buttonElement.style.backgroundColor = 'red',
    buttonElement.style.border = 'none'
}


// 2. Сделать при помощи js, html и css открывающееся меню. При клике на "бургер", открывается меню и значок "бургер" превращается в "Х", который при клике закрывает меню. Посмотреть пример можно на dev.by. Стили и содержание меню на ваше усмотрение.

// Иконки для меню: https://www.flaticon.com/search?word=menu
// Иконки "Х": https://www.flaticon.com/search?word=close
// Иконки можно свои.


const buttonBurger = document.querySelector('#get-menu')
const elementMenu = document.querySelector('#menu')

function switchButton(event) {
    const isShown = elementMenu.classList.contains('show')
    if (isShown) {
        elementMenu.classList.remove('show') & buttonBurger.classList.replace('close-menu', 'get-menu')
    } else {
        elementMenu.classList.add('show') & buttonBurger.classList.replace('get-menu', 'close-menu')
    }
}

buttonBurger.addEventListener('click', switchButton)


// 3. Сделать модальное окно. При клике на кнопку показываем окно (содержание любое), в правом верхнем углу кнопка "Х", которая закрывает модальное окно. Пример: https://getbootstrap.com/docs/5.0/components/modal/


const popupElement = document.querySelector('#popup')
const buttonOpenModalElement = document.querySelector('#buttonOpenModal')
const buttonCloseModalElement = document.querySelector('#buttonCloseModal')

buttonOpenModalElement.addEventListener('click', () => {
    popupElement.classList.add('show')
})

buttonCloseModalElement.addEventListener('click', () => {
    popupElement.classList.remove('show')
})
