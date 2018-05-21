import Engine from '../Engine';
import Subscriber from './internal/Subscriber';
import Updateable from '../update/Updateable';

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
            KeyDown: new Subscriber({
                key: '',
                keyCode: 0,
                shiftHeld: false,
                ctrlHeld: false,
                repeat: false,
            })
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

        //Key down manager
        Engine.CanvasManager.canvas.addEventListener('keydown', (event) => {
            console.info(event);
            this.events.KeyDown.set({
                key: event.key,
                keyCode: event.keyCode,
                shiftHeld: event.shiftKey,
                ctrlHeld: event.ctrlKey,
                repeat: event.repeat,
            });
        });
    }
}

)();

export default InputManager;