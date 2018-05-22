import UIManager from '../../engine/manager/UIManager';
import Panel from '../../engine/ui/Panel';
import Button from '../../engine/ui/Button';
import Engine from '../../engine/Engine';
import BuyAdventurerScene from '../scene/BuyAdventurerScene';

import Game from '../Game';

export default class SettingsPanel extends Panel {
    constructor() {
        super({
            x: 1600,
            y: 1200,
            w: 800,
            h: 400,
            backgroundColor: '#FF0F00'
        });
    }

    onStart() {
        let buyAdventurerButton = new Button({x: 0, y: 0, w: 200, h: 200, backgroundColor: '#0000FF'}, 'Buy', () => {
            Engine.SceneManager.addScene(new BuyAdventurerScene());
        })
        this.add(buyAdventurerButton);
    }
}