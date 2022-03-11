const data = []   
const formCreateElement = document.querySelector('#formCreate')
const listTodo = document.querySelector('#list')


formCreateElement.addEventListener('submit', handleSubmitFormCreate)
listTodo.addEventListener('change', handleChangeTodo) // обработчик событий
listTodo.addEventListener('click', handleRemoveTodo)


function handleSubmitFormCreate(event) {
    event.preventDefault()

    const date = new Date()
    const todo = {
        id: date.getTime(),
        createdAt: date,
        isChecked: false
    }

    const formData = new FormData(formCreateElement)

    for (let [name, value] of formData) {
        console.log(name, value)
        todo[name] = value
    }

    data.push(todo)


    formCreateElement.reset()

    render()

}



function todoTemplate({ title, id, isChecked, createdAt, priority, estimate }) {
    const checkedAttr = isChecked ? 'checked' : ''

    const creationDate = buildDate(createdAt)

    const stars = buildPriority(priority)

    const h = setEstimate(estimate)

    return `
       <div class="island__item">
          <div class="form-check d-flex align-items-center">
              <input 
                 class="form-check-input" 
                 type="checkbox" 
                 ${checkedAttr}
                 id="${id}"
                 data-id="${id}">

              <label class="form-check-label ms-3 me-3" for="${id}">
                 ${title}
              </label>

              <time class="ms-auto me-2">${creationDate}</time>
            
              <span class="badge pe-3">${stars}</span>


              <span class="badge estimate pe-3">${h}</span> 


              <button
                 class="btn btn-sm btn-danger" 
                 type="button" 
                 data-role="remove"
                 data-id="${id}">
                 🗑️
              </button>
          </div>
       </div>
   `
}



function handleChangeTodo(event) {
    const { target } = event
    const { id } = target.dataset

    data.forEach((item) => {
        if (item.id == id) {
            item.isChecked = target.checked
        }
    })

    const parentElement = target.closest('.island__item') // находим родительский элемент
    console.log(parentElement)
    console.log( target )
    parentElement.classList.toggle('.island__item_checked')  // добавляем класслист и идем в css чтобы сделать чекнутое todo перечеркнутым и отправить в конец списка

}



function handleRemoveTodo(event) {
    const { target } = event

    if (target.dataset.role != 'remove') return

    const { id } = target.dataset

    data.forEach((item, index) => {
        if (item.id == id) {
            delete data[index]
        }
    })

    render()
}




function transformData(date) {
    return date < 10 ? `0${date}` : date
}

function buildDate(date) {

    let day = transformData(date.getDate())
    let month = transformData(date.getMonth() + 1)
    let year = date.getFullYear()

    return `${day}.${month}.${year}`
}




function buildPriority(count) {
    let stars = ''
    for (let i = 0; i < count; i++) {
        stars = stars + '🌟'
    }

    return stars

}




function setEstimate(time) {           
    if (time == 0) {
        return ' '
    } else {
        return (time + 'h')
    }
}




function render() {
    let result = ''

    data.forEach((todo) => {
        const template = todoTemplate(todo)    // почему тут сработает деструктуризация, когда мы передаём в эту функцию объект?

        result = result + template
    })

    listTodo.innerHTML = result
}



// всё работает и без дополнительного id. Можно подробнее о том, почему он нужен? 

// можно ли сделать так, чтобы рамка select, в которой мы выбираем priority, не загоралась голубым после того, как мы обозначили priority? Пока не кликну где-то возле, рамка селекта остается голубой

// новые задачи становятся в конец списка. Мне нужно, чтобы становились в начало







