import Engine from '../Engine';
import Updateable from '../update/Updateable';

const CanvasManager = new (

/*
Manages the HTML canvas element and other data between
the engine and game, and the HTML element that scales and displays
it correctly. 

Intended to be used by other managers to get managed canvas data,
so it doesn't have to be repeated in the Input, Render, and UI
managers.
*/
class CanvasManager extends Updateable {
    constructor() {
        super(true);

        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');

        this.width = 0;
        this.height = 0;
        this.DPIWidth = 0;
        this.DPIHeight = 0;

        this.adjust();
    }

    onStart() {

    }

    setCanvasSize(w, h) {
        this.ctx.canvas.width = w;
        this.ctx.canvas.height = h;
        this.ctx.imageSmoothingEnabled = false;
        this.ctx.webkitImageSmoothingEnabled = false;
        this.adjust();
    }

    /*
    Any function that plays with sizing, ratio, or other 
    DOM elements with the canvas should call this after.
    */
    adjust() {
        this.ctx.imageSmoothingEnabled = false;
        this.ctx.webkitImageSmoothingEnabled = false;

        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.DPIWidth = this.width / this.canvas.clientWidth;
        this.DPIHeight = this.height / this.canvas.clientHeight;
    }
}

)();

export default CanvasManager;