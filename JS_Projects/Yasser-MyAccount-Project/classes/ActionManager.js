export default class ActionManager {
    constructor(){
        this.actions = localStorage.getItem('actions') ? JSON.parse(localStorage.getItem('actions')):[];
        this.balance = 0;
        this.savingActions = localStorage.getItem('savingActions') ? JSON.parse(localStorage.getItem('savingActions')):[];
        this.savings = 0; 
        this.calcBalance();
        this.calcSavings();
    }

    addAction(action){
        this.actions.push(action);
        this.calcBalance();
    }

    addSavingAcion(saveAction){
        this.savingActions.push(saveAction);
        this.calcSavings();
    }

    deleteAction(actionId){ 
        let deleteIndex =  this.actions.findIndex((action) => action.id == actionId);
        this.actions.splice(deleteIndex, 1);
        this.calcBalance();
    }

    deleteSavings(actionId){ 
        let deleteIndex =  this.savingActions.findIndex((savinAction) => savinAction.id == actionId);
        this.savingActions.splice(deleteIndex, 1);
        this.calcSavings();
    }

    updateAction(actionId,newAmount){
        let updateAction = this.actions.findIndex((action) => action.id == actionId);
        this.actions[updateAction].amount = this.actions[updateAction].type == 'income' ? newAmount : -newAmount;
        this.calcBalance();
    }

    updateSavings(actionId,newAmount){
        let updateSavings = this.savingActions.findIndex((savinActions) => savinActions.id == actionId);
        if (this.savingActions[updateSavings].type === 'savings') {
            this.savingActions[updateSavings].amount = newAmount;
        }
        this.calcSavings();
    }

    calcBalance(){
        this.savings = 
        this.balance = 0;
        this.balance = this.actions.reduce((amount, action) => amount + action.amount, 0);
        this.balance -= this.calcSavings();
        let balance = document.getElementById('balance');
        balance.innerHTML = this.balance > 0 ?  `<p style="color:green;">Balance: ${this.balance} NIS</p>`: `<p style="color:red;">Balance: ${this.balance} NIS</p>`;
        return this.balance;
    }

    calcSavings (){
        this.savings = 0;
        this.savings = this.savingActions.reduce((amount, savingActions) => amount + savingActions.amount, 0);
        let savings = document.getElementById('savings');
        if (this.savings > 0) {
            savings.innerHTML = `<p style="color:orange;">Savings: ${this.savings} NIS</p>`;
        } 
        return this.savings;
    }
}


