let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg"); 
const userScorepara = document.querySelector("#user-score");
const computerScorepara = document.querySelector("#comp-score");

const genCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("Game was a draw.");
    msg.innerText = "Game was a Draw. Play Again";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`; 
        msg.style.backgroundColor = "green";
    } else {
        computerScore++;
        computerScorepara.innerText = computerScore;
        msg.innerText = `You lose! ${compChoice} beats ${userChoice}`; 
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("User choice =", userChoice);
    const compChoice = genCompChoice();
    console.log("Comp choice =", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else { 
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("Choice was clicked", userChoice);
        playGame(userChoice);
    });
});
