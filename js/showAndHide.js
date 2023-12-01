/** 
 * The homescreen is hidden and the canvas is shown.
 */
function startGame() {
    document.getElementById('startScreenContainer').classList.add('d-none');
    document.getElementById('screenOverlay').classList.add('d-none');
    document.getElementById('canvasContainer').classList.remove('d-none');
    renderCanvas();
}


/**
 * Hides or shows the pause menu.
 */
function toggleBreakScreen() {
    renderContent('breakScreen', breakTemplateHTML());

    document.getElementById('breakScreen').classList.toggle('d-none');
    document.getElementById('canvasBreakBtn').classList.toggle('d-none');
    document.getElementById('breakIntroductionBtn').classList.toggle('d-none');    
    renderContent('breakInput', introductionTemplateHTML('Break'));
}


/** 
 * The canvas is hidden and the homescreen is shown.
 */
function showStartScreen() {
    document.getElementById('startScreenContainer').classList.remove('d-none');
    document.getElementById('screenOverlay').classList.add('d-none');
    document.getElementById('canvasContainer').classList.add('d-none');
}


/** 
 * The canvas is hidden and the endscreen is shown.
 */
function showLooseCard() {
    renderContent('endCardContainer', endTemplateHTML('you_lose', '4'));
    document.getElementById('nextBtn').classList.add('d-none');
    document.getElementById('screenOverlay').classList.remove('d-none');
    document.getElementById('canvasContainer').classList.add('d-none');
}


/** 
 * The canvas is hidden and the endscreen is shown.
 */
function showWinCard(coinBasket) {
    chooseStarAmount(coinBasket);
    renderContent('endCardContainer', endTemplateHTML('you_win', starIndex));
    document.getElementById('screenOverlay').classList.remove('d-none');
    document.getElementById('nextBtn').classList.remove('d-none');
    document.getElementById('canvasContainer').classList.add('d-none');
}


/**
 * Shows the Screen which explains the story behind the game.
 */
function showGameInfos() {
    renderContent('gameInformation', infoTemplateHTML());
    document.getElementById('gameInformation').classList.toggle('d-none');
    document.getElementById('introduction').classList.add('d-none');
}


/**
 * Shows the Introductions when you are in the pause menu.
 */
function showIntroductions() {
    if (gameSectors.length > 0) {
        document.getElementById('breakContainer').classList.remove('d-none');
        document.getElementById('breakPlayBtn').classList.toggle('d-none');
        document.getElementById('breakIntroductionBreak').classList.toggle('d-none');

    } else {
        document.getElementById('breakIntroductionStart').classList.add('d-none');
    }
}


/** 
 * It shows and hide the introductions on the homescreen.
 */
function showAndHideIntroduction() {
    document.getElementById('introduction').classList.toggle('d-none');
    renderContent('introduction', introductionTemplateHTML('Start'));
    document.getElementById('breakIntroductionStart').classList.remove('d-none');
    document.getElementById('settingFontStart').classList.toggle('d-none');
    document.getElementById('gameInformation').classList.add('d-none');
    
    if(gameSectors.length > 0) {
        document.getElementById('breakPlayBtn').classList.toggle('d-none');
    }
}


/**
 * Depending on which icon was clicked, the appropriate introduction will be displayed.
 * @param {string} status - 'keyboard' or 'touchPad'.
 */
function changeIntroduction(status) {
    let keyboardBtn = document.getElementById('keyboardBtn');
    let touchpadBtn = document.getElementById('touchpadBtn');
    let rightBtn = document.getElementById('touchPadRightBtn');
    let leftBtn = document.getElementById('touchPadLeftBtn');
    let jumpBtn = document.getElementById('touchPadJumpBtn');
    
    if(status == 'keyboard') {
        activateKeyboardIntroduction(keyboardBtn, touchpadBtn, rightBtn, leftBtn, jumpBtn);
    } else if (status == 'touchpad') {
        activateTouchpadIntroduction(keyboardBtn, touchpadBtn, rightBtn, leftBtn, jumpBtn);
    } 
}


/**
 * Shows the introduction screen for the keyboard.
 * @param {Object} keyboardBtn - Keyboard HTML-Button.
 * @param {Object} touchpadBtn - Touchpad HTML-Button.
 * @param {Object} rightBtn - Move left HTML-Button.
 * @param {Object} leftBtn - Move right HTML-Button.
 * @param {Object} jumpBtn - Jump HTML-Button.
 */
function activateKeyboardIntroduction(keyboardBtn, touchpadBtn, rightBtn, leftBtn, jumpBtn) {
    keyboardBtn.src =  './img/screens/icons/keyboardIcon_red.png';
    touchpadBtn.src =  './img/screens/icons/touchpadIcon_black.png';

    rightBtn.src = './img/screens/btn/rightKey.png';
    leftBtn.src = './img/screens/btn/leftKey.png';
    jumpBtn.src = './img/screens/btn/spaceBtn.png';
}


/**
 * Shows the introduction screen for the keyboard.
 * @param {Object} keyboardBtn - Keyboard HTML-Button.
 * @param {Object} touchpadBtn - Touchpad HTML-Button.
 * @param {Object} rightBtn - Move left HTML-Button.
 * @param {Object} leftBtn - Move right HTML-Button.
 * @param {Object} jumpBtn - Jump HTML-Button.
 */
function activateTouchpadIntroduction(keyboardBtn, touchpadBtn, rightBtn, leftBtn, jumpBtn) {
    keyboardBtn.src =  './img/screens/icons/keyboardIcon_black.png';
    touchpadBtn.src =  './img/screens/icons/touchpadIcon_red.png';

    rightBtn.src = './img/screens/btn/next.png';
    leftBtn.src = './img/screens/btn/prew.png';
    jumpBtn.src = './img/screens/btn/upgrade.png';
}


/**
 * Removes and adds CSS classes to the HTML elements, and calls functions to deactivate fullscreen mode. 
 */
function fullscreen() {
    let fullscreen = document.getElementById('fullscreen');
    document.getElementById('canvasContainer').classList.add('fullscreenMode');
    document.getElementById('screenOverlay').classList.add('fullscreenMode');
    document.getElementById('startScreenContainer').classList.add('fullscreenMode');
    document.getElementById('canvas').classList.add('canvasFullscreen');
    document.getElementById('startScreen').classList.add('canvasFullscreen');
    document.getElementById('mushroomImg').classList.add('mushroomImgFullscreen');
    document.getElementById('endCardContainer').classList.add('endContainerFullscreen');

    fullscreenMode = true;
    showExitFullscreenBtn();
    enterFullscreen(fullscreen);
}


/**
 * Removes and adds CSS classes to the HTML elements, and calls functions to deactivate fullscreen mode.
 */
function exitFullscreenRegulation() {
    document.getElementById('canvasContainer').classList.remove('fullscreenMode');
    document.getElementById('screenOverlay').classList.remove('fullscreenMode');
    document.getElementById('startScreenContainer').classList.remove('fullscreenMode');
    document.getElementById('canvas').classList.remove('fullscreenMode');
    document.getElementById('startScreen').classList.remove('canvasFullscreen');
    document.getElementById('endCardContainer').classList.remove('endContainerFullscreen');
    document.getElementById('mushroomImg').classList.remove('mushroomImgFullscreen');

    showFullscreenBtn();
    if (fullscreenMode == true) {
        exitFullscreen();
    }
}


/**
 * Shows the fullscreenBtn and hides the exitFullscreenBtn on the startscreen.
 */
function showFullscreenBtn() {
    document.getElementById('exitFullscreenBtn').classList.add('d-none');
    document.getElementById('fullscreenBtn').classList.remove('d-none');

    if (gameStatus == true) {
        showFullscreenBtnOnCanvas();
    }
}


/**
 * Shows the exitFullscreenBtn and hides the fullscreenBtn on the startscreen.
 */
function showExitFullscreenBtn() {
    document.getElementById('exitFullscreenBtn').classList.remove('d-none');
    document.getElementById('fullscreenBtn').classList.add('d-none');

    if (gameStatus == true) {
        showExitFullscreenBtnOnCanvas();
    }
}


/**
 * Shows the fullscreenBtn and hides the exitFullscreenBtn on the canvas.
 */
function showFullscreenBtnOnCanvas() {
    document.getElementById('cancasExitFullscreenBtn').classList.add('d-none');
    document.getElementById('cancasFullscreenBtn').classList.remove('d-none');
}


/**
 * Shows the exitFullscreenBtn and hides the fullscreenBtn on the canvas.
 */
function showExitFullscreenBtnOnCanvas() {
    document.getElementById('cancasExitFullscreenBtn').classList.remove('d-none');
    document.getElementById('cancasFullscreenBtn').classList.add('d-none');
}


/**
 * This function activates the fullscreen mode.
 * @param {Element} element - the the variable that has the HTML tag as its value.
 */
function enterFullscreen(element) {
    if(element.requestFullscreen) {
      element.requestFullscreen();
    } else if(element.msRequestFullscreen) {      // for IE11 (remove June 15, 2022)
      element.msRequestFullscreen();
    } else if(element.webkitRequestFullscreen) {  // iOS Safari
      element.webkitRequestFullscreen();
    }
}


/** 
 * This function deactivates the fullscreen mode. 
 */
function exitFullscreen() {
    if(document.exitFullscreen) {
      document.exitFullscreen();
    } else if(document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
}


document.addEventListener('fullscreenchange', exitHandler);
document.addEventListener('webkitfullscreenchange', exitHandler);
document.addEventListener('mozfullscreenchange', exitHandler);
document.addEventListener('MSFullscreenChange', exitHandler);


function exitHandler() {
    if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
        fullscreenMode = false;
        exitFullscreenRegulation();
    }
} 