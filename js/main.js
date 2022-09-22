let userScore = 0;
let computerScore = 0;
let userScoreValue_span = document.getElementById("userScoreVal");
let computerScoreValue_span = document.getElementById("compScoreVal");
let userResult_p = document.getElementById("result-user-stat");
let compResult_p = document.getElementById("result-comp-stat");
let winnerResult_p = document.getElementById("result-final-stat");
let rock_div = document.getElementById("r");
let paper_div = document.getElementById("p");
let scissor_div = document.getElementById("s");
var spanTag1 = document.createElement("span");
var spanTag2 = document.createElement("span");
var spanTag3 = document.createElement("span");
userResult_p.appendChild(spanTag1);
compResult_p.appendChild(spanTag2);
winnerResult_p.appendChild(spanTag3)


  //function to get computer choice
function getComputerChoice(){
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber == 0){
        spanTag2.innerHTML = "Rock";
    }else if(randomNumber == 1){
        spanTag2.innerHTML = "Paper";
    }
    else{
        spanTag2.innerHTML = "Scissor"
    }
    return choices[randomNumber];
    
}

//win function
function win(user, computer){
    userScore++;
    userScoreValue_span.innerHTML = userScore;
    if(user == "r"){
        spanTag3.innerHTML = "User wins!";
    }
    else if(user == "p"){
        spanTag3.innerHTML = "User wins!";
    }
    else{
        spanTag3.innerHTML = "User wins!";
    }
}
//lose function
function lose(user, computer){
    computerScore++;
    computerScoreValue_span.innerHTML = computerScore;
    if(user == "r"){
        spanTag3.innerHTML = "Computer wins!";
    }
    else if(user == "p"){
        spanTag3.innerHTML = "Computer wins!";
    }
    else{
        spanTag3.innerHTML = "Computer wins!";
    }

}
//draw function
 function draw(user, computer){
    if(user == "Rock" && computer == "Rock"){
        spanTag3.innerHTML = "Match Tie";
    }
    else if(user == "Paper" && computer == "Paper"){
        spanTag3.innerHTML = "Match Tie"
    }
    else{
        spanTag3.innerHTML = "Match Tie";
    }

 }
 //user choice function
function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice+computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, getComputerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
             lose(userChoice, getComputerChoice);
             break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, getComputerChoice);
            break;
        
    }

}

rock_div.addEventListener("click", function(){
    game("r");
    spanTag1.innerHTML = "Rock";

})

paper_div.addEventListener("click", function(){
    game("p");
    spanTag1.innerHTML = "Paper";    
})

scissor_div.addEventListener("click", function(){
    game("s");
    spanTag1.innerHTML = "Scissor"
    
})