document.getElementById('todo-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var input = document.getElementById('todo-input').value;
  if (input !== '') {
    addTask(input);
    document.getElementById('todo-input').value = '';
  }
});

function addTask(taskText) {
  var list = document.getElementById('todo-list');
  var li = document.createElement('li');
  li.innerHTML = `
    <span>${taskText}</span>
    <button class="delete-btn">Delete</button>
  `;
  list.appendChild(li);

  li.querySelector('.delete-btn').addEventListener('click', function() {
    list.removeChild(li);
  });
}