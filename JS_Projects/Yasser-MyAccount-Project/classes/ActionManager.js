export default class ActionManager {
    constructor(){
        this.savingActions = localStorage.getItem('savingActions') ? JSON.parse(localStorage.getItem('savingActions')):[];
        this.savings = 0; 
        this.actions = localStorage.getItem('actions') ? JSON.parse(localStorage.getItem('actions')):[];
        this.balance = 0;
        this.calcBalance();
        this.calcSavings();
        this.current = 0;
        this.calcCurrent();
    }

    addAction(action){
        this.actions.push(action);
        this.calcBalance();
        this.calcCurrent();
    }

    addSavingAcion(saveAction){
        this.savingActions.push(saveAction);
        this.calcSavings();
        this.calcCurrent();
    }

    deleteAction(actionId){ 
        let deleteIndex =  this.actions.findIndex((action) => action.id == actionId);
        this.actions.splice(deleteIndex, 1);
        this.calcBalance();
        this.calcCurrent();
    }

    deleteSavings(actionId){ 
        let deleteIndex =  this.savingActions.findIndex((savinAction) => savinAction.id == actionId);
        this.savingActions.splice(deleteIndex, 1);
        this.calcSavings();
        this.calcCurrent();
    }

    updateAction(actionId,newAmount){
        let updateAction = this.actions.findIndex((action) => action.id == actionId);
        this.actions[updateAction].amount = this.actions[updateAction].type == 'income' ? newAmount : -newAmount;
        this.calcBalance();
        this.calcCurrent();
    }

    updateSavings(actionId,newAmount){
        let updateSavings = this.savingActions.findIndex((savinActions) => savinActions.id == actionId);
        if (this.savingActions[updateSavings].type === 'savings') {
            this.savingActions[updateSavings].amount = newAmount;
        }
        this.calcSavings();
        this.calcCurrent();
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

    calcCurrent(){ 
        this.current = 0;
        this.current = this.actions.reduce((amount, action) => amount + action.amount, 0);
        this.current -= this.calcSavings();
        let current = document.getElementById('current');
        current.innerHTML = this.current > 0 ?  `<p style="color:green;">Current Balance: ${this.current} NIS</p>`: `<p style="color:red;">Current Balance: ${this.current} NIS</p>`;
        return this.current;
    }

    calcBalance(){
        this.balance = 0;
        this.balance = this.actions.reduce((amount, action) => amount + action.amount, 0);
        let balance = document.getElementById('balance');
        balance.innerHTML = this.balance > 0 ?  `<p style="color:green;"> Savings & Current Balance: ${this.balance} NIS</p>`: `<p style="color:red;"> Savings & Current Balance: ${this.balance} NIS</p>`;
        return this.balance;
    }
}


