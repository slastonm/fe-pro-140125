const canvasEl = document.querySelector('canvas');
const ctx = canvasEl.getContext('2d');
ctx.fillStyle='yellow';
ctx.fillRect(0,0,canvasEl.width,canvasEl.height);

function drawDot(x,y){
    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.arc(x,y, 10, 0, Math.PI*2, true);
    ctx.fill();
}

canvasEl.addEventListener('click', function(e){
    const rect = canvasEl.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    drawDot(x,y);
});