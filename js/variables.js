let breakStatus = false;
let currentObj;
let currentEnemy;
let endPoint = 60 * 56;
let levelCount = 1;
let gameSectors = [];
let globalEnemies = [];
let destroiedEnemies = [];
let coinBasket = 0;
let count = 0;
let starIndex;
let sound = true;
let cancas;
let ctx;
let world;
let fullscreenMode = false;
let gameStatus = false;
let enemyAttacks = false;

/*

    checkCurrentSector() {
        setInterval(() => {
            if (breakStatus === false) {
                for (let i = 0; i < gameSectors.length; i++) {
                    const block = gameSectors[i];
                        if(this.checkSector(block)) {
                            this.currentSector = i;
                        }                
                }
            }
        }, 1000 / 50);
    
}
*/