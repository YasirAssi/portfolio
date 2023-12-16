export default class UsersLogIn {
    constructor() {
        this.logIn = this.retrieveUsersFromLocalStorage();
        this.nextId = this.calculateNextId(); 
    }

    addUser(email, password) {
        if (this.userExists(email)) {
            return null; 
        }

        const newUser = {
            id: this.generateId(),
            email: email,
            password: password,
        };
        this.logIn.push(newUser);
        this.storeUsersInLocalStorage();
        return newUser;
    }

    generateId() {
        return this.nextId++;
    }

    calculateNextId() {
        const maxId = this.logIn.reduce((max, user) => (user.id > max ? user.id : max), 0);
        return maxId + 1;
    }

    userExists(email) {
        return this.logIn.some(user => user.email === email);
    }

    storeUsersInLocalStorage() {
        localStorage.setItem('logInInfo', JSON.stringify(this.logIn));
    }

    retrieveUsersFromLocalStorage() {
        return localStorage.getItem('logInInfo') ? JSON.parse(localStorage.getItem('logInInfo')) : [];
    }
}
