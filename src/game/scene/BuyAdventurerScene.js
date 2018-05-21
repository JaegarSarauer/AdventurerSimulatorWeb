import Panel from '../../engine/ui/Panel';
import Button from '../../engine/ui/Button';
import Input from '../../engine/ui/Input';
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
        let adventurerNameInput = new Input({
            x: 800,
            y: 400,
            w: 400,
            h: 100,
            backgroundColor: '#000000',
        }, 'hey');
        let adventurerNameInput2 = new Input({
            x: 800,
            y: 600,
            w: 400,
            h: 100,
            backgroundColor: '#000000',
        }, 'hey');
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
        base.add(adventurerNameInput);
        base.add(adventurerNameInput2);
        base.add(closeButton);
        this.addUI(base);
    }

    onUpdate() {
    }
}