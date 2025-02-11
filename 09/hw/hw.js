const booksArray = [
    {
        title: 'Пригоди Аліси в Країні Див',
        year: 1865,
        rating: 4.5
    },
    {
        title: '1984',
        year: 1949,
        rating: 4.8
    },
    {
        title: 'Гаррі Поттер і філософський камінь',
        year: 1997,
        rating: 4.7
    }
];

let tbodyEl = document.querySelector('tbody');

function createTd(value){
    let cell = document.createElement('td');
    cell.textContent = value;
    return cell
}

function createTableRow(book){
    let row = document.createElement('tr');
    // let titleCell = document.createElement('td');
    // let yearCell = document.createElement('td');
    // let ratingCell = document.createElement('td');
    // titleCell.textContent = book.title;
    // yearCell.textContent = book.year;
    // ratingCell.textContent = book.rating;
    row.appendChild(createTd(book.title));
    row.appendChild(createTd(book.year));
    row.appendChild(createTd(book.rating));
    return row;
}
// 1
// for(let book of booksArray){
//     tbodyEl.appendChild(createTableRow(book));
// }
// 2
// booksArray.forEach(item=>{
//     tbodyEl.appendChild(createTableRow(item));
// });
//3
// for(let i=0; i<booksArray.length; i++){
//     tbodyEl.appendChild(createTableRow(booksArray[i]));
// }
const menuData = [
    { name: 'Головна', url: '/' },
    { name: 'Про нас', url: '/about' },
    { name: 'Послуги', url: '/services' },
    // Додайте ще пункти меню за потреби
];
const header = document.createElement('header');
// header.style.backgroundColor ='yellow';
// header.style.padding ='50px';
// header.style.display ='flex';
// header.style.justifyContent ='center';
// header.style.gap ='20px';
header.classList.add('bg-warning','p-5','d-flex','justify-content-center');

document.querySelector('body').prepend(header);

function createLink(value){
    const link = document.createElement('a');
    link.textContent = value.name;
    // link.setAttribute('href', value.url);
    link.href = value.url;
    link.classList.add('d-block', 'mx-3', 'text-white');
    return link;
}

menuData.forEach(item=>{
    header.appendChild(createLink(item));
});

let [...links] = document.querySelectorAll('header a');
links.forEach(link=>{
    link.setAttribute('target', '_blank');
}) 


