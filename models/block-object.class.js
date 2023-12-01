class Blocks extends MovableObject {

    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 60;
        this.realX = x;
        this.realY = y;
        this.realHeight = this.height;
        this.realWidth = this.width;
        this.sectorX = x;
        this.sectorY = 0;
        this.sectorHighestPoint = 
        this.sectorHeight = 480;
        this.sectorWidth = this.height;
    }
}