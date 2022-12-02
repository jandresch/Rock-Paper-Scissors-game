//Interactive Elements from html
const btnStart = document.querySelector('#btn-start');
const btnLeave = document.getElementsByClassName("button_leave");
const firstMenu = document.querySelector('#preload');
const instructions = document.querySelector('#instructions');
const instLink = document.querySelector('#how-play');
const gameMenu = document.querySelector('#menu');
const btnEasy = document.querySelector('#btn-easy');
const btnMedium = document.querySelector('#btn-medium');
const btnHard = document.querySelector('#btn-hard');
const pauseMenu = document.querySelector('#pause');
const btnPause = document.querySelector('#pause-btn');
const resultsSection = document.querySelector('#results');
const resultsContainer = document.querySelector('#results-contain');
const continueGame = document.getElementsByClassName("button_continue");
const plRock = document.querySelector('#pRock');
const plPaper = document.querySelector('#pPaper');
const plScissors = document.querySelector('#pScissors');
const cOptions = [
    document.querySelector('#cRock'),
    document.querySelector('#cPaper'),
    document.querySelector('#cScissors')
];

//New html elements
let resultTitle = document.createElement("h2");
let optionPlayerSelection = document.createElement("div");
let optionComputerSelection = document.createElement("div");
let selectionsContainer = document.createElement("div");
let optionSelectText = [
    document.createElement("p"), 
    document.createElement("p")
];
let optionContainer = [
    document.createElement("div"),
    document.createElement("div")
];

//Logic variables
let i = 0;
let enemy = undefined;
let selection = undefined;
let cycle = undefined;
let intervalTime = undefined;

//Functions
function startGame(interval){
    intervalTime = interval;
    cycle = setInterval(iteration, intervalTime);
}

function iteration(){
    if(i === 0){
        enemy = ['rock', '<i class="fa-regular fa-hand-back-fist"></i>'];
        cOptions[0].style.backgroundColor = "#ECC63E";
        cOptions[1].style.backgroundColor = "#FFFFFF";
        cOptions[2].style.backgroundColor = "#FFFFFF";
        i++;
    }else if(i === 1){
        enemy = ['paper', '<i class="fa-regular fa-hand"></i>'];
        cOptions[1].style.backgroundColor = "#ECC63E";
        cOptions[0].style.backgroundColor = "#FFFFFF";
        cOptions[2].style.backgroundColor = "#FFFFFF";        
        i++;
    }else{
        enemy = ['scissors','<i class="fa-regular fa-hand-scissors"></i>'];
        cOptions[2].style.backgroundColor = "#ECC63E";
        cOptions[0].style.backgroundColor = "#FFFFFF";
        cOptions[1].style.backgroundColor = "#FFFFFF";
        i = 0;
    }

}

function game(){
    detener();
    optionSelectText[0].innerText = 'Player';
    optionSelectText[1].innerText = 'Computer';
    selectionsContainer.setAttribute("class", "selections-container");
    optionContainer[0].setAttribute("class", "option-container");
    optionContainer[1].setAttribute("class", "option-container");

    if(selection[0] === enemy[0]){
        resultTitle.innerText = "It's a tie"
    }else if(selection[0] == 'rock'){
        if(enemy[0] == 'paper'){
            resultTitle.innerText = "You Lose";
        }else{
            resultTitle.innerText = "You Win!!!";        
        }
    }else if(selection[0] == 'paper'){
        if(enemy[0] == 'scissors'){
            resultTitle.innerText = "You Lose";
        }else{
            resultTitle.innerText = "You Win!!!";        
        }
    }else if(selection[0] == 'scissors'){
        if(enemy[0] == 'rock'){
            resultTitle.innerText = "You Lose";
        }else{
            resultTitle.innerText = "You Win!!!";        
        }
    }
    optionContainer[0].innerHTML = selection[1];
    optionContainer[1].innerHTML = enemy[1];
    optionPlayerSelection.append(optionSelectText[0], optionContainer[0]);
    optionComputerSelection.append(optionSelectText[1], optionContainer[1]);
    selectionsContainer.append(optionPlayerSelection, optionComputerSelection)
    resultsContainer.append(resultTitle, selectionsContainer);
    showOrHidde(resultsSection);
}

function showOrHidde(element){element.classList.toggle("hidden");};
function detener(){clearInterval(cycle); cycle = null};
function leaveGame(){location.reload();};

//Listeners
btnStart.addEventListener("click", () =>{showOrHidde(firstMenu);});
btnLeave[0].addEventListener("click", leaveGame);
btnLeave[1].addEventListener("click", leaveGame);
btnLeave[2].addEventListener("click", leaveGame);
instLink.addEventListener("click", () => {showOrHidde(instructions)});
instructions.addEventListener("click", () => {showOrHidde(instructions)});
btnEasy.addEventListener("click", () => {showOrHidde(gameMenu); startGame(1000)});
btnMedium.addEventListener("click", () => {showOrHidde(gameMenu); startGame(500)});
btnHard.addEventListener("click", () => {showOrHidde(gameMenu); startGame(250)});
plRock.addEventListener("click", () => {selection = ['rock', '<i class="fa-regular fa-hand-back-fist"></i>']; game()});
plPaper.addEventListener("click", () => {selection = ['paper', '<i class="fa-regular fa-hand"></i>']; game()});
plScissors.addEventListener("click", () => {selection = ['scissors', '<i class="fa-regular fa-hand-scissors"></i>']; game()});
btnPause.addEventListener("click",() => {showOrHidde(pauseMenu); detener();});
continueGame[0].addEventListener("click", () => {showOrHidde(pauseMenu); startGame(intervalTime);});
continueGame[1].addEventListener("click", () => {showOrHidde(resultsSection); startGame(intervalTime);});