class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    currentDirection;
    speedY = 0;
    acceleration = 1;
    energie = 1;
    imgCompensation;
    compensationX;
    blocksAround = [];
    higherBlocks = [];
    currentSector;



    /**
     * Loads the images of the array and plays them again and again.
     * @param {Array} imgArr - Array with a set of images from a movement.
     */
    playAnimation(imgArr) {
        let i = this.currentImage % imgArr.length;
        let path = imgArr[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    /**
     * It plays the hurt animation before the death animation comes after a timeout.
     */
    playDeathAnimation() {
        this.playAnimation(this.HURT_IMAGES);
    
        setTimeout(() => {
            this.playAnimation(this.DIE_IMAGES);
        }, 500);
    }


    /** 
     * Increases the value of the x coordinate of the moving object, so the charcter is moving to the right.
     */
    moveRight() {
        this.x += this.speed;
        this.realX += this.speed;
        this.otherDirection = false;
    }


    /** 
     * Reduces the value of the x coordinate of the moving object, so the charcter is moving to the left.
     */
    moveLeft() {
        this.x -= this.speed;
        this.realX -= this.speed;
        this.otherDirection = true;
    }


    /** 
     * Increases the value of speedY, so the character is moving to the top. The spring sound is also played.
     */
    jump() {
        this.speedY = 15;
        if(sound == true) {
            this.JUMPING_SOUND.play();
        }
    }


    /** 
     * Reduces the energy value of the moving object.
     */
    hit() {
        if(this.energie > 0) {
            this.energie -= 1;
        }
    }

    
    /** 
     * Activates gravity for objects that are above the ground.
     */
    applyGravity() {
            setInterval(() => {
                if (breakStatus === false) {
                    if (!this.isOnGround() || this.speedY > 0) {
                        this.y -= this.speedY;
                        this.realY -= this.speedY;
                        this.speedY -= this.acceleration;
                    }
                }
            }, 1000 / 50); 
        
    }


    /** 
     * Checks whether the moving object collides with the ground.
     * @returns true or false.
     */
    isOnGround() {
        this.blocksAround = gameSectors.filter((block) => block.x <= this.realX + 120 && block.x >= this.realX - 120);
        return this.blocksAround.some(block => this.isColliding(block));
    }


    /**
     * Checks whether the moving object is jumping on top of the enemy.
     * @returns true or false.
     */
    isAboveEnemy() {
        return this.world.level.enemies.some(enemy => this.isJumpingOnEnemy(enemy));
    }


    /**
     * Calls function to check whether charcter collides with current block.
     * @param {object} block - current block.
     */
    checkSector(block) {
        this.collidingSector(block);
    }


    /** 
     * Checks whether the moving object collides with a ground block during moving right. 
     */
    stopMovingRight() {
        return gameSectors.some(sectors => this.sectorDetectionRight(sectors));
    }


    /** 
     * Checks whether the moving object collides with a ground block during moving left.
     */
    stopMovingLeft() {
        return gameSectors.some(sectors => this.sectorDetectionLeft(sectors));
    }


    /** 
     * Checks whether the moving object collides with an enemy during moving. 
     */
    enemyCollison() {
        return world.level.enemies.some(enemy => this.isColliding(enemy))
    }


    /**
     * Checks whether the character has sunk into the ground. 
     */
    checkYKoordinate() {
        if (breakStatus === false) {
            setInterval(() => {
                if (this.isOnGround() && this.realY + this.realHeight > currentObj.y) {
                    this.resetYKoorinate();
                }
            }, 1000 / 50); 
        }
    }
    

    /**
     * Sets the character to the height of the block he collides with.
     */
    resetYKoorinate() {
        if(this.checkResetConditions()) {
            this.realY = currentObj.y - this.realHeight;
            this.y = currentObj.y - this.realHeight;
        } 
    }


    /**
     * Calls function to check whether charcter collides with current block, depending on the direction.
     * @param {object} obj - current Block.
     * @returns true or false.
     */
    collidingSector(obj) {
            if(this.otherDirection == true) {
                return this.sectorDetectionLeft(obj);
            }
            if(this.otherDirection == false) {
                return  this.sectorDetectionRight(obj);
            }
    }


    /**
     * Returns, whether the moving Object colliedes with an object.
     * @param {Object} obj - The object that is checked for collision with the moving object.
     * @returns true or false.
     */
    isColliding (obj) {
        return  this.isCollidingWithGround(obj);
    }


    /**
     * Returns, whether the moving Object is jumping on top of an enemy.
     * @param {Object} obj - The object that is checked for collision with the moving object.
     * @returns true or false.
     */
    isJumpingOnEnemy(obj) {
        return this.isOnEnemy(obj);
    }


    /**
     * Compares the coordinates of the moving object with those of the enemy. If they collide, it returns true.
     * @param {Object} obj - The object that is checked for collision with the moving object.
     * @returns 
     */
    isOnEnemy(obj) {
        currentEnemy = obj;
        return  (this.realX + this.realWidth) >= obj.jumpAreaX && 
        this.realX  < (obj.jumpAreaX + obj.jumpAreaWidth)&&
        (this.realX) <  obj.jumpAreaX + obj.jumpAreaWidth  && 
        this.realX < (obj.jumpAreaX + obj.jumpAreaWidth) && 
        (this.realY + this.realHeight) >= obj.jumpAreaY && 
        this.realY <= (obj.jumpAreaY + obj.jumpAreaHeight)&&
        this.realY + this.realHeight < obj.realY &&
        this.speedY < 0;
    }


    /*
     * Compares the coordinates of the moving object with those of the current block. If they collide, it returns true.
     * @param {*} obj - The object that is checked for collision with the moving object.
     * @returns true or false.
     */
    isCollidingWithGround(obj) {
        currentObj = obj;
        return  (this.realX + this.realWidth) >= obj.realX && 
        this.realX < (obj.realX + obj.realWidth) &&
        (this.realX) <  obj.realX + obj.realWidth  && 
        this.realX < (obj.realX + obj.realWidth) && 
        (this.realY + this.realHeight) >= obj.realY && 
        this.realY <= (obj.realY + obj.realHeight);
    }


    /**
     * Checks whether the moving Object colliedes with an object during moving right. If they collide, it returns true.
     * @param {*} obj - The object that is checked for collision with the moving object.
     * @returns ???
     */
    collidingCheckRight(obj) {
        if (this.otherDirection == false && obj.currentDirection == 'right' && obj.y < this.realY + this.realHeight) {
            return  this.realX + this.realWidth >= obj.x - 5 && 
                    this.realY + this.realHeight - 2 >= obj.y  &&
                    this.realX + this.realWidth < obj.x + obj.width;
        }
    }

    
    /**
     * Checks whether the moving Object colliedes with an object during moving left. If they collide, it returns true.
     * @param {*} obj - The object that is checked for collision with the moving object.
     * @returns ???
     */
    collidingCheckLeft(obj) {
        if(this.otherDirection == true && obj.currentDirection == 'left') {
            return  this.realX <= obj.x + obj.width + 5 && 
                    this.realY + this.realHeight - 2 >= obj.y  &&
                    this.realX > obj.x;
        }
    }


    /**
     * Checks collisions with each block and regulates which block the y-coordinate is passed on to the character.
     * @returns false or true.
     */
        checkResetConditions() {
            return this.otherDirection == false &&
                   this.realX + this.realWidth >= currentObj.x ||
                   this.otherDirection == true &&
                   this.realX <= currentObj.x + currentObj.realWidth;
        }
        
    
        /**
         * Checks coordinates for collision with current block, while walking right.
         * @param {object} obj - current block.
         * @returns true or false.
         */
        sectorDetectionRight(obj) {
            return (this.realX + this.realWidth) >= obj.realX - 5 &&
                    this.realY + this.realHeight - 2 >= obj.y  &&
                    this.realX + this.realWidth < obj.realX + obj.realWidth;
        }
    
    
        /**
         * Checks coordinates for collision with current block, while walking left.
         * @param {object} obj - current block.
         * @returns true or false.
         */
        sectorDetectionLeft(obj) {
            return this.realX < obj.realX + obj.realWidth + 5 && 
                   this.realY + this.realHeight - 2 >= obj.y  &&
                   this.realX > obj.realX;
        }
}