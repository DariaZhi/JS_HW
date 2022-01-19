// Задание 1

{/* <ol id="elem">
    <li>Привет</li>
    <li>Мир</li>
</ol> */}

// Создайте функцию clear(elem), которая удаляет всё содержимое из elem.
// Подсказка: document.body.innerHTML = ''; // Удаляет всё из body

const headElement = document.querySelector('h3')
const paragraf = document.querySelector('p')
const listElement = document.querySelector('#elem')

function clear(element) {
    element.innerHTML = ''
}

// clear(paragraf)
clear(listElement)
// clear(headElement)



// Задача 2

{/* <div class="list-wrap">
  <!-- Здесь должен появится список -->
</div> */}

// Напишите функцию для создания списка.
// Для каждого пункта:
// 1. Запрашивайте содержимое пункта у пользователя с помощью prompt.
// 2. Создавайте элемент <li> и добавляйте его к <ul>.
// 3. Процесс прерывается, когда пользователь нажимает Esc или вводит пустую строку.
// Все элементы должны создаваться динамически.
// Если пользователь вводит HTML-теги – пусть в списке они показываются как обычный текст.
// listGenerator('.list-wrap') // Создаёт список внутри .list-wrap

const listWrapper = document.querySelector('.list-wrap')

function listGenerator(parentSelector) {
    const listElement = document.createElement('ul')

    while (true) {
        const listItemElement = document.createElement('li')

        const listItemElementContent = prompt('Какое мороженое мы будем есть сегодня?')
        if (listItemElementContent == '' || listItemElementContent == null) break

        listItemElement.textContent = listItemElementContent

        listElement.append(listItemElement)
    }

    listWrapper.append(listElement)

}

listGenerator(listWrapper)





// Задача 3
// Есть массив ссылок на картинки :
let linksArr = [
    'https://cdn-media-1.freecodecamp.org/images/1*kt9otqHk14BZIMNruiG0BA.png',
    'https://cdn.searchenginejournal.com/wp-content/uploads/2019/04/the-seo-guide-to-angular-1520x800.png',
    'https://habrastorage.org/webt/jp/qj/fk/jpqjfkjewyfpm1cbr5yxaubxt-w.png',
    'https://miro.medium.com/max/700/1*m0UdF7LWONe3lXtfbfiS5g.png'
];
// Вам нужно:
// 1) при помощи JS создать DIV, задать ему css стили
// 2) при помощи цикла(forEach) пройтись по массиву 'linksArr', для каждого из элементов массива сформировать картинку (тег <img> c атрибутом src из массива) и добавить эту картинку в созданный DIV из пункта 1
// 3) Добавить DIV из пункта 1 ( с картинками внутри ) в BODY


const divElement = document.createElement('div')
divElement.classList.add('images')

// divElement.setAttribute('style', 'background-color: pink')
divElement.setAttribute('style', 'padding: 100px')

// divElement.style.width = '770px'
// divElement.style.margin = '50px'
// divElement.style.backgroundColor = "blue"

console.log(divElement)

linksArr.forEach((item) => {
    let imageElement = document.createElement('img')
    //    imageElement = item
    imageElement.setAttribute('src', item)
    // imageElement.src = item для некоторых атрибутов работает запись напрямую, например для src
    divElement.append(imageElement)
})

document.body.append(divElement)







