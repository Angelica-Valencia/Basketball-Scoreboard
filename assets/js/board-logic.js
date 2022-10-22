/**
 * Basketball Scoreboard app
 */

let clock = document.getElementById("timer-clock");
let [min, sec, milsec] = [1, 0, 0];
let timeLabel = document.getElementById('game-label')
let controlBtn = document.getElementById('control-btn')

let add1BtnHome = document.getElementById('add1-home');
let add2BtnHome = document.getElementById('add2-home');
let add3BtnHome = document.getElementById('add3-home');
let boardHome = document.getElementById('home-board');

let add1BtnGuest = document.getElementById('add1-guest');
let add2BtnGuest = document.getElementById('add2-guest');
let add3BtnGuest = document.getElementById('add3-guest');
let boardGuest = document.getElementById('guest-board');

let scoreHome = 0;
let scoreGuest = 0;
timeLabel.innerHTML = 'First Half'

let game = {firstHalf : true, secondHalf: false};
var gameInterval;

let m = min < 10 ? "0" + min : min;
let s = sec < 10 ? "0" + sec : sec;
let ms = milsec < 10 ? "00" + milsec : milsec < 100 ? "0" + milsec : milsec;

boardHome.innerHTML = scoreHome.toString();
boardGuest.innerHTML = scoreGuest.toString();
clock.innerText = ` ${m} : ${s} : ${ms}`;



controlBtn.addEventListener('click', function (){
    [min, sec, milsec] = [0, 59, 999];
    runTimer();
    gameInterval = setInterval(runTimer, 10);

})

function runTimer(){

    milsec -= 10;
    if(milsec < 10){
        milsec = 999;
        sec -= 1;

        if(sec < 0){
            sec = 59;
            min -= 1;
        }
    }


    if (min < 0 & game.secondHalf == false){
        milsec = 0;
        sec = 0;
        min = 1;
        game.secondHalf = true;
        timeLabel.innerHTML = 'Second Half'
        controlBtn.innerHTML = "Start 2d Half"
        gameOver();
    }

    if (game.firstHalf & game.secondHalf & min < 0){
        milsec = 0;
        sec = 0;
        min = 0;
        controlBtn.innerHTML = "Start Game"
        game.secondHalf = false
        timeLabel.innerHTML = "First Half"
        gameOver();
    }

    m = min < 10 ? "0" + min : min;
    s = sec < 10 ? "0" + sec : sec;
    ms = milsec < 10 ? "00" + milsec : milsec < 100 ? "0" + milsec : milsec;
    clock.innerHTML = ` ${m} : ${s} : ${ms}`;

}

function gameOver(){
    clearInterval(gameInterval)
}

function leader(){
    if (scoreHome > scoreGuest){
        boardHome.style.color = "#FFD166";
        boardGuest.style.color = "white";
    }
    else if (scoreHome < scoreGuest){
        boardHome.style.color = "white";
        boardGuest.style.color = "#FFD166";
    }
    else{
        boardHome.style.color = "white";
        boardGuest.style.color = "white";
    }
}

add1BtnHome.addEventListener('click', function (){
    scoreHome++;
    boardHome.innerHTML = scoreHome.toString();
    leader();
})

add1BtnGuest.addEventListener('click', function (){
    scoreGuest++;
    boardGuest.innerHTML = scoreGuest.toString();
    leader();
})

add2BtnHome.addEventListener('click', function (){
    scoreHome+= 2;
    boardHome.innerHTML = scoreHome.toString();
    leader();
})

add2BtnGuest.addEventListener('click', function (){
    scoreGuest+= 2;
    boardGuest.innerHTML = scoreGuest.toString();
    leader();
})

add3BtnHome.addEventListener('click', function (){
    scoreHome+= 3;
    boardHome.innerHTML = scoreHome.toString();
    leader();
})

add3BtnGuest.addEventListener('click', function (){
    scoreGuest+= 3;
    boardGuest.innerHTML = scoreGuest.toString();
    leader();
})