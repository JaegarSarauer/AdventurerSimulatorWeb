import Subscriber from '../../engine/manager/internal/Subscriber';
import {Message} from '../const/struct';

export const MessageType = {
    Normal: {
        color: '#000000',
    },
    Warn: {
        color: '#ffc332'
    },
    Error: {
        color: '#FF0000',
    },
    Chat: {
        color: '#0000FF',
    }
};

export const MessageManager = new (
    
class MessageManager {
    constructor() {
        this.messages = new Subscriber([]);
    }

    addMessage(msg, type) {
        let a = Message(msg, type);
        this.messages.value.unshift(a);
        if (this.messages.value.length > 10)
            this.messages.value.splice(10);
        this.messages.trigger();
    }
}

)();