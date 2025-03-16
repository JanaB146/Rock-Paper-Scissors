let tries = 3, choice, computers_choice, players_choice, choices;


function startGame() {
    document.getElementById("start").innerText = "Triff deine Wahl";

    choices = ["rock", "paper", "scissors"];
    computers_choice = Math.floor(Math.random() * 3);
    computers_choice = choices(computers_choice);
    
    players_choice = document.getElementById("choice").value;


    function checkInput() {
        if (computers_choice == null) {
            return;
        }
        while (tries > 0) {
            if (players_choice == "#rock") {
                document.getElementById("result").innerText = "./pics/Rock_Bubble.png";
            } else if (players_choice =="#paper") {
                document.getElementById("result").innerText = "./pics/Paper_Bubble.png";
            } else {
                document.getElementById("result").innerText = "./pics/Scissor_Bubble.png";
            }
            
            if (computers_choice == players_choice) {
                document.getElementById("start").innerText = "Draw";
            } else {
                document.getElementById("start").innerText = "Not a Draw."
                tries = tries - 1;
            }
            return false;
        }
    }

}