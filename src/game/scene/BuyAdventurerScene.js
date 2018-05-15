import Panel from '../../engine/ui/Panel';
import Scene from '../../engine/scene/Scene';
import MessageBox from '../ui/MessageBox';
import * as Image from '../const/Image';
import Game from '../Game';

export default class BuyAdventurerScene extends Scene {
    constructor() {
        super(true);
        this.basePanel = null;
    }

    onStart() {
        this.basePanel = new Panel({
            x: 200,
            y: 200,
            w: 2000,
            h: 1200,
            backgroundColor: '#00ff00',
        });
        this.basePanel.rerender();
    }

    onUpdate() {
    }
}