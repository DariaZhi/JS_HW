// Задача 1
let developer1 = {
    firstName: 'Maria',
    lastName: 'Y.',
    country: 'Cyprus',
    continent: 'Europe',
    age: 30,
    language: 'Java'
}

let developer2 = {
    firstName: 'Victoria',
    lastName: 'T.',
    country: 'Puerto Rico',
    continent: 'Americas',
    age: 70,
    language: 'Python'
}

// Написать функцию и добавить её как метод в каждый из объектов, 
// она должна возвращать строку, которая указывают на локацию разработчика.
// Например: 'Europe Minsk'

// function getLocation() {
//     // ...
// }

// ...

console.log(developer1.getLocation()) // 'Europe Cyprus'


function getLocation(developer) {
    return developer.continent + ' ' + developer.country
}

console.log(getLocation(developer2))

function getLocation() {
    return this.continent + ', ' + this.country
}

let developer1 = {
    firstName: 'Maria',
    lastName: 'Y.',
    country: 'Cyprus',
    continent: 'Europe',
    age: 30,
    language: 'Java',
    getLocation: getLocation
}

console.log(developer1.getLocation())

let developer2 = {
    firstName: 'Victoria',
    lastName: 'T.',
    country: 'Puerto Rico',
    continent: 'Americas',
    age: 70,
    language: 'Python',
    getLocation: getLocation
}

console.log(developer2.getLocation())

// Задача 2
let list1 = [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 30, language: 'JavaScript' },
    { firstName: 'Maria', lastName: 'Y.', country: 'Belarus', continent: 'Europe', age: 30, language: 'Java' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
];

// Написать функцию, которая обрабатывает массив объектов, имеет 2 аргумента:
// 1) list - массив 2) value - строка или число.
// Функция должна возвращать количество совпадений из каждого объекта. Если совпадений нет, то сообщение 'Совпадений не найдено'
// Например getNumberMatches(list1, 'JavaScript') // вернёт 3

// function getNumberMatches(list, value) {
//     // нужна переменная, которая будет увеличиваться в цикле при каждом совпадении
//     // нужен метод forEach для массива ->
//     // в котором будет цикл для текущего объекта for (let key in obj)
//     // ...
// }


function getNumberMatches(list, value) {
    let number = 0
    for (let i of list)
        console.log(i)
    list.forEach((i) => {
        // console.log(i)
        for (let key in i)
            // console.log(i[key])
            if (i[key] == value)
                number = ++number
        // console.log(number)
    })
    if (number != 0)
        return number
    else return ('Совпадение не найдено')
}

console.log(getNumberMatches(list1, 'Belarus'))

// 3. Перебрать методом forEach массив  users и вывести каждый объект в консоль
// 3.1. Получить новый массив из юзеров, у каждого юзера должно появится новое свойство age (нужен метод map)
// 3.2. Получить новый массив из массива п.3.1 при помощи метода filter, в нем должны быть юзеры старше 25

const users = [
    { name: 'Ivan', year: 1994 },
    { name: 'Olga', year: 1998 },
    { name: 'Vlad', year: 1988 },
    { name: 'Vadim', year: 2002 },
    { name: 'Ira', year: 1991 },
    { name: 'Svetlana', year: 2004 },
]

users.forEach((obj) => console.log(obj))


const newUsers = users.map(function (item, index) {
    item.age = 2022 - item.year
    //console.log(item.age)
    return item
})

console.log(newUsers)

const over25Users = newUsers.filter(function (item) {
    if (item.age > 25) return item
})

console.log(over25Users)

// 4 *.Написать функцию getSalaryReport(salaries), которая принимает объект, как аргумент, вида:
// let salariesCompany = {
//     Ivan: 1200,
//     Irina: 800,
//     Alex: 1050,
//     Anton: 1460,
//     Marta: 1140
// }
// и возвращает новый объект report, который имеет 3 свойства:
// report = {
//     averageSalary: __, // средняя зарплата
//     hasMaxSalary: ____ // имя человека с наибольшей зп
//   hasMinSalary: ____ // имя человека с наименьшей зп
// }

let salariesCompany = {
    Ivan: 1200,
    Irina: 800,
    Alex: 1050,
    Anton: 1460,
    Marta: 1140
}

function getSalaryReport(salaries) {

    for (let item of salaries)
    console.log(item)
}

getSalaryReport(salariesCompany)

// почему у меня уже на этом этапе ошибка?
