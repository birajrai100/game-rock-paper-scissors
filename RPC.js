let playerScore = 0;
let computerScore = 0;
let round = 0;

document.getElementById("win-message").textContent = 'Can You Beat The Computer?';
document.getElementById("round").textContent = round;
document.getElementById("playerScore").textContent = playerScore;
document.getElementById("computerScore").textContent = computerScore;

function player(choice) {
    return choice;
}

function computerPlay() {
    let computerOptions = ['rock','paper','scissors'];
    return computerOptions[Math.floor(Math.random()*computerOptions.length)];
}

function playRound(playerSelection,computerSelection) {
    let playerWin = 'You Win! ' + player(playerSelection) + ' Beats ' + player(computerSelection) + '.';
    let computerWin = 'You Lose! ' + player(computerSelection) + ' Beats ' + player(playerSelection) + '.';
    let gameTie = 'Its a Draw! You both chose ' + player(playerSelection);
    let badInput = 'oh! Wrong Choice, Please Choose Rock Paper Or Scissors';
     round++;
      if(playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors' ){
            return badInput;
        }
        
        else if(playerSelection === computerSelection) {
            return gameTie;
        } 
        
        else {
        if(playerSelection === 'rock') {
            if (computerSelection !== 'paper') {
                playerScore++;
                return playerWin;
            } else {
                computerScore++;
                return computerWin;                 
            }
        }
        if(playerSelection === 'paper') {
            if (computerSelection !== 'scissors') {
            playerScore++;
            return playerWin;
            } else {
                computerScore++;
                return computerWin; 
            }
        }
        if(playerSelection === 'scissors' ) {
            if (computerSelection !== 'rock') {
                playerScore++;
                return playerWin;
                
            } else {
                computerScore++;
                return computerWin; 
            }
        }    
    }       
}   
    
function game(player) {
    if(playerScore < 3 && computerScore < 3) {
    let playerSelection = player;
    let computerSelection = computerPlay();
    let roundText = playRound(playerSelection,computerSelection);
    document.getElementById("win-message").textContent = roundText;
    document.getElementById("round").textContent = round;
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
    }
    
    if (playerScore == 3) {
        document.getElementById('win-message').textContent = 'Congratualtion! You beat the Computer!';
        document.getElementById('win-message').setAttribute('style','color: green;');
    }
    if (computerScore == 3) {
        document.getElementById('win-message').textContent = 'Sorry Bro! The Computer Wins The Game!!';
        document.getElementById('win-message').setAttribute('style','color: red;');
    }
}  

let rockBtn = document.querySelector('#rock-btn');
let paperBtn = document.querySelector('#paper-btn');
let scissorsBtn = document.querySelector('#scissors-btn');


rockBtn.addEventListener('click', ()=>  {
    game('rock');
});

paperBtn.addEventListener('click', ()=>  {
    game('paper');
});

scissorsBtn.addEventListener('click', ()=>  {
    game('scissors');
});


let resetButton = document.querySelector('#reset-button');
resetButton.addEventListener('click', ()=>  {
    playerScore = 0;
    computerScore = 0;
    round = 0;
    document.getElementById('win-message').setAttribute('style','color: black;');
    document.getElementById("round").textContent = round;
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
    document.getElementById("win-message").textContent = 'Can you beat the Computer?';

});









