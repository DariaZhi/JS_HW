//1) Прописать в коде две переменные с числами. Вывести в консоль бОльшее из них. Если они равны, то так и написать 'Значения равны между собой'
let firstNum = 6;
let secondNum = 6;
if (firstNum > secondNum) {
    console.log(firstNum); 
} else if (firstNum < secondNum) {
    console.log(secondNum);
} else {
    console.log('Значения равны между собой');
}

// 1.1*) Устанавливать значения переменных не в коде, а при помощи функции prompt.
let firstNum = prompt('Введите число');
let secondNum = prompt('Введите еще число');
if (firstNum > secondNum) {
    console.log(firstNum); 
} else if (firstNum < secondNum) {
    console.log(secondNum);
} else {
    console.log('Значения равны между собой');
}

// 2) Вывести в консоль квадраты чисел от 0 до 100 (не включая 100) - т.е. вывести числа 0, 1, 4, 9, 16...
for (let i=0; i < 100; ++i) {
console.log(i ** 2);
}

// 2.1*) Задавать количество чисел, которые нужно вывести, при помощи функции prompt.
let amount = prompt('Введите число');
for (let i=0; i < amount; i++) {
    console.log(i ** 2);
}

//3*) 3 раза попросить пользователя ввести любое имя. Вывести в диалоговом окне (alert) склеенные имена через пробел (например, "Таня Витя Коля").
let name1 = prompt('Введите любое имя');
let name2 = prompt('Введите второе имя');
let name3 = prompt('Введите еще одно имя');

alert(`${name1} ${name2} ${name3}`);   

//3.1**) 3 раза попросить пользователя ввести число. Вывести в диалоговом окне (alert) сумму введенных чисел.
let num1 = +prompt('Введите число');
let num2 = +prompt('Введите число');
let num3 = +prompt('Введите число');

alert(num1+num2+num3);
