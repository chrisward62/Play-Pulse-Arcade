const playBoard = document.querySelector(".play-board");
const scoreElement = document.querySelector(".score");
const highScoreElement = document.querySelector(".high-score");
const controls = document.querySelectorAll(".controls i");
const restartBtn = document.getElementById("restartBtn");  // Get reference to the button
let setIntervalId;

let gameOver, foodX, foodY, snakeX, snakeY, velocityX, velocityY, snakeBody, score, highScore;

// New function to initialize/reset game state
function initializeGame() {
    gameOver = false;
    foodX = foodY = 0; 
    snakeX = 5;
    snakeY = 5;
    velocityX = 0;
    velocityY = 0;
    snakeBody = [];
    score = 0;

    // Update the UI
    scoreElement.innerText = `Score: ${score}`;
    highScore = localStorage.getItem("high-score") || 0;
    highScoreElement.innerText = `High Score: ${highScore}`;

    // Set the food position
    updateFoodPosition();
    
    // Clear any existing intervals (if any) and start a new one
    if (setIntervalId) {
        clearInterval(setIntervalId);
    }
    setIntervalId = setInterval(initGame, 100);

    // Initially hide the restart button
    restartBtn.style.display = "none";
}

function updateFoodPosition() {
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
}

function handleGameOver() {
    clearInterval(setIntervalId);  // Stop the current game loop
    restartBtn.style.display = "block";  // Show the restart button when game is over
}

function changeDirection(e) {
    if(e.key === "ArrowUp" && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    } else if(e.key === "ArrowDown" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
    } else if(e.key === "ArrowLeft" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    } else if(e.key === "ArrowRight" && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
    }
}

controls.forEach(button => button.addEventListener("click", () => changeDirection({ key: button.dataset.key })));

function initGame() {
    if(gameOver) return handleGameOver();

    let html = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;
    if(snakeX === foodX && snakeY === foodY) {
        updateFoodPosition();
        snakeBody.push([foodY, foodX]);
        score++;
        highScore = score >= highScore ? score : highScore;
        localStorage.setItem("high-score", highScore);
        scoreElement.innerText = `Score: ${score}`;
        highScoreElement.innerText = `High Score: ${highScore}`;
    }

    snakeX += velocityX;
    snakeY += velocityY;

    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
    }
    snakeBody[0] = [snakeX, snakeY];

    if(snakeX <= 0 || snakeX > 37 || snakeY <= 0 || snakeY > 37) {
        return gameOver = true;
    }

    for (let i = 0; i < snakeBody.length; i++) {
        html += `<div class="head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;
        if (i !== 0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]) {
            gameOver = true;
        }
    }
    playBoard.innerHTML = html;
}

// When restart button is clicked, re-initialize the game
restartBtn.addEventListener("click", initializeGame);
document.addEventListener("keyup", changeDirection);
initializeGame();  // Initialize the game when the script loads


document.getElementById("restartBtn").addEventListener("click", initializeGame);
document.addEventListener("keyup", changeDirection);
initializeGame();
