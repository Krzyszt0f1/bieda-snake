class Snake extends SnakeObject {

    constructor(exists) {
        super(exists);
        this.x = 160;
        this.y = 140;
        this.color = '#4977ee';
        this.xVel = 20;
        this.yVel = 0;
        this.changingDirection = false;
        this.body = [
            {
                x: 160,
                y: 140
            },
            {
                x: 140,
                y: 140
            },
            {
                x: 120,
                y: 140
            }
        ];
    };

    draw() {
        this.body.forEach( (piece) => {
            ctx.fillStyle = this.color;
            ctx.strokestyle = this.outlineColor;
            ctx.fillRect(piece.x, piece.y, this.size, this.size);
            ctx.strokeRect(piece.x, piece.y,  this.size, this.size);
        })
    };
    
    setChangingDirection(bool) {
        this.changingDirection = bool;
    }
    
    updateHeadPosition() {
        this.x +=this.xVel;
        this.y +=this.yVel;
    };
    
    updateBodyPosition() {
        const updatedBodyPart = {
            x: this.body[0].x +this.xVel,
            y: this.body[0].y +this.yVel,
        };
        this.body.unshift(updatedBodyPart);
        this.body.pop();
    }
    
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

    foodCollisionDetect() {
            if(food.exists) {
                if (this.y === food.y && this.x === food.x) {
                    food.exists = false;
                    this.grow();
                    console.log('The snake is ' + this.body.length + ' pieces long.');
                }
            }
    };
    
    selfCollisionDetect() {
        const tail = this.body.slice(1);
        tail.forEach((piece) => {
            return this.y === piece.y && this.x === piece.x;
        })
    };

    checkBounds() {
        if (this.selfCollisionDetect()) {
            return false;
        }else if (this.x >= width) {
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
    
    grow() {
        const newBodyPiece = {
            x: this.body[this.body.length -1].x +this.xVel,
            y: this.body[this.body.length -1].y +this.yVel,
        }
        this.body.push(newBodyPiece);
    }
}