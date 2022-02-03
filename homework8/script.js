// 1) Сделать на js часы, которые отображаются в html документе. Стили на ваше усмотрение. 
// Требования:
// - всегда отображается текущее время
// - время должно быть в формате чч:мм:сс, например,  13:45:12
// - минимальный размер шрифта для часов 42px
// - время должно обновлять каждую секунду
// -* точки разделяющие время (:) должны моргать с произвольной частотой (необязательно)
// -* добавить кнопку, при клике на которую время останавливается и точки не моргают, при повторном клике время продолжает работать, но не забываем про п.1 требований (необязательно)

// Подсказки:
// надо использовать конструктор Date, метод для планирования setInterval

const clockElement = document.createElement('h1')
document.body.append(clockElement)
clockElement.setAttribute('style', 'margin: 100px; font-family: -apple-system, "Helvetica Neue"; font-size: 42px; font-weight: 100')

function transformTime(time) {
    return time < 10 ? `0${time}` : time
    // if (time < 10)
    //     time = `0${time}`
    // else time = time
    // return time
}

function buildTemplateTime() {
    const currentDate = new Date()

    let hour = currentDate.getHours()
    hour = transformTime(hour)

    let minute = currentDate.getMinutes()
    minute = transformTime(minute)

    let sec = currentDate.getSeconds()
    sec = transformTime(sec)

    const ourTime = `${hour}:${minute}:${sec}`
    clockElement.textContent = ourTime
}

const timer = setInterval(buildTemplateTime, 1000)



// 2*) Реализуйте функцию для вычисления суммы числовых значений во вложенном массиве любой сложности. Например:
// sumNested([1, [2, [3, [4]]]]) => 10
// Решить через рекурсию

let arr = [1, [2, [3, [4]]]]

function sum(arr, i) {
    if (i == arr.length)
 return 0

    if (Array.isArray(arr[i]))

        return sum(arr[i], 0) + sum(arr, i + 1)

    return arr[i] + sum(arr, i + 1)
}

console.log(sum(arr, 0))


