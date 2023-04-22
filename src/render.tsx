import React from 'react';
import ReactDOM from 'react-dom';

import './assets/styles/styles.css'
import './index.css';

import {App} from './App/App';
import {addPost, StateType} from './redux/state'

export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <App state={state} addPost={addPost}/>,
        document.getElementById('root')
    );
}