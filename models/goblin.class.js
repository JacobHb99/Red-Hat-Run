class Goblin extends MovableObject {
    WALKING_IMAGES = [];
    IDLE_IMAGES = [];
    ATTACK_IMAGES = [];
    DIE_IMAGES = [];
    HURT_IMAGES = [];
    RUN_IMAGES = [];
    JUMP_IMAGES = [];
    currentImage = 0;

    
    constructor(path) {
        super().loadImage('img/enemies/Goblin/PNG/PNG Sequences/Idle/0_Goblin_Idle_000.png');
        this.x = 300 + Math.random() * 600;
        this.y = 150 + Math.random() * 200;
        this.height = 100;
        this.width = 120;
    }
}