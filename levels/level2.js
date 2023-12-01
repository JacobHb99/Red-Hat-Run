const Level2 = new Level(
    [
        //SKY
        new Background('img/screens/BG.png', -60* 12, 0, 840, 2500),
        new Background('img/screens/BG.png', 1690, 0, 840, 2500),
        new Background('img/screens/BG.png', 4190, 0, 840, 2500),

        //BIG TREES
        new Background('img/building_blocks/PNG/Objects/trees1_5.png', 60, 240, 140, 90),
        new Background('img/building_blocks/PNG/Objects/rectangle2.png', 60, 192, 80, 80),
        new Background('img/building_blocks/PNG/Objects/rectangle3.png', 30, 210, 80, 80),
        new Background('img/building_blocks/PNG/Objects/rectangle4.png', 110, 260, 50, 60),

        new Background('img/building_blocks/PNG/Objects/trees1_5.png', 60 * 29, 240, 140, 90),
        new Background('img/building_blocks/PNG/Objects/rectangle2.png', 60 * 29, 192, 80, 80),
        new Background('img/building_blocks/PNG/Objects/rectangle3.png', 60 * 29 - 30, 210, 80, 80),
        new Background('img/building_blocks/PNG/Objects/rectangle4.png', 60 * 29 + 50, 260, 50, 60),  

        new Background('img/building_blocks/PNG/Objects/trees1_5.png', 60 * 49, 300, 140, 90),
        new Background('img/building_blocks/PNG/Objects/rectangle2.png', 60 * 49, 252, 80, 80),
        new Background('img/building_blocks/PNG/Objects/rectangle3.png', 60 * 49 - 30, 270, 80, 80),
        new Background('img/building_blocks/PNG/Objects/rectangle4.png', 60 * 49 + 50, 330, 50, 60),   

        new Background('img/building_blocks/PNG/Objects/trees1_5.png', 60 * 52, 300, 140, 90),
        new Background('img/building_blocks/PNG/Objects/rectangle2.png', 60 * 52, 252, 80, 80),
        new Background('img/building_blocks/PNG/Objects/rectangle3.png', 60 * 52 - 30, 270, 80, 80),
        new Background('img/building_blocks/PNG/Objects/rectangle4.png', 60 * 52 + 50, 330, 50, 60),       
        
        new Background('img/building_blocks/PNG/Objects/trees1_5.png', 60 * 73, 240, 140, 90),
        new Background('img/building_blocks/PNG/Objects/rectangle2.png', 60 * 73, 192, 80, 80),
        new Background('img/building_blocks/PNG/Objects/rectangle3.png', 60 * 73 - 30, 210, 80, 80),
        new Background('img/building_blocks/PNG/Objects/rectangle4.png', 60 * 73 + 50, 260, 50, 60),  

        //SMALL TREES
        new Background('img/building_blocks/PNG/Objects/trees2_1.png', 30, 270, 100, 70),
        new Background('img/building_blocks/PNG/Objects/trees2_3.png', 120, 280, 100, 70),

        new Background('img/building_blocks/PNG/Objects/trees2_1.png', 60 * 17, 270, 100, 70),

        new Background('img/building_blocks/PNG/Objects/trees2_1.png', 60 * 27, 270, 100, 70),

        new Background('img/building_blocks/PNG/Objects/trees2_1.png', 60 * 39, 330, 100, 70),
        new Background('img/building_blocks/PNG/Objects/trees2_3.png', 60 * 41, 340, 100, 70),

        new Background('img/building_blocks/PNG/Objects/trees2_1.png', 60 * 50, 330, 100, 70),
        new Background('img/building_blocks/PNG/Objects/trees2_3.png', 60 * 48, 340, 100, 70),

        new Background('img/building_blocks/PNG/Objects/trees2_1.png', 60 * 72, 270, 100, 70),
        new Background('img/building_blocks/PNG/Objects/trees2_1.png', 60 * 74, 270, 100, 70),

        //STONES
        new Background('img/building_blocks/PNG/Objects/rocks1_5.png', 20, 320, 50, 50),
        new Background('img/building_blocks/PNG/Objects/rocks1_5.png', 60 * 16, 320, 50, 50),
        new Background('img/building_blocks/PNG/Objects/rocks1_1.png', 60 * 24, 328, 50, 50),
        new Background('img/building_blocks/PNG/Objects/rocks1_1.png', 60 * 30, 328, 50, 50),
        new Background('img/building_blocks/PNG/Objects/rocks1_1.png', 60 * 40, 388, 50, 50),
        new Background('img/building_blocks/PNG/Objects/rocks1_1.png', 60 * 53, 388, 50, 50),  
        new Background('img/building_blocks/PNG/Objects/rocks1_5.png', 60 * 51, 380, 50, 50), 
        new Background('img/building_blocks/PNG/Objects/rocks1_5.png', 60 * 70, 320, 50, 50),     
        
        //OTHER DECOR
        new Background('img/building_blocks/PNG/Objects/pointer.png', 60 * 3, 270, 100, 80),
        new Background('img/building_blocks/PNG/Objects/pointer.png', 60 * 33, 210, 100, 80),
        new Background('img/building_blocks/PNG/Objects/pointer.png', 60 * 67, 210, 100, 80),

        new Background('img/building_blocks/PNG/Objects/fence.png', 60 * 9, 360, 100, 60),
        new Background('img/building_blocks/PNG/Objects/fence.png', 60 * 15, 300, 100, 60),

        //ENDZONE
        new Background('img/backgrounds/targetMushroom.png', 60 * 89, 127, 60 * 3, 200),
        
        //DARK PARTS 
        new Background('img/building_blocks/PNG/Tiles/tile11.png', -240, 420, 60, 60*8),
        new Background('img/building_blocks/PNG/Tiles/tile11.png', 60 * 16, 420, 60, 60),
        new Background('img/building_blocks/PNG/Tiles/tile11.png', 60 * 21, 360, 120, 60*13),
        new Background('img/building_blocks/PNG/Tiles/tile11.png', 60 * 62, 420, 60, 60),
        new Background('img/building_blocks/PNG/Tiles/tile11.png', 60 * 68, 360, 120, 60*15),
        new Background('img/building_blocks/PNG/Tiles/tile11.png', 60 * 88, 360, 120, 60*4),

    ],
    [
        //ENEMIES
        new Orc(60 * 30, 310, 60 * 23),
        new Orc(60 * 45, 370, 60 * 38),
        new Orc(60 * 54, 370, 60 * 48),
        new Orc(60 * 60, 370, 60 * 57),
        new Orc(60 * 80, 310, 60 * 71),
    ],
    [
        //GROUND BLOCKS

        new Blocks('img/building_blocks/PNG/Tiles/tile68.png', -240, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile89.png', -240, 420),
        new Blocks('img/building_blocks/PNG/Tiles/tile46.png', -180, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile47.png', -120, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile48.png', -60, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile49.png', 0, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile50.png', 60, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile47.png', 60 *2, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile63.png', 60 *3, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile86.png', 60 *3, 420),

        new Blocks('img/building_blocks/PNG/Tiles/tile68.png', 60 *7, 420),
        new Blocks('img/building_blocks/PNG/Tiles/tile47.png', 60 *8, 420),
        new Blocks('img/building_blocks/PNG/Tiles/tile48.png', 60 *9, 420),
        new Blocks('img/building_blocks/PNG/Tiles/tile49.png', 60 *10, 420),
        new Blocks('img/building_blocks/PNG/Tiles/tile63.png', 60 *11, 420),

        new Blocks('img/building_blocks/PNG/Tiles/tile68.png', 60 *15, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile89.png', 60 *15, 420),
        new Blocks('img/building_blocks/PNG/Tiles/tile48.png', 60 *16, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile63.png', 60 *17, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile86.png', 60 *17, 420),

        new Blocks('img/building_blocks/PNG/Tiles/tile68.png', 60 *21, 300),
        new Blocks('img/building_blocks/PNG/Tiles/tile87.png', 60 * 21, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile89.png', 60 *21, 420),
        new Blocks('img/building_blocks/PNG/Tiles/tile63.png', 60 *22, 300),
        new Blocks('img/building_blocks/PNG/Tiles/tile26.png', 60 *22, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile46.png', 60 * 23, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile48.png', 60 * 24, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile47.png', 60 * 25, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile45.png', 60 * 26, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile49.png', 60 * 27, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile50.png', 60 * 28, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile46.png', 60 * 29, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile45.png', 60 * 30, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile68.png', 60 * 31, 300),
        new Blocks('img/building_blocks/PNG/Tiles/tile25.png', 60 * 31, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile47.png', 60 * 32, 300),
        new Blocks('img/building_blocks/PNG/Tiles/tile63.png', 60 *33, 300),
        new Blocks('img/building_blocks/PNG/Tiles/tile85.png', 60 *33, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile86.png', 60 * 33, 420),

        new Blocks('img/building_blocks/PNG/Tiles/tile68.png', 60 * 38, 420),
        new Blocks('img/building_blocks/PNG/Tiles/tile48.png', 60 * 39, 420),
        new Blocks('img/building_blocks/PNG/Tiles/tile47.png', 60 * 40, 420),
        new Blocks('img/building_blocks/PNG/Tiles/tile45.png', 60 * 41, 420),
        new Blocks('img/building_blocks/PNG/Tiles/tile49.png', 60 * 42, 420),
        new Blocks('img/building_blocks/PNG/Tiles/tile50.png', 60 * 43, 420),
        new Blocks('img/building_blocks/PNG/Tiles/tile46.png', 60 * 44, 420),
        new Blocks('img/building_blocks/PNG/Tiles/tile45.png', 60 * 45, 420),
        new Blocks('img/building_blocks/PNG/Tiles/tile68.png', 60 * 46, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile25.png', 60 * 46, 420),
        new Blocks('img/building_blocks/PNG/Tiles/tile63.png', 60 * 47, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile26.png', 60 * 47, 420),
        new Blocks('img/building_blocks/PNG/Tiles/tile49.png', 60 * 48, 420),
        new Blocks('img/building_blocks/PNG/Tiles/tile50.png', 60 * 49, 420),
        new Blocks('img/building_blocks/PNG/Tiles/tile46.png', 60 * 50, 420),
        new Blocks('img/building_blocks/PNG/Tiles/tile49.png', 60 * 51, 420),
        new Blocks('img/building_blocks/PNG/Tiles/tile48.png', 60 * 52, 420),
        new Blocks('img/building_blocks/PNG/Tiles/tile47.png', 60 * 53, 420),
        new Blocks('img/building_blocks/PNG/Tiles/tile46.png', 60 * 54, 420),
        new Blocks('img/building_blocks/PNG/Tiles/tile68.png', 60 * 55, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile25.png', 60 * 55, 420),
        new Blocks('img/building_blocks/PNG/Tiles/tile63.png', 60 * 56, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile26.png', 60 * 56, 420),
        new Blocks('img/building_blocks/PNG/Tiles/tile48.png', 60 * 57, 420),
        new Blocks('img/building_blocks/PNG/Tiles/tile49.png', 60 * 58, 420),
        new Blocks('img/building_blocks/PNG/Tiles/tile50.png', 60 * 59, 420),
        new Blocks('img/building_blocks/PNG/Tiles/tile46.png', 60 * 60, 420),

        new Blocks('img/building_blocks/PNG/Tiles/tile68.png', 60 * 61, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile25.png', 60 * 61, 420),
        new Blocks('img/building_blocks/PNG/Tiles/tile49.png', 60 * 62, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile63.png', 60 *63, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile85.png', 60 *63, 420),

        new Blocks('img/building_blocks/PNG/Tiles/tile68.png', 60 *67, 300),
        new Blocks('img/building_blocks/PNG/Tiles/tile89.png', 60 *67, 420),
        new Blocks('img/building_blocks/PNG/Tiles/tile87.png', 60 * 67, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile45.png', 60 * 68, 300),
        new Blocks('img/building_blocks/PNG/Tiles/tile49.png', 60 * 69, 300),
        new Blocks('img/building_blocks/PNG/Tiles/tile63.png', 60 *70, 300),
        new Blocks('img/building_blocks/PNG/Tiles/tile26.png', 60 *70, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile47.png', 60 * 71, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile46.png', 60 * 72, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile48.png', 60 * 73, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile47.png', 60 * 74, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile45.png', 60 * 75, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile49.png', 60 * 76, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile50.png', 60 * 77, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile46.png', 60 * 78, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile45.png', 60 * 79, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile49.png', 60 * 80, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile68.png', 60 * 81, 300),
        new Blocks('img/building_blocks/PNG/Tiles/tile25.png', 60 * 81, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile47.png', 60 * 82, 300),
        new Blocks('img/building_blocks/PNG/Tiles/tile63.png', 60 *83, 300),
        new Blocks('img/building_blocks/PNG/Tiles/tile85.png', 60 *83, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile86.png', 60 * 83, 420),

        new Blocks('img/building_blocks/PNG/Tiles/tile68.png', 60 *87, 300),
        new Blocks('img/building_blocks/PNG/Tiles/tile89.png', 60 *87, 420),
        new Blocks('img/building_blocks/PNG/Tiles/tile87.png', 60 * 87, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile45.png', 60 * 88, 300),
        new Blocks('img/building_blocks/PNG/Tiles/tile48.png', 60 * 89, 300),
        new Blocks('img/building_blocks/PNG/Tiles/tile46.png', 60 * 90, 300),
        new Blocks('img/building_blocks/PNG/Tiles/tile47.png', 60 * 91, 300),
        new Blocks('img/building_blocks/PNG/Tiles/tile63.png', 60 *92, 300),
        new Blocks('img/building_blocks/PNG/Tiles/tile85.png', 60 *92, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile86.png', 60 * 92, 420),
],
[
        //Coins
        new Coin('img/8_coin/coin_1.png', 60 * 6, 200),   
        new Coin('img/8_coin/coin_1.png', 60 * 13, 250), 
        new Coin('img/8_coin/coin_1.png', 60 * 19, 200), 
        new Coin('img/8_coin/coin_1.png', 60 * 24, 140),  
        new Coin('img/8_coin/coin_1.png', 60 * 29, 140),    
        new Coin('img/8_coin/coin_1.png', 60 * 36, 140),   
        new Coin('img/8_coin/coin_1.png', 60 * 51, 230),   
        new Coin('img/8_coin/coin_1.png', 60 * 66, 200), 
        new Coin('img/8_coin/coin_1.png', 60 * 77, 140), 
        new Coin('img/8_coin/coin_1.png', 60 * 85, 140), 
]

);

