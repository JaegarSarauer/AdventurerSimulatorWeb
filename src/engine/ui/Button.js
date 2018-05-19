import UIManager from '../manager/UIManager';
import Text from './Text';

export default class Button extends Text {
    constructor(style, text, onClickCallback) {
        super(style, text);
        this.onClickCallback = onClickCallback;
        this.leftClickListener = UIManager.addInputListener('LeftClick', (ev) => {
            if (ev.x >= this.style.x 
                && ev.x <= this.style.x + this.style.w
                && ev.y >= this.style.y
                && ev.y <= this.style.y + this.style.h)
            this.onClickCallback();
        });
    }

    destroy() {
        this.leftClickListener.stop();
        super.destroy();
    }

    /*
    Used by the UI manager to call the display code.
    Do not call yourself.
    */
    render(ctx, parent) {
        super.render(ctx, parent);
    }
}