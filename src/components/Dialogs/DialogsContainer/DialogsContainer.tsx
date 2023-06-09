import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';

import {addMessageAC, changeNewMessageTextAC} from '../../../redux/actions/dialogsAction';
import {Dialogs} from '../Dialogs';
import {AppStateType} from '../../../redux/redux-store';
import {InitialStateType} from '../../../redux/reducers/dialogsReducer';
import {withAuthRedirectComponent} from '../../../hoc/withAuthRedirect';


type MapStateToPropsType = {
    dialogsPage : InitialStateType
}

type MapDispatchToProps = {
    sendMessage: () => void
    onMessageChange: (text: string) => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToProps

const mapStateToProps = (state : AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

export const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {
        sendMessage: addMessageAC,
        onMessageChange: changeNewMessageTextAC
    }),
    withAuthRedirectComponent
)(Dialogs)