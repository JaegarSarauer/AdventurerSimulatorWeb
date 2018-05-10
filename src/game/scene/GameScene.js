import Panel from '../../engine/ui/Panel';
import Scene from '../../engine/scene/Scene';
import MessageBox from '../ui/MessageBox';
import * as Image from '../const/Image';

export default class GameScene extends Scene {
    onStart() {
        let base = new Panel({
            x: 0,
            y: 0,
            w: 2400,
            h: 1600,
            backgroundColor: '#0000ff',
        });
        let game = new Panel({
            w: 1400,
            h: 1200,
            backgroundColor: '#FF0000'
        });
        let messages = new MessageBox({
            y: 1200,
            w: 1600,
            h: 400,
            backgroundImage: Image.UI.MessageBox,
        });
        let settings = new Panel({
            x: 1600,
            y: 1200,
            w: 800,
            h: 400,
            backgroundColor: '#FF0F00'
        });
        let adventurers = new Panel({
            x: 1400,
            w: 1000,
            h: 1200,
            backgroundColor: '#FF00F0'
        });
        base.add(game);
        base.add(messages);
        base.add(settings);
        base.add(adventurers);
        base.rerender();
    }
}