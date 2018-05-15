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
        ctx.fillStyle = s.color;
        ctx.fillText(text, s.x, s.y);
    }
}