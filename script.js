const info = document.querySelector("p.info");
const scoreboard = document.querySelector("p.scoreboard");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors")
const reset = document.querySelector(".reset");


let userScore = 0;
let compScore = 0;

rock.addEventListener("click", () => { playRound("Rock"); });
paper.addEventListener("click", () => { playRound("Paper"); });
scissors.addEventListener("click", () => { playRound("Scissors"); });


function compPick() {
    const rng = Math.floor(Math.random() * 3);

    if (rng == 0) {
        return "Rock";
    } else if (rng == 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}


function playRound(user, comp = compPick()) {
    switch (winner(user, comp)) {
        case "draw":
          print(`It's a draw. You picked ${comp}`, info);
          print(`User - ${userScore} | comp - ${compScore}`, scoreboard);
          break;
        case true:
          userScore++;
          print(`Yeah! You won! ${user} beats ${comp}`, info);
          print(`User - ${userScore} | comp - ${compScore}`, scoreboard);
          break;
        default:
          compScore++;
          print(`You've lost! ${comp} beats ${user}`, info);
          print(`User - ${userScore} | comp - ${compScore}`, scoreboard);
        }
}


function winner(pick1, pick2) {
    if (pick1 == pick2) {
        return "draw";
      } else if ((pick1 == "Rock") && (pick2 == "Scissors")) {
        return true;
      } else if ((pick1 == "Paper") && (pick2 == "Rock")) {
        return true;
      } else if ((pick1 == "Scissors") && (pick2 == "Rock")) {
        return true;
      } else {
        return false;
      }
    }



function print(msg, area = info) {
    area.textContent = msg;
  }
