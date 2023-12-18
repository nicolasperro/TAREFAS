function addTask() {
    var name = document.getElementById('task-name').value;
    var date = document.getElementById('task-date').value;
    var description = document.getElementById('task-description').value;
    var color = document.getElementById('task-color').value;

    if (name && date) {
        var taskList = document.getElementById('task-list');

        var li = document.createElement('li');
        li.style.backgroundColor = color;
        li.innerHTML = '<strong>' + name + '</strong><br>' + date + '<br>' + description +
            '<button class="delete-btn" onclick="deleteTask(this)">Excluir</button>';

        taskList.appendChild(li);

        // Limpa os campos após adicionar a tarefa
        document.getElementById('task-name').value = '';
        document.getElementById('task-date').value = '';
        document.getElementById('task-description').value = '';
        document.getElementById('task-color').value = '#ffffff'; // Define a cor padrão após adicionar a tarefa
    } else {
        alert('Por favor, preencha o nome e a data da tarefa.');
    }
}
function deleteTask(element) {
    var taskList = document.getElementById('task-list');
    taskList.removeChild(element.parentNode);
}
