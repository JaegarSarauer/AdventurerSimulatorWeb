import {MessageType} from '../manager/MessageManager';

export const Message = (
    msg = '', 
    type = MessageType.Normal
) => {
    return {msg, type};
};