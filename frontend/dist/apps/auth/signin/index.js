// Your app JavaScript code.
let name = document.querySelector('#name');
let adress = document.querySelector('#adress');
let password = document.querySelector('#password');

let users = {};

function User(name, login, password) {
    this.name = name;
    this.adress = adress;
    this.password = password;
}

function createId(users) {
    return Object.keys(users).length;
}

submit.addEventListner('click', => {
    const nameUser = name.value;
    const emailUser = adress.value;
    const passwordUser = password.value; 

    const user = new User(nameUser, emailUser, passwordUser);

    const userId = 'User' + createId(users);
    users[userId] = user;

    console.log(users);

});
