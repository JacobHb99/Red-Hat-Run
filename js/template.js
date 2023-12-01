/**
 * HTML_Template for the home screen.
 * @returns ???
 */
function startScreenTemplateHTML() {
    return  /*html*/`
            <div class="startScreen" id="startScreen">
                <img class="mushroomImg" id="mushroomImg" src="./img/screens/mushroom.png" alt="">
                <img class="redHatScreenImg" src="./img/redHat/Run (2).png" alt="">
                            
                <div class="fontsContainer">
                    <img src="./img/screens/fontImg.png" alt="">
                </div>
                <img onclick="startGame()" class="playBtn btn" src="./img/screens/btn/play.png" alt="">
                <img onclick="showGameInfos()" class="infoBtn btn" src="./img/screens/btn/faq.png" alt="">  
                <img onclick="showAndHideIntroduction()" class="aboutBtn btn" src="./img/screens/btn/leader.png" alt="">   
                <img class="soundBtn btn" id="soundBtn" onclick="regulateSound('soundBtn')" src="./img/screens/btn/sound.png" alt="">  
                <img class="fullscreenBtn btn" id="fullscreenBtn" onclick="fullscreen()" src="./img/screens/btn/fullscreen.png" alt="">  
                <img class="fullscreenBtn btn d-none" id="exitFullscreenBtn" onclick="exitFullscreenRegulation()" src="./img/screens/btn/emptyBtn.png" alt="">  

                <div class="eventContainer breakContainer d-none" id="introduction"></div>
                <div class="eventContainer breakContainer d-none" id="gameInformation"></div>
            </div>
        `
}


/**
 * HTML_Template for the endcard.
 * @param {string} effort - 'you win' or 'you_loose'.
 * @param {number} star - achieved starindex.
 * @returns ???
 */
function endTemplateHTML(effort, star) {
    return  /*html*/`

                    <img class="gameOverBg" src="./img/screens/you_lose/bg.png" alt="">
                    <img class="noticeField" src="./img/screens/you_lose/table.png" alt="">
                    <img class="gameOverFont" src="./img/screens/${effort}/header.png" alt="">
                    
                    <div class="levelFontContainer">
                        <img class="levelFont" src="./img/screens/level/level.png" alt="">
                        <img class="levelFont" src="./img/screens/level/${levelCount}.png" alt="">
                    </div>
                    
                    <img class="stars" src="./img/screens/you_win/star_${star}.png" alt="">
                    
                    <div class="mushroomContainer">
                        <img class="mushrooms" src="./img/8_coin/coin_2.png" alt="">
                        <span class="mushroomCount">${count}</span>
                    </div>

                    <div class="noticeContainer">
                        <img onclick="startGame()" class="restartBtn btn" src="./img/screens/btn/restart.png" alt="">
                        <img onclick="goBackToStartScreen()" class="menuBtn btn" src="./img/screens/btn/menu.png" alt="">
                        <img onclick="nextLevel()" class="nextBtn btn d-none" id="nextBtn" src="./img/screens/btn/next.png" alt="">
                    </div>
                </div>
            </div>
    `
}


/**
 * HTML_Template for the pause menu.
 * @returns ???
 */
function breakTemplateHTML() {
    return /*html*/`
        <div class="eventContainer breakContainer" id="breakContainer">

        <img class="gameOverFont" id="pauseFont" src="./img/screens/pause/header.png" alt="">
            <div id="breakHomeScreen" class="breakHomeScreen">
            <img class="gameOverBg" src="./img/screens/pause/bg.png" alt="">
                <img class="gameOverFont pauseFont" src="./img/screens/pause/header.png" alt="">
                <img class="breakNoticeField" src="./img/screens/pause/table.png" alt="">
                
                <div class="breaklevelFontContainer">
                    <img class="levelFont" src="./img/screens/level/level.png" alt="">
                    <img class="levelFont" src="./img/screens/level/${levelCount}.png" alt="">
                </div>
                        
                <img class="cupOfTeaImg" src="./img/screens/pause/text.png" alt="">
                <img class="breakPlayBtn btn" id="breakPlayBtn" onclick="setBreak()" src="./img/screens/btn/play.png" alt="">
                <div class="noticeContainer" id="noticeContainer"></div>
            </div>

            <div id="breakInput" class="breakInput"></div>
        </div>
    `
}


/**
 * HTML-Template for the introductions.
 * @param {string} idEnding - The ending of the ID.
 * @returns 
 */
function introductionTemplateHTML(idEnding) {
    return /*html*/`
        <div id="breakIntroduction${idEnding}" class="breakIntroduction d-none">
            <img class="gameOverBg" src="./img/screens/pause/bg.png" alt="">
            <img class="gameOverFont d-none" id="settingFont${idEnding}" src="./img/screens/settings/92.png" alt="">
            <img class="introductionNoticeField" src="./img/screens/pause/table.png" alt="">
            <img class="introductionCloseBtn btn" src="./img/screens/btn/close_2.png" onclick="showIntroductions()" alt="">
            <div class="introductionTable">

                <div class="introductionField" id="touchPadIntroduction">
                    <div class="introductionLine">
                        <img id="touchPadRightBtn" class="breakIntroBtn" src="./img/screens/btn/next.png" alt=""> 
                        <span>Move right</span>
                    </div>
                    <div class="introductionLine">
                        <img id="touchPadLeftBtn" class="breakIntroBtn" src="./img/screens/btn/prew.png" alt=""> 
                        <span>Move left</span>
                    </div>
                    <div class="introductionLine">
                        <img id="touchPadJumpBtn" class="breakIntroBtn" src="./img/screens/btn/upgrade.png" alt=""> 
                        <span>Jump</span>
                    </div>
                </div>

                <div class="introductionStatus">
                    <img class="btn" id="touchpadBtn" onclick="changeIntroduction('touchpad')" src="./img/screens/icons/touchpadIcon_red.png" alt="">
                    <img class="btn" id="keyboardBtn" onclick="changeIntroduction('keyboard')" src="./img/screens/icons/keyboardIcon_black.png" alt="">
                </div>
            </div>
        </div>
    `
}


/**
 * HTML-Template for the Informations about the game.
 * @returns 
 */
function infoTemplateHTML() {
    return /*html*/`
        <div class="breakIntroduction informationContainer">
            <img class="gameOverBg" src="./img/screens/pause/bg.png" alt="">
            <img class="gameOverFont" id="settingFont" src="./img/screens/settings/92.png" alt="">
            <img class="introductionNoticeField" src="./img/screens/pause/table.png" alt="">
            <img class="introductionCloseBtn btn" src="./img/screens/btn/close_2.png" onclick="showGameInfos()" alt="">
            <div class="infoTextContainer">
                Rudy got lost on the way home. Help him find the way. 
                <br>
                <div class="carefulContainer">
                    But be <span>careful !!!</span> 
                </div>
                <br>
                <div>
                    <span class="tipSpan">TIP:</span> If you come across enemies, try to jump on their heads. <br>
                </div>

                <div class="iconsLink">
                    <a target="_blank" href="https://icons8.com/icons">All</a> icons by <a target="_blank" href="https://icons8.com">Icons8</a>
                </div>
            </div>

        </div>
    `
}