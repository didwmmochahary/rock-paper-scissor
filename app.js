
let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const rockImg=document.querySelectorAll("#rockImg");
const paperImg=document.querySelectorAll("#paperImg");
const scissorImg=document.querySelectorAll("#scissorImg");

const scoreUser=document.querySelector("#user-score");
const scoreComp=document.querySelector("#comp-score");

const rockText=document.querySelector("#rockText");
const paperText=document.querySelector("#paperText");
const scissorText=document.querySelector("#scissorText");

rockImg.forEach((Element)=>{
    Element.addEventListener("mouseenter",()=>{
        rockText.innerText="rock"
    });
    Element.addEventListener("mouseleave",()=>{
        rockText.innerText=""   
    });
});
paperImg.forEach((Element)=>{
    Element.addEventListener("mouseenter",()=>{
        paperText.innerText="paper"
    });
    Element.addEventListener("mouseleave",()=>{
        paperText.innerText=""   
    });
});
scissorImg.forEach((Element)=>{
    Element.addEventListener("mouseenter",()=>{
        scissorText.innerText="scissor"
    });
    Element.addEventListener("mouseleave",()=>{
        scissorText.innerText=""   
    });
});

const msg=document.querySelector("#msg");

const genCompChoice=()=>{
    const options=["rock", "paper","scissors"];
    //rock, paper, scissors
    const randomIdx= Math.floor(Math.random(options)*3);
    return options[randomIdx]
}

const drawGame=()=>{
    console.log("Game was Draw");
    msg.innerText="Draw";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        console.log("You Win");
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        userScore++;
        scoreUser.innerText=userScore;
        
    }
    else{
        console.log("You Lose.");
        msg.innerText=`You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        compScore++;
        scoreComp.innerText=compScore;
    }
}


const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);
    //generate computer choice->modular
    const compChoice=genCompChoice();
    console.log("comp choice=",compChoice);

    if(userChoice===compChoice){
        //draw Game
        drawGame();
    }
    else{
        userWin=true;

        if(userChoice==="rock"){
            ///scissors, paper
            userWin= compChoice==="paper"?false : true;

        }
        else if(userChoice==="paper"){
            userWin= compChoice==="scissors"? false : true;
        }
        else{
            userWin= compChoice==="rock"? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});