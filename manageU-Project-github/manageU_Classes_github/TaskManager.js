import Task from "./Task.js";
export default class TaskManager{
constructor(){
    this.tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')):[];
}
addTask(description){
    let task = new Task(description);
    this.tasks.push(task);
}
deleteTask(id){
    let indexToDelete = this.tasks.findIndex((task) => task.id == id);
    this.tasks.splice(indexToDelete,1);
}
updateTask(taskId, newDescription){
    let indexToEdit = this.tasks.findIndex((task) => task.id == taskId);
    this.tasks[indexToEdit].description = newDescription; 
}
completeTask(taskId){
    let indexCompleted = this.tasks.findIndex((task) => task.id == taskId);
    this.tasks[indexCompleted].completed = true;
}
}