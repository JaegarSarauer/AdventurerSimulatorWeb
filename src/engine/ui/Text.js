import UIManager from '../manager/UIManager';
import Panel from './Panel';

export default class Text extends Panel {
    constructor(style, text) {
        super(style);
        this.text = text;
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