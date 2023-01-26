const currPlayerOne = document.querySelector(".currPlayerOne");
const currPlayerTwo = document.querySelector(".currPlayerTwo");

const scorePlayerOne = document.querySelector(".scorePlayerOne");
const scorePlayerTwo = document.querySelector(".scorePlayerTwo");

const diceOneImg = document.querySelector("#diceOne");
const diceTwoImg = document.querySelector("#diceTwo");

const rollDice = document.querySelector("#rollDice");
const hold = document.querySelector("#hold");
const newGame = document.querySelector("#newGame");

var resDiceOne = 0;
var resDiceTwo = 0;
var flag = 1;
scorePlayerOne.innerHTML = 0;
scorePlayerTwo.innerHTML = 0;

newGame.addEventListener("click", () => {
    document.location.href = "./start.html";
});



rollDice.addEventListener("click", () => {
    resDiceOne = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    diceOneImg.src = `./Dice_Game_Starter-main/dice-${resDiceOne}.png`

    resDiceTwo = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    diceTwoImg.src = `./Dice_Game_Starter-main/dice-${resDiceTwo}.png`

    if (flag) {
        addScorePlayerOne();
    }
    else {
        addScorePlayerTwo()
    }



});

hold.addEventListener("click", () => {

    debugger;
    if (flag) {
        debugger
        let sum = Number(currPlayerOne.innerHTML);
        sum += Number(scorePlayerOne.innerHTML);
        currPlayerOne.innerHTML = sum;

        if (Number(scorePlayerOne.innerHTML) != 0) {
            if (Number(currPlayerOne.innerHTML) > Number(sessionStorage.getItem("st"))) {
                rollDice.disabled = true;
                hold.disabled = true;
                alert("player Two win");
            }
            else if (Number(currPlayerOne.innerHTML) == Number(sessionStorage.getItem("st"))) {
                rollDice.disabled = true;
                hold.disabled = true;
                alert("player one win");
            }
            scorePlayerOne.innerHTML = 0;

            flag = !flag;

        }
        else {
            alert("can't hold Please Play");
        }



    }
    else {
        let sum = Number(currPlayerTwo.innerHTML);
        sum += Number(scorePlayerTwo.innerHTML);
        currPlayerTwo.innerHTML = sum;
        if (Number(currPlayerTwo.innerHTML) != 0) {
            if (Number(scorePlayerTwo.innerHTML) > Number(sessionStorage.getItem("st"))) {
                rollDice.disabled = true;
                hold.disabled = true;
                alert("player One win");
            }
            else if (Number(currPlayerTwo.innerHTML) == Number(sessionStorage.getItem("st"))) {
                rollDice.disabled = true;
                hold.disabled = true;
                alert("player Two win");
            }
            scorePlayerTwo.innerHTML = 0;

            flag = !flag;

        }
        else {
            alert("can't hold Please Play");
        }

    }
});


function addScorePlayerOne() {
    if (resDiceOne == 6 && resDiceTwo == 6) {
        scorePlayerOne.innerHTML = 0;
        currPlayerOne.innerHTML = 0;
    }
    else {
        debugger;
        let sum = Number(scorePlayerOne.innerHTML);
        sum += resDiceOne + resDiceTwo;
        scorePlayerOne.innerHTML = sum;
    }
}

function addScorePlayerTwo() {
    if (resDiceOne == 6 && resDiceTwo == 6) {
        scorePlayerTwo.innerHTML = 0;
        currPlayerTwo.innerHTML = 0;
    }
    else {
        let sum = Number(scorePlayerTwo.innerHTML);
        sum += resDiceOne + resDiceTwo;
        scorePlayerTwo.innerHTML = sum;
    }
}