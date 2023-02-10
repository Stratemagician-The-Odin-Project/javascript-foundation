

// Valid choices for the game
const choices = Array("rock", "paper", "scissors");

// Return random choice for computer
let getComputerChoice = function() {
    return choices[Math.floor(Math.random() * choices.length)];
}

// Return player choice from prompt box, reject invalid choices and ask again
let getPlayerChoice = function() {
    let choice = prompt("Enter your move (rock, paper or scissors):");

    if (choices.includes(choice))
    {
        return choice;
    }
    else
    {
        alert("Please enter a valid move");
        getPlayerChoice();
    }
}

// Given player and computer input, return the result of the game using cheeky modulo technique
let playGame = function(playerChoice, computerChoice) {

    let playerScore = choices.indexOf(playerChoice);
    let computerScore = choices.indexOf(computerChoice);

    if (playerScore === (computerScore + 1) % 3)
    {
        return "Player Wins!";
    }
    else if (computerScore  === (playerScore + 1) % 3)
    {
        return "Computer Wins!";
    }
    else
    {
        return "Draw!";
    }
}

const results = document.querySelector(".results");
results.setAttribute('style', 'white-space: pre;');

let playerCount = 0;
let computerCount = 0;
let resultText = "";
let gameResult = "";

init = function() {
    playerCount = 0;
    computerCount = 0;
    resultText = "";
    gameResult = "";
    results.textContent = "";
}



// Run the best of 5 match and handle ultimate victory by player or computer
let game = function(playerChoice) {
 
    let computerChoice = getComputerChoice();
    let result = playGame(playerChoice, computerChoice);
    
    if (result === "Player Wins!")
    {
        playerCount += 1;
        resultText = "Player Wins!";
    }
    else if (result === "Computer Wins!")
    {
        computerCount += 1;
        resultText = "Computer Wins!";
    }
    else
    {
        resultText = "Draw!";   
    }

    if (playerCount >= 3)
    {
        gameResult = "Player has won the match! Press any button to start again";
    }
    else if (computerCount >= 3)
    {
        gameResult = "Computer has won the match! Press any button to start again";
    }

    results.textContent = `Player has chosen ${playerChoice}.\nComputer has chosen ${computerChoice}.\n${resultText}\nPlayer has won ${playerCount}, Computer has won ${computerCount}\n${gameResult}`;

    return
}

init();

// Welcome text
//alert("Welcome to Rock, Paper, Scissors! Try to beat the computer in a best of 5 match!");

// Run match
//game();

/// NEW STUFF

buttonClick = function(e) {
    if (gameResult !== "")
    {
        init();
    }
    game(this.classList.value);
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener('click', buttonClick));