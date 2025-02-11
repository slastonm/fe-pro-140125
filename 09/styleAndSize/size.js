let containerEl = document.querySelector('.container');
let width = containerEl.offsetWidth;
let height = containerEl.offsetHeight;

console.log(`Block w ${width} and h: ${height}`);

let widthC = containerEl.clientWidth;
let heightC = containerEl.clientHeight;

console.log(`Block w ${widthC} and h: ${heightC}`);

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

console.log(`window w${windowWidth} h:${windowHeight}`);
