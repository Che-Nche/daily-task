const todoList = [{
    name: 'Eating dinner',
    dueDate: '2022-12-22',
    time: '18:00'
    
  }, {
    name: 'Watching movie',
    dueDate: '2022-12-22',
    time: '18:30'
    
  }];
  
  renderTodoList();
  
  function renderTodoList() {
    let todoListHTML = '';
  
    todoList.forEach((todoObject, index) => {
      const { name, dueDate, time } = todoObject;
      const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <div>${time}</div>       
        <button class="delete-todo-button js-delete-todo-button">Delete</button> 
      `;
      todoListHTML += html;
    });
  
    document.querySelector('.js-todo-list')
      .innerHTML = todoListHTML;
  
    document.querySelectorAll('.js-delete-todo-button')
      .forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
          todoList.splice(index, 1);
          renderTodoList();
        });
      });
  }
  
  document.querySelector('.js-add-todo-button')
    .addEventListener('click', () => {
      addTodo();
    });
  
  function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
  
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    const timeInputElement = document.querySelector('.js-due-time-input');
    const time = timeInputElement.value;
  
    todoList.push({
      //name: name,
      //dueDate: dueDate,
      name,
      dueDate,
      time,
      
    });
  
    inputElement.value = '';
  
    renderTodoList();
  }
