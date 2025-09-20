let humanAnswer, computerAnswer, text3;
let winPoint = 0, losePoint = 0, tiePoint = 0;

//human decision
function Rock() {
    humanAnswer = "Rock";
}
function Paper() {
    humanAnswer = "Paper";
}
function Scissors() {
    humanAnswer = "Scissors";
}

//computer decision
function Computer() {
    const randomNum = Math.floor(Math.random() * 3) + 1;

    if (randomNum === 1) {
        computerAnswer = "Rock";
    } else if (randomNum === 2) {
        computerAnswer = "Paper";
    } else if (randomNum === 3) {
        computerAnswer = "Scissors";
    }

}

//pass judgement
function Game() {
    if ((humanAnswer === 'Rock' && computerAnswer === 'Scissors') || (humanAnswer === 'Paper' && computerAnswer === 'Rock') || (humanAnswer === 'Scissors' && computerAnswer === 'Paper')) {
        text3 = "You win!";
        winPoint++;
    } else if (humanAnswer === computerAnswer) {
        text3 = "It's a tie!";
        tiePoint++;
    } else {
        text3 = "You lose!";
        losePoint++;
    }
}

// report in html
function announcement() {
    document.getElementById("text1").textContent = "You chose " + humanAnswer + " and the computer chose: " + computerAnswer + "! ..." + text3;

    globalThis.document.getElementById('text').textContent = 'Your points: ' + winPoint + ' Computer points: ' + losePoint + ' Tie points: ' + tiePoint;
}

