let btnEl = document.querySelector('button');
btnEl.onclick = function(){
    // let titleEl = document.querySelector('h1');
    // titleEl.style.color = 'black';
    let root = document.documentElement;
    let currentBg = getComputedStyle(root).getPropertyValue('--bg-color');
    if(currentBg === 'red'){
        root.style.setProperty('--bg-color','black');
        root.style.setProperty('--text-color','yellow');
        root.style.setProperty('--title-color','green');
    }
    else{
        root.style.setProperty('--bg-color','red');
        root.style.setProperty('--text-color','white');
        root.style.setProperty('--title-color','yellow');
    }
}