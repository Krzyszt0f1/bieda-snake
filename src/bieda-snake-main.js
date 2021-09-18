// canvas setup 

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = 340;
const height = canvas.height = 300;

// function to randomly generate food position on a map

function random() {
    const xNum =  Math.floor(Math.random() * 17) * 20;
    const yNum =  Math.floor(Math.random() * 15) * 20;
    return {
        xNum,
        yNum
    };
}

// define SnakeHead

const snakeHead = new SnakeHead(160, 140, true);

snakeHead.setControls();

//initialises food

function spanFood() {
    let foodPosition = random();
    while (foodPosition.xNum === snakeHead.x || foodPosition.yNum === snakeHead.y ) {
        foodPosition = random();
    }
    return {x: foodPosition.xNum, y: foodPosition.yNum};
}

const foodPosition = spanFood();

const food = new SnakeFood(foodPosition.x, foodPosition.y, true);

// define loop that keeps drawing the scene constantly

function loop() {
    // canvas checkered pattern
    snakeHead.setChangingDirection(false);
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


        // set the SnakeHead in motion

        if(!food.exists) {
            console.log('eaten');
            food.resurrectFood();
            const newFoodPosition = spanFood();
            food.resetPosition(newFoodPosition.x, newFoodPosition.y);
        }

        food.draw();
        snakeHead.draw();
        snakeHead.collisionDetect();
        if(snakeHead.checkBounds()){
            snakeHead.updatePosition();
            loop();
        }
    }, 200)
}

loop();