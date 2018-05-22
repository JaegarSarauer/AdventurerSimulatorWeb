import UIManager from '../manager/UIManager';
import Text from './Text';

export default class Button extends Text {
    constructor(style, text, onClickCallback, onUnfocusCallback = () => {}) {
        super(Object.assign({ textAlign: 'center' }, style), text);
        this.onClickCallback = onClickCallback;
        this.onUnfocusCallback = onUnfocusCallback;
        this.focussed = false;
        this.leftClickListener = UIManager.addInputListener('LeftClick', (ev) => {
            if (this.isPaused())
                return;

            if (ev.x >= this.style.x 
                && ev.x <= this.style.x + this.style.w
                && ev.y >= this.style.y
                && ev.y <= this.style.y + this.style.h) {
                    this.focussed = true;
                    this.onClickCallback(ev);
                } else if (this.focussed) {
                    this.focussed = false;
                    this.onUnfocusCallback(ev);
                }
        });
    }

    onEnd() {
        this.leftClickListener.stop();
        super.onEnd();
    }

    /*
    Used by the UI manager to call the display code.
    Do not call yourself.
    */
    render(ctx, parent) {
        super.render(ctx, parent);
    }
}