import Engine from '../engine/Engine';
import Panel from '../engine/ui/Panel';

const Game = new (class AdventurerSimulator {
    constructor() {

    }

    start() {
        let test = new Panel(10, 10, 300, 200);
        test.updateStyle({backgroundColor: '#ff0000'});
    }
})();

export default Game;