export default class UsersLogIn {
    constructor() {
        this.logIn = this.retrieveUsersFromLocalStorage();
        this.nextId = 1;
    }

    addUser(email, password) {
        const newUser = {
            id: this.generateId(),
            email: email,
            password: password,
        };
        this.logIn.push(newUser);
        return newUser;
    }

    generateId() {
        return this.nextId++;
    }

    storeUsersInLocalStorage() {
        localStorage.setItem('logInInfo', JSON.stringify(this.logIn));
    }

    retrieveUsersFromLocalStorage() {
        return localStorage.getItem('logInInfo') ? JSON.parse(localStorage.getItem('logInInfo')) : [];
    }
}
