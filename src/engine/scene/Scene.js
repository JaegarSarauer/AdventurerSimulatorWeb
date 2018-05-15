import Updateable from '../update/Updateable';

/*
BaseClass for all Scenes. Extend this scene, do not instantiate on its own.
*/
export default class Scene extends Updateable {
    constructor(isPersistent) {
        super(isPersistent);
        this.updateableObjects = {};
    }
    
    subscribeUpdateable(updateable) {
        this.updateableObjects[updateable.id] = updateable;
        let unsubscribeCallback = () => {
            delete this.updateableObjects[updateable.id];
        }
        return unsubscribeCallback;
    }

    onUpdate() {
        let objKeys = Object.keys(this.updateableObjects);
        for (let i = 0; i < objKeys.length; i++) {
            if (!this.updateableObjects[objKeys[i]].hasPaused) {
                if (this.updateableObjects[objKeys[i]].hasStarted) {
                    this.updateableObjects[objKeys[i]].update();
                } else {
                    this.updateableObjects[objKeys[i]].start();
                }
            }
        }
    }

    //remember to call the destructor if this is overridden.
    onEnd() {
        this.destructor();
    }

    onPause() {
        this.hasPaused = true;
        let objKeys = Object.keys(this.updateableObjects);
        for (let i = 0; i < objKeys.length; i++) {
            this.updateableObjects[objKeys[i]].pause();
        }
    }

    onUnpause() {
        this.hasPaused = false;
        let objKeys = Object.keys(this.updateableObjects);
        for (let i = 0; i < objKeys.length; i++) {
            this.updateableObjects[objKeys[i]].unpause();
        }
    }

    destructor() {
        let objKeys = Object.keys(this.updateableObjects);
        for (let i = 0; i < objKeys.length; i++) {
            this.updateableObjects[objKeys[i]].end();
        }
        this.unsubscribeCallback();
    }
}