class Screen extends MovableObject {
    constructor(imagePath) {
        super().loadImage(imagePath);
        this.x = 200;
        this.y = 200;
        this.height = 200;
        this.width = 200;
    }
}