export default class Task{
    constructor(description){
    this.description = description;
    this.completed = false;
    this.id = Math.floor(Math.random() * 1000);
}
get(propaName){
        return this[propaName];
    };
    set(propaName, newValue){
        this[propaName] = newValue;
    };
}