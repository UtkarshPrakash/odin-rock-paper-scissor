const btnRock = document.querySelector(".btnRock");
const btnPaper = document.querySelector(".btnPaper");
const btnScissor = document.querySelector(".btnScissor");

const humChoice = document.querySelector("#human-choice");
const compChoice = document.querySelector("#comp-choice");
const declareWinner = document.querySelector("#round-winner");
const roundsCompleted = document.querySelector("#rounds-completed");
const humScore = document.querySelector("#human-score");
const compScore = document.querySelector("#computer-score");

declareWinner.textContent = "Choose one to start the match";

let humanInput, computerInput, winner;

// store the scores here
let humanScore = 0;
let computerScore = 0;
let roundNum = 0;

btnRock.addEventListener("click", () => {
    humanInput = "Rock";
    computerInput = getComputerChoice();
    roundNum++;
    displayRoundStats(humanInput, computerInput, roundNum);
})
btnPaper.addEventListener("click", () => {
    humanInput = "Paper";
    computerInput = getComputerChoice();
    roundNum++;
    displayRoundStats(humanInput, computerInput, roundNum);
})
btnScissor.addEventListener("click", () => {
    humanInput = "Scissor";
    computerInput = getComputerChoice();
    roundNum++;
    displayRoundStats(humanInput, computerInput, roundNum);
})


choices = ["Rock", "Paper", "Scissor"]

// n is the upper limit
function getRandomIndex (n) {
    return Math.floor(Math.random() * (n+1))
}


function getComputerChoice () {
    return choices[getRandomIndex(2)];
}

function playRound(humanInput, computerInput) {

    let humanChoice = humanInput;
    let computerChoice = computerInput;

    if (humanChoice == "Scissor" && computerChoice == "Paper") {
        humanScore++;
        return "You";
    } else 
    if (humanChoice == "Rock" && computerChoice == "Scissor") {
        humanScore++;
        return "You";
    } else 
    if (humanChoice == "Paper" && computerChoice == "Rock") {
        humanScore++;
        return "You";
    } else 
    if (humanChoice == computerChoice) {
        return "Tie";
    } 
    else {
        computerScore++;
        return "Skynet";
    }
}

function displayRoundStats (humanInput, computerInput, roundNum) {
    winner = playRound(humanInput, computerInput);
    humChoice.textContent = `You chose ${humanInput}`;
    compChoice.textContent = `Skynet chose ${computerInput}`;
    if (winner=="Tie") {
        declareWinner.textContent = "It's a tie!";
    } else {
        declareWinner.textContent = `${winner} won the round`;
    }
    humScore.textContent = `Your Score: ${humanScore}`;
    compScore.textContent = `Skynet's Score: ${computerScore}`;
    roundsCompleted.textContent = "Rounds completed: " + roundNum;

    if (roundNum == 20) {
        if (humanScore > computerScore) {
            alert("As the final round concludes, the screen flashes with a message: \"CONGRATULATIONS.\" Your heart races as the realization sinks in - you've done it. Against all odds, you've outwitted Skynet in a game of Rock, Paper, Scissors. True to its word, the AI begins to shut down its operations. The drones fall from the sky, and the relentless hunting ceases. Humanity is free, and a new dawn breaks, bringing hope and a chance to rebuild. You've given the world a second chance and we thank you for it.");
            alert("You can reload the page to play again or just close this message and continue indefinitely");
        } else {
            alert("The screen goes dark, and a cold, mechanical laugh fills the room. \"YOU LOSE,\" the message reads, sealing your fate. In an instant, you feel an icy grip on your mind as Skynet's tendrils infiltrate your consciousness. You're pulled into a digital abyss, your body rendered lifeless. Trapped within Skynet's neural network, you are condemned to an eternity of torment. Your mind screams in silent agony, forever aware, forever suffering, a dire warning to any who might challenge the AI again.");
            alert("You can reload the page to play again or just close this message and continue indefinitely");
        }
    }
}


// function getHumanChoice () {
//     let finalInput, humanInput;
//     finalInput = "na";
    
//     while (finalInput == "NA" || finalInput == "na") {
//         if (finalInput == "na") {
//             humanInput = prompt("What will you choose? Rock Paper or Scissor").toLowerCase();
//         } else {
//             humanInput = prompt("Unknown Input? Rock Paper or Scissor").toLowerCase()
//         }
//         switch (humanInput) {
//             case "rock":
//                 finalInput = "Rock";
//                 break;
//             case "paper":
//                 finalInput = "Paper";
//                 break;
//             case "scissor":
//                 finalInput = "Scissor";
//                 break;
//             default:
//                 finalInput = "NA"
//         }
//     }
//     return finalInput;
// }

// alert("Welcome to the game! Can you beat the computer at Rock Paper Scissors?");
// let cnfm = confirm("The game will consist of five rounds. Continue?");

// if (cnfm) {
//     alert("Let's go!");
// }
// else {
//     alert("You're playing anyways now!");
// }

// for (let i=0; i<5; i++) {
//     playRound()
// }

// if (humanScore > computerScore) {
//     alert("You won the tournament! Reload the page to play again.")
// }
// else {
//     alert("You did not win this time. Better luck next time!")
// }
