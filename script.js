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

//make the playerSelection case-insensitive, roCk RocK ROCK should all equal Rock
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

    // This while loop calls validResponse() with an argument of response. If the user keeps entering an invalid input the program will continue trying to get a valid response unless the user hits cancel then the game will close

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

//create a function that takes 2 parameters playerSelection and computerSelection then returns if the user won or lost

function roundRPS(playerSelection,computerSelection){
    // checks if playerSelection is undefined before I tell the user their selection. If the user hits cancel in the playerFunction() prompt then roundRPS will return undefined which will close the game.
    if (playerSelection === undefined){
        return;
    }
    else{
        console.log('You selected '+ playerSelection);
    }

    // use a switch statement with nested if statements that check if the player selection wins, ties or lost against the computer selection

    switch(playerSelection){
        case "Rock":
            if(computerSelection === 'Rock'){
                console.log("You draw! " + playerSelection + " ties with " + computerSelection); 
            }
            else if(computerSelection == 'Paper'){
                console.log("You lose! " + computerSelection +" beats " + playerSelection);
            }
            else{
                console.log("You win! " + playerSelection +" beats " + computerSelection);
            }
            break;
        case "Paper":
            if(computerSelection === 'Paper'){
                console.log("You draw! " + playerSelection + " ties with " + computerSelection); 
            }
            else if(computerSelection === 'Scissors'){
                console.log("You lose! " + computerSelection + " beats " + playerSelection);
            }
            else{
                console.log("You win! " + playerSelection +" beats " + computerSelection);
            }
            break;
        case "Scissors":
            if(computerSelection === 'Scissors'){
                console.log("You draw! " + playerSelection + " ties with " + computerSelection); 
            }
            else if(computerSelection === 'Rock'){
                console.log("You lose! " + computerSelection + " beats " + playerSelection);
            }
            else{
                console.log("You win! " + playerSelection +" beats " + computerSelection);
            }
            break;
    }
}

roundRPS(playerSelection(),computerPlay(random()));

//create a function called game() that keeps track of a 5 round game of rock paper scissors
