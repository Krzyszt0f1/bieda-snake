// canvas setup 

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = 340;
const height = canvas.height = 300;

// score setup
let foodScore = -1;
function updateScore() {
    foodScore++;
    const score = document.querySelector('#score');
    score.textContent= '🍎 : ' + foodScore;
}

updateScore();

// high score setup

let highScore = loadHighScore();
const score = document.querySelector('#high-score');
score.textContent= '🏆 : ' + (highScore !== undefined ? highScore : '0');

// define Snake

const snake = new Snake(true);

snake.setControls();

// initialise snake unoccupied spaces

let freeSpaces = [];
for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 17; j++) {
        freeSpaces.push({x: j * 20, y: i * 20});
    }
}

function updateFreeSpace() {
    snake.body.forEach((piece) => {
        freeSpaces = freeSpaces.filter( coordinate => !(coordinate.x === piece.x && coordinate.y === piece.y))
    })
}

updateFreeSpace();

// function to randomly generate food position on a map

function randomFoodPosition() {
    return freeSpaces[Math.floor(Math.random() * freeSpaces.length)];
}

//initialises food

function spanFood() {
    updateFreeSpace();
    return randomFoodPosition();
}

const foodPosition = spanFood();

const food = new SnakeFood(foodPosition.x, foodPosition.y, true);

// define loop that keeps drawing the scene constantly

function loop() {
    // canvas checkered pattern
    snake.setChangingDirection(false);
    setTimeout(function onTick() {
        for (let i = 0; i < 15; i++) {
            for (let j = 0; j < 17; j++) {
                if((j % 2 === 0 && i % 2 === 0) || (j % 2 === 1 && i % 2 === 1)) {
                    ctx.fillStyle = '#aad751';
                } else {
                    ctx.fillStyle = '#a2d149';
                }
                ctx.fillRect(j * 20, i * 20, 20, 20);
            }
        }


        // set the Snake in motion

        if(!food.exists) {
            updateScore();
            food.resurrectFood();
            const newFoodPosition = spanFood();
            food.resetPosition(newFoodPosition.x, newFoodPosition.y);
        }

        food.draw();
        snake.draw();
        snake.foodCollisionDetect();
        if(snake.checkBounds() && snake.selfCollisionDetect()){
            snake.updateBodyPosition();
            loop();
        } else {
            saveHighScore(foodScore);
        }
    }, 150)
}

loop();

// script re-run 

function reRun() {
    window.location.reload();
}