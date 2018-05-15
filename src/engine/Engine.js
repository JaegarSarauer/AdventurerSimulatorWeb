import UIManager from './manager/UIManager';
import SceneManager from './manager/SceneManager';
import UpdateManager from './manager/UpdateManager';
import InputManager from './manager/InputManager';


const Engine = new (
    
class Engine {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.ctx.imageSmoothingEnabled = false;
        this.ctx.webkitImageSmoothingEnabled = false;

        this.UIManager = UIManager;
        this.SceneManager = SceneManager;
        this.InputManager = InputManager;
        this.UpdateManager = UpdateManager;
    }

    start() {
        this.UpdateManager.start();
    }

    end() {
        this.UpdateManager.end();
    }

    pause() {
        this.UpdateManager.pause();
    }

    unpause() {
        this.UpdateManager.unpause();
    }
    
}

)();

export default Engine;