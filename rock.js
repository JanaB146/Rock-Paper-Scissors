let tries = 3;
let playerPoints = 0;
let computerPoints = 0;
let computers_choice, players_choice, choices;


function startGame() {
    document.getElementById("start").innerText = "Triff deine Wahl";
    document.getElementById("result").innerText = ""; // Lösche vorheriges Ergebnis

    tries = 3; // Setze Versuche zurück
    playerPoints = 0; // Setze Spieler-Punkte zurück
    computerPoints = 0; // Setze Computer-Punkte zurück
    document.getElementById("playerPoints").innerText = playerPoints;
    document.getElementById("computerPoints").innerText = computerPoints;    
}

function checkInput(playerChoice) {
        players_choice = playerChoice;

        choices = ["rock", "paper", "scissors"];
        computers_choice = Math.floor(Math.random() * 3);
        computers_choice = choices[computers_choice];

        if (computers_choice === "rock") {
            document.getElementById("eins").innerText = "Computer: Stein";
        } else if (computers_choice === "paper") {
            document.getElementById("eins").innerText = "Computer: Papier";
        } else if (computers_choice === "scissors") {
            document.getElementById("eins").innerText = "Computer: Schere";
        }

        if (players_choice === "rock") {
            document.getElementById("zwei").innerText = "Player:Stein";
        } else if (players_choice === "paper") {
            document.getElementById("zwei").innerText = "Player: Papier";
        } else if (players_choice === "scissors") {
            document.getElementById("zwei").innerText = "Player: Schere";
        }

        let result = "";
        if (players_choice === computers_choice) {
            result = "Unentschieden!";
        } else if (
            (players_choice === "rock" && computers_choice === "scissors") ||
            (players_choice === "paper" && computers_choice === "rock") ||
            (players_choice === "scissors" && computers_choice === "paper")
        ) {
            result = "Du hast gewonnen!";
            playerPoints++;
        } else {
            result = "Du hast verloren!";
            computerPoints++;
        }

        // Aktualisiere die Punktzahlen
        document.getElementById("playerPoints").innerText = playerPoints;
        document.getElementById("computerPoints").innerText = computerPoints;

        // Zeige das Ergebnis
        document.getElementById("result").innerText = result;

        // Wenn 3 Versuche vorbei sind, beende das Spiel
        tries = tries - 1;
        }
    if (tries <= 0) {
        document.getElementById("start").innerText = "Spiel vorbei! Klicke, um neu zu starten.";
        tries = 3; // Setze Versuche zurück
        playerPoints = 0;
        computerPoints = 0;
        document.getElementById("playerPoints").innerText = playerPoints;
        document.getElementById("computerPoints").innerText = computerPoints;
    }

// Verbinde die Buttons mit den richtigen Aktionen
document.getElementById("rock").onclick = function() { checkInput("rock"); };
document.getElementById("paper").onclick = function() { checkInput("paper"); };
document.getElementById("scissors").onclick = function() { checkInput("scissors"); 

};
