const btnStart = document.querySelector('#btn-start');
const btnLeave = document.querySelector('#btn-leave');
const firstMenu = document.querySelector('#preload');
const instructions = document.querySelector('#instructions');
const instLink = document.querySelector('#how-play');
const gameMenu = document.querySelector('#menu');
const btnEasy = document.querySelector('#btn-easy');
const btnMedium = document.querySelector('#btn-medium');
const btnHard = document.querySelector('#btn-hard');
const pauseMenu = document.querySelector('#pause');
const btnPause = document.querySelector('#pause-btn');
const btnContinue = document.querySelector('#btn-continue');
const pBtnLeave = document.querySelector('#p-btn-leave');
const resultsSection = document.querySelector('#results');
const resultsContainer = document.querySelector('#results-contain')
const cOptions = [
    document.querySelector('#cRock'),
    document.querySelector('#cPaper'),
    document.querySelector('#cScissors')
];
const plRock = document.querySelector('#pRock');
const plPaper = document.querySelector('#pPaper');
const plScissors = document.querySelector('#pScissors');

let i = 0;
let enemy = 0;
let selection = undefined;
let tratar;

function easyGame(){
    gameMenu.classList.add("hidden");
    tratar = setInterval(iterarion, 1000);
}
function mediumGame(){
    gameMenu.classList.add("hidden");
    tratar = setInterval(iterarion, 500);
}
function hardGame(){
    gameMenu.classList.add("hidden");
    tratar = setInterval(iterarion, 300);
}

function iterarion(){
    if(i === 0){
        enemy = 'rock';
        cOptions[0].style.backgroundColor = "#ECC63E";
        cOptions[1].style.backgroundColor = "#FFFFFF";
        cOptions[2].style.backgroundColor = "#FFFFFF";
        i++;
    }else if(i === 1){
        enemy = 'paper';
        cOptions[1].style.backgroundColor = "#ECC63E";
        cOptions[0].style.backgroundColor = "#FFFFFF";
        cOptions[2].style.backgroundColor = "#FFFFFF";        
        i++;
    }else{
        enemy = 'scissors';
        cOptions[2].style.backgroundColor = "#ECC63E";
        cOptions[0].style.backgroundColor = "#FFFFFF";
        cOptions[1].style.backgroundColor = "#FFFFFF";
        i = 0;
    }

}

function game(){
    clearInterval(tratar);
    resultsSection.classList.remove("hidden");

    if(selection === enemy){

    }else if(selection == 1 && enemy == 2){
        console.log('gana el enemigo')
    }else{
        console.log('no pasa nada ')
    }
}

function detener(){
    clearInterval(tratar);
}

function gamePause(){
    pauseMenu.classList.remove("hidden");
    clearInterval(tratar);
}

btnStart.addEventListener("click", () =>{firstMenu.classList.add("hidden")});
instLink.addEventListener("click", () =>{instructions.classList.remove("hidden")});
instructions.addEventListener("click", () => {instructions.classList.toggle("hidden")});
btnLeave.addEventListener("click", () => {location.reload()});
btnEasy.addEventListener("click", easyGame);
btnMedium.addEventListener("click", mediumGame);
btnHard.addEventListener("click", hardGame);
plRock.addEventListener("click", () => {selection = 'rock'; game()});
plPaper.addEventListener("click", () => {selection = 'paper'; game()});
plScissors.addEventListener("click", () => {selection = 'scissors'; game()});
btnPause.addEventListener("click",gamePause);
pauseMenu.addEventListener("click", () => {pauseMenu.classList.toggle("hidden")});
pBtnLeave.addEventListener("click", () => {location.reload()});