import UIManager from '../../engine/ui/UIManager';
import Panel from '../../engine/ui/Panel';
import Text from '../../engine/ui/Text';

import Game from '../Game';

export default class MessageBox extends Panel {
    constructor(style) {
        super(style);
        this.messages = [];
        Game.MessageManager.messages.watch((messages) => {
            this.rerender();
        })
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
        ctx.font = s.font;
        Game.MessageManager.messages.value.map((msg, i) => {
            ctx.fillStyle = msg.type.color;
            ctx.fillText(msg.msg, s.x + 15, (s.y - 20) + (s.h - (i * 37)));
        })
    }
}