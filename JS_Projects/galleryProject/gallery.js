import UsersLogIn from './usersLogInStorage.js';



let rememberMe = document.getElementById('rememberMe');
let submit = document.getElementById('submit');
const cancelBtn = document.querySelector('.cancelBtn');

submit.addEventListener('click', () => {
    
    let email = document.getElementById('email').value,
    password = document.getElementById('password').value;

    let userLogInManager = new UsersLogIn();
    userLogInManager.addUser(email, password);

    if(rememberMe.checked & submit.type === 'submit'){
        userLogInManager.storeUsersInLocalStorage();
    }
});

window.showPassword = () => {
    const passwordInput = document.getElementById('password');
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
}

let reset = () => {
    document.getElementById('userName').value = '';
    document.getElementById('password').value = '';
}

cancelBtn.addEventListener('click', reset);

