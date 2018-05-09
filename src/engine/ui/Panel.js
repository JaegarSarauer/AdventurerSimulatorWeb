import UI from './UI';

export default class Panel {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.style = {
            backgroundColor: '#000000',
        };
    }

    setStyle(style) {
        this.style = style;
    }
    
    updateStyle(style) {
        this.style = style;
        UI.rerender(this);
    }

    rerender() {
        UI.rerender(this);
    }

    render(ctx) {
        ctx.fillStyle = this.style.backgroundColor;
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}