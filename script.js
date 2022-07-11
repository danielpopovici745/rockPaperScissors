// create a function that is the 'computer' for the user to play against
function computerPlay(randomInt){
    
    //using a switch statement to decide to return rock paper or scissors based on randomInt
    switch(randomInt){
        case 0:
            console.log("Rock");
            return "Rock";
            
        case 1:
            console.log("Paper");
            return "Paper";
            
        case 2:
            console.log("Scissors");
            return "Scissors";
            
    }
    
    
}

//create a function that generates a random integer 0-2 inclusive
function random(){
    return Math.floor(Math.random()*3);
}

function playerSelection(){
    let response = prompt("Rock,Paper,or Scissors!");
    let lwrCaseResponse = response.toLowerCase();
    return lwrCaseResponse.charAt(0).toUpperCase() + lwrCaseResponse.slice(1);
}
//create a function that takes 2 parameters playerSelection and computerSelection then returns if the user won or lost
function roundRPS(playerSelection,computerSelection){
    // use a switch statement with nested if statements that check if the player selection wins, ties or losses against the computer selection
    switch(playerSelection){
        case "Rock":
            if(computerSelection === 'Rock'){
                console.log("You draw! " + playerSelection + " ties with " + computerSelection); 
            }
            else{
                console.log("You win! " + playerSelection +" beats " + computerSelection);
            }
            break;
        case "Paper":
            if(computerSelection === 'Paper'){
                console.log("You draw! " + playerSelection + " ties with " + computerSelection); 
            }
            else{
                console.log("You win! " + playerSelection +" beats " + computerSelection);
            }
            break;
        case "Scissors":
            if(computerSelection === 'Scissors'){
                console.log("You draw! " + playerSelection + " ties with " + computerSelection); 
            }
            else{
                console.log("You win! " + playerSelection +" beats " + computerSelection);
            }
            break;
    }
}

roundRPS(playerSelection(),computerPlay(random()));
//make the userSelection case-insensitive, roCk RocK ROCK should all equal Rock
//create a function called game() that keeps track of a 5 round game of rock paper scissors
