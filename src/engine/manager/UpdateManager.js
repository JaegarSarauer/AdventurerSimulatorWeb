import SceneManager from './SceneManager';

const FRAME_MS = 30;

const UpdateManager = new (
    
class UpdateManager {
    constructor() {
        //globally assigning ids to all objects.
        this.updateableObjectID = 0;
        //persistent objects.
        this.updateableObjects = {};
        //main update loop
        this.updateLoop = null;
        this.hasPaused = false;
    }

    /*
    Subscribes all updateable object automatically.
    isPersistent [bool] = Should the object be added to the current scene, or always exist
    through all scenes.

    Returns a callback function to call when you're ready to destroy the object and remove from
    the updates.
    */
    subscribeUpdateable(updateable, isPersistent) {
        let id = this.updateableObjectID++;
        updateable.id = id;
        if (isPersistent) {
            this.updateableObjects[id] = updateable;
        } else {
            SceneManager.subscribeUpdateable(updateable);
        }
        let unsubscribeCallback = () => {
            delete this.updateableObjects[id];
        }
        return unsubscribeCallback;
    }

    start() {
        this.updateLoop = setInterval(() => {
            if (!this.hasPaused)
                this.update();
        }, FRAME_MS);
    }

    update() {
        let objKeys = Object.keys(this.updateableObjects);
        for (let i = 0; i < objKeys.length; i++) {
            this.updateableObjects[objKeys[i]].update();
        }
    }

    end() {
        let objKeys = Object.keys(this.updateableObjects);
        for (let i = 0; i < objKeys.length; i++) {
            this.updateableObjects[objKeys[i]].end();
        }
        clearInterval(this.updateLoop);
    }

    pause() {
        let objKeys = Object.keys(this.updateableObjects);
        for (let i = 0; i < objKeys.length; i++) {
            this.updateableObjects[objKeys[i]].pause();
        }
        this.hasPaused = true;
    }

    unpause() {
        let objKeys = Object.keys(this.updateableObjects);
        for (let i = 0; i < objKeys.length; i++) {
            this.updateableObjects[objKeys[i]].unpause();
        }
        this.hasPaused = false;
    }
}

)();

export default UpdateManager;