let keyboard = new Keyboard();
let levelNumber = Level1;


/** 
 * This function brings up the home screen when you start the game.
 */
function init() {
    //renderContent('screenOverlay', startScreenTemplateHTML());
}


/** 
 * This function renders the canvas.
 */
function renderCanvas() {
    gameStatus = true;
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    ctx = canvas.getContext('2d');
}


/**
 * Regulates the Sound 
 * @param {string} ID - ID of the soundbutton.
 */
function regulateSound(ID) {
    let soundBtn = document.getElementById(ID);

    if(sound == true) {
        sound = false;
        soundBtn.src = './img/screens/btn/sound_off.png';
    } else if(sound == false) {
        sound = true;
        soundBtn.src = './img/screens/btn/sound.png';
    }
}


/**
 * Changes the breakstatus. If the breakStatus === true, the game is paused.
 */
function setBreak() {
    let brewkBtn = document.getElementById('');
    if(breakStatus == false) {
        breakStatus = true;
    } else {
        breakStatus = false;
    }
    toggleBreakScreen();
}


/**
 * Regulates the amount of stars the player achieved.
 * @param {number} coinBasket - amount of collected coins.
 */
function chooseStarAmount() {
    if(coinBasket < 6) {
        starIndex = '3';
    } else if(coinBasket <= 9) {
        starIndex = '2';
    } else {
        starIndex = '1';
    }
}

/**
 * Calls functions to reset the level to 1 and show the start screen.
 */
function goBackToStartScreen() {
    setLevel1();
    resetLevel();
    showStartScreen();
}


/** 
 * Activates the next level.
 */
function nextLevel() {
    if(levelCount == 1) {
        setLevel2();
    } else if (levelCount == 2) {
        setLevel3();
    }
    resetLevel();
    startGame();
}


/**
 * Resets all variables that change during the game.
 */
function resetLevel() {
    gameSectors = [];
    destroiedEnemies = [];
    coinBasket = 0;
    count = 0;
}


/**
 * sets the variables appropriate to level 1.
 */
function setLevel1() {
    levelCount = 1;
    levelNumber = Level1;
    endPoint = 60 * 56;
}


/**
 * sets the variables appropriate to level 2.
 */
function setLevel2() {
    levelCount = 2;
    levelNumber = Level2;
    endPoint = 60 * 90;
}


/**
 * sets the variables appropriate to level 3.
 */
function setLevel3() {
    levelCount = 3;
    levelNumber = Level3;
    endPoint = 60 * 127;
}


/**
 * Calls html tag and renders html template.
 * @param {string} ID - ID of HTML tag.
 * @param {} template - called HTML-template.
 */



function renderContent(ID, template) {
    let content = document.getElementById(ID);

    content.innerHTML = '';
    content.innerHTML += template;
}


/** 
 * Checks the status of the keyboard.
 */
window.addEventListener('keydown', (event) => {
    if(event.keyCode == 37) {
        keyboard.LEFT = true;
    }

    if(event.keyCode == 39) {
        keyboard.RIGHT = true;
    }

    if(event.keyCode == 32) {
        keyboard.JUMP = true;
    }
    if(event.keyCode == 27) {
        escapeBtn = true;
        showFullscreenBtn();
    }
    
})


/** 
 * Checks the status of the keyboard.
 */
window.addEventListener('keyup', (event) => {
    if(event.keyCode == 37) {
        keyboard.LEFT = false;
    }

    if(event.keyCode == 39) {
        keyboard.RIGHT = false;
    }

    if(event.keyCode == 32) {
        keyboard.JUMP = false;
    }
})


/** 
 * Checks the status of the space bar.
 */
window.addEventListener('keypress', (event) => {

})







