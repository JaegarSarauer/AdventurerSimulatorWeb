import UIManager from './UIManager';


export default class Button extends Text {
    constructor(style, onClickCallback) {
        super(style);
        this.onClickCallback = onClickCallback;
    }

    

    /*
    Used by the UI manager to call the display code.
    Do not call yourself.
    */
    render(ctx, parent) {
        super.render(ctx, parent);
    }
}