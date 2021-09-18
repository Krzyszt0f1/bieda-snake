class SnakeFood extends SnakeObject {

    constructor(x, y, exists) {
        super(x, y, exists);
        this.color = '#e7471d';
    };

    draw() {
        if(this.exists){
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y,  this.size, this.size);
        }
    };
    
}