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
        this.GL = this.canvas.getContext('webgl2');

        this.width = 0;
        this.height = 0;
        this.DPIWidth = 0;
        this.DPIHeight = 0;

        this.adjust();
    }

    onStart() {

    }

    setCanvasSize(w, h) {
        this.GL.canvas.width = w;
        this.GL.canvas.height = h;
        this.GL.imageSmoothingEnabled = false;
        this.GL.webkitImageSmoothingEnabled = false;
        this.adjust();
    }

    /*
    Any function that plays with sizing, ratio, or other 
    DOM elements with the canvas should call this after.
    */
    adjust() {
        this.GL.imageSmoothingEnabled = false;
        this.GL.webkitImageSmoothingEnabled = false;

        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.DPIWidth = this.width / this.canvas.clientWidth;
        this.DPIHeight = this.height / this.canvas.clientHeight;
    }
}

)();

export default CanvasManager;