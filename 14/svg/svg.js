let btnEl = document.querySelector('button');
let svgContainer = document.querySelector('.svgContainer');
const svgNS = 'http://www.w3.org/2000/svg';

function drawSvgRect(width, height){
    // const svg = document.createElement('svg'); error
    const svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('width', width);
    svg.setAttribute('height', height);

    // <rect x="10" y="10" width="100" height="100" fill="red" />
    const rect = document.createElementNS(svgNS, 'rect');
    rect.setAttribute('width', width);
    rect.setAttribute('height', height);
    rect.setAttribute('fill', 'green');
    
    svg.appendChild(rect);
    svgContainer.appendChild(svg);
}

btnEl.onclick = function(){
    drawSvgRect(400,200);
}