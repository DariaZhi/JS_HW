// 1) Используя конструкцию if..else, напишите код, который получает число 
// через prompt, а затем выводит в alert:
// 1, если значение больше нуля,
//  -1, если значение меньше нуля,
// 0, если значение равно нулю.
// Предполагается, что пользователь вводит только числа.

let num = prompt('Введите число')
if (num > 0) {
    alert(1)
} else if (num < 0) {
    alert(-1)
} else alert(0)

// коротко, но не читабельно
let num = prompt('Введите число')
let result = (num > 0) ? '1': 
    (num < 0) ? '-1': 
        '0';

alert(result)

// 2) Вывести в консоль квадраты чисел от 0 до 100 (не включая 100) - т.е. 
// вывести числа 0, 1, 4, 9, 16...
// 2.1) Задавать количество чисел, которые нужно вывести, 
// при помощи функции prompt.

let max = prompt('Задайте количество чисел')
for (let i = 0; i < max; i++) {
    result = i ** 2
    console.log(result)
}

// 3) 3 раза попросить пользователя ввести любое имя (prompt('Введите имя')). 
// Вывести в диалоговом окне (alert) склеенные имена через 
// пробел (например, "Таня Витя Коля").
// 3.1) 3 раза попросить пользователя ввести число. 
// Вывести в диалоговом окне (alert) сумму введенных чисел.

let firstName = prompt('Введите имя')
let secondName = prompt('Введите имя')
let thirdName = prompt('Введите имя')

alert(firstName + ' ' + secondName + ' ' + thirdName)


let firstNum = +prompt('Введите число')
let secondNum = +prompt('Введите число')
let thirdNum = +prompt('Введите число')

alert(firstNum + secondNum + thirdNum)

// 4) Объявить переменную "numberFactorial", записать в нее любое число.
// Далее написать код, который будет считать факториал числа numberFactorial, 
// результат выводим с помощью alert();
// Используем цикл for. 

// вариант 1
let numberFactorial = 4
let factorial = 1
for (let i = 1; i <= numberFactorial; i++) {
   factorial = factorial * i
}
alert(factorial)

// вариант 2
let numberFactorial = 4
for (let i = 1; i <= numberFactorial; i++) {
   numberFactorial = numberFactorial * i
}
alert(numberFactorial)

// почему не работает Вариант 1 в обратном порядке?
// Это конечно не тот просчет, что нам нужен, но почему не работает вообще, не выдет 54? 

let numberFactorial = 4
for (let i = numberFactorial - 1; i >= 1; i--) {
   numberFactorial = numberFactorial * i
}
alert(numberFactorial)


// 5) Напишите цикл, который предлагает prompt ввести число, большее 100. 
// Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
// Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, 
// либо не нажмёт кнопку Отмена (ESC).
// Предполагается, что посетитель вводит только числа. 
// Предусматривать обработку нечисловых строк в этой задаче необязательно.


let number = 0;       

do {
   number = prompt('Введите число, большее 100');
} while (number <= 100)


// как завершить цикл при нажатии кнопки esc?



