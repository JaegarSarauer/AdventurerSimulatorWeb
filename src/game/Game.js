import Engine from '../engine/Engine';

import {MessageManager, MessageType} from './manager/MessageManager';

import GameScene from './scene/GameScene';
import BuyAdventurerScene from './scene/BuyAdventurerScene';

const Game = new (class AdventurerSimulator {
    constructor() {
        this.MessageManager = MessageManager;
        this.MessageType = MessageType;
    }

    start() {
        console.info('start')
        Engine.start();
        Engine.SceneManager.addScene(new GameScene(), true);
        Engine.SceneManager.addScene(new BuyAdventurerScene(), false);
    }

    end() {
        Engine.end();
    }

    pause() {
        Engine.pause();
    }

    unpause() {
        Engine.unpause();
    }
})();

export default Game;