class SnakeHead extends SnakeObject {

    constructor(x, y, exists) {
        super(x, y, exists);
        this.color = '#4977ee';
        this.xVel = 20;
        this.yVel = 0;
        this.changingDirection = false;
    };

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, 2 * this.size, 2 * this.size);
    };

    checkBounds() {
        if(this.x >= width) {
            return false;
        } else if (this.x < 0) {
            return false;
        } else if (this.y >= height) {
            return false;
        } else if (this.y < 0) {
            return false;
        } else {
            return true;
        }
    };
    
    setChangingDirection(bool) {
        this.changingDirection = bool;
    }
    
    updatePosition() {
        this.x +=this.xVel;
        this.y +=this.yVel;
    };
    
    setControls() {
        let _this = this;
        window.onkeydown = function(e) {
            if (_this.changingDirection) return;
            _this.changingDirection = true;
            const goingUp = _this.yVel === -20;
            const goingDown = _this.yVel === 20;
            const goingRight = _this.xVel === 20;
            const goingLeft = _this.xVel === -20;
            if (e.key === 'ArrowLeft' && !goingRight) {
                _this.xVel = -20;
                _this.yVel = 0;
            }
            if (e.key === 'ArrowUp' && !goingDown) {
                _this.xVel = 0;
                _this.yVel = -20;
            }
            if (e.key === 'ArrowRight' && !goingLeft) {
                _this.xVel = 20;
                _this.yVel = 0;
            }
            if (e.key === 'ArrowDown' && !goingUp) {
                _this.xVel = 0;
                _this.yVel = 20;
            }
        }
    };
}