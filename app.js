let userScore = 0;
let ComputerScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const genComputerChoice = () => {
    const options = ["stone", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);  
    return options[randomIdx];  
};

const drawGame = () => {
    msg.innerText = "game was draw. Play again!";
    msg.style.backgroundColor = "black";
};

const showWinner = (userWin, userChoice, computerChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win. Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        ComputerScore++;
        computerScorePara.innerText = ComputerScore;
        msg.innerText = `You lose. ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const computerChoice = genComputerChoice();
    console.log("computer choice = ", computerChoice);

    if(userChoice === computerChoice) {
        //Draw game
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice === "stone"){
            // scissors, paper
            userWin = computerChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            // stone, scissors
            userWin = computerChoice === "scissors" ? false : true;
        } else {
            // stone , paper
            userWin = computerChoice === "stone" ? false : true;
        }
        showWinner(userWin, userChoice, computerChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});