let loader = document.querySelector('.loader');
let dataContainer = document.querySelector('#data');
let getBtn = document.querySelector('#loadData');

getBtn.addEventListener('click', function(){
    loader.style.display = 'block';
    dataContainer.innerHTML = '';
    setTimeout(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(data=>{
            loader.style.display = 'none';
            data.forEach(element =>{
               {/* <div class="card">
                 <div class="card-body">
                    This is some text within a card body.
                </div>
                </div> */}
                let divEl = document.createElement('div');
                divEl.classList.add('card', 'mb-1');
                divEl.innerHTML = `
                    <div class='card-body'>
                        <h3>${element.name}</h3>
                        <p>${element.phone}</p>
                    </div>
                `;
                dataContainer.appendChild(divEl);
            })
        }).catch(erro=>{
                console.log(erro);
                loader.style.display = 'none';
                dataContainer.innerHTML = 'Сталася помилка запиту';
        })
    }, 8000);
   
});