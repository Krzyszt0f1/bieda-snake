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

const snake = new Snake(true);

snake.setControls();

//initialises food

function spanFood() {
    let foodPosition = random();
    while (foodPosition.xNum === snake.x || foodPosition.yNum === snake.y ) {
        console.log('had to re-span the food');
        foodPosition = random();
    }
    return {x: foodPosition.xNum, y: foodPosition.yNum};
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
            console.log('eaten');
            food.resurrectFood();
            const newFoodPosition = spanFood();
            food.resetPosition(newFoodPosition.x, newFoodPosition.y);
        }

        food.draw();
        snake.draw();
        snake.foodCollisionDetect();
        if(snake.checkBounds()){
            snake.updateHeadPosition();
            snake.updateBodyPosition();
            loop();
        }
    }, 150)
}

loop();