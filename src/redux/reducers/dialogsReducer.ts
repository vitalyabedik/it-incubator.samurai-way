import {MESSAGES_ADD, MESSAGES_UPDATE_NEW_TEXT} from '../actions/actionTypes';
import {DialogsPageType, MessageType, UsersType} from '../../types';
import {ActionTypes} from '../store';
import avatar1 from '../../assets/images/profile/avatars/avatar-1.jpg';
import avatar2 from '../../assets/images/profile/avatars/avatar-2.jpg';
import avatar3 from '../../assets/images/profile/avatars/avatar-3.jpg';
import avatar4 from '../../assets/images/profile/avatars/avatar-4.jpg';
import avatar5 from '../../assets/images/profile/avatars/avatar-5.jpg';
import avatar6 from '../../assets/images/profile/avatars/avatar-6.jpg';
import avatar7 from '../../assets/images/profile/avatars/avatar-7.jpg';
import avatar8 from '../../assets/images/profile/avatars/avatar-8.jpg';

const initialState = {
    dialogs: [
        {
            id: 1,
            avatar: avatar1,
            userFirstName: 'Dennis',
            userLastName: 'Han'
        },
        {
            id: 2,
            avatar: avatar2,
            userFirstName: 'Erica',
            userLastName: 'Jones'
        },
        {
            id: 3,
            avatar: avatar3,
            userFirstName: 'Alex',
            userLastName: 'Dolgove'
        },
        {
            id: 4,
            avatar: avatar4,
            userFirstName: 'Alex',
            userLastName: 'Dolgove'
        },
        {
            id: 5,
            avatar: avatar5,
            userFirstName: 'Dennis',
            userLastName: 'Han'
        },
        {
            id: 6,
            avatar: avatar6,
            userFirstName: 'Alex',
            userLastName: 'Dolgove'
        },
        {
            id: 7,
            avatar: avatar7,
            userFirstName: 'Stella',
            userLastName: 'Johnson'
        },
        {
            id: 8,
            avatar: avatar8,
            userFirstName: 'Dennis',
            userLastName: 'Han'
        },
    ] as UsersType,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'How are you?'},
        {id: 4, message: 'What happened?'},
        {id: 5, message: 'How can i do it?'},
        {id: 6, message: 'Yo'},
        {id: 7, message: 'Hello'},
        {id: 8, message: 'How are you?'},
    ] as MessageType[],
    newMessageText: 'it-kamasutra.com newMessageText'
}

export type InitialStateType = typeof initialState


export const dialogsReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case MESSAGES_ADD:
            const newMessage: MessageType = {
                id: 9,
                message: state.newMessageText,
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            };
        case MESSAGES_UPDATE_NEW_TEXT:
            return {
                ...state,
                newMessageText: action.newMessageText
            };
        default:
            return state;
    }
}