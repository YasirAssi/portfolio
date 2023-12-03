import Task from "./manageU_Classes/Task.js";
import TaskManager from "./manageU_Classes/TaskManager.js";

let manager = new TaskManager();

window.deleted = (taskId) => {
    if(confirm('delete?')){
        manager.deleteTask(taskId);
        showTaskeOnActive();
    }
}

window.completed = (taskId) => {
    manager.completeTask(taskId);
    showTaskeOnActive();
}

window.Edit = (taskId) =>{
    let newDescription = prompt('Enter New Task');
    if( newDescription == null || newDescription == '') alert ('Are you sure?')
    else {
            manager.updateTask(taskId, newDescription);
            showTaskeOnActive();
        }
}

window.addToActive = () => {
    let description = document.getElementById('task').value.trim();
    if(description == '' || description.length > 40) alert('Please Enter a Suitable Description (40 chracters max)');
    else {
    manager.addTask(description);
    showTaskeOnActive();
    document.getElementById('task').value = '';
    }
}

function showTaskeOnActive() {
    let completedContainer = document.getElementById('completed');
            completedContainer.innerHTML = '';
    let activeContainer = document.getElementById('active');
    activeContainer.innerHTML = '';
    for (let task of manager.tasks) {
        if(task.completed == false) {
        let listItem = document.createElement('li');
        listItem.className = 'list-group-item w-70 col-9';
        listItem.textContent = task.description;

        let completedIcon = document.createElement('i');
        completedIcon.className = 'fa-solid fa-square-check col-1';
        completedIcon.style.color = '#219419';
        completedIcon.style.cursor = 'pointer';
        completedIcon.onclick = () => completed(task.id);

        let editIcon = document.createElement('i');
        editIcon.className = 'fa-solid fa-pen-to-square col-1';
        editIcon.style.color = '#1f64db';
        editIcon.style.cursor = 'pointer';
        editIcon.onclick = () => Edit(task.id);

        let deleteIcon = document.createElement('i');
        deleteIcon.className = 'fa-solid fa-trash col-1';
        deleteIcon.style.color = '#e90101';
        deleteIcon.style.cursor = 'pointer';
        deleteIcon.onclick = () => deleted(task.id);

        let row = document.createElement('div');
        row.className = 'row';
        row.style.flex = '1';
        row.style.justifyContent = 'center';
        row.style.alignItems = 'center';

        row.appendChild(listItem);
        row.appendChild(completedIcon);
        row.appendChild(editIcon);
        row.appendChild(deleteIcon);

        activeContainer.appendChild(row);
        } else {
            let listItem = document.createElement('li');
            listItem.className = 'list-group-item w-70 col-9';
            listItem.textContent = task.description;
            listItem.style.textDecoration = 'line-through';
            listItem.style.pointerEvents = 'none';
            listItem.style.opacity = '0.6';
            

            let completedIcon = document.createElement('i');
            completedIcon.className = 'fa-solid fa-square-check col-1';
            completedIcon.style.color = '#219419';
            completedIcon.style.cursor = 'pointer';
            completedIcon.onclick = () => completed(task.id);

            let editIcon = document.createElement('i');
            editIcon.className = 'fa-solid fa-pen-to-square col-1';
            editIcon.style.color = '#1f64db';
            editIcon.style.cursor = 'pointer';
            editIcon.onclick = () => Edit(task.id);

            let deleteIcon = document.createElement('i');
            deleteIcon.className = 'fa-solid fa-trash col-1';
            deleteIcon.style.color = '#e90101';
            deleteIcon.style.cursor = 'pointer';
            deleteIcon.onclick = () => deleted(task.id);

            let row = document.createElement('div');
            row.className = 'row';
            row.style.justifyContent = 'center';
            row.style.alignItems = 'center';

            row.appendChild(listItem);
            row.appendChild(completedIcon);
            row.appendChild(editIcon);
            row.appendChild(deleteIcon);
            
            completedContainer.appendChild(row);
        }
        localStorage.setItem('tasks', JSON.stringify(manager.tasks));
    }
}
showTaskeOnActive();
