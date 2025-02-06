let readEl = document.querySelector('.read');

let loginBtn = document.querySelector('.login');
loginBtn.setAttribute('disabled', 'disabled');
loginBtn.removeAttribute('disabled');
readEl.removeAttribute('target');

readEl.setAttribute('style','background:yellow;');
console.log(readEl.style.cssText);
// readEl.style.cssText +=' padding:30px';

readEl.style.color = 'blue';
readEl.style.padding = '30px';
readEl.style.fontSize = '34px';
readEl.style.marginTop = '30px';
readEl.style.marginLeft = '30px';
readEl.style.display = 'inline-block';

let allStyles = getComputedStyle(readEl);
console.log(allStyles);
console.log(`Link Bg color ${allStyles.backgroundColor}`);
console.log(`Link font size ${allStyles.fontSize}`);
console.log(`Link margin top ${allStyles.marginTop}`);


let title = document.querySelector('h2');
title.setAttribute('class', 'active');
// title.setAttribute('class', 'xl-text');
console.log(title);
// title.className +='xl-text';

// title.classList.add('xl-text');
// title.classList.add('text-center');
title.classList.add('xl-text', 'text-center', 'decoration');
// title.classList.remove('active');
title.classList.remove('decoration');
// title.classList.remove('active', 'decoration', 'text-center');
title.classList.add('replace-me');
// title.classList.replace('xl-text', 'decoration');
title.classList.replace('replace-me', 'decoration');

console.log(`Contain className decoration ${title.classList.contains('decoration')}`);
console.log(`Contain className decoration ${title.classList.contains('myBtn')}`);

document.querySelector('.funcBtn').onclick = function(){
    title.classList.toggle('non-active');
}

