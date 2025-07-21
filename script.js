// let userscore=0;
// let compscore=0;

// const choices=document.querySelectorAll(".choice");
// const genCompChoice=()=>{
//     const options=["rock","paper","scissor"];
//    const randIdx= Math.floor(Math.random()*3);
//    return options[randIdx];
// };
// const drawGame=()=>{
//     console.log("game was draw");
// }
// const playGame=(userChoice)=>{
//     console.log("userChoice=",userChoice);
//     //Generate Computer Choice;
//     const compChoice=genCompChoice();
//     console.log("comp choice=",compChoice);
//     if(userChoice===compChoice){
// drawGame();
//     }else if (
//         (userChoice === "rock" && compChoice === "scissor") ||
//         (userChoice === "paper" && compChoice === "rock") ||
//         (userChoice === "scissor" && compChoice === "paper")
//     ) {
//         console.log("User Wins!");
//         userscore++;
//     } else {
//         console.log("Computer Wins!");
//         compscore++;
//     }
// };


// choices.forEach((choice)=>{
//     console.log(choice);
//     choice.addEventListener("click",()=>{
//         const userChoice=choice.getAttribute("id");
//         //console.log("choice was clicked",userChoice);
//         playGame(userChoice);
//     });
// });

let userscore = 0;
let compscore = 0;

const userScoreElement = document.getElementById("user-score");
const compScoreElement = document.getElementById("computer-score");
const msgElement = document.getElementById("msg");

const choices = document.querySelectorAll(".choice");

// Function to generate computer's choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

// Function to show the game result message
const showWinner = (winner, userChoice, compChoice) => {
    if (winner === "draw") {
        msgElement.textContent = `It's a draw! You both chose ${userChoice}`;
    } else if (winner === "user") {
        msgElement.textContent = `You win! ${userChoice} beats ${compChoice}`;
    } else {
        msgElement.textContent = `You lose! ${compChoice} beats ${userChoice}`;
    }
};

// Function to play one round of the game
const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        showWinner("draw", userChoice, compChoice);
    } else if (
        (userChoice === "rock" && compChoice === "scissor") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissor" && compChoice === "paper")
    ) {
        userscore++;
        userScoreElement.textContent = userscore;
        showWinner("user", userChoice, compChoice);
    } else {
        compscore++;
        compScoreElement.textContent = compscore;
        showWinner("comp", userChoice, compChoice);
    }
};

// Add click event listeners to each choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

