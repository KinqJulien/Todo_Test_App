const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

const todos = [];

function renderTodos() {
  list.innerHTML = '';

  if (todos.length === 0) {
    const emptyState = document.createElement('li');
    emptyState.className = 'todo-empty';
    emptyState.textContent = 'Keine Todos vorhanden. Füge ein neues hinzu!';
    list.appendChild(emptyState);
    return;
  }

  todos.forEach((todo, index) => {
    const item = document.createElement('li');
    item.className = 'todo-item';
    item.textContent = todo;

    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.className = 'todo-remove';
    removeButton.textContent = 'Löschen';
    removeButton.addEventListener('click', () => {
      todos.splice(index, 1);
      renderTodos();
    });

    item.appendChild(removeButton);
    list.appendChild(item);
  });
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = input.value.trim();

  if (value === '') {
    return;
  }

  todos.push(value);
  input.value = '';
  input.focus();
  renderTodos();
});

renderTodos();
