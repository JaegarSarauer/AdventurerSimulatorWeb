import Engine from '../Engine';

const UIManager = new (
    
class UIManager {
    constructor() {
    }

    setCanvasSize(w, h) {
        Engine.ctx.canvas.width = w;
        Engine.ctx.canvas.height = h;
        Engine.ctx.imageSmoothingEnabled = false;
        Engine.ctx.webkitImageSmoothingEnabled = false;
    }

    /*
    Passing in a panel here will call the panel's rerender.
    This allows for increased control on when to render when it is more important in the future.

    panel = The panel to render
    parent = The parent to this panel for relative calulations. Null if no parent.
    */
    rerender(panel, parent) {
        panel.render(Engine.ctx, parent);
    }
}

)();

export default UIManager;