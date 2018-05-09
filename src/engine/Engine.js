const Engine = new (class Engine {
    constructor(test) {
        console.info(test);
        this.val = test;
    }

    set(val) {
        this.val = val;
    }
})(44);

export default Engine;