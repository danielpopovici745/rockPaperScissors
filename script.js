//Daniel Popovici - rockPaperScissors - scrips.js

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


//returns if the user won or lost a round

function roundRPS(playerSelection){
    //If the user hits cancel in the playerFunction() prompt then roundRPS will return undefined which will close the game.

    computerSelection = computerPlay(random());

    /*check if the player selection wins, ties or lost against the computer
    selection based on what the player selected in playerSelection()*/

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

function restartGame(){
    const selectionButtons = document.querySelectorAll('button');
    let selectionButtonsArray = [...selectionButtons];
    selectionButtonsArray.forEach(div =>{
        div.disabled = true;
    })
    const restartButton = document.createElement('button');
    restartButton.addEventListener("click",() => window.location.reload());
    restartButton.textContent = 'PLAY AGAIN';
    document.body.appendChild(restartButton);
    

}
let wins = 0;
let draws = 0;
let loses = 0;

let playerRock = document.querySelector('#rock');

let playerPaper = document.querySelector('#paper');

let playerScissors = document.querySelector('#scissors');

let matchResult = document.querySelector('#bestOfResult');

playerRock.addEventListener("click",function(){bestOf5(roundRPS('Rock',random()))});

playerPaper.addEventListener("click",function(){bestOf5(roundRPS('Paper',random()))});

playerScissors.addEventListener("click",function(){bestOf5(roundRPS('Scissors',random()))});

// if (roundsLeft == 2){

//     /*check if wins or losses equal 3 because 3-0-0 or 0-0-3 leaves 
//     the losing side with only 2 rounds left unable to win or draw*/

//     if(wins ==3 || losses == 3){
//         break;
//     }
// }

// if(roundsLeft == 1){
    
//     /* must check these conditions to end game if unable to win 
//     or draw state for player or computer*/

//     if((draws == 0 || draws == 1) && (wins == 3 || losses == 3)){
        
//         break;

//     }

//     /* need to make sure wins or losses equals 2 before ending the game
//     because the losing side cannont draw or win with only 1 round left with 2 draws and wins/losses.*/

//     else if(draws == 2){                
//         if(wins == 2 || losses == 2){
//             break;
//         }
//     }
// }

