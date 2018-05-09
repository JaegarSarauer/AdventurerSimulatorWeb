import Engine from '../engine/Engine';
import GameScene from './scene/GameScene';

const Game = new (class AdventurerSimulator {
    constructor() {

    }

    start() {
        Engine.SceneManager.addScene(new GameScene());
    }
})();

export default Game;