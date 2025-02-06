let likEl = document.querySelector('.read');
console.log(`Link element info ${likEl.getAttribute('target')}`);
console.log(`Link element info ${likEl.getAttribute('href')}`);

let emptyEl = document.querySelector('.empty');
emptyEl.setAttribute('href', 'https://prog.kiev.ua/');
emptyEl.setAttribute('target', '_blank');
emptyEl.setAttribute('id','top-element');

emptyEl.innerHTML = 'Js course sale';
emptyEl.setAttribute('href', 'https://prog.kiev.ua/sale/');
emptyEl.setAttribute('id','top-element2');

emptyEl.setAttribute('style', 'background:blue;');
emptyEl.setAttribute('style', 'padding: 20px; font-size: 30px; display: inline-block;');

//class

console.log(`class name ${emptyEl.getAttribute('class')}`);

