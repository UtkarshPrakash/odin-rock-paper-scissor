// n is the upper limit
function getRandomIndex (n) {
    return Math.floor(Math.random() * (n+1))
}

choices = ["Rock", "Paper", "Scissor"]

function getComputerChoice () {
    return choices[getRandomIndex(2)];
}

function getHumanChoice () {
    let finalInput, humanInput;
    finalInput = "na";
    
    while (finalInput == "NA" || finalInput == "na") {
        if (finalInput == "na") {
            humanInput = prompt("What will you choose? Rock Paper or Scissor").toLowerCase();
        } else {
            humanInput = prompt("Unknown Input? Rock Paper or Scissor").toLowerCase()
        }
        switch (humanInput) {
            case "rock":
                finalInput = "Rock";
                break;
            case "paper":
                finalInput = "Paper";
                break;
            case "scissor":
                finalInput = "Scissor";
                break;
            default:
                finalInput = "NA"
        }
    }
    return finalInput;
}

// store the scores here
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    if (humanChoice == "Scissor" && computerChoice == "Paper") {
        alert("Computer chose Paper. You won the round!");
        humanScore++;
        alert(`Current Score:\n\nYou: ${humanScore}\nComputer: ${computerScore}`);
    } else 
    if (humanChoice == "Rock" && computerChoice == "Scissor") {
        alert("Computer chose Scissor. You won the round!");
        humanScore++;
        alert(`Current Score:\n\nYou: ${humanScore}\nComputer: ${computerScore}`);
    } else 
    if (humanChoice == "Paper" && computerChoice == "Rock") {
        alert("Computer chose Rock. You won the round!");
        humanScore++;
        alert(`Current Score:\n\nYou: ${humanScore}\nComputer: ${computerScore}`);
    } else 
    if (humanChoice == computerChoice) {
        alert ("That was a tie!");
        alert(`Current Score:\n\nYou: ${humanScore}\nComputer: ${computerScore}`);
    } 
    else {
        alert(`Computer chose ${computerChoice}. You lose the round!`);
        computerScore++;
        alert(`Current Score:\n\nYou: ${humanScore}\nComputer: ${computerScore}`);
    }
}

alert("Welcome to the game! Can you beat the computer at Rock Paper Scissors?");
let cnfm = confirm("The game will consist of five rounds. Continue?");

if (cnfm) {
    alert("Let's go!");
}
else {
    alert("You're playing anyways now!");
}

for (let i=0; i<5; i++) {
    playRound()
}

if (humanScore > computerScore) {
    alert("You won the tournament! Reload the page to play again.")
}
else {
    alert("You did not win this time. Better luck next time!")
}