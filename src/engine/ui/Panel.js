import UI from './UI';


export default class Panel {
    constructor(style) {
        //The id of this panel that the parent of this panel uses to identify it.
        this.parentID = -1; 
        this.children = {};
        this.style = Object.assign({
            x: 0,
            y: 0,
            z: 0,
            w: 0, 
            h: 0,
            backgroundColor: '#000000',
        }, style);
        this.rerender();
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
        }
        if (typeof panel.style.y === 'string') { //y in %
            panel.style.y = (parseInt(panel.style.y) / 100) * this.style.h;
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
        UI.rerender(this, parent);
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
        if (parent != null) {
            let ps = Object.assign({}, parent.style);
            s.x += ps.x;
            s.y += ps.y;
            s.z += ps.z;
        }
        ctx.fillStyle = s.backgroundColor;
        ctx.fillRect(s.x, s.y, s.w, s.h);
    }
}