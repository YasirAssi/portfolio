export default class Action {
    constructor(type, description, amount){
        this.id = Math.floor(Math.random() * 1000);
        this.type = type;
        this.description = description;
        this.amount = type == "income" ? amount : -amount;
    }
    get(propaName){
        return this[propaName];
    };
    set(propaName, newValue){
        this[propaName] = newValue;
    };
}

