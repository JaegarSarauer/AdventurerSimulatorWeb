import Engine from '../Engine';
import Updateable from '../update/Updateable';

const InputManager = new (
    
class InputManager extends Updateable {
    constructor() {
        super(true);
    }

    onStart() {
        Engine.CanvasManager.canvas.addEventListener('click', (event) => {
            let xClick = event.offsetX * Engine.CanvasManager.DPIWidth;
            let yClick = event.offsetY * Engine.CanvasManager.DPIHeight;
            console.info(xClick, yClick);
        });
    }
}

)();

export default InputManager;