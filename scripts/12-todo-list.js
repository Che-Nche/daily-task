const todoList = [{
    name: 'Danske Bank's job application',
    dueDate: '2024-09-09',
    time: '09:00'
    
  }, {
    name: 'Going to the Gymn',
    dueDate: '2024-09-09',
    time: '11:30'
    
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
