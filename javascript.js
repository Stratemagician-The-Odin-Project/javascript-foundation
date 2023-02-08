const choices = Array("rock", "paper", "scissors");

let getComputerChoice = function() {
    return choices[Math.floor(Math.random() * choices.length)];
}

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

let playGame = function(playerChoice, computerChoice) {
    console.log(`Player has selected: ${playerChoice}`);
    console.log(`Computer has selected: ${computerChoice}`);

    let playerScore = choices.indexOf(playerChoice);
    let computerScore = choices.indexOf(computerChoice);

    if (playerScore === (computerScore + 1) % 3)
    {
        return "Player Wins!";
    }
    else if (playerScore === (computerScore - 1) % 3)
    {
        return "Computer Wins!";
    }
    else
    {
        return "Draw!";
    }
}

let game = function() {
    let playerCount = 0;
    let computerCount = 0;

    for (let i = 0; i < 5; i++)
    {
        let result = playGame(getPlayerChoice(), getComputerChoice());
        console.log(result);

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

        if (playerCount >= 3)
        {
            console.log("Player has won the match!");
            return;
        }
        else if (computerCount >= 3)
        {
            console.log("Computer has won the match!");
            return;
        }
    }
}

game();