class World {
    character = new Character();
    level = levelNumber;
    endpoint = endPoint;
    ctx;
    canvas;
    keyboard;
    camera_x = 0;
    intervalsId = [];
    statusBar = new StatusBar();
    COLLECT_SOUND = new Audio('sounds/collect_SOUND.wav');
    WIN_SOUND = new Audio('sounds/win_SOUND.wav');
    LOOSE_SOUND = new Audio('sounds/gameOver.wav');
    ENEMY_KILL_SOUND = new Audio('sounds/enemy-death-sound.wav');
    coinsInGame = [];
    BG_SOUND = new Audio('./sounds/background-music.mp3');




    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
        this.keyboard = keyboard;
        this.setWorld();
        this.giveBlocksDirection();
        this.setStoppableIntervals(this.checkHits.bind(this) , 100);
        this.setStoppableIntervals(this.checkFail.bind(this) , 100);
        this.setStoppableIntervals(this.checkWin.bind(this) , 100);
        this.setStoppableIntervals(this.collectCoins.bind(this) , 100);
        this.setStoppableIntervals(this.destroyEnemy.bind(this) , 20);
        this.createSectors();
        this.BG_SOUND.play();
    }

    /** 
     * Draws everything into the game:
     */
    draw() {
        this.ctx.clearRect(0, 0,this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgrounds);
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.coins);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.blocks);
        this.ctx.translate(-this.camera_x, 0);
        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        })
    }


    /**
     * Defines 'this'.
     */
    setWorld() {
        this.character.world = this;
    }


    /**
     * Creates Intervall which executes a desired function as often as you want.
     * @param {Function} fn - Function which should be executed in this interval.
     * @param {*} time - time in which the interval should be repeated.
     */
    setStoppableIntervals(fn, time) {
        let id = setInterval(fn, time);
        this.intervalsId.push(id);
    }


    /**
     * Stops all active intervalls.
     */
    stopAllIntervalls() {
        this.intervalsId.forEach(clearInterval);
    }


    /**
     * Creates a JSON with only important infos.
     */
    createSectors() {
        let newIndex = 0;
        for (let i = 0; i < this.level.blocks.length; i++) {
            const block = this.level.blocks[i];
            let newJSON = {
                'x': block.x,
                'y': block.y,
                'realX': block.x,
                'realY': block.y,
                'realWidth': block.width,
                'realHeight': block.height
            };
            this.addGameSectorstoArr(block, newJSON);
        }
    }


    /**
     * If the x coordinate of the block does not already exist in the arra, it will be added.
     * @param {object} block - current block.
     * @param {object} newJSON - new created JSON with the informations of the current block.
     */
    addGameSectorstoArr(block, newJSON) {
        if(!this.checkDuality(block)) {
            gameSectors.push(newJSON);
            //console.log('GAMESECTORS', gameSectors);
        }
    }


    /**
     * Checks whether the x coordinate of the checked block already exists in the array.
     * @param {Object} checkedBlock - current block.
     * @returns true or false.
     */
    checkDuality(checkedBlock) {
        for (let i = 0; i < gameSectors.length; i++) {
            const block = gameSectors[i];
            if(gameSectors[i].x ==(checkedBlock.x)) {
                return true;
            }
        }
    }


    /**
     * Checks if the character collides with an enemy.
     */
    checkHits() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
            }
        })
    }


    /**
     * Goes through each object from the array with the opponents and checks whether the conditions for destroying the enemy are met.
     */
    destroyEnemy() {
            this.level.enemies.forEach((enemy) => {
                this.playSound(this.ENEMY_KILL_SOUND);
                let index = this.level.enemies.indexOf(enemy);
                this.character.jump();

                if(this.character.isJumpingOnEnemy(enemy) && this.energie > 0) {
                    this.level.enemies[index].energie--;

                    this.level.enemies[index].speed++;
                    this.level.enemies[index].height += 10;
                    this.level.enemies[index].realHeight += 10;
                    this.level.enemies[index].jumpAreaHeight += 10;
    
                    this.level.enemies[index].y -= 10;
                    this.level.enemies[index].realY -= 10;
                    this.level.enemies[index].jumpAreaY -= 10;
                } 
                
                if(this.character.isJumpingOnEnemy(enemy) && this.energie == 0) {
                    setTimeout(() => {
                        this.removeEnemy(enemy, index);
                    }, 400);
                }
            })
    }


    /**
     * After an enemy is killed, they are deleted from the game and added to a deleted enemies array.
     * @param {Object} enemy - killed enemy.
     * @param {Number} index - index of killed enemy.
     */
    removeEnemy(enemy, index) {
        destroiedEnemies.push(this.level.enemies[index]);
        this.level.enemies.splice(index, 1);
        
            console.log('destroied', destroiedEnemies);
            console.log('left',this.level.enemies);
    }


    /**
     * Checks whether the x coordinate of the character is as large as the end point. If so, the player has passed the level.
     */
    checkWin() {
        if (this.character.x == this.endpoint) {
            if(this.character.isOnGround()) {
                this.playSound(this.WIN_SOUND);
                this.character.jump();
                this.stopAllIntervalls();
            }
                this.setTimeOutAfterWin();
        }
    }


    /**
     * Set a timeout after you have passed the level so that the ending sequence is played before the game is reset.
     */
    setTimeOutAfterWin() {
        setTimeout(() => {
            this.stopAndResetGame('win');
        }, 500);
    }


    /**
     * Checks whether the y coordinate of the character is as larger as the bottom edge,
     * or the energie is 0.
     */
    checkFail() {
        if (this.character.y >= 500 || this.character.energie == 0) {
            this.playSound(this.LOOSE_SOUND);
            this.stopAllIntervalls();
            this.stopAndResetGame('loose');
        }
    }


    /**
     * Calls function to show endCard and to reset the game.
     * @param {string} status - 'win' or 'loose'
     */
    stopAndResetGame(status) {
        setTimeout(() => {
            if(status == 'loose') {
                showLooseCard();
            } else {
                showWinCard()
            }
            this.resetCoinsArray();
            this.resetEnemyEnergie();
        }, 1000);
    }


    /**
     * Calls function to update everything related to the coins.
     */
    collectCoins() {
        this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                this.playSound(this.COLLECT_SOUND);
                this.updateCoinBasket(coin);
                this.updateStatusBar();
            }
        })
    }


    /**
     * Plays a sound.
     * @param {Object} soundName - name of the variable with the value of thev sound.
     */
    playSound(soundName) {
        if(sound == true) {
            soundName.play();
        }
    }


    /**
     * Updates the amount of collected Coins and safes them in an array.
     * @param {objet} coin - collected Coin.
     */
    updateCoinBasket(coin) {
        coinBasket++;
        count = coinBasket;
        let index = this.level.coins.indexOf(coin);
        this.coinsInGame.push(this.level.coins[index]);
        this.level.coins.splice(index, 1);
    }


    /**
     * Updates the percentage of the statusbar.
     */
    updateStatusBar() {
        this.statusBar.percentage = this.statusBar.percentage + 10;
        this.statusBar.setPercentage(this.statusBar.percentage);
    }


    resetEnemyEnergie() {
        for (let i = 0; i < this.level.enemies.length; i++) {
            const enemy = this.level.enemies[i];
            enemy.energie = 1;
        }
    }


    /**
     * Combines the coin array with the array of collected coins.
     */
    resetCoinsArray() {
        this.level.coins = this.level.coins.concat(this.coinsInGame);
        this.level.enemies = this.level.enemies.concat(destroiedEnemies);
        resetLevel();
    }


    /**
     * Checks whether a block is to the left or right of the character.
     */
    giveBlocksDirection() {
            setInterval(() => {
                if (breakStatus === false) {
                this.level.blocks.forEach((block) => {
                    if(block.x > this.character.x + this.character.borderX && this.character.otherDirection == false) {
                        block.currentDirection = 'right';
                    }
                    if(block.x < this.character.x + this.character.borderX) {
                        block.currentDirection = 'left';
                    }
                })}
            }, 100);
        
    }


    /**
     * Adds every array with images as objects to the game.
     * @param {Object} object - current object.
     */
    addObjectsToMap(object) {
        object.forEach(o => {
            this.addToMap(o);
        })
    }


    /**
     * Adds every image to the game.
     * @param {Object} mo - current object.
     */
    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        
        mo.draw(this.ctx);
        mo.drawBorders(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }


    /**
     * Flips the images.
     * @param {Object} mo - current Movable Object. 
     */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width + mo.imgCompensation, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
        mo.realX = mo.x + mo.compensationX;
        mo.jumpAreaX = mo.realX;
    }

    
    /**
     * Flips image back to original.
     * @param {Object} mo - current Movable Object. 
     */
    flipImageBack(mo) {
        mo.x = mo.x * -1;
        mo.realX = mo.realX * -1;
        if(mo == this.character) {
            mo.realX = mo.x + 40;
        } else {
            mo.realX = mo.x + 15;
            mo.jumpAreaX = mo.realX;
        }
        this.ctx.restore();
    }
}