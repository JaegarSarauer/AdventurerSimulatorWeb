import UIManager from '../manager/UIManager';
import Button from './Button';

export default class Input extends Button {
    constructor(style, text) {
        super(Object.assign({ textAlign: 'left' }, style), text, 
            () => {
                this.watchKeyInput();
                this.updateStyle({backgroundColor: '#444444'});
            }, 
            () => {
                this.stopKeyInput();
                this.updateStyle({backgroundColor: '#000000'});
            });
        this.text = text;
        this.keyboardListener = null;
    }

    watchKeyInput() {
        if (this.keyboardListener !== null) //already listening
            return;
        this.keyboardListener = UIManager.addInputListener('KeyDown', (ev) => {
            if (!this.focussed || this.isPaused())
                return;
            if (ev.keyCode === 8) {
                this.text = this.text.substr(0, this.text.length - 1);
            } else if (ev.keyCode === 32 || (ev.keyCode >= 48 && ev.keyCode <= 90) || (ev.keyCode >= 96 && ev.keyCode <= 111) || (ev.keyCode >= 186 && ev.keyCode <= 222)){
                this.text += ev.key;
            }
        });
    }

    stopKeyInput() {
        if (this.keyboardListener !== null)
            this.keyboardListener.stop();
    }

    onEnd() {
        this.stopKeyInput();
        super.onEnd();
    }

    /*
    Used by the UI manager to call the display code.
    Do not call yourself.
    */
    render(ctx, parent) {
        super.render(ctx, parent);
        ctx.fillStyle = this.style.color;
        ctx.textBaseline = this.style.textBaseline;
        ctx.textAlign = this.style.textAlign;
        let textAlign = (this.style.textAlign === 'center' ? 0.5 : (this.style.textAlign === 'left' ? 0 : 1));
        let textBaseline = (this.style.textBaseline === 'middle' ? 0.5 : (this.style.textBaseline === 'top' ? 0 : 1));
        ctx.fillText(this.text, this.style.x + (this.style.w * textAlign), this.style.y + (this.style.h * textBaseline), this.style.w);
    }
}