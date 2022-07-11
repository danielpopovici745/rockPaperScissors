// create a function that is the 'computer' for the user to play against
function computerPlay(randomInt){
    
    //using a switch statement to check what number randomInt equals then either deciding to return rock paper or scissors

    switch(randomInt){
        case 0:
            return "Rock"
            break;
        case 1:
            return "Paper"
            break;
        case 2:
            return "Scissors"
            break;
    }
    
    
}

//create a function that generates a random integer 0-2 inclusive
function random(){
    return Math.round(Math.random()*2);
}
computerPlay(random());
// have the function randomly return either rock, paper, or scissors
//create a function that takes 2 parameters playerSelection and computerSelection then returns if the user won or lost
//make the userSelection case-insensitive, roCk RocK ROCK should all equal Rock
//create a function called game() that keeps track of a 5 round game of rock paper scissors
