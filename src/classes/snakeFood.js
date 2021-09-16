class SnakeFood extends SnakeObject {

    constructor(x, y, exists) {
        super(x, y, exists);
        this.color = '#e7471d';
    };

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
    };
    
}