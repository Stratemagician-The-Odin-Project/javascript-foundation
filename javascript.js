

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
    alert(`Player has selected: ${playerChoice}`);
    alert(`Computer has selected: ${computerChoice}`);

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

let playerCount = 0;
let computerCount = 0;

// Run the best of 5 match and handle ultimate victory by player or computer
let game = function(playerChoice) {
 

    let result = playGame(playerChoice, getComputerChoice());
    alert(result);

    if (result === "Player Wins!")
    {
        playerCount += 1;
    }
    else if (result === "Computer Wins!")
    {
        computerCount += 1;
    }
    else
    {
        i -= 1;
    }

    alert(`Player has won ${playerCount}, Computer has won ${computerCount}`);

    if (playerCount >= 3)
    {
        alert("Player has won the match!");
        // end game
    }
    else if (computerCount >= 3)
    {
        alert("Computer has won the match!");
        // end game
    }

    return
}

// Welcome text
//alert("Welcome to Rock, Paper, Scissors! Try to beat the computer in a best of 5 match!");

// Run match
//game();

/// NEW STUFF

buttonClick = function(e) {
    console.log(e.target.classList.value);
    game(this.classList.value);
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener('click', buttonClick));