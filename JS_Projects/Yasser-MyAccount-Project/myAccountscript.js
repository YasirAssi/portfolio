import Action from "./classes/action.js";
import ActionManager from "./classes/ActionManager.js";

let manager = new ActionManager(); 

window.addActionToManager = () => { 
let type = document.getElementById('type').value;
let description = document.getElementById('description').value;
if (description == '') alert('Please Enter Discreption');
else {
let amount = +document.getElementById('amount').value;
if (amount <= 0) alert('Please enter a positive amount.');
else { 
let action = new Action (type, description, amount);
manager.addAction(action)
showActionsInTable();
document.getElementById('description').value = '';
document.getElementById('amount').value = '';
    }
    }
}

window.deleteActionFromManager = (actionId) => {
    if(confirm('delete?')){
        manager.deleteAction(actionId);
        showActionsInTable();
    }
};

window.updatedActionFromManager = (actionId) => {
    let newAmount = prompt("update here")
    if( newAmount == null || newAmount == '') alert ('try again!');
    else if (isNaN(newAmount)) alert ('Enter Numbers Only!')
    else{
        manager.updateAction(actionId, +newAmount);
        showActionsInTable();
    }
};

function showActionsInTable() {
    let actionsContainer = document.getElementById('actions');
    actionsContainer.innerHTML = '';

    for (let action of manager.actions) {
        let rowClass = action.type == 'income' ? 'text-success' : 'text-danger';

        let tableRow = document.createElement('tr');
        tableRow.className = rowClass;

        let tableDataDescription = document.createElement('td');
        tableDataDescription.textContent = action.description;

        let tableDataAmount = document.createElement('td');
        tableDataAmount.textContent = `${action.amount} NIS`;

        let tableDataUpdated = document.createElement('td');
        let updateIcon = document.createElement('i');
        updateIcon.className = 'fa-regular fa-pen-to-square';
        updateIcon.style.cursor = 'pointer';
        tableDataUpdated.appendChild(updateIcon);
        tableDataUpdated.addEventListener('click', () => updatedActionFromManager(action.id));

        let tableDataDelete = document.createElement('td');
        let deleteIcon = document.createElement('i');
        deleteIcon.className = 'fa-solid fa-trash';
        deleteIcon.style.cursor = 'pointer';
        tableDataDelete.appendChild(deleteIcon);
        tableDataDelete.addEventListener('click', () => deleteActionFromManager(action.id));

        tableRow.appendChild(tableDataDescription);
        tableRow.appendChild(tableDataAmount);
        tableRow.appendChild(tableDataUpdated);
        tableRow.appendChild(tableDataDelete);

        actionsContainer.appendChild(tableRow);
    }
    localStorage.setItem('actions', JSON.stringify(manager.actions));
}

showActionsInTable();


