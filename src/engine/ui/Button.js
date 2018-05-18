import UIManager from '../manager/UIManager';
import Text from './Text';

export default class Button extends Text {
    constructor(style, text, onClickCallback) {
        super(style, text);
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