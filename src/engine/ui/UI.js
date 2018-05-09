import Engine from '../Engine';

const UI = new (
    
class UI {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.ctx.canvas.width = document.body.clientWidth;
        this.ctx.canvas.height = document.body.clientHeight;
    }

    /*
    Passing in a panel here will call the panel's rerender.
    This allows for increased control on when to render when it is more important in the future.
    */
    rerender(panel) {
        panel.render(this.ctx);
    }
}

)();

export default UI;