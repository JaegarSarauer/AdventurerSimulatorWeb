/*
    A internal manager. The structure of this class is a wrapper, meant to be used
    internally within another object or class.


    A class that any data can be wrapped in to allow for other code to
    watch for updates.
*/
export default class Subscriber {
    constructor(data) {
        this.value = data;
        this.listeners = {};
    }

    /*
    newValue = new the value of the subscriber.
    trigger = should trigger the listeners.
    Sets data and triggers listeners (optional).
    */
    set(newValue, trigger = true) {
        this.value = newValue;
        if (trigger)
            this.trigger();
    }

    /*
    triggers the events but doesnt set data.
    */
    trigger() {
        let keys = Object.keys(this.listeners);
        for (let i = 0; i < keys.length; i++) {
            this.listeners[keys[i]].callback(this.value);
        }
    }

    get() {
        return this.value;
    }

    watch(callback, trigger = true) {
        let token = {
            id: Math.random().toString(),
            callback,
            stop: () => {
                delete this.listeners[token.id];
            }
        }
        this.listeners[token.id] = token;
        if (trigger)
            callback(this.value);
        return token;
    }
}