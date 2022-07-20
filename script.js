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

function playerSelection(){
    let response = prompt("Rock,Paper,or Scissors!");

    //If the user hits cancel when the prompt shows up it will alert the user they cancelled the game and will tell them to refresh to try again.

    if(response == null){
        window.alert('Game Closing. Refresh to try again')
        return;
    }
    else{
        response = response.toLowerCase();
    }

    /* If the user keeps entering an invalid input the program will continue
    trying to get a valid response unless the user hits cancel*/

    while(!validResponse(response)){
        response = prompt("Invalid Input! Please enter Rock, Paper or Scissors!");
        if(response == null){
            window.alert('Game Closing. Refresh to try again')
            return;
        }
        else{
            response = response.toLowerCase();
        }
    }
    
    
    response = response.charAt(0).toUpperCase() + response.slice(1);
    return response;
}

//checks if the user input is equal to rock paper or scissors or else return false

validResponse = response =>
response == "rock" ? true : response == "paper" ? true : response == "scissors" ? true : false

//returns if the user won or lost a round

function roundRPS(playerSelection,computerSelection){

    //If the user hits cancel in the playerFunction() prompt then roundRPS will return undefined which will close the game.

    if (playerSelection === undefined){
        return;
    }
    else{
        console.log('You selected '+ playerSelection);
    }

    /*check if the player selection wins, ties or lost against the computer
    selection based on what the player selected in playerSelection()*/

    switch(playerSelection){
        case "Rock":
            if(computerSelection === 'Rock'){
                console.log("You draw! " + playerSelection + " ties with " + computerSelection); 
                return 'Draw';
            }
            else if(computerSelection == 'Paper'){
                console.log("You lose! " + computerSelection +" beats " + playerSelection);
                return 'Loss';
            }
            else{
                console.log("You win! " + playerSelection +" beats " + computerSelection);
                return 'Win'
            }
            break;
        case "Paper":
            if(computerSelection === 'Paper'){
                console.log("You draw! " + playerSelection + " ties with " + computerSelection); 
                return 'Draw';
            }
            else if(computerSelection === 'Scissors'){
                console.log("You lose! " + computerSelection + " beats " + playerSelection);
                return 'Loss';
            }
            else{
                console.log("You win! " + playerSelection +" beats " + computerSelection);
                return 'Win';
            }
            break;
        case "Scissors":
            if(computerSelection === 'Scissors'){
                console.log("You draw! " + playerSelection + " ties with " + computerSelection);
                return 'Draw';
            }
            else if(computerSelection === 'Rock'){
                console.log("You lose! " + computerSelection + " beats " + playerSelection);
                return 'Loss';
            }
            else{
                console.log("You win! " + playerSelection +" beats " + computerSelection);
                return 'Win';
            }
            break;
    }
}

//keeps track of a best of 5 match of rockpaperscissors

// function gameBestOfFive(){
//     let wins = 0;
//     let draws = 0;
//     let losses = 0;
    
//     let welcomeMessage = window.alert('Welcome to a Best of 5 Match of Rock, Paper, Scissors. In the next prompt please enter your response.');
    
//     //create a for loop to keep track of which round the player is on

//     for(let i = 1; i<=5;i++){

//         let result = roundRPS(playerSelection(),computerPlay(random()));
        
//         //checks the result of a single round

//         switch(result){
//             case 'Win':
//                 wins +=1;
//                 console.log('SCORE: ' + wins + ' - ' + draws + ' - ' + losses);
//                 break;
//             case 'Draw':
//                 draws +=1
//                 console.log('SCORE: ' + wins + ' - ' + draws + ' - ' + losses);
//                 break;
//             case 'Loss':
//                 losses +=1
//                 console.log('SCORE: ' + wins + ' - ' + draws + ' - ' + losses);
//                 break;
//             default:
//                 return;
//         }

//         //Create logic that ends the match if its impossible to draw or win with the remaining amount of rounds left 

//         let roundsLeft = 5-i;

//         if (roundsLeft == 2){

//             /*check if wins or losses equal 3 because 3-0-0 or 0-0-3 leaves 
//             the losing side with only 2 rounds left unable to win or draw*/

//             if(wins ==3 || losses == 3){
//                 break;
//             }
//         }

//         if(roundsLeft == 1){
            
//             /* must check these conditions to end game if unable to win 
//             or draw state for player or computer*/

//             if((draws == 0 || draws == 1) && (wins == 3 || losses == 3)){
                
//                 break;

//             }
        
//             /* need to make sure wins or losses equals 2 before ending the game
//             because the losing side cannont draw or win with only 1 round left with 2 draws and wins/losses.*/

//             else if(draws == 2){                
//                 if(wins == 2 || losses == 2){
//                     break;
//                 }
//             }
//         }

//     }   

//      //if statements below check to see if wins are greater than losses.

//     if (draws === 5 || wins == losses){
//         window.alert('MATCH OVER. DRAW SCORE: ' + wins + ' - ' + draws + ' - ' + losses);
//         return;
//     }
//     else if(wins > losses){
//         window.alert('You WON the best of 5 match! SCORE: ' + wins + ' - ' + draws + ' - ' + losses);
//         return;
//     }
//     else{
//         window.alert('You LOST the best of 5 match! SCORE: ' + wins + ' - ' + draws + ' - ' + losses);
//         return;
//     }

// }



roundRPS(playerSelection(),computerPlay(random()));