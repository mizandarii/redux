import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, bindActionCreators } from 'redux';
import reducer from './reducer';
import * as actions from './actions';

const store = createStore(reducer);

const {dispatch, subscribe, getState} = store

const update = () => {
    document.getElementById('counter').textContent = getState().value;
}

subscribe(update);

const {inc, inc5, dec, dec3, rnd} = bindActionCreators(actions, dispatch);


document.getElementById('inc').addEventListener('click', inc);
document.getElementById('inc5').addEventListener('click', inc5);
document.getElementById('dec').addEventListener('click', dec);
document.getElementById('dec3').addEventListener('click', dec3);


document.getElementById('rnd').addEventListener('click', () => {
    const value = Math.floor(Math.random() * 10);
    rnd(value);
});


ReactDOM.render(
    <React.StrictMode>
        <>
        
        </>
    </React.StrictMode>,
    document.getElementById('root') 
);


