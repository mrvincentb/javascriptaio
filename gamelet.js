const ball = document.getElementById('ball');
document.addEventListener('keydown', handleKeyPress);
let position = 0;
let hPosition = 0;

function handleKeyPress(e)  {
    if (e.code === 'ArrowLeft')  {
        position = position - 10;
    }
    if (e.code === 'ArrowRight')  {
        position = position + 10;
    }
    if (e.code === 'ArrowUp') {
        hPosition = hPosition - 10;
    }
    if (e.code === 'ArrowDown') {
        hPosition = hPosition + 10;
    }
    if (hPosition < 0) {
        hPosition = 0;
    }
    if (position < 0)  {
        position = 0;
    }   
    refresh();
}
function refresh()  {
    ball.style.left = position + 'px';
    ball.style.top = hPosition + 'px';
}