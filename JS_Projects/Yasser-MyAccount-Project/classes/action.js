export default class Action {
    constructor(type, description, amount){
        this.id = Math.floor(Math.random() * 1000);
        this.type = type;
        this.description = description;
        if (type == "income") {
            this.amount = amount;
        } 
        else if(type == 'expense') {
            this.amount = -amount;
        }
        else if (type == 'savings') {
            this.amount = amount;
        }

    }
    get(propaName){
        return this[propaName];
    };
    set(propaName, newValue){
        this[propaName] = newValue;
    };
}

