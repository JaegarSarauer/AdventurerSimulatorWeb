import {MessageType} from '../managers/MessageManager';

export const Message = (
    msg = '', 
    type = MessageType.Normal
) => {
    return {msg, type};
};