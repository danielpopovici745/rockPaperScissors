//Daniel Popovici - rockPaperScissors - script.js

// create a function that is the 'computer' for the user to play against


function computerPlay(randomInt){
    
    //decide to return rock paper or scissors based on randomInt

    switch(randomInt){
        case 0:
            return "Rock";
            
        case 1:
            return "Paper";
            
        case 2:
            return "Scissors";
            
    }
}

//generates a random integer 0-2 inclusive

function random(){
    return Math.floor(Math.random()*3);
}


//returns the result of a round of rockpaperscissors (Win Loss Draw)

function roundRPS(playerSelection){

    let computerSelection = computerPlay(random());

    /*check if the player selection wins, ties or lost against the computer
    based on what button the player clicked on*/

    let div = document.querySelector('#results');

    switch(playerSelection){
        case "Rock":
            if(computerSelection === 'Rock'){
                div.textContent= `You DRAW! ${playerSelection} ties with ${computerSelection}`; 
                return 'Draw';
            }
            else if(computerSelection == 'Paper'){
                div.textContent= `You LOST! ${playerSelection} loses to ${computerSelection}`; 
                return 'Loss';
            }
            else{
                div.textContent= `You WIN! ${playerSelection} beats ${computerSelection}`;
                return 'Win'
            }
        case "Paper":
            if(computerSelection === 'Paper'){
                div.textContent= `You DRAW! ${playerSelection} ties with ${computerSelection}`;
                return 'Draw';
            }
            else if(computerSelection === 'Scissors'){
                div.textContent= `You LOST! ${playerSelection} loses to ${computerSelection}`;
                return 'Loss';
            }
            else{
                div.textContent= `You WIN! ${playerSelection} beats ${computerSelection}`;
                return 'Win';
            }
            break;
        case "Scissors":
            if(computerSelection === 'Scissors'){
                div.textContent= `You DRAW! ${playerSelection} ties with ${computerSelection}`;
                return 'Draw';
            }
            else if(computerSelection === 'Rock'){
                div.textContent= `You LOST! ${playerSelection} loses to ${computerSelection}`;
                return 'Loss';
            }
            else{
                div.textContent=`You WIN! ${playerSelection} beats ${computerSelection}`;
                return 'Win';
            }
    }
}

//checks the value of roundResult from roundRPS() and outputs the current score of the match

function bestOf5(roundResult){

    let bestOfScore = document.querySelector('#runningScore');

    if(roundResult =='Loss'){
        loses +=1;
        bestOfScore.textContent = `Score: ${wins} - ${loses} (W - L)`;
    }
    else if(roundResult == 'Win'){
        wins +=1;
        bestOfScore.textContent = `Score: ${wins} - ${loses} (W - L)`;
    }
    else{
        draws +=1;
        bestOfScore.textContent = `Score: ${wins} - ${loses} (W - L)`;
    }
    
    if(loses == 5){
        matchResult.textContent = `YOU LOST THE MATCH`;
        restartGame();
        
    }
    else if(wins == 5){
        matchResult.textContent = `YOU WON THE MATCH`;
        restartGame();
    }
}

//make the restartButton appear so the user can restart the match (refreshes the page)

function restartGame(){

    const selectionButtons = document.querySelectorAll('#buttonContent > button');
    const infoContent = document.querySelector("#infoContent");

    let selectionButtonsArray = [...selectionButtons];

    selectionButtonsArray.forEach(div =>{
        div.disabled = true;
    })

    restartButton.removeAttribute("hidden");
    restartButton.addEventListener("click",() => window.location.reload());
    restartButton.textContent = 'PLAY AGAIN';
    
    restartButton.setAttribute("id","restartButton");
    infoContent.appendChild(restartButton);
}
let wins = 0;
let draws = 0;
let loses = 0;

let playerRock = document.querySelector('#rock');

let playerPaper = document.querySelector('#paper');

let playerScissors = document.querySelector('#scissors');

let matchResult = document.querySelector('#bestOfResult');

let restartButton = document.querySelector('#restartButton');

restartButton.setAttribute("hidden","hidden");

playerRock.addEventListener("click",function(){bestOf5(roundRPS('Rock',random()))});

playerPaper.addEventListener("click",function(){bestOf5(roundRPS('Paper',random()))});

playerScissors.addEventListener("click",function(){bestOf5(roundRPS('Scissors',random()))});