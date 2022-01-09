// 1. Создать функцию findPositiveNumbers().
// 1.1 Внутри функции должен определяться массив, например let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0].
// Функция должна вывести в консоль все положительные числа по одному.

function findPositiveNumbers() {
    let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]
    for (let item of arr) {
        if (item > 0)
            console.log(item)
    }
}

findPositiveNumbers()

// 1.2 Функция должна не выводить числа в консоль, а составить из них новый массив.В самом конце тела функции - вывести новый массив в консоль.

function findPositiveNumbers() {
    let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]
    let positiveArr = []
    for (let item of arr) {
        if (item > 0)
            positiveArr.push(item)

    }
    console.log(positiveArr)
}

findPositiveNumbers()

// 1.3 Функция должна не выводить массив в консоль, а вернуть новый массив из положительных элементов arr.

function findPositiveNumbers() {
    let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]
    let positiveArr = []
    for (let item of arr) {
        if (item > 0)
            positiveArr.push(item)

    }
    return positiveArr
}

console.log(findPositiveNumbers())


// 1.4 Изначальный массив arr должен не описываться внутри функции, а поступать в нее как параметр

const arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]

function findPositiveNumbers() {
    let positiveArr = []
    for (let item of arr) {
        if (item > 0)
            positiveArr.push(item)

    }
    return positiveArr
}

console.log(findPositiveNumbers())


// 2. Определить массив, например let arr = [5, 4, 3, 8, 0];
// Создать функцию filterFor(arr, a).Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны(>=) значения переменной a.
// например запуск функции filterFor(arr, 5) дает результат[5, 8]
// а запуск функции filterFor(arr, 10) дает результат[]
// а запуск функции filterFor(arr, 3.11) дает результат[4, 5, 8]

const arr = [5, 4, 3, 8, 0];


function filterFor(arr, a) {
    let newArr = [];
    for (let item of arr) {
        if (item >= a)
            newArr.push(item)
    }
    return newArr
}

console.log(filterFor(arr, 2))

// 3.funk Переписать все задачи с прошлого дз на функции:


// 1.1 В цикле вывести в консоль все элементы массива, используя 2 разных цикла: for-of и for со счетчиком.
// 1.2 Посчитать и вывести в консоль сумму элементов в массиве из чисел.
// 1.3 Посчитать и вывести в консоль сумму четных элементов в массиве из чисел.


// 1.1.funk

const arr = [2, 0, -81, 11, -1.3, 16]
sum = 0

function outputArr () {
    for (let item of arr) {
        console.log(item) 
    }
}

outputArr()

// 1.1.funk

function outputArr () {
    for (i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

outputArr()

// 1.2.funk

function sumupArr () {
    for (i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    console.log(sum)
}

sumupArr()

// 1.2.funk

function sumupArr () {
    for (let item of arr) {
        sum = sum + item
    }
    console.log(sum)
}

sumupArr()

// 1.3.funk

function sumupEven() {
    for (let item of arr) {
        if (item % 2 == 0)
            sum = sum + item
    }
    console.log(sum)
}

sumupEven()

// 2. Взять произвольный массив с числами и при помощи цикла посчитать среднее арифметическое этих чисел.

const arr = [2, 0, -81, 11, -1.3, 16]

function average() {
    let sum = 0
    let average = 0

    for (let item of arr) {
        sum = sum + item
    }
    average = sum / arr.length
    console.log(average)
}

average()

// 3. Определить массив, например let arr = [5, 4, 3, 8, 0]; и переменную let limit = 5;
// Создать новый пустой массив. В цикле наполнить его элементами arr, но в новом должны содержатся элементы больше и равные (>=) значения переменной limit. Можно использовать метод arr.push(item) для добавления элементов в массив, позже мы пройдем все методы.

const arr = [5, 4, 3, 8, 0]
const limit = 5

function newArr() {
    let newArr = []
    for (let item of arr) {
        if (item >= limit)
            newArr.push(item)
    }
    console.log(newArr)
}

newArr()

// 4. Описать массив из объектов с двумя полями: строковым и числовым. Пройти в цикле по массиву и вывести строковое поле каждого объекта, если его числовое поле больше 10.

const mixedArr = [
    { string: 'Пять', number: 5 },
    { string: 'Восемь', number: 8 },
    { string: 'Одиннадцать', number: 11 },
    { string: 'Двадцать', number: 20 },
    { string: 'Один', number: 1 },
    { string: 'Тридцать три', number: 33 },
    { string: 'Двадцать один', number: 21 },
]

function moreThanTen () {
    for (let item of mixedArr) {
        if (item.number > 10)
            console.log(item.string)
    }
}

moreThanTen ()

// 5. Задать массив слов. В цикле сформировать массив объектов с ключами word (само слово), length (длина слова)

const arrIce = ['пломбир', 'эскимо', "фруктовый лёд", 'крем-брюле', 'джелато']
const arrIceObj = []

function newIceObj() {

    for (let item of arrIce) {

        const ice = {}
        ice.word = item
        ice.length = item.length
        // console.log(ice)
        arrIceObj.push(ice)
    }
    console.log(arrIceObj)
}
newIceObj()


// 5.1 Пройтись по полученному массиву объектов и вывести в консоль строки вида "слово - длина_слова", например "картошка - 8"


function wordLength() {

    for (let item of arrIceObj) {
        console.log(item.word, item.length)
    }

}
wordLength()

