let tries = 3, choice, computers_choice, players_choice, choices;


function startGame() {
    document.getElementById("start").innerText = "Triff deine Wahl";

    choices = ["rock", "paper", "scissors"];
    computers_choice = Math.floor(Math.random() * 3);
    computers_choice = choices(computers_choice);    
}
function checkInput() {
    if (computers_choice == null) {
        return;
    }
    while (tries > 0) {
        players_choice = document.getElementById("choice").value;
        if (computers_choice == players_choice) {
            document.getElementById("result").innerText = "Draw";
        } else {
            document.getElementById("result").innerText = "Not a Draw."
        }
    }


}