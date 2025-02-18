// let [...hobbyCheckboxes] = document.querySelectorAll('#hobby input');
let [...hobbyCheckboxes] = document.querySelectorAll('input[name="hobby"]');

let hobbyResultEl = document.querySelector('#hobbyResult');

hobbyCheckboxes.forEach(checkbox=>{
    checkbox.addEventListener('change', function(){
        let checkHobies = hobbyCheckboxes.filter(i=>i.checked).map(item=>item.value);
        hobbyResultEl.textContent = `Вибрано хоббі ${checkHobies.join(', ')}`;
    });
});
console.log(hobbyCheckboxes);


const [...radioButtonElements] = document.querySelectorAll('input[name="ratting"]');
const ratingResult = document.querySelector('#rattingResult');

radioButtonElements.forEach(radioEl=>{
    radioEl.addEventListener('change', function(){
        ratingResult.textContent = `Рейтинг за вашою оцінкою ${this.value}`;
    })
});