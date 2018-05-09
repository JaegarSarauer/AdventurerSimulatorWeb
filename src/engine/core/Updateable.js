/*
Contains methods for updating from parent heiarchy.
Anything that updates in the game should extend this.
*/
export default class Updateable {

    onStart() {}
    onUpdate() {}
    onEnd() {}
    onPause() {}
    onUnpause() {}
}