// 1.1 В цикле вывести в консоль все элементы массива, используя 2 разных цикла: for-of и for со счетчиком.
// 1.2 Посчитать и вывести в консоль сумму элементов в массиве из чисел.
// 1.3 Посчитать и вывести в консоль сумму четных элементов в массиве из чисел.

const arr = [2, 0, -81, 11, -1.3, 16]
let sum = 0

1.1
for (let item of arr) {
    console.log(item)
}

for (i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

1.2
for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i]
}
console.log(sum)

for (let item of arr) {
    sum = sum + item
}
console.log(sum)

1.3
for (let item of arr) {
    if (item % 2 == 0)
        sum = sum + item
}
console.log(sum)

// 2. Взять произвольный массив с числами и при помощи цикла посчитать среднее арифметическое этих чисел.

const arr = [2, 0, -81, 11, -1.3, 16]
let sum = 0
let average = 0

for (let item of arr) {
    sum = sum + item
}
average = sum / arr.length
console.log(average)

// 3. Определить массив, например let arr = [5, 4, 3, 8, 0]; и переменную let limit = 5;
// Создать новый пустой массив. В цикле наполнить его элементами arr, но в новом должны содержаться элементы больше и равные (>=) значения переменной limit. Можно использовать метод arr.push(item) для добавления элементов в массив, позже мы пройдем все методы.

const arr = [5, 4, 3, 8, 0]
const limit = 5
let newArr = []

for (let item of arr) {
    if (item >= limit)
        newArr.push(item)
}

console.log(newArr)

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

for (let item of mixedArr) {
    if (item.number > 10)
    console.log(item.string)
}

// 5. Задать массив слов. В цикле сформировать массив объектов с ключами word (само слово), length (длина слова)

const arrIce = ['пломбир', 'эскимо', "фруктовый лёд", 'крем-брюле', 'джелато']
const arrIceobj = []


for (let item of arrIce) {
    const ice = {}
    ice.word = item
    ice.length = item.length
    // console.log(ice)
    arrIceobj.push(ice)
}
console.log(arrIceobj)

// 5.1 Пройтись по полученному массиву объектов и вывести в консоль строки вида "слово - длина_слова", например "картошка - 8"

for (let item of arrIceobj) {
    console.log(item.word, item.length)
}
