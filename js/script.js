const playground = document.querySelector('.playground');
const btn = document.querySelector('#circle');
const gameStart = document.querySelector('#g-start');
const gameOver = document.querySelector('#g-over');  
const count= document.querySelector('#counter')
const gameRestart = document.querySelector('#g-restart')
let timeoutID = null
let counter = 0



function handleClick(){
    let x = playground.clientWidth-80;
    x = x * Math.random();
    x = Math.floor(x);
    let y = playground.clientHeight-80;
    y = y * Math.random();
    y = Math.floor(y);


    btn.style.setProperty('--x', `${x}px`);
    btn.style.setProperty('--y', `${y}px`);
    clearTimeout(timeoutID);
    timeoutID = setTimeout(gameEnd, 5000);
    counter++;
    count.textContent = counter;
}

btn.addEventListener('click', handleClick);

gameStart.addEventListener('click', 
function (){
    gameStart.classList.add('hidden');
    btn.classList.remove('hidden');
    timeoutID = setTimeout(gameEnd, 5000);
    count.classList.remove('hidden');
});

function gameEnd(){
    gameOver.classList.remove('hidden');
    btn.classList.add('hidden');
    gameRestart.classList.remove('hidden');
}

gameRestart.addEventListener('click', 
function (){
    clearTimeout(timeoutID);
    gameRestart.classList.add('hidden');
    btn.classList.remove('hidden');
    timeoutID = setTimeout(gameEnd, 5000);
    count.classList.remove('hidden');
    gameOver.classList.add('hidden');
    counter = 0;
    count.textContent = counter;
});