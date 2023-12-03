class ShoppingList {
    constructor(){
        this.toDos = localStorage.getItem('shoppingList') ? JSON.parse(localStorage.getItem('shoppingList')) : [] ;
    }

    addToList(todo){
        this.toDos.push(todo);
        this.updateLocalstorage();
    }

    deleteFromList(todoText){
        this.toDos = this.toDos.filter(todo => todo !== todoText);
        this.updateLocalstorage();
    }

    updateLocalstorage(){
    localStorage.setItem('shoppingList', JSON.stringify(this.toDos));
    }
}

const shoppingList = new ShoppingList();

function addTodos() {
    shoppingList.toDos.forEach(todo => {
        createTemplate(todo);
    });
}

const addform = document.querySelector('.add');
const listContainer = document.querySelector('.todos'); 

const createTemplate = todo => {
    const html = `<li class="list-group-item d-flex justify-content-between align-items-center"><span>${todo}</span>
        <i class="bi bi-trash delete"></i>
    </li>`;
    listContainer.innerHTML += html;
};

addTodos();

addform.addEventListener('submit', (event) => {
    event.preventDefault();
    const todo = addform.add.value.trim();

    if (todo.length) {
        shoppingList.addToList(todo); 
        createTemplate(todo);
        addform.reset();
    }
});

listContainer.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('delete')) {
        const todoText = target.previousElementSibling.textContent;
        shoppingList.deleteFromList(todoText); 
        target.parentElement.remove();
    }
});

function updateLocalStorage() {
    localStorage.setItem('shoppingList', (shoppingList.toDos));
}

