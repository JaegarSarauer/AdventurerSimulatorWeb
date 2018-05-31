import Engine from '../engine/Engine';

import {MessageManager, MessageType} from './manager/MessageManager';

import GameScene from './scene/GameScene';
import BuyAdventurerScene from './scene/BuyAdventurerScene';

const Game = new (class AdventurerSimulator {
    constructor() {
        this.Engine = Engine;
        this.MessageManager = MessageManager;
        this.MessageType = MessageType;
    }

    start() {
        Engine.start();
        Engine.RendererManager.setup();
        // Engine.SceneManager.addScene(new GameScene(), true);
        // Engine.SceneManager.addScene(new BuyAdventurerScene(), false);
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