class Character extends MovableObject {

    IDLE_IMAGES = [
        'img/redHat/Idle (1).png',
        'img/redHat/Idle (2).png',
        'img/redHat/Idle (3).png',
        'img/redHat/Idle (4).png',
        'img/redHat/Idle (5).png',
    ];

    DIE_IMAGES = [
        'img/redHat/Dead (1).png',
        'img/redHat/Dead (2).png',
        'img/redHat/Dead (3).png',
        'img/redHat/Dead (4).png',
        'img/redHat/Dead (5).png',
        'img/redHat/Dead (6).png',
        'img/redHat/Dead (7).png',
        'img/redHat/Dead (8).png',
        'img/redHat/Dead (9).png',
        'img/redHat/Dead (10).png',

    ];

    HURT_IMAGES = [
        'img/redHat/Hurt (1).png',
        'img/redHat/Hurt (2).png',
        'img/redHat/Hurt (3).png',
        'img/redHat/Hurt (4).png',
        'img/redHat/Hurt (5).png',
        'img/redHat/Hurt (6).png',
        'img/redHat/Hurt (7).png',
        'img/redHat/Hurt (8).png',
    ];

    RUN_IMAGES = [
        'img/redHat/Run (1).png',
        'img/redHat/Run (2).png',
        'img/redHat/Run (3).png',
        'img/redHat/Run (4).png',
        'img/redHat/Run (5).png',
        'img/redHat/Run (6).png',
        'img/redHat/Run (7).png',
        'img/redHat/Run (7).png',
        'img/redHat/Run (8).png',
        'img/redHat/Run (8).png',
    ];

    JUMP_IMAGES = [
        'img/redHat/Jump (1).png',
        'img/redHat/Jump (2).png',
        'img/redHat/Jump (3).png',
        'img/redHat/Jump (4).png',
        'img/redHat/Jump (5).png',
        'img/redHat/Jump (6).png',
        'img/redHat/Jump (7).png',
        'img/redHat/Jump (8).png',
        'img/redHat/Jump (9).png',
        'img/redHat/Jump (10).png',
        'img/redHat/Jump (11).png',
        'img/redHat/Jump (12).png',
    ];
    currentImage = 0;
    world;
    speed = 5;
    JUMPING_SOUND = new Audio('sounds/jump.mp3');

    

    constructor(path) {
        super().loadImage('img/redHat/Idle (1).png');
        this.loadImages(this.IDLE_IMAGES);
        this.loadImages(this.RUN_IMAGES);
        this.loadImages(this.JUMP_IMAGES);
        this.loadImages(this.HURT_IMAGES);
        this.loadImages(this.DIE_IMAGES);
        this.x = -230;
        this.y = 20;
        this.realX = this.x + 40;
        this.realY = this.y - 10;
        this.realHeight = 90;
        this.realWidth = 40;
        this.imgCompensation = 20;
        this.compensationX = 40;
        this.borderX = (50);
        this.borderY = this.height - 10;
        this.applyGravity();
        this.checkYKoordinate();
        this.animate();
    }

    /**
    * Calls functions to animate the character, depending on the keyboard.
    */
    animate() {
        this.checkKeyboard();
        this.chooseAnimationStatus();

        setInterval(() => {
            if(this.energie == 0) {
                this.playDeathAnimation();
            }
        }, 1000 / 10);
    }


    /**
     * Checks the keyboard at an interval of 1000 / 60 times per second.
     */
    checkKeyboard() {
        setInterval(() => {
            if (breakStatus === false) {
                this.conditionCheck();
                this.updateCamera();
            }
        }, 1000 / 60);
    }


    /**
     * Updates the camera so that it always moves with the character.
     */
    updateCamera() {
        this.world.camera_x = -this.x + 380;
    }


    /**
     * Checks conditions for moving and sets the direction of the character.
     */
    conditionCheck() {
        if(this.checkMovingRightConditions()) {
            this.otherDirection = false;
            this.moveRight();
        }
        if(this.checkMovingLeftConditions()) {
            this.otherDirection = true;
            this.moveLeft();
        }
        if(this.checkJumpingCondtions()) {
            this.jump();
        }
    }


    /**
    * Checks conditions for moving right.
    * @returns ???
    */
    checkMovingRightConditions() {
        return this.world.keyboard.RIGHT &&
        this.x < this.world.endpoint &&
        !this.stopMovingRight() && 
        !this.enemyCollison();
    }


    /**
    * Checks conditions for moving left.
    * @returns ???
    */
    checkMovingLeftConditions() {
        return this.world.keyboard.LEFT &&
        this.x > -300 &&
        !this.stopMovingLeft() &&
        !this.enemyCollison()
    }


    /**
    * Checks conditions for jumping.
    * @returns ???
    */
    checkJumpingCondtions() {
        return this.world.keyboard.JUMP &&
        this.isOnGround() &&
        this.energie > 0
    }


    /**
     * Calls the animationcheck at an interval of 1000 / 25 times per second.
     */
    chooseAnimationStatus() {
        setInterval(() => {
            if (breakStatus === false) {
                this.checkAnimationConditions();
            }
        }, 1000 / 25);
    }


    /**
     * Checks conditions for animating the character.
     */
    checkAnimationConditions() {
        if(this.energie > 0 && !this.isOnGround()) {
            this.playAnimation(this.JUMP_IMAGES);
        } else if (this.checkRunAnimationConditions()) {
            this.playAnimation(this.RUN_IMAGES);
        } else if(this.energie > 0) {
            this.playAnimation(this.IDLE_IMAGES);
        } 
    }


    /**
     * Checks conditions for the run animation.
     * @returns ???
     */
    checkRunAnimationConditions() {
        return this.energie > 0 &&
        this.world.keyboard.RIGHT ||
        this.energie > 0 &&
        this.world.keyboard.LEFT
    }
}