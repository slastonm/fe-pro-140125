// document.cookie = "user=Tom; SameSite=None; Secure; max-age=3600";
document.cookie = "userName=Den; SameSite=None; Secure; expires=20 Apr 2025 23:59:59 GMT";

document.cookie = "user=Tom; SameSite=None; Secure; max-age=0";


// window.localStorage.setItem('userMenuState', 'fasle');
// window.localStorage['DynamicKey'] = 'Test danamyc value';
// window.localStorage.simpleKey = "Simple";


// console.log(window.localStorage.getItem('userMenuState'));
// console.log(typeof window.localStorage.getItem('userMenuState'));

// console.log(window.localStorage['DynamicKey']);
// console.log(window.localStorage.simpleKey);

// window.localStorage.setItem('userMenuState', 'true');

// console.log(window.localStorage.length);

// window.localStorage.removeItem('userMenuState');
// window.localStorage.removeItem('simpleKey');

// window.localStorage.clear();


//Sesion storage

window.sessionStorage.setItem('first', 'firts value');
window.sessionStorage.keyValue = 'Key info';
window.sessionStorage['dynamicSesion'] = 'test value';


console.log(window.sessionStorage.getItem('first'));


console.log(window.sessionStorage['dynamicSesion']);
console.log(window.sessionStorage.keyValue);

window.sessionStorage.setItem('first', 'true change');

console.log(window.sessionStorage.length);

let userData = [
    {
        userName:'Den',
        userEmail:'test@den.com',
        userAge:27
    },
    {
        userName:'Den22',
        userEmail:'test222@den.com',
        userAge:272
    }
];

let jsonUserData = JSON.stringify(userData);

window.localStorage.setItem('user', jsonUserData);
window.sessionStorage.setItem('user', jsonUserData);

let usersArr =JSON.parse(window.localStorage.getItem('user')) ;
console.log(usersArr);

usersArr.forEach(element => {
    console.log(element);
});


window.sessionStorage.removeItem('first');
window.sessionStorage.removeItem('dynamicSesion');

window.sessionStorage.clear();

