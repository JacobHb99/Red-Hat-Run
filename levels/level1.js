const Level1 = new Level(
    [
        //SKY
        new Background('img/screens/BG.png', -60* 12, 0, 840, 2500),
        new Background('img/screens/BG.png', 1690, 0, 840, 2500),

        //HILLS
        new Background('img/building_blocks/PNG/Objects/blue_bg_object5.png', 0, 320, 60, 120),
        new Background('img/building_blocks/PNG/Objects/blue_bg_object6.png', 120, 325, 60, 120),
        new Background('img/building_blocks/PNG/Objects/blue_bg_object5.png', 60 * 18, 320, 60, 120),
        new Background('img/building_blocks/PNG/Objects/blue_bg_object7.png', 60 * 20, 320, 60, 120),
        new Background('img/building_blocks/PNG/Objects/blue_bg_object7.png', 60 * 41, 260, 60, 120),
        new Background('img/building_blocks/PNG/Objects/blue_bg_object5.png', 60 * 43, 260, 60, 120),

        //SMALL TREES
        new Background('img/building_blocks/PNG/Objects/trees2_1.png', 30, 270, 100, 70),
        new Background('img/building_blocks/PNG/Objects/trees2_3.png', 120, 280, 100, 70),

        new Background('img/building_blocks/PNG/Objects/trees2_1.png', 1000, 268, 100, 70),
        new Background('img/building_blocks/PNG/Objects/trees2_1.png', 750, 268, 100, 70),

        new Background('img/building_blocks/PNG/Objects/trees2_1.png', 60 * 30, 270, 100, 70),
        new Background('img/building_blocks/PNG/Objects/trees2_3.png', 60 * 31, 280, 100, 70),

        new Background('img/building_blocks/PNG/Objects/trees2_1.png', 60 * 43, 210, 100, 70),
        new Background('img/building_blocks/PNG/Objects/trees2_3.png', 60 * 44, 220, 100, 70),

        new Background('img/building_blocks/PNG/Objects/trees2_1.png', 60 * 50, 270, 100, 70),
        new Background('img/building_blocks/PNG/Objects/trees2_3.png', 60 * 51, 280, 100, 70),

        //BIG TREES
        new Background('img/building_blocks/PNG/Objects/trees1_5.png', 60, 240, 140, 90),
        new Background('img/building_blocks/PNG/Objects/rectangle2.png', 60, 192, 80, 80),
        new Background('img/building_blocks/PNG/Objects/rectangle3.png', 30, 210, 80, 80),
        new Background('img/building_blocks/PNG/Objects/rectangle4.png', 110, 260, 50, 60),

        new Background('img/building_blocks/PNG/Objects/trees1_5.png', 60 * 52, 240, 140, 90),
        new Background('img/building_blocks/PNG/Objects/rectangle2.png', 60 * 52, 192, 80, 80),
        new Background('img/building_blocks/PNG/Objects/rectangle3.png', 60 * 52 - 30, 210, 80, 80),
        new Background('img/building_blocks/PNG/Objects/rectangle4.png', 60 * 52 + 50, 260, 50, 60),

        //STONES
        new Background('img/building_blocks/PNG/Objects/rocks1_5.png', -40, 320, 50, 50),
        new Background('img/building_blocks/PNG/Objects/rocks1_5.png', 60 * 53, 320, 50, 50),
        new Background('img/building_blocks/PNG/Objects/rocks1_5.png', 60 * 12, 320, 50, 50),
        new Background('img/building_blocks/PNG/Objects/rocks1_1.png', 60 * 20, 328, 50, 50),
        new Background('img/building_blocks/PNG/Objects/rocks1_1.png', 60 * 15, 328, 50, 50),
        new Background('img/building_blocks/PNG/Objects/rocks1_1.png', 60 * 23, 328, 50, 50),
        new Background('img/building_blocks/PNG/Objects/rocks1_1.png', 105, 328, 50, 50),

        //OTHER DECOR
        new Background('img/building_blocks/PNG/Objects/pointer.png', 180, 270, 100, 80),
        new Background('img/building_blocks/PNG/Objects/pointer.png', 60 * 41, 210, 100, 80),

        new Background('img/building_blocks/PNG/Objects/fence.png', 120 * 3, 240, 100, 60),
        new Background('img/building_blocks/PNG/Objects/fence.png', 120 * 23, 240, 100, 60),

        //DARK PARTS 
        new Background('img/building_blocks/PNG/Tiles/tile11.png', -240, 420, 60, 480),
        new Background('img/building_blocks/PNG/Tiles/tile11.png', 60 * 7, 300, 420, 120, 120),
        new Background('img/building_blocks/PNG/Tiles/tile11.png', 60 * 12, 360, 60 * 2, 60 * 22),
        new Background('img/building_blocks/PNG/Tiles/tile11.png', 60 * 41, 360, 60 * 2, 60 * 5),
        new Background('img/building_blocks/PNG/Tiles/tile11.png', 60 * 50, 360, 60 * 2, 60 * 8),

        //ENDZONE
        new Background('img/backgrounds/targetMushroom.png', 60 * 55, 187, 60 * 3, 200),
    ],
    [
        new Orc(60 * 23, 310, 60 * 12),
        new Orc(60 * 32, 310, 60 * 26),
        new Orc(60 * 46, 250, 60 * 41),
    ],
    [
        //TESTBLOCK
        //new Blocks('img/building_blocks/PNG/Tiles/tile47.png', -120, 300),

        //GROUND BLOCKS
        new Blocks('img/building_blocks/PNG/Tiles/tile68.png', -240, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile46.png', -180, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile47.png', -120, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile48.png', -60, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile49.png', 0, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile50.png', 60, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile47.png', 60 *2, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile63.png', 60 *3, 360),

        new Blocks('img/building_blocks/PNG/Tiles/tile68.png', 60 *6, 300),
        new Blocks('img/building_blocks/PNG/Tiles/tile47.png', 60 *7, 300),
        new Blocks('img/building_blocks/PNG/Tiles/tile48.png', 60 *8, 300),
        new Blocks('img/building_blocks/PNG/Tiles/tile63.png', 60 *9, 300),

        new Blocks('img/building_blocks/PNG/Tiles/tile68.png', 60 *12, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile89.png', 60 *12, 420),
        new Blocks('img/building_blocks/PNG/Tiles/tile48.png', 60 *13, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile49.png', 60 *14, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile46.png', 60 *15, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile46.png', 60 *16, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile50.png', 60 *17, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile47.png', 60 *18, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile48.png', 60 *19, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile47.png', 60 *20, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile46.png', 60 *21, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile47.png', 60 *22, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile46.png', 60 *23, 360),

        new Blocks('img/building_blocks/PNG/Tiles/tile68.png', 60 *24, 300),
        new Blocks('img/building_blocks/PNG/Tiles/tile63.png', 60 *25, 300),
        new Blocks('img/building_blocks/PNG/Tiles/tile25.png', 60 *24, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile26.png', 60 *25, 360),

        new Blocks('img/building_blocks/PNG/Tiles/tile46.png', 60 *26, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile47.png', 60 *27, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile48.png', 60 *28, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile50.png', 60 *29, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile48.png', 60 *30, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile48.png', 60 *31, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile46.png', 60 *32, 360),

        new Blocks('img/building_blocks/PNG/Tiles/tile68.png', 60 *33, 300),
        new Blocks('img/building_blocks/PNG/Tiles/tile25.png', 60 *33, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile63.png', 60 *34, 300),
        new Blocks('img/building_blocks/PNG/Tiles/tile85.png', 60 *34, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile86.png', 60 *34, 420),

        new Blocks('img/building_blocks/PNG/Tiles/tile68.png', 60 *41, 300),
        new Blocks('img/building_blocks/PNG/Tiles/tile87.png', 60 *41, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile89.png', 60 *41, 420),
        new Blocks('img/building_blocks/PNG/Tiles/tile48.png', 60 *42, 300),
        new Blocks('img/building_blocks/PNG/Tiles/tile48.png', 60 *43, 300),
        new Blocks('img/building_blocks/PNG/Tiles/tile46.png', 60 *44, 300),
        new Blocks('img/building_blocks/PNG/Tiles/tile48.png', 60 *45, 300),
        new Blocks('img/building_blocks/PNG/Tiles/tile63.png', 60 *46, 300),
        new Blocks('img/building_blocks/PNG/Tiles/tile85.png', 60 *46, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile86.png', 60 *46, 420),

        new Blocks('img/building_blocks/PNG/Tiles/tile68.png', 60 *49, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile89.png', 60 *49, 420),
        new Blocks('img/building_blocks/PNG/Tiles/tile48.png', 60 *50, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile46.png', 60 *51, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile48.png', 60 *52, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile47.png', 60 *53, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile50.png', 60 *54, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile48.png', 60 *55, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile48.png', 60 *56, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile48.png', 60 *57, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile63.png', 60 *58, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile86.png', 60 *58, 420),

        //AIR BLOCKS
        new Blocks('img/building_blocks/PNG/Tiles/tile67.png', 60 *37, 240),
        new Blocks('img/building_blocks/PNG/Tiles/tile64.png', 60 *38, 240),

        new Blocks('img/building_blocks/PNG/Tiles/tile89.png', -240, 420),
        new Blocks('img/building_blocks/PNG/Tiles/tile86.png', 60 *3, 420),

        new Blocks('img/building_blocks/PNG/Tiles/tile89.png', 60 *6, 420),
        new Blocks('img/building_blocks/PNG/Tiles/tile87.png', 60 *6, 360),

        new Blocks('img/building_blocks/PNG/Tiles/tile85.png', 60 *9, 360),
        new Blocks('img/building_blocks/PNG/Tiles/tile86.png', 60 *9, 420),
],
[
        //Coins
        new Coin('img/8_coin/coin_1.png', 0, 180),
        new Coin('img/8_coin/coin_1.png', 60 * 5, 120),
        new Coin('img/8_coin/coin_1.png', 60 * 11, 80), 
        new Coin('img/8_coin/coin_1.png', 60 * 20, 120), 
        new Coin('img/8_coin/coin_1.png', 60 * 27, 100), 
        new Coin('img/8_coin/coin_1.png', 60 * 35, 80),  
        new Coin('img/8_coin/coin_1.png', 60 * 40, 60), 
        new Coin('img/8_coin/coin_1.png', 60 * 48, 80), 
        new Coin('img/8_coin/coin_1.png', 60 * 51, 250), 
        new Coin('img/8_coin/coin_1.png', 60 * 55, 250), 
]

);

