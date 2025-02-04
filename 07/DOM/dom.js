// let hTags = document.querySelector('h1');
// console.log(hTags);

// console.log(document);

//Old
// let idEl = document.getElementById('title');
// console.log(idEl);
// let classEll = document.getElementsByClassName('container');
// console.log(classEll);
// let tagEl = document.getElementsByTagName('p');
// console.log(tagEl);

//New
// #,.,:nth-child

let elementId = document.querySelector('#title');
console.log(elementId);
// let linkElements = document.querySelector('nav a');
// console.log(linkElements);

let linkElements = document.querySelectorAll('nav a');

let arrLinks = Array.from(linkElements);

console.log(linkElements);
console.log(arrLinks);

let [...sectionParagrafs] = document.querySelectorAll('section p');
console.log(sectionParagrafs);