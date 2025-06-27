let youPick;
let random =  0;
let computerPick;

let win = 0;
let lose = 0;

const outputResult = document.getElementById("outputResult");
const youImage = document.getElementById("youImage");
const computerImage = document.getElementById("computerImage");

let winScore = document.getElementById("winScore");
let loseScore = document.getElementById("loseScore");

function rock() {
    youPick = "rock";
    youImage.src = "images/Rock.png";
    computer();
}

function paper() {
    youPick = "paper";
    youImage.src = "images/Paper.png";
    computer();
}

function scissor() {
    youPick = "scissor";
    youImage.src = "images/Scicross.png";
    computer();
}

function computer() {
    random = Math.random();
    if (random >= 0 && random <= 1/3) {
        computerPick = "rock";
        computerImage.src = "images/Rock.png";
    }

    else if (random > 1/3 && random <= 2/3 ){
        computerPick = "paper";
        computerImage.src = "images/Paper.png";
    }

    else  {
        computerPick = "scissor";
        computerImage.src = "images/Scicross.png";
    }
    result();
}

function result() {
    if (youPick === "rock" && computerPick === "paper") {
        outputResult.innerText = "You Lose!";
        lose++;
    }
    else if (youPick === "paper" && computerPick === "scissor") {
        outputResult.innerText = "You Lose!";
        lose++;
    } 
    else if (youPick === "scissor" && computerPick === "rock") {
        outputResult.innerText = "You Lose!";
        lose++;
    } 
    else if (youPick === "rock" && computerPick === "scissor") {
        outputResult.innerText = "You Win!";
        win++;
    } 
    else if (youPick === "scissor" && computerPick === "paper") {
        outputResult.innerText = "You Win!";
        win++;
    } 
    else if (youPick === "paper" && computerPick === "rock") {
        outputResult.innerText = "You Win!";
        win++;
    } 
    else if (youPick === "paper" && computerPick === "paper") {
        outputResult.innerText = "Draw!";

    } 
    else if (youPick === "scissor" && computerPick === "scissor") {
        outputResult.innerText = "Draw!";
    }
    else if (youPick === "rock" && computerPick === "rock") {
        outputResult.innerText = "Draw!";
    } 
    else {
        outputResult.innerText = "Invalid input!";
    }
    point();
}

function point(){
    winScore.innerText = win;
    loseScore.innerText = lose;
}

function buttonReset(){
    winScore.innerText = "0";
    win = 0;
    loseScore.innerText = "0";
    lose = 0;
    outputResult.innerText = "";
    youImage.src = "images/unknow.png";
    computerImage.src = "images/unknow.png";
}