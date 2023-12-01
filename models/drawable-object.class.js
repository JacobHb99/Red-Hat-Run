class DrawableObject {
    img;
    imageCache = [];
    x;
    y;
    height = 100;
    width = 100;
    borderX;
    borderY;

    
    /**
     * Loads an image into the world.
     * @param {string} path - path of the current image.
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * Loads an array with images as objects.
     * @param {Array} arr - current Array.
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });

    }

    /**
     * Draws the current picture on the map.
     * @param {*} ctx - canvas.???
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }


    /**
     * Draws borders arround Objects.
     * @param {*} ctx - canvas.???
     */
    drawBorders(ctx) {
       /* 
        if (this instanceof Blocks) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'red';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }

        if (this instanceof Orc) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'green';
            ctx.rect(this.jumpAreaX, this.jumpAreaY, this.jumpAreaWidth, this.jumpAreaHeight);
            ctx.stroke();
        }
         
        if(this instanceof Coin || this instanceof Orc || this instanceof Character) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.realX, this.realY, this.realWidth, this.realHeight);
            ctx.stroke();
        }
        */
    }

    
}