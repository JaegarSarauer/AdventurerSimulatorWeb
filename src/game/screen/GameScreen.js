import Panel from '../../engine/ui/Panel';

export default class GameScreen {
    constructor() {
        let back = new Panel({
            x: 0,
            y: 0,
            w: 1200,
            h: 800,
            backgroundColor: '#0000ff',
        });
        let game = new Panel({
            w: 700,
            h: 600,
            backgroundColor: '#FF0000'
        });
        let messages = new Panel({
            y: 600,
            w: 800,
            h: 200,
            backgroundColor: '#FFF000'
        });
        let settings = new Panel({
            x: 800,
            y: 600,
            w: 400,
            h: 200,
            backgroundColor: '#FF0F00'
        });
        let adventurers = new Panel({
            x: 700,
            w: 500,
            h: 600,
            backgroundColor: '#FF00F0'
        });
    }
}