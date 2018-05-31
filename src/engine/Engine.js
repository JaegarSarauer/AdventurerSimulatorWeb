import UIManager from './manager/UIManager';
import SceneManager from './manager/SceneManager';
import UpdateManager from './manager/UpdateManager';
import InputManager from './manager/InputManager';
import CanvasManager from './manager/CanvasManager';
import RendererManager from './manager/RendererManager';


const Engine = new (
    
class Engine {
    constructor() {
        this.CanvasManager = CanvasManager;
        this.UIManager = UIManager;
        this.SceneManager = SceneManager;
        this.InputManager = InputManager;
        this.UpdateManager = UpdateManager;
        this.RendererManager = RendererManager;
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