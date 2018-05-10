import UIManager from './UIManager';
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
        let s = Object.assign({}, this.style);
        if (parent != null) {
            let ps = Object.assign({}, parent.style);
            s.x += ps.x;
            s.y += ps.y;
            s.z += ps.z;
        }
        ctx.fillStyle = s.backgroundColor;
        if (s.backgroundImage != null) {
            ctx.drawImage(s.backgroundImage, s.x, s.y, s.w, s.h);
        } else {
            ctx.fillRect(s.x, s.y, s.w, s.h);
        }
        ctx.fillStyle = s.color;
        ctx.fillText(text, s.x, s.y);
    }
}