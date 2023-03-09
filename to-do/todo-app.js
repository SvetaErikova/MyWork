(function() {
    let listArray = []
    listName = ''
        // создаем и возвращаем заголовок приложения
    function createApptitle(title) {
        let appTitle = document.createElement('h2')
        appTitle.innerHTML = title
        return appTitle
    }
    //создаем и возвращаем форму для создания дел
    function createTodoItemForm() {
        let form = document.createElement('form')
        let input = document.createElement('input')
        let buttonWrapper = document.createElement('div')
        let button = document.createElement('button')

        form.classList.add('input-group', 'mb-3')
        input.classList.add('form-control')
        input.placeholder = 'Введите название нового дела'
        buttonWrapper.classList.add('input-group-append')
        button.classList.add('btn', 'btn-primary', 'disabled')
        button.textContent = 'Добавить дело'



        buttonWrapper.append(button)
        form.append(input)
        form.append(buttonWrapper)

        input.addEventListener('input', function() {
            if (input.value !== '') {
                button.classList.remove('disabled')
            } else {
                button.classList.add('disabled')
            }
        })

        return {
            form,
            input,
            button,
        }

    }

    //создаем и возвращаем список элементов
    function createTodoList() {
        let list = document.createElement('ul')
        list.classList.add('list-group')

        return list
    }

    function createTodoItem(obj) {
        let item = document.createElement('li')
            //кнопки помещаем в элемент который покажет их в одной группе
        let buttonGroup = document.createElement('div')
        let doneButton = document.createElement('button')
        let deleteButton = document.createElement('button')

        //устанавливаем стили для элемента списка а так же для размещения
        //в правой части с помощью флекс
        item.classList.add('list-group-item', 'd-flex', 'justify-content-between')
        item.textContent = obj.name

        buttonGroup.classList.add('btn-group', 'btn-group-sm')
        doneButton.classList.add('btn', 'btn-success')
        doneButton.textContent = 'Готово'
        deleteButton.classList.add('btn', 'btn-danger')
        deleteButton.textContent = 'Удалить'

        if (obj.done === true) {
            item.classList.toggle('list-group-item-success')
        }
        // добавляем обработчики на кнопки
        doneButton.addEventListener('click', function() {
            item.classList.toggle('list-group-item-success')
            for (const listItem of listArray) {
                if (listItem.id = obj.id) {
                    listItem.done = !listItem.done
                }
                saveList(listArray, listName)
            }

        })
        deleteButton.addEventListener('click', function() {
            if (confirm('Bы уверены?')) {
                item.remove()

                for (let i = 0; i < listArray.length; i++) {
                    if (listArray[i].id = obj.id) {
                        listArray.splice(i, 1)
                    }
                }
                saveList(listArray, listName)
            }

        })

        //вкладываем кнопки в отдельный элемент что бы они обьеденились
        buttonGroup.append(doneButton)
        buttonGroup.append(deleteButton)
        item.append(buttonGroup)

        //приложению нужен доступ к самому элементу и кнопкам что бы обрабатывать события нажатия
        return {
            item,
            doneButton,
            deleteButton
        }
    }

    function getId(arr) {
        let max = 0
        for (const item of arr) {
            if (item.id >= max) {
                max = item.id
            }
        }
        return max + 1
    }

    function saveList(arr, keyName) {
        localStorage.setItem(keyName, JSON.stringify(arr))
        console.log(JSON.stringify(arr))
    }

    function createTodoApp(container, title = 'Список дел', keyName) {
        let todoAppTitle = createApptitle(title)
        let todoItemForm = createTodoItemForm()
        let todoList = createTodoList()

        listName = keyName

        container.append(todoAppTitle)
        container.append(todoItemForm.form)
        container.append(todoList)


        let localData = localStorage.getItem(listName) // массив дел

        if (localData !== null && localData !== '') listArray = JSON.parse(localData)

        for (const itemList of listArray) {
            let todoItem = createTodoItem(itemList)
            todoList.append(todoItem.item)

        }

        // браузер создает события сабмит на форме по нажатию на энтер или на кнопку создания дела
        todoItemForm.form.addEventListener('submit', function(e) {
            // эта строчка необходимо чтобы предотвратить стандартная действия браузера
            // В данном случае мы не хотим чтобы страница перезагружалась при отправке формы
            e.preventDefault()

            // игнорируем создания элемента если пользователь ничего не ввёл в поле
            if (!todoItemForm.input.value) {
                return
            }
            let newItem = {
                id: getId(listArray),
                name: todoItemForm.input.value,
                done: false,
                toJSON: function() {
                    return newItem;
                }
            }
            let todoItem = createTodoItem(newItem)
            listArray.push(newItem)

            saveList(listArray, listName)
            console.log(listArray)

            // сдаем и добавляем в список новое дело с названием из поля для ввода
            todoList.append(todoItem.item)

            todoItemForm.button.classList.add('disabled')
                // нулём значение в поле чтобы не пришлось стирать вручную
            todoItemForm.input.value = ''
        })
    }
    window.createTodoApp = createTodoApp
})()


document.addEventListener('DOMContentLoaded', function() {})