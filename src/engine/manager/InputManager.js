import Engine from '../Engine';
import Updateable from '../update/Updateable';
import Subscriber from './internal/Subscriber';

const InputManager = new (
    
class InputManager extends Updateable {
    constructor() {
        super(true);
        this.events = {
            LeftClick: new Subscriber({
                x: -1,
                y: -1,
                shiftHeld: false,
                ctrlHeld: false,
            }),
            RightClick: new Subscriber({
                x: -1,
                y: -1,
                shiftHeld: false,
                ctrlHeld: false,
            }),
        };
    }

    onStart() {
        //left click manager
        Engine.CanvasManager.canvas.addEventListener('click', (event) => {
            this.events.LeftClick.set({
                x: event.offsetX * Engine.CanvasManager.DPIWidth,
                y: event.offsetY * Engine.CanvasManager.DPIHeight,
                shiftHeld: event.shiftKey,
                ctrlHeld: event.ctrlKey,
            });
        });

        //right click manager
        Engine.CanvasManager.canvas.oncontextmenu = (event) => {
            event.preventDefault();
            this.events.RightClick.set({
                x: event.offsetX * Engine.CanvasManager.DPIWidth,
                y: event.offsetY * Engine.CanvasManager.DPIHeight,
                shiftHeld: event.shiftKey,
                ctrlHeld: event.ctrlKey,
            });
        };
    }
}

)();

export default InputManager;