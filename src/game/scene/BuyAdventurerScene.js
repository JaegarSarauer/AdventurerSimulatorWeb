import Panel from '../../engine/ui/Panel';
import Button from '../../engine/ui/Button';
import Scene from '../../engine/scene/Scene';
import MessageBox from '../ui/MessageBox';
import * as Image from '../const/Image';
import Game from '../Game';

export default class BuyAdventurerScene extends Scene {
    constructor() {
        super(true);
    }

    onStart() {
        let base = new Panel({
            x: 200,
            y: 200,
            w: 2000,
            h: 1200,
            backgroundColor: '#00ff00',
        });
        let closeButton = new Button({
            x: 800, 
            y: 800, 
            w: 400, 
            h: 200, 
            backgroundColor: '#ff00f0',
            textAlign: 'center',
        }, 
        'Close', 
        () => {
            Game.Engine.SceneManager.removeScene();
        });
        console.info(base, closeButton)
        base.add(closeButton);
        this.addUI(base);
    }

    onUpdate() {
    }
}