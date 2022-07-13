//Daniel Popovici - rockPaperScissors - scrips.js

// create a function that is the 'computer' for the user to play against

function computerPlay(randomInt){
    
    //using a switch statement to decide to return rock paper or scissors based on randomInt

    switch(randomInt){
        case 0:
            return "Rock";
            
        case 1:
            return "Paper";
            
        case 2:
            return "Scissors";
            
    }
}

//create a function that generates a random integer 0-2 inclusive

function random(){
    return Math.floor(Math.random()*3);
}

//make the playerSelection() case-insensitive, roCk RocK ROCK should all equal Rock

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

    // This while loop calls validResponse() with an argument of response. If the user keeps entering an invalid input the program will continue trying to get a valid response unless the user hits cancel then the game will close or enters a valid response.

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

//create a function that checks if the user input is equal to rock paper or scissors or else return false

validResponse = response =>
response == "rock" ? true : response == "paper" ? true : response == "scissors" ? true : false

//create a function that takes 2 parameters playerSelection and computerSelection then returns if the user won or lost that round

function roundRPS(playerSelection,computerSelection){

    // checks if playerSelection is undefined before I tell the user their selection. If the user hits cancel in the playerFunction() prompt then roundRPS will return undefined which will close the game.

    if (playerSelection === undefined){
        return;
    }
    else{
        console.log('You selected '+ playerSelection);
    }

    // use a switch statement with nested if statements that check if the player selection wins, ties or lost against the computer selection based on what the player selected in playerSelection()

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

//create a function called gameBestOfFive() that keeps track of a best of 5 match of rockpaperscissors and lets the user now if they won the match.

function gameBestOfFive(){
    let wins = 0;
    let draws = 0;
    let losses = 0;
    
    let welcomeMessage = window.alert('Welcome to a Best of 5 Match of Rock, Paper, Scissors. In the next prompt please enter your response.');
    
    //create a for loop to keep track of which round the player is on. With i being the round which the game is on.

    for(let i = 1; i<=5;i++){

        //call roundRPS with its necessary arguments and set it equal to result since the return value of roundRPS is required to find out if the user won,drawed,or lost

        let result = roundRPS(playerSelection(),computerPlay(random()));
        
        //create a switch statement that checks the result of a single round. if the result is 'Draw' then the player drawed. if the result is 'Lost' the player lost. If the result is 'Win' the player won.

        switch(result){
            case 'Win':
                wins +=1;
                console.log('SCORE: ' + wins + ' - ' + draws + ' - ' + losses);
                break;
            case 'Draw':
                draws +=1
                console.log('SCORE: ' + wins + ' - ' + draws + ' - ' + losses);
                break;
            case 'Loss':
                losses +=1
                console.log('SCORE: ' + wins + ' - ' + draws + ' - ' + losses);
                break;
            default:
                return;
        }

        //Create logic that ends the match if its impossible to draw or win with the remaining amount of rounds left. This can only occur if there are 1 or 2 rounds left in the game. If there were 3 rounds left the most amount of wins you could have is 2, this means the computer can still come back to win or draw. 

        let roundsLeft = 5-i;

        //Only 2 roundsLeft in the game i = 3 so 4 rounds have happened

        if (roundsLeft == 2){

            // We check if roundsLeft equals 2 (2-1-0 or 0-1-2 or 1-2-0 or 0-2-1 or 3-0-0 or 0-3-0 or 0-0-3). We check if wins or losses equal 3 because 3-0-0 or 0-0-3 leaves the losing side with only 2 rounds left unable to win or draw.

            if(wins ==3 || losses == 3){
                break;
            }
        }
        //Only 1 roundLeft in the game i = 4 so 4 rounds have happened

        if(roundsLeft == 1){
            
            /* First we check if draws = 0(only 1 roundLeft). If it is then we are left with these possibiites (3-0-1 or 1-0-3 or 2-0-2 or ). We check if wins equals 3 to make sure we end the game on 3-0-1 or 1-0-3 because it leaves the losing side with only 1 round unable to win or draw

            Next, we check if draws = 1 (3-1-0 , 0-1-3 or 2-1-2). We need to make sure wins or losses is 3 then we can safely break the for loop to end the game because 3-1-0 and 0-1-3 is an unwinnable or drawable state for the losing side with only 1 round left.
            */

            if(draws == 0 || draws == 1){
                if(wins == 3 || losses == 3){
                    break;
                }
            }
        
            // Finally, we check if draws = 2 (1-2-1 , 2-2-0 , 0-2-2). Here we need to make sure wins or losses equals 2 before ending the game because the losing side cannont draw or win with only 1 round left.

            else if(draws == 2){                
                if(wins == 2 || losses == 2){
                    break;
                }
            }
        }

    }   

     // Once the for loop is finsihed, either 5 rounds are over or the game is an unwinnable and undrawable state the if statements below check to see if wins are greater than losses. if so then the player wins, if not then the player losses. If there are 5 draws or wins are equal to losses then the match is a draw.

    if (draws === 5 || wins == losses){
        window.alert('MATCH OVER. DRAW SCORE: ' + wins + ' - ' + draws + ' - ' + losses);
        return;
    }
    else if(wins > losses){
        window.alert('You WON the best of 5 match! SCORE: ' + wins + ' - ' + draws + ' - ' + losses);
        return;
    }
    else{
        window.alert('You LOST the best of 5 match! SCORE: ' + wins + ' - ' + draws + ' - ' + losses);
        return;
    }

}

gameBestOfFive();
