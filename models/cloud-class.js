class Cloud extends MovableObject {
    y = 50;
    width = 500;
    height = 250;


    constructor()  {
        super().loadImage('./img/4_clouds/1.png');

        this.x = Math.random() * 500; //Number between 200 and 700
    }
}