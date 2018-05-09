import Engine from '../engine/Engine';
import GameScreen from './screen/GameScreen';

const Game = new (class AdventurerSimulator {
    constructor() {

    }

    start() {
        let gameScreen = new GameScreen();
    }
})();

export default Game;