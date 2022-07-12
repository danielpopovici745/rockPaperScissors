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

function playerSelection(){
    let response = prompt("Rock,Paper,or Scissors!");

    while(!validResponse(response.toLowerCase())){
        response = prompt("Invalid Input! Please enter Rock, Paper or Scissors!");
        if(response == null){
            break;
        }
        console.log(response);
    }
    
    if(response == null){
        window.alert('Game Closing. Refresh to try again')
        return;
    }

    response = response.toLowerCase();
    
    return response.charAt(0).toUpperCase() + response.slice(1);
}

//create a function that checks if the user input is equal to rock paper or scissors or else return false
validResponse = response =>
response == "rock" ? true : response == "paper" ? true : response == "scissors" ? true : false

//create a function that takes 2 parameters playerSelection and computerSelection then returns if the user won or lost
function roundRPS(playerSelection,computerSelection){
    // use a switch statement with nested if statements that check if the player selection wins, ties or losses against the computer selection
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
        default:
            return;
    }
}

roundRPS(playerSelection(),computerPlay(random()));
//make the userSelection case-insensitive, roCk RocK ROCK should all equal Rock
//create a function called game() that keeps track of a 5 round game of rock paper scissors
