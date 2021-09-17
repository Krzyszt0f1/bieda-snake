class SnakeHead extends SnakeObject {

    constructor(x, y, exists) {
        super(x, y, exists);
        this.color = '#4977ee';
        this.vel = 2.5;
        this.direction = 'right';
    };

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
    };

    checkBounds() {
        if((this.x + this.size) > width) {
            this.x = width - 2 * this.size;
            return false;
        }

        if((this.x - this.size) < 0) {
            this.x =  2 * this.size;
            return false;
        }

        if((this.y + this.size) > height) {
            this.y = height - 2 * this.size;
            return false;
        }

        if((this.y - this.size) < 0) {
            this.y = 2 * this.size;
            return false;
        } else {
            return true;
        }
    };
    
    updatePosition() {
        if (this.direction === 'left') {
            this.x -= this.vel;
        } else if (this.direction === 'right') {
            this.x += this.vel;
        } else if (this.direction === 'up') {
            this.y -= this.vel;
        } else if (this.direction === 'down') {
            this.y += this.vel;
        }
    };
    
    setControls() {
        let _this = this;
        window.onkeydown = function(e) {
            if (e.key === 'a') {
                _this.direction = 'left';
            } else if (e.key === 'd') {
                _this.direction = 'right';
            } else if (e.key === 'w') {
                _this.direction = 'up';
            } else if (e.key === 's') {
                _this.direction = 'down';
            }
        }
    };
}