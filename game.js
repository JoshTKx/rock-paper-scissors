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
const score = document.querySelector(".score");
const buttons = document.querySelectorAll("button");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const pscore = document.querySelector(".p-score");
const cscore = document.querySelector(".c-score");
const c_choice = document.querySelector(".c-choice");
const p_choice = document.querySelector(".p-choice");
const hunter_img = "https://plus.unsplash.com/premium_vector-1723552125865-0b67b7f22750?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NTZ8fHxlbnwwfHx8fHw%3D";
const robber_img = "https://plus.unsplash.com/premium_vector-1723550780941-bd386c128cb2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Njh8fHxlbnwwfHx8fHw%3D";
const pant_img = "https://plus.unsplash.com/premium_vector-1723274509352-2727dcc37e7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTg5fHx8ZW58MHx8fHx8";
const vs_txt = document.querySelector(".vs-text");


function playRound(humanChoice,computerChoice){
    if (humanChoice == "rock"){
        p_choice.src=hunter_img;
        if (computerChoice == "paper"){
            c_choice.src = robber_img;
            vs_txt.textContent = "You Lose! Robber took your Gun";
            computerScore++;
        }
        else if (computerChoice == "scissors"){
            c_choice.src = pant_img;
            vs_txt.textContent = "You Win! You shot the Panther";
            humanScore++;
        }
        else{
            c_choice.src = hunter_img;
            vs_txt.textContent = "It's a Tie";
        }
    }
    else if (humanChoice == "paper"){
        p_choice.src = robber_img;
        if (computerChoice == "paper"){
            c_choice.src = robber_img;
            vs_txt.textContent = "It's a Tie";
        }
        else if (computerChoice == "scissors"){
            c_choice.src = pant_img;
            vs_txt.textContent = "You Lose! Panther attacks you from behind";
            computerScore++;
        }
        else{
            c_choice.src = hunter_img;
            vs_txt.textContent = "You Win! You take Hunter's Gun";
            humanScore++;
        }
    }
        
    else{
        p_choice.src = pant_img;
        if (computerChoice == "paper"){
            c_choice.src = robber_img;
            vs_txt.textContent = "You Win! You pounce on the Robber from behind";
            humanScore++;
        }
        else if (computerChoice == "scissors"){
            c_choice.src = pant_img;
            vs_txt.textContent = "It's a Tie";
            
        }
        else{
            c_choice.src = hunter_img;
            vs_txt.textContent = "You Lose! You were shot by the Hunter";
            computerScore++;
        }
    }

}


rock.addEventListener("click", () =>{
    playRound("rock",getComputerChoice());
});
paper.addEventListener("click", () =>{
    playRound("paper",getComputerChoice());   
});
scissors.addEventListener("click", () =>{
    playRound("scissors",getComputerChoice());
});

buttons.forEach( (button) =>{
    button.addEventListener("click", () =>{
        pscore.textContent =  humanScore;
        cscore.textContent =  computerScore;
        if (computerScore >= 5){
            alert("You've been Defeated...");
            window.location.reload();
        }
        if (humanScore >= 5){
            alert("You Defeated the Computer!");
            window.location.reload();
        }
    }); 
});

