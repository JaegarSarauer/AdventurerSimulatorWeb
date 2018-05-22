import Updateable from '../update/Updateable';

const SceneManager = new (
    
class SceneManager extends Updateable {
    constructor() {
        super(true);
        this.scenes = [];
    }

    /*
    Add an updateable object to this scene to be managed by it. The scene manager will 
    add these to the current scene.
    */
    subscribeUpdateable(updateable) {
        let scene = this.getCurrentScene();
        if (scene != null)
            scene.subscribeUpdateable(updateable);
    }

    getCurrentScene() {
        if (this.scenes.length > 0)
            return this.scenes[this.scenes.length - 1];
        return null;
    }

    onStart() {

    }

    onUpdate() {
        if (this.scenes.length > 0) {
            this.scenes[this.scenes.length - 1].update();
        }
    }

    onEnd() {
        if (this.scenes.length > 0)
            for (let i = this.scenes.length - 1; i > 0; i--) {
                this.scenes[i].end();
            }
    }

    onPause() {
        if (this.scenes.length > 0)
            this.scenes[this.scenes.length - 1].pause();
    }

    onUnpause() {
        if (this.scenes.length > 0)
            this.scenes[this.scenes.length - 1].unpause();
    }

    addScene(scene) {
        this.onPause();
        this.scenes.push(scene);
    }

    removeScene() {
        let current = this.scenes.pop();
        current.end();
        this.onUnpause();
    }
}

)();

export default SceneManager;