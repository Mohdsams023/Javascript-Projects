let inputElement = document.querySelector('#todo');
let dates = document.querySelector('#dates');
let container = document.querySelector('#table');
let todos = JSON.parse(localStorage.getItem('todos')) || [];

function addTodo() {
    let todo = {
        item: inputElement.value,
        date: dates.value,
        status: 'Pending'
    };

    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));

    renderTodo(todo);

    inputElement.value = '';
}

function renderTodo(todo) {
    let todocontainer = document.createElement('tr');
    let todoItems = document.createElement('td');
    let todoDates = document.createElement('td');
    let todoAction = document.createElement('td');
    let checkTodo = document.createElement('button');
    let deleteTodo = document.createElement('button');

    todoItems.innerHTML = todo.item;
    todoDates.innerHTML = todo.date;
    checkTodo.innerHTML = todo.status;
    checkTodo.classList.add('status-btn');
    deleteTodo.innerHTML = 'Delete';
    deleteTodo.classList.add('delete');

    checkTodo.addEventListener('click', function () {
        todo.status = todo.status === 'Pending' ? 'Done' : 'Pending';
        checkTodo.innerHTML = todo.status;
        checkTodo.classList.toggle('checked');
        checkTodo.classList.toggle('unchecked');
        updateLocalStorage();
    });

    deleteTodo.addEventListener('click', function () {
        container.removeChild(todocontainer);
        todos = todos.filter(t => t !== todo);
        updateLocalStorage();
    });

    container.appendChild(todocontainer);
    todocontainer.appendChild(todoItems);
    todocontainer.appendChild(todoDates);
    todocontainer.appendChild(todoAction);
    todoAction.appendChild(checkTodo);
    todoAction.appendChild(deleteTodo);
}

function updateLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Render existing todos from localStorage on page load
todos.forEach(todo => renderTodo(todo));
