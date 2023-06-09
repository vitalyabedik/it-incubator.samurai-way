import {MESSAGES_ADD, MESSAGES_UPDATE_NEW_TEXT} from './actionTypes';

export type DialogsActionType = ReturnType<typeof addMessageAC> | ReturnType<typeof changeNewMessageTextAC>

export const addMessageAC = () => ({
    type: MESSAGES_ADD
} as const)

export const changeNewMessageTextAC = (newMessageText: string) => ({
    type: MESSAGES_UPDATE_NEW_TEXT,
    newMessageText
} as const)