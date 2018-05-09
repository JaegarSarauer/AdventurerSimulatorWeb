import Updateable from '../core/Updateable';

const SceneManager = new (class SceneManager extends Updateable {
    constructor() {
        super();
        this.scenes = [];
    }

    onStart() {

    }

    onUpdate() {
        if (this.scenes.length > 0)
            this.scenes[scenes.length - 1].onUpdate();
    }

    onEnd() {
        if (this.scenes.length > 0)
            for (let i = this.scenes.length - 1; i > 0; i--) {
                this.scenes[i].onEnd();
            }
    }

    addScene(scene) {
        if (this.scenes.length > 0)
            this.scenes[scenes.length - 1].onPause();
        this.scenes.push(scene);
        scene.onStart();
    }

    removeScene() {
        let current = this.scenes.pop();
        current.onEnd();
        if (this.scenes.length > 0)
            this.scenes[scenes.length - 1].onUnpause();

    }
})();

export default SceneManager;