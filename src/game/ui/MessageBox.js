import UIManager from '../../engine/manager/UIManager';
import Panel from '../../engine/ui/Panel';
import Text from '../../engine/ui/Text';

import Game from '../Game';

export default class MessageBox extends Panel {
    constructor(style) {
        super(style);
        this.messages = [];
    }

    /*
    Used by the UI manager to call the display code.
    Do not call yourself.
    */
    render(ctx, parent) {
        super.render(ctx, parent);
        ctx.font = this.style.font;
        ctx.textBaseline = 'bottom';
        ctx.textAlign = this.style.textAlign;
        Game.MessageManager.messages.value.map((msg, i) => {
            ctx.fillStyle = msg.type.color;
            ctx.fillText(msg.msg, this.style.x + 18, (this.style.y - 18) + (this.style.h - (i * 37)));
        })
    }
}