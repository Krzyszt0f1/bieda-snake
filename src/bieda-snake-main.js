// canvas setup 

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = 425;
const height = canvas.height = 375;

// function to randomly generate food position on a map

function random() {
    const xNum =  Math.floor(Math.random() * 17) * 25 + 12.5;
    const yNum =  Math.floor(Math.random() * 15) * 25 + 12.5;
    return {
        xNum,
        yNum
    };
}


//trying to places a food piece on a map

const foodPosition = random();
const food = new SnakeFood(foodPosition.xNum, foodPosition.yNum, true);

// define SnakeHead

const snakeHead = new SnakeHead(212.5, 187.5, true);

snakeHead.setControls();

// define loop that keeps drawing the scene constantly

function loop() {
    // canvas checkered pattern

    for (let i = 0; i < 15; i++) {
        for (let j = 0; j < 17; j++) {
            if((j % 2 === 0 && i % 2 === 0) || (j % 2 === 1 && i % 2 === 1)) {
                ctx.fillStyle = '#aad751';
            } else {
                ctx.fillStyle = '#a2d149';
            }
            ctx.fillRect(j * 25, i * 25, 25, 25);
        }
    }
    

    // set the SnakeHead in motion

    food.draw();
    snakeHead.draw();
    snakeHead.checkBounds();
    snakeHead.updatePosition();

    requestAnimationFrame(loop);
}

loop();