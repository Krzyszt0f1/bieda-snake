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


//trying to places a food piece on a map

const foodPosition = random();
const food = new SnakeFood(foodPosition.xNum, foodPosition.yNum, true);

// define SnakeHead

const snakeHead = new SnakeHead(160, 140, true);

snakeHead.setControls();

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