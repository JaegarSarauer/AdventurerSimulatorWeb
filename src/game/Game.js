import Engine from '../engine/Engine';
import Panel from '../engine/ui/Panel';

const Game = new (class AdventurerSimulator {
    constructor() {

    }

    start() {
        let test = new Panel({
            x: 10, 
            y: 10, 
            w: 80, 
            h: 200,
            backgroundColor: '#ff0000',
        });
        let test2 = new Panel({
            x: '5%', 
            y: '5%', 
            w: '90%', 
            h: '90%',
            backgroundColor: '#00ff00',
        });
        test.add(test2);

    }
})();

export default Game;