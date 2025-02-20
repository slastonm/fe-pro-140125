const form = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');
const erroContainer = document.querySelector('#error-message');

function isValidEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function formDate(date){
    const options ={
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        day: '2-digit', 
        month: '2-digit', 
        year: 'numeric'
    }
    console.log(date);
    return date.toLocaleString('uk-UA', options);
}
let data = [];
console.log(window.localStorage.list);
// if(window.localStorage.list ...){

// }
form.addEventListener('submit', function(event){
    event.preventDefault();
    todoInput.classList.remove('is-invalid');
    erroContainer.classList.remove('d-block');
    const email = todoInput.value.trim();
    console.log(isValidEmail(email));
    if(!isValidEmail(email)){
        todoInput.classList.add('is-invalid');
        erroContainer.classList.add('d-block');
        return;
    }
    else{
        console.log(email);
        const curentDate = new Date();

        const formatDate = formDate(curentDate);
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML =`
        <span>${email}</span> <span> ${formatDate}</span>
        `;
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger btn-sm';
        deleteBtn.innerHTML = 'Видалити emeil';
        deleteBtn.addEventListener('click', function(){
            li.remove();
        });
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
        todoInput.value = "";
    }
})