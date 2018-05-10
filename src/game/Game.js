import Engine from '../engine/Engine';

import {MessageManager, MessageType} from './managers/MessageManager';

import GameScene from './scene/GameScene';

const Game = new (class AdventurerSimulator {
    constructor() {
        this.MessageManager = MessageManager;
    }

    start() {
        Engine.SceneManager.addScene(new GameScene());
        MessageManager.addMessage('Test message 1', MessageType.Normal);
        MessageManager.addMessage('Test message 2', MessageType.Warn);
        MessageManager.addMessage('Test message 3', MessageType.Error);
        MessageManager.addMessage('Test message 4', MessageType.Chat);
        MessageManager.addMessage('Test message 5', MessageType.Normal);
        MessageManager.addMessage('Test message 6', MessageType.Normal);
        MessageManager.addMessage('Test message 7', MessageType.Normal);
        MessageManager.addMessage('Test message 8', MessageType.Normal);
        MessageManager.addMessage('Test message 9', MessageType.Normal);
        MessageManager.addMessage('Test message 10', MessageType.Normal);
    }
})();

export default Game;