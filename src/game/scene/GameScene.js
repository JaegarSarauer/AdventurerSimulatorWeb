import Panel from '../../engine/ui/Panel';
import Scene from '../../engine/scene/Scene';
import MessageBox from '../ui/MessageBox';
import SettingsPanel from '../ui/SettingsPanel';
import * as Image from '../const/Image';
import Game from '../Game';

export default class GameScene extends Scene {
    constructor() {
        super(true);
        this.basePanel = null;
        this.gamePanel = null;
        this.messagesPanel = null;
        this.settingsPanel = null;
        this.adventurersPanel = null;
    }

    onStart() {
        this.basePanel = new Panel({
            x: 0,
            y: 0,
            w: 2400,
            h: 1600,
            backgroundColor: '#0000ff',
        });
        this.gamePanel = new Panel({
            w: 1400,
            h: 1200,
            backgroundColor: '#FF0000'
        });
        this.messagesPanel = new MessageBox({
            y: 1200,
            w: 1600,
            h: 400,
            backgroundImage: Image.UI.MessageBox,
        });
        this.settingsPanel = new SettingsPanel();
        this.adventurersPanel = new Panel({
            x: 1400,
            w: 1000,
            h: 1200,
            backgroundColor: '#FF00F0'
        });
        this.basePanel.add(this.gamePanel);
        this.basePanel.add(this.messagesPanel);
        this.basePanel.add(this.settingsPanel);
        this.basePanel.add(this.adventurersPanel);
        this.addUI(this.basePanel);

        Game.MessageManager.addMessage('Welcome to Adventurer Simulator.');
    }

    onUpdate() {
    }
}