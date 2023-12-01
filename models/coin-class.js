class Coin extends MovableObject {

    COIN_IMAGES = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png',
    ]
    
    currentImage = 0;

    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = y;
        this.realX = x + 30;
        this.realY = y + 30;
        this.realHeight = 40;
        this.realWidth = 40;
        this.height = 100;
        this.width = 100;
        this.loadImages(this.COIN_IMAGES);
        this.animate();

    }


    /**
    * Calls functions to animate the coin.
    */
    animate() {
            setInterval(() => {
                if (breakStatus === false) {
                    this.playAnimation(this.COIN_IMAGES);
                }
            }, 1000 / 1);
    }
}