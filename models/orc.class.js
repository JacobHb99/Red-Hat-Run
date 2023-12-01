class Orc extends MovableObject {
    WALKING_IMAGES = [
        'img/enemies/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_000.png',
        'img/enemies/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_001.png',
        'img/enemies/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_002.png',
        'img/enemies/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_003.png',
        'img/enemies/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_004.png',
        'img/enemies/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_005.png',
        'img/enemies/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_006.png',
        'img/enemies/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_007.png',
        'img/enemies/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_008.png',
        'img/enemies/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_009.png',
        'img/enemies/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_010.png',
        'img/enemies/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_011.png',
        'img/enemies/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_012.png',
        'img/enemies/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_013.png',
        'img/enemies/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_014.png',
        'img/enemies/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_015.png',
        'img/enemies/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_016.png',
        'img/enemies/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_017.png',
        'img/enemies/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_018.png',
        'img/enemies/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_019.png',
        'img/enemies/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_020.png',
        'img/enemies/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_021.png',
        'img/enemies/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_022.png',
        'img/enemies/Orc/PNG/PNG Sequences/Walking/0_Orc_Walking_023.png',
    ];

    HURT_IMAGES = [
        'img/enemies/Orc/PNG/PNG Sequences/Hurt/0_Orc_Hurt_000.png',
        'img/enemies/Orc/PNG/PNG Sequences/Hurt/0_Orc_Hurt_001.png',
        'img/enemies/Orc/PNG/PNG Sequences/Hurt/0_Orc_Hurt_002.png',
        'img/enemies/Orc/PNG/PNG Sequences/Hurt/0_Orc_Hurt_003.png',
        'img/enemies/Orc/PNG/PNG Sequences/Hurt/0_Orc_Hurt_004.png',
        'img/enemies/Orc/PNG/PNG Sequences/Hurt/0_Orc_Hurt_005.png',
        'img/enemies/Orc/PNG/PNG Sequences/Hurt/0_Orc_Hurt_006.png',
        'img/enemies/Orc/PNG/PNG Sequences/Hurt/0_Orc_Hurt_007.png',
        'img/enemies/Orc/PNG/PNG Sequences/Hurt/0_Orc_Hurt_008.png',
        'img/enemies/Orc/PNG/PNG Sequences/Hurt/0_Orc_Hurt_009.png',
        'img/enemies/Orc/PNG/PNG Sequences/Hurt/0_Orc_Hurt_010.png',
        'img/enemies/Orc/PNG/PNG Sequences/Hurt/0_Orc_Hurt_011.png',
    ];


    ATTACK_IMAGES = [
        'img/enemies/Orc/PNG/PNG Sequences/Slashing/0_Orc_Slashing_000.png',
        'img/enemies/Orc/PNG/PNG Sequences/Slashing/0_Orc_Slashing_001.png',
        'img/enemies/Orc/PNG/PNG Sequences/Slashing/0_Orc_Slashing_002.png',
        'img/enemies/Orc/PNG/PNG Sequences/Slashing/0_Orc_Slashing_003.png',
        'img/enemies/Orc/PNG/PNG Sequences/Slashing/0_Orc_Slashing_004.png',
        'img/enemies/Orc/PNG/PNG Sequences/Slashing/0_Orc_Slashing_005.png',
        'img/enemies/Orc/PNG/PNG Sequences/Slashing/0_Orc_Slashing_006.png',
        'img/enemies/Orc/PNG/PNG Sequences/Slashing/0_Orc_Slashing_007.png',
        'img/enemies/Orc/PNG/PNG Sequences/Slashing/0_Orc_Slashing_008.png',
        'img/enemies/Orc/PNG/PNG Sequences/Slashing/0_Orc_Slashing_009.png',
        'img/enemies/Orc/PNG/PNG Sequences/Slashing/0_Orc_Slashing_010.png',
        'img/enemies/Orc/PNG/PNG Sequences/Slashing/0_Orc_Slashing_011.png',

    ];

    IDLE_IMAGES = [];
    RUN_IMAGES = [];
    JUMP_IMAGES = [];
    currentImage = 0;
    endPoint;

    constructor(x, y, endPoint) {
        super().loadImage('img/enemies/Orc/PNG/PNG Sequences/Idle/0_Orc_Idle_000.png');
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 60;
        this.realX = x + 15;
        this.realY = y + 20;
        this.realHeight = 40;
        this.realWidth = 30;
        this.jumpAreaX = this.realX;
        this.jumpAreaY = y;
        this.jumpAreaWidth = this.realWidth;
        this.jumpAreaHeight = this.realHeight + 30;
        this.imgCompensation = 0;
        this.compensationX = 15;
        this.endPoint = endPoint;
        this.startPoint = x;
        this.speed = 2;
        this.currentDirection = 'left';

        this.loadImages(this.WALKING_IMAGES);
        this.loadImages(this.HURT_IMAGES);
        this.loadImages(this.ATTACK_IMAGES);
        this.animate();
        this.checkCurrentDirection();
    }


    /**
     * Calls functions to animate the orc.
     */
    animate() {
        setInterval(() => {
            if(enemyAttacks == true && breakStatus == false) {
                this.playAnimation(this.ATTACK_IMAGES);
            } else if (breakStatus == false && this.energie > 0 && enemyAttacks == false) {
                this.playAnimation(this.WALKING_IMAGES);
            } else if(breakStatus == false && this.energie < 1 && enemyAttacks == false) {
                this.playAnimation(this.HURT_IMAGES);
            } 
        }, 1000 / 60);

    }


    /**
     * Checks moving conditions.
     */
    checkCurrentDirection() {
        setInterval(() => {
            if (breakStatus == false) {
                if(this.currentDirection == 'left' && this.energie > 0 && enemyAttacks == false) {
                    this.moveLeft();
                    this.changeDirection();
                } else if(this.currentDirection == 'right' && this.energie > 0 && enemyAttacks == false) {
                    this.moveRight();
                    this.changeDirection();
                }
            }
        }, 1000 / 50);
    }


    /**
     * Changes the current movinng direction.
     */
    changeDirection() {
        if(this.x == this.endPoint || this.x < this.endPoint) {
            this.currentDirection = 'right';
        }

        if(this.x == this.startPoint || this.x > this.startPoint) {
            this.currentDirection = 'left';
        }
    }


    moveLeft() {
        super.moveLeft();
        this.jumpAreaX -= this.speed;
    }


    moveRight() {
        super.moveRight();
        this.jumpAreaX += this.speed;
    }
}