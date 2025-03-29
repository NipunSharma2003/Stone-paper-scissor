let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
   const randIdx= Math.floor(Math.random()*3);
   return options[randIdx];
};
const drawGame=()=>{
    console.log("game was draw");
}
const playGame=(userChoice)=>{
    console.log("userChoice=",userChoice);
    //Generate Computer Choice;
    const compChoice=genCompChoice();
    console.log("comp choice=",compChoice);
    if(userChoice===compChoice){
drawGame();
    }
};


choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        //console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});