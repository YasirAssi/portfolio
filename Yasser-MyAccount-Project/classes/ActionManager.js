export default class ActionManager {
    constructor(){
        this.actions = localStorage.getItem('actions') ? JSON.parse(localStorage.getItem('actions')):[];
        this.balance = 0;
        this.calcBalance();
    }
    addAction(action){
        this.actions.push(action);
        this.calcBalance();
    }
    deleteAction(actionId){ 
        let deleteIndex =  this.actions.findIndex((action) => action.id == actionId);
        this.actions.splice(deleteIndex, 1);
        this.calcBalance();
    }
    updateAction(actionId,newAmount){
        let updateAction = this.actions.findIndex((action) => action.id ==actionId);
        this.actions[updateAction].amount = this.actions[updateAction].type == 'income' ? newAmount : -newAmount;
        this.calcBalance();
    }
    calcBalance(){
        this.balance = 0;
        this.balance = this.actions.reduce((amount, action) => amount + action.amount, 0);
        let balance = document.getElementById('balance');
        balance.innerHTML = this.balance > 0 ?  `<p style="color:green;">Balance: ${this.balance} NIS</p>`:  `<p style="color:red;">Balance: ${this.balance} NIS</p>`;
    }
}