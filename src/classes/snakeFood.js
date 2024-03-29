class SnakeFood extends SnakeObject {

    constructor(x, y, exists) {
        super(x, y, exists);
        this.color = '#e7471d';
    };

    draw() {
        if(this.exists){
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.strokestyle = this.outlineColor;
            ctx.fillRect(this.x, this.y,  this.size, this.size);
            ctx.strokeRect(this.x, this.y,  this.size, this.size);
        }
    };

    resurrectFood() {
        this.exists = true;
    };
    
    resetPosition(x, y) {
        this.x = x;
        this.y = y;
    };
    
}