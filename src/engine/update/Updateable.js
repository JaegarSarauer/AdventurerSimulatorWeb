import UpdateManager from '../manager/UpdateManager';

/*
Contains methods for updating from parent heiarchy.
Anything that updates in the game should extend this.
*/
export default class Updateable {
    constructor(isPersistent = false) {
        this.id = -1; //Populated on next line automatically.
        this.hasStarted = false;
        this.hasPaused = false;
        this.unsubscribeCallback = UpdateManager.subscribeUpdateable(this, isPersistent);
    }

    start() {
        if (!this.hasStarted) {
            this.onStart();
            this.hasStarted = true;
        }
    }

    update() {
        if (this.hasPaused)
            return;

        if (this.hasStarted) {
            this.onUpdate();
        } else {
            this.start();
        }
    }

    end() {
        this.onEnd();
        this.destructor();
    }

    pause() {
        console.error('FUCK OFF', this)
        if (!this.hasPaused) {
            this.onPause();
            this.hasPaused = true;
        }
    }

    unpause() {
        if (this.hasPaused) {
            this.onUnpause();
            this.hasPaused = false;
        }
    }

    onStart() {}
    onUpdate() {}
    onEnd() {}
    onPause() {}
    onUnpause() {}

    destructor() {
        this.unsubscribeCallback();
    }
}