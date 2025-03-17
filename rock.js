let round = 0;
let playerPoints = 0;
let computerPoints = 0;
let computers_choice, players_choice, choices;


function startGame() {
    document.getElementById("start").innerText = "Triff deine Wahl";
    document.getElementById("result").innerText = "";

    choices = ["rock", "paper", "scissors"];
    computers_choice = Math.floor(Math.random() * 3);
    computers_choice = choices[computers_choice];

    round = 0;
    playerPoints = 0;
    computerPoints = 0;
    document.getElementById("playerPoints").innerText = playerPoints;
    document.getElementById("computerPoints").innerText = computerPoints;    
}
function checkInput(playerChoice) {
    if (computers_choice == null) {
        return;
    }
    if (round < 3) {
        players_choice = playerChoice;
        choices = ["rock", "paper", "scissors"];
        computers_choice = Math.floor(Math.random() * 3);
        computers_choice = choices[computers_choice];

        if (computers_choice === "rock") {
            document.getElementById("eins").src = "./pics/Rock_Bubble.png";
        } else if (computers_choice === "paper") {
            document.getElementById("eins").src = "./pics/Paper_Bubble.png";
        } else if (computers_choice === "scissors") {
            document.getElementById("eins").src = "./pics/Scissor_Bubble.png";
        }

        if (players_choice === "rock") {
            document.getElementById("zwei").src = "./pics/Rock_Bubble.png";
        } else if (players_choice === "paper") {
            document.getElementById("zwei").src = "./pics/Paper_Bubble.png";
        } else if (players_choice === "scissors") {
            document.getElementById("zwei").src = "./pics/Scissor_Bubble.png";
        }
        
        let result = "";
        
        if (players_choice === computers_choice) {
            result = "Unentschieden!";
        } else if (
            (players_choice === "rock" && computers_choice === "scissors") ||
            (players_choice === "paper" && computers_choice === "rock") ||
            (players_choice === "scissors" && computers_choice === "paper")
        ) {
            round += 1;
            result = `Runde ${round}: Du hast gewonnen!`;
            playerPoints++;
            
        } else {
            round += 1;
            result = `Runde ${round}: Du hast verloren!`;
            computerPoints++;
        }

        document.getElementById("playerPoints").innerText = playerPoints;
        document.getElementById("computerPoints").innerText = computerPoints;

        document.getElementById("result").innerText = result;
        } else {
            if (playerPoints > computerPoints) {
            document.getElementById("result").innerText = "Glückwunsch. Du hast das Spiel gewonnen.";
            }else {
            document.getElementById("result").innerText = "Du hast gegen den Computer verloren.";
            }
        }
    } 
    document.getElementById("start").innerText = "Starte das Spiel";

document.getElementById("rock").onclick = function() { checkInput("rock"); };
document.getElementById("paper").onclick = function() { checkInput("paper"); };
document.getElementById("scissors").onclick = function() { checkInput("scissors"); };

/*   */