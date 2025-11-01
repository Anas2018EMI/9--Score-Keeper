const p1 = {
    score: 0,
    button: document.getElementById("p1Button"),
    display: document.getElementById("p1Score")
}

const p2 = {
    score: 0,
    button: document.getElementById("p2Button"),
    display: document.getElementById("p2Score")
}

const reset = document.getElementById("reset");
const treshold = document.getElementById("playto");

let score1 = 0;
let score2 = 0;
let winningScore = parseInt(treshold.value);
let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score++;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add("has-text-success");
            opponent.display.classList.add("has-text-danger");
            player.button.disabled = true;
            opponent.button.disabled = true;

        }
        player.display.innerText = player.score;
    }
}

function resetGame() {
    isGameOver = false;
    p1.score = 0;
    p2.score = 0;
    p1.display.innerText = "0";
    p2.display.innerText = "0";
    p1.display.classList.remove("has-text-success", "has-text-danger");
    p2.display.classList.remove("has-text-success", "has-text-danger");
    p1.button.disabled = false;
    p2.button.disabled = false;
}

p1.button.addEventListener("click", (event) => {
    updateScores(p1, p2);
});

p2.button.addEventListener("click", (event) => {
    updateScores(p2, p1);
});

reset.onclick = resetGame

treshold.onchange = function (event) {
    winningScore = parseInt(this.value);
    resetGame();
}