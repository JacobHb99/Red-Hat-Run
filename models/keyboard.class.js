class Keyboard {
    LEFT = false;
    RIGHT = false;
    UP = false;
    DOWN = false;
    ATTAK = false;
    JUMP = false;


    constructor() {
        this.bindBtsPressEvents();
    }

/**
 * Checks whether the touch buttons are activated or not.
 */
    bindBtsPressEvents() {
        document.getElementById('canvasNextBtn').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.RIGHT = true;
        })

        document.getElementById('canvasNextBtn').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.RIGHT = false;
        })

        document.getElementById('canvasPrewBtn').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.LEFT = true;
        })

        document.getElementById('canvasPrewBtn').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.LEFT = false;
        })


        document.getElementById('canvasJumpBtn').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.JUMP = true;
        })

        document.getElementById('canvasJumpBtn').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.JUMP = false;
        })
    }
}