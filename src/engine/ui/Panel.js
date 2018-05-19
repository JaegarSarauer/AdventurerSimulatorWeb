import UIManager from '../manager/UIManager';
import Updateable from '../update/Updateable';

export default class Panel extends Updateable {
    constructor(style) {
        super();
        //The id of this panel that the parent of this panel uses to identify it.
        this.parentID = -1; 
        this.children = {};
        this.style = Object.assign({
            x: 0, //number as px or string as %
            y: 0, //number as px or string as %
            z: 0, //number as px or string as %
            w: 0, //number as px or string as %
            h: 0, //number as px or string as %
            color: '#FFFFFF', //RGB color
            backgroundColor: '#000000', //RGB color
            backgroundImage: null, //Asset link
            textAlign: 'left', //left, center, right
            textBaseline: 'middle', //top, middle, bottom
            font: '32px Arial', //text size and font name
        }, style);
    }

    /*
    Add a panel as a child to this panel.
    The child parent will belong to this panel in a list for later reference,
    and the child.parentID is assigned the ID it is recognized as to this parent.
    This ID assignment is for removing is with O(1) lookup.
    */
    add(panel) {
        let id = Object.keys(this.children).length;
        panel.parentID = id;
        this.children[id] = panel;
        if (typeof panel.style.x === 'string') { //x in % 
            panel.style.x = (parseInt(panel.style.x) / 100) * this.style.w;
        } else {
            panel.style.x += this.style.x;
        }
        if (typeof panel.style.y === 'string') { //y in %
            panel.style.y = (parseInt(panel.style.y) / 100) * this.style.h;
        } else {
            panel.style.y += this.style.y;
        }
        if (typeof panel.style.w === 'string') { //width in %
            panel.style.w = (parseInt(panel.style.w) / 100) * this.style.w;
        }
        if (typeof panel.style.h === 'string') { //height in %
            panel.style.h = (parseInt(panel.style.h) / 100) * this.style.h;
        }
        this.rerender();
    }

    /*
    Removes a child panel from this parent. Make sure the child existed to this parent
    and not another one.
    */
    remove(panel) {
        let id = panel.parentID;
        delete this.children[id];
        panel.parentID = -1;
        this.rerender();
    }

    /*
    Cleanup code, and all children associated
    with it.
    */
    destroy() {
        for (let i = 0; i < Object.keys(this.children).length; i++) {
            this.children[i].destroy();
        }
    }

    /*
    Updates style but doesn't rerender anything.
    */
    setStyle(style) {
        Object.assign(this.style, style);
    }
    
    /*
    Updates the style of the panel and rerenders the element
    and all children.
    */
    updateStyle(style) {
        Object.assign(this.style, style);
        this.rerender();
    }

    /*
    Rerenders the panel and all children.
    */
    rerender(parent = null) {
        UIManager.rerender(this, parent);
        for (let i = 0; i < Object.keys(this.children).length; i++) {
            this.children[i].rerender(this);
        }
    }

    /*
    Used by the UI manager to call the display code.
    Do not call yourself.
    */
    render(ctx, parent) {
        let s = Object.assign({}, this.style);
        ctx.fillStyle = s.backgroundColor;
        if (s.backgroundImage != null) {
            ctx.drawImage(s.backgroundImage, s.x, s.y, s.w, s.h);
        } else {
            ctx.fillRect(s.x, s.y, s.w, s.h);
        }
    }
}