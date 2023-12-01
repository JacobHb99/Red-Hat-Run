class StatusBar extends DrawableObject {
    COIN_STATUS_IMAGES = [
        'img/statusBar/0.png',
        'img/statusBar/20.png',
        'img/statusBar/40.png',
        'img/statusBar/60.png',
        'img/statusBar/80.png',
        'img/statusBar/100.png',
    ];
    percentage = 0;


    constructor() {
        super();
        this.loadImages(this.COIN_STATUS_IMAGES);
        this.setPercentage(0);
        this.x = 10;
        this.y = 5;
        this.height = 70;
        this.width = 220;
    }

    
    /**
     * Updates the filling level of the statusbar.
     * @param {number} percentage - filling level in percent.
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.COIN_STATUS_IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }


    /**
     * Updates the status bar image, depending on the percentage.
     * @returns ???
     */
    resolveImageIndex() {
        if(this.percentage == 100) {
            return 5;
        } else if(this.percentage >= 80) {
            return 4;
        } else if(this.percentage >= 60) {
            return 3;
        } else if(this.percentage >= 40) {
            return 2;
        } else if(this.percentage >= 20) {
            return 1;
        } else {
            return 0;
        }
    }
}