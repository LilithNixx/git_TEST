//Variables globales
const rock = document.getElementById('btnRock');
const paper = document.getElementById('btnPaper');
const scissors = document.getElementById('btnScissors');
const pcElement = document.querySelector('.pc');
const playerElement = document.querySelector('.player');
const result = document.getElementById('result');
const reset = document.getElementById('btnReset');

//estas variables de declaran aca para que no se se vuelvan a cero cada vez que se preciona el boton
let pcPoint = 0; 
let playerPoint = 0;
let playerChoice;
let answer;


//Listeners
rock.addEventListener('click', ()=> {
    
    playerChoice = "rock";
    playRound(playerChoice, getComputerChoice()); // Llamar a playRound cuando se hace una elección
})

paper.addEventListener("click", ()=> {
    playerChoice = "paper";
    playRound(playerChoice, getComputerChoice());
})

scissors.addEventListener('click', ()=> {
    playerChoice = "scissors";
    playRound(playerChoice, getComputerChoice());
})

reset.addEventListener('click', ()=> {
    pcPoint = 0; playerPoint = 0;
    playerElement.textContent = 0;
    pcElement.textContent = 0;
})


//Funciones
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]; // Cambiar a un array de opciones
    let randomIndex = Math.floor(Math.random() * choices.length); // Usar el tamaño del array
    let computerSelection = choices[randomIndex];
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    const resultImage = document.getElementById('result'); // Cambiar si 'result' es un elemento de imagen
    const tieResult = '/Exercise4/Images/tie.png';
    const winResult = '/Exercise4/Images/win.png';
    const loseResult = '/Exercise4/Images/lose.png';
    
    const tie = 0;
    const win = 1;
    const lose = 2;

   
    if (playerSelection === computerSelection) {
        resultImage.src = tieResult;
        resultImage.alt = 'Tie';
        points(tie);
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
       resultImage.src = winResult;
       resultImage.alt = 'Win';
        points(win);
    } else {
        resultImage.src = loseResult;
        resultImage.alt = 'Lose';
        points(lose);
    }
}

function points (result) {

    if (result === 0) {
        // No es necesario hacer nada en caso de empate
    } else if (result === 1){
        playerPoint++;
        playerElement.textContent = playerPoint;
    } else if ( result === 2){
       
        pcPoint++;
        pcElement.textContent = pcPoint;
    }
}