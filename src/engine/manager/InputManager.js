import Engine from '../Engine';

const InputManager = new (
    
class InputManager {
    constructor() {
    }

    onStart() {
        Engine.canvas.addEventListener('click', (event) => {
            console.info(event);
        });
    }
}

)();

export default InputManager;