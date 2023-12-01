const Level3 = new Level(
    [
        //SKY
        new Background('img/screens/BG.png', -60* 12, 0, 840, 2500),
        new Background('img/screens/BG.png', 1690, 0, 840, 2500),
        new Background('img/screens/BG.png', 4190, 0, 840, 2500),
        new Background('img/screens/BG.png', 6690, 0, 840, 2500),

        //BIG TREES
        new Background('img/building_blocks/PNG/Objects/trees1_5.png', 60, 240, 140, 90),
        new Background('img/building_blocks/PNG/Objects/rectangle2.png', 60, 192, 80, 80),
        new Background('img/building_blocks/PNG/Objects/rectangle3.png', 30, 210, 80, 80),
        new Background('img/building_blocks/PNG/Objects/rectangle4.png', 110, 260, 50, 60),

        new Background('img/building_blocks/PNG/Objects/trees1_5.png', 60 * 10, 180, 140, 90),
        new Background('img/building_blocks/PNG/Objects/rectangle2.png', 60 * 10, 132, 80, 80),
        new Background('img/building_blocks/PNG/Objects/rectangle3.png', 60 * 10 - 30, 150, 80, 80),
        new Background('img/building_blocks/PNG/Objects/rectangle4.png', 60 * 10 + 50, 200, 50, 60), 
        
        new Background('img/building_blocks/PNG/Objects/trees1_5.png', 60 * 28, 240, 140, 90),
        new Background('img/building_blocks/PNG/Objects/rectangle2.png', 60 * 28, 192, 80, 80),
        new Background('img/building_blocks/PNG/Objects/rectangle3.png', 60 * 28 - 30, 210, 80, 80),
        new Background('img/building_blocks/PNG/Objects/rectangle4.png', 60 * 28 + 50, 260, 50, 60),  

        new Background('img/building_blocks/PNG/Objects/trees1_5.png', 60 * 36, 240, 140, 90),
        new Background('img/building_blocks/PNG/Objects/rectangle2.png', 60 * 36, 192, 80, 80),
        new Background('img/building_blocks/PNG/Objects/rectangle3.png', 60 * 36 - 30, 210, 80, 80),
        new Background('img/building_blocks/PNG/Objects/rectangle4.png', 60 * 36 + 50, 260, 50, 60),  

        new Background('img/building_blocks/PNG/Objects/trees1_5.png', 60 * 79, 240, 140, 90),
        new Background('img/building_blocks/PNG/Objects/rectangle2.png', 60 * 79, 192, 80, 80),
        new Background('img/building_blocks/PNG/Objects/rectangle3.png', 60 * 79 - 30, 210, 80, 80),
        new Background('img/building_blocks/PNG/Objects/rectangle4.png', 60 * 79 + 50, 260, 50, 60),  

        new Background('img/building_blocks/PNG/Objects/trees1_5.png', 60 * 88, 300, 140, 90),
        new Background('img/building_blocks/PNG/Objects/rectangle2.png', 60 * 88, 252, 80, 80),
        new Background('img/building_blocks/PNG/Objects/rectangle3.png', 60 * 88 - 30, 270, 80, 80),
        new Background('img/building_blocks/PNG/Objects/rectangle4.png', 60 * 88 + 50, 320, 50, 60),  

        new Background('img/building_blocks/PNG/Objects/trees1_5.png', 60 * 103, 180, 140, 90),
        new Background('img/building_blocks/PNG/Objects/rectangle2.png', 60 * 103, 132, 80, 80),
        new Background('img/building_blocks/PNG/Objects/rectangle3.png', 60 * 103 - 30, 150, 80, 80),
        new Background('img/building_blocks/PNG/Objects/rectangle4.png', 60 * 103 + 50, 200, 50, 60), 

        new Background('img/building_blocks/PNG/Objects/trees1_5.png', 60 * 117, 180, 140, 90),
        new Background('img/building_blocks/PNG/Objects/rectangle2.png', 60 * 117, 132, 80, 80),
        new Background('img/building_blocks/PNG/Objects/rectangle3.png', 60 * 117 - 30, 150, 80, 80),
        new Background('img/building_blocks/PNG/Objects/rectangle4.png', 60 * 117 + 50, 200, 50, 60), 

        //SMALL TREES
        new Background('img/building_blocks/PNG/Objects/trees2_1.png', 30, 270, 100, 70),
        new Background('img/building_blocks/PNG/Objects/trees2_3.png', 0, 280, 100, 70),

        new Background('img/building_blocks/PNG/Objects/trees2_2.png', 60 * 9 - 20, 270, 100, 70),
        new Background('img/building_blocks/PNG/Objects/trees2_1.png', 60* 11, 210, 100, 70),

        new Background('img/building_blocks/PNG/Objects/trees2_2.png', 60 * 29, 270, 100, 70),
        new Background('img/building_blocks/PNG/Objects/trees2_1.png', 60* 27, 270, 100, 70),

        new Background('img/building_blocks/PNG/Objects/trees2_2.png', 60 * 35, 270, 100, 70),

        new Background('img/building_blocks/PNG/Objects/trees2_2.png', 60 * 80, 270, 100, 70),

        new Background('img/building_blocks/PNG/Objects/trees2_1.png', 60* 87, 330, 100, 70),

        new Background('img/building_blocks/PNG/Objects/trees2_1.png', 60* 102, 210, 100, 70),
        new Background('img/building_blocks/PNG/Objects/trees2_2.png', 60 * 104, 210, 100, 70),

        new Background('img/building_blocks/PNG/Objects/trees2_1.png', 60* 119, 210, 100, 70),
        new Background('img/building_blocks/PNG/Objects/trees2_2.png', 60 * 117, 210, 100, 70),


        //STONES
        new Background('img/building_blocks/PNG/Objects/rocks1_5.png', 130, 320, 50, 50),
        new Background('img/building_blocks/PNG/Objects/rocks1_5.png', 60 * 16, 220, 50, 50),

        new Background('img/building_blocks/PNG/Objects/rocks1_1.png', 60 * 22, 328, 50, 50),
        new Background('img/building_blocks/PNG/Objects/rocks1_1.png', 60 * 30, 328, 50, 50),
        new Background('img/building_blocks/PNG/Objects/rocks1_1.png', 60 * 50, 328, 50, 50),
        new Background('img/building_blocks/PNG/Objects/rocks1_5.png', 60 * 51, 320, 50, 50),
        
        //OTHER DECOR
        new Background('img/building_blocks/PNG/Objects/pointer.png', 60 * 3, 210, 100, 80),
        new Background('img/building_blocks/PNG/Objects/pointer.png', 60 * 44, 270, 100, 80),

        new Background('img/building_blocks/PNG/Objects/fence.png', 60 * 15, 200, 100, 60),
        new Background('img/building_blocks/PNG/Objects/fence.png', 60 * 58, 210, 100, 60),
        new Background('img/building_blocks/PNG/Objects/fence.png', 60 * 62, 160, 100, 60),

        //ENDZONE
        new Background('img/backgrounds/targetMushroom.png', 60 * 126, 187, 60 * 3, 200),

        //DARK PARTS 
        new Background('img/building_blocks/PNG/Tiles/tile11.png', -240, 360, 120, 60*15),
        new Background('img/building_blocks/PNG/Tiles/tile11.png', 60*27, 360, 120, 60*17),
        new Background('img/building_blocks/PNG/Tiles/tile11.png', 60*49, 360, 120, 60*4),
        new Background('img/building_blocks/PNG/Tiles/tile11.png', 60*69, 360, 120, 60*5),
        new Background('img/building_blocks/PNG/Tiles/tile11.png', 60*79, 360, 120, 60*2),
        new Background('img/building_blocks/PNG/Tiles/tile11.png', 60*96, 360, 120, 60*1),
        new Background('img/building_blocks/PNG/Tiles/tile11.png', 60*102, 360, 120, 60*2),
        new Background('img/building_blocks/PNG/Tiles/tile11.png', 60*114, 360, 120, 60*6),
        new Background('img/building_blocks/PNG/Tiles/tile11.png', 60*125, 360, 120, 60*3),

    ],
    [
        //ENEMIES
        new Orc(60 * 9, 310, 60 * 7),
        new Orc(60 * 30, 310, 60 * 26),
        new Orc(60 * 37, 310, 60 * 33),
        new Orc(60 * 53, 310, 60 * 48),
        new Orc(60 * 74, 310, 60 * 68),
        new Orc(60 * 91, 370, 60 * 85),
        new Orc(60 * 120, 250, 60 * 113),
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
        new Blocks('img/building_blocks/PNG/Tiles/tile68.png', 60 * 3, 300),
        new Blocks('img/building_blocks/PNG/Tiles/tile25.png', 60 *3, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile46.png', 60 * 4, 300),
        new Blocks('img/building_blocks/PNG/Tiles/tile48.png', 60 * 5, 300),
        new Blocks('img/building_blocks/PNG/Tiles/tile63.png', 60 * 6, 300),
        new Blocks('img/building_blocks/PNG/Tiles/tile26.png', 60 *6, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile45.png', 60 * 7, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile45.png', 60 * 8, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile46.png', 60 * 9, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile68.png', 60 * 10, 300),
        new Blocks('img/building_blocks/PNG/Tiles/tile25.png', 60 *10, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile63.png', 60 * 11, 300),
        new Blocks('img/building_blocks/PNG/Tiles/tile85.png', 60 *11, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile86.png', 60 *11, 420),

        new Blocks('img/building_blocks/PNG/Tiles/tile68.png', 60 * 15, 260),
        new Blocks('img/building_blocks/PNG/Tiles/tile63.png', 60 * 16, 260),

        new Blocks('img/building_blocks/PNG/Tiles/tile68.png', 60 *21, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile89.png', 60 *21, 420),
        new Blocks('img/building_blocks/PNG/Tiles/tile63.png', 60 *22, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile86.png', 60 *22, 420),

        new Blocks('img/building_blocks/PNG/Tiles/tile68.png', 60 *26, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile89.png', 60 *26, 420),
        new Blocks('img/building_blocks/PNG/Tiles/tile47.png', 60 *27, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile47.png', 60 *28, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile46.png', 60 *29, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile46.png', 60 *30, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile68.png', 60 * 31, 300),
        new Blocks('img/building_blocks/PNG/Tiles/tile25.png', 60 *31, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile63.png', 60 * 32, 300),
        new Blocks('img/building_blocks/PNG/Tiles/tile26.png', 60 *32, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile47.png', 60 * 33, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile47.png', 60 * 34, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile46.png', 60 * 35, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile46.png', 60 * 36, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile45.png', 60 * 37, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile68.png', 60 * 38, 300),
        new Blocks('img/building_blocks/PNG/Tiles/tile25.png', 60 *38, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile63.png', 60 * 39, 300),
        new Blocks('img/building_blocks/PNG/Tiles/tile26.png', 60 *39, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile48.png', 60 * 40, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile50.png', 60 * 41, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile47.png', 60 * 42, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile50.png', 60 * 43, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile63.png', 60 *44, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile86.png', 60 *44, 420),

        new Blocks('img/building_blocks/PNG/Tiles/tile68.png', 60 *48, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile89.png', 60 *48, 420),
        new Blocks('img/building_blocks/PNG/Tiles/tile45.png', 60 * 49, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile45.png', 60 * 50, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile46.png', 60 * 51, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile45.png', 60 * 52, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile63.png', 60 *53, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile86.png', 60 *53, 420),
        
        new Blocks('img/building_blocks/PNG/Tiles/tile68.png', 60 * 56, 270),
        new Blocks('img/building_blocks/PNG/Tiles/tile48.png', 60 * 57, 270),
        new Blocks('img/building_blocks/PNG/Tiles/tile63.png', 60 * 58, 270),

        new Blocks('img/building_blocks/PNG/Tiles/tile68.png', 60 * 62, 220),
        new Blocks('img/building_blocks/PNG/Tiles/tile63.png', 60 * 63, 220),

        new Blocks('img/building_blocks/PNG/Tiles/tile68.png', 60 *68, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile89.png', 60 *68, 420),
        new Blocks('img/building_blocks/PNG/Tiles/tile45.png', 60 * 69, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile47.png', 60 * 70, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile47.png', 60 * 71, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile48.png', 60 * 72, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile48.png', 60 * 73, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile63.png', 60 *74, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile86.png', 60 *74, 420),

        new Blocks('img/building_blocks/PNG/Tiles/tile68.png', 60 *78, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile89.png', 60 *78, 420),
        new Blocks('img/building_blocks/PNG/Tiles/tile48.png', 60 * 79, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile48.png', 60 * 80, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile63.png', 60 *81, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile86.png', 60 *81, 420),

        new Blocks('img/building_blocks/PNG/Tiles/tile68.png', 60 *85, 420),
        new Blocks('img/building_blocks/PNG/Tiles/tile46.png', 60 *86, 420),
        new Blocks('img/building_blocks/PNG/Tiles/tile48.png', 60 * 87, 420),
        new Blocks('img/building_blocks/PNG/Tiles/tile48.png', 60 * 88, 420),
        new Blocks('img/building_blocks/PNG/Tiles/tile48.png', 60 * 89, 420),
        new Blocks('img/building_blocks/PNG/Tiles/tile48.png', 60 * 90, 420),
        new Blocks('img/building_blocks/PNG/Tiles/tile63.png', 60 *91, 420),

        new Blocks('img/building_blocks/PNG/Tiles/tile68.png', 60 *95, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile89.png', 60 *95, 420),
        new Blocks('img/building_blocks/PNG/Tiles/tile48.png', 60 * 96, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile63.png', 60 *97, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile86.png', 60 *97, 420),

        new Blocks('img/building_blocks/PNG/Tiles/tile68.png', 60 *101, 300),
        new Blocks('img/building_blocks/PNG/Tiles/tile89.png', 60 *101, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile89.png', 60 *101, 420),
        new Blocks('img/building_blocks/PNG/Tiles/tile48.png', 60 * 102, 300),
        new Blocks('img/building_blocks/PNG/Tiles/tile48.png', 60 * 103, 300),
        new Blocks('img/building_blocks/PNG/Tiles/tile63.png', 60 *104, 300),
        new Blocks('img/building_blocks/PNG/Tiles/tile86.png', 60 *104, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile86.png', 60 *104, 420),

        new Blocks('img/building_blocks/PNG/Tiles/tile68.png', 60 * 108, 270),
        new Blocks('img/building_blocks/PNG/Tiles/tile63.png', 60 * 109, 270),

        new Blocks('img/building_blocks/PNG/Tiles/tile68.png', 60 *113, 300),
        new Blocks('img/building_blocks/PNG/Tiles/tile89.png', 60 *113, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile89.png', 60 *113, 420),
        new Blocks('img/building_blocks/PNG/Tiles/tile48.png', 60 * 114, 300),
        new Blocks('img/building_blocks/PNG/Tiles/tile48.png', 60 * 115, 300),
        new Blocks('img/building_blocks/PNG/Tiles/tile48.png', 60 * 116, 300),
        new Blocks('img/building_blocks/PNG/Tiles/tile46.png', 60 * 117, 300),
        new Blocks('img/building_blocks/PNG/Tiles/tile46.png', 60 * 118, 300),
        new Blocks('img/building_blocks/PNG/Tiles/tile48.png', 60 * 119, 300),
        new Blocks('img/building_blocks/PNG/Tiles/tile63.png', 60 *120, 300),
        new Blocks('img/building_blocks/PNG/Tiles/tile86.png', 60 *120, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile86.png', 60 *120, 420),

        new Blocks('img/building_blocks/PNG/Tiles/tile68.png', 60 *124, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile89.png', 60 *124, 420),
        new Blocks('img/building_blocks/PNG/Tiles/tile47.png', 60 * 125, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile48.png', 60 * 126, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile46.png', 60 * 127, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile63.png', 60 *128, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile86.png', 60 *128, 420),
],
[
        //Coins
        new Coin('img/8_coin/coin_1.png', 60 * 8, 100),   
        new Coin('img/8_coin/coin_1.png', 60 * 19, 60),  
        new Coin('img/8_coin/coin_1.png', 60 * 46, 130),  
        new Coin('img/8_coin/coin_1.png', 60 * 66, 100), 
        new Coin('img/8_coin/coin_1.png', 60 * 76, 120), 
        new Coin('img/8_coin/coin_1.png', 60 * 83, 190), 
        new Coin('img/8_coin/coin_1.png', 60 * 93, 190), 
        new Coin('img/8_coin/coin_1.png', 60 * 106, 100), 
        new Coin('img/8_coin/coin_1.png', 60 * 111, 100), 
        new Coin('img/8_coin/coin_1.png', 60 * 122, 100), 
]
);