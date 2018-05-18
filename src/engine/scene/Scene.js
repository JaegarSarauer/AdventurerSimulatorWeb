import Updateable from '../update/Updateable';
import Panel from '../ui/Panel';

/*
BaseClass for all Scenes. Extend this scene, do not instantiate on its own.
*/
export default class Scene extends Updateable {
    constructor(isPersistent) {
        super(isPersistent);
        /*
        UI Panels that are organized by their z index for easy rerendering.
        */
        this.baseUI = new Panel({});
        /*
        Updateable non-ui objects (anything not derived from a Panel).
        */
        this.updateableObjects = {};
    }
    
    subscribeUpdateable(updateable) {
        this.updateableObjects[updateable.id] = updateable;
        let unsubscribeCallback = () => {
            delete this.updateableObjects[updateable.id];
        }
        return unsubscribeCallback;
    }

    addUI(ui) {
        this.baseUI = ui;
        this.rerender();
    }

    rerender() {
        this.baseUI.rerender();
    }

    update() {
        super.update();
        let objKeys = Object.keys(this.updateableObjects);
        for (let i = 0; i < objKeys.length; i++) {
            this.updateableObjects[objKeys[i]].update();
        }
        this.rerender();
    }

    //remember to call the destructor if this is overridden.
    end() {
        let objKeys = Object.keys(this.updateableObjects);
        for (let i = 0; i < objKeys.length; i++) {
            this.updateableObjects[objKeys[i]].end();
        }
        super.end();
    }

    pause() {
        super.pause();
        let objKeys = Object.keys(this.updateableObjects);
        for (let i = 0; i < objKeys.length; i++) {
            this.updateableObjects[objKeys[i]].pause();
        }
    }

    unpause() {
        super.unpause();
        let objKeys = Object.keys(this.updateableObjects);
        for (let i = 0; i < objKeys.length; i++) {
            this.updateableObjects[objKeys[i]].unpause();
        }
    }
}