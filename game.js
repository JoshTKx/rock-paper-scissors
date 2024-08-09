function getComputerChoice(){
    let choice = Math.random();
    if (choice > 0.6){
        return "rock";
    }
    else if(choice > 0.3){
        return "scissors";
    }
    else{
        return "paper";
    }
    

}



function getHumanChoice(){
    
    while (true){
        input = prompt("Choose Rock, Paper or Scissors");
        input = input.toLowerCase();
        if (input == "rock" || input == "paper" || input == "scissors"){
            break;
        }
    }
    return input;

}



let humanScore = 0;
let computerScore = 0;



function playRound(humanChoice,computerChoice){
    if (humanChoice == "rock"){
        if (computerChoice == "paper"){
            console.log("You lose! Paper beats Rock");
            computerScore++;
        }
        else if (computerChoice == "scissors"){
            console.log("You Win! Rock beats Scissors");
            humanScore++;
        }
        else{
            console.log("You Draw! No one wins");
        }
    }
    else if (humanChoice == "paper"){
        if (computerChoice == "paper"){
            console.log("You Draw! No one wins");
        }
        else if (computerChoice == "scissors"){
            console.log("You Lose! Scissors beats Paper");
            computerScore++;
        }
        else{
            console.log("You Win! Paper beats Rock");
            humanScore++;
        }
    }
        
    else{
        if (computerChoice == "paper"){
            console.log("You Win! Scissors beats Paper");
            humanScore++;
        }
        else if (computerChoice == "scissors"){
            console.log("You Draw! No one wins");
            
        }
        else{
            console.log("You Lose! Rock beats Scissors");
            computerScore++;
        }
    }

}

function playgame(){
    for(let i = 0; i < 5; i++){
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice,computerChoice);
        console.log("HUMAN: " + humanScore +"      COM: "+computerScore);
    }

    if(computerScore > humanScore){
        console.log("You've been Defeated!");
    }
    else if (humanScore > computerScore){
        console.log("You Defeated the Computer!");
    }
    else{
        console.log("It's a Draw!");
    }

}

console.log(playgame());