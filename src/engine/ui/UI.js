import Engine from '../Engine';

const UI = new (
    
class UI {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.ctx.canvas.width = document.body.clientWidth;
        this.ctx.canvas.height = document.body.clientHeight;
        this.ctx.imageSmoothingEnabled = false;
        this.ctx.webkitImageSmoothingEnabled = false;
    }

    /*
    Passing in a panel here will call the panel's rerender.
    This allows for increased control on when to render when it is more important in the future.

    panel = The panel to render
    parent = The parent to this panel for relative calulations. Null if no parent.
    */
    rerender(panel, parent) {
        panel.render(this.ctx, parent);
    }
}

)();

export default UI;