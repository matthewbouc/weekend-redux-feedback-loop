import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger'
import { Provider } from 'react-redux';


const feelingReducer = (state = '', action) => {
    if (action.type === 'GET_FEELINGS'){
        return action.payload
    }
    if (action.type === 'RESET'){
        return action.payload
    }
    return state;
}

const understandingReducer = (state = '', action) => {
    if (action.type === 'GET_UNDERSTANDING'){
        return action.payload
    }
    if (action.type === 'RESET'){
        return action.payload
    }
    return state;
}

const supportReducer = (state = '', action) => {
    if (action.type === 'GET_SUPPORT'){
        return action.payload
    }
    if (action.type === 'RESET'){
        return action.payload
    }
    return state;
}

const commentReducer = (state = '', action) => {
    if (action.type === 'GET_COMMENT'){
        return action.payload
    }
    if (action.type === 'RESET'){
        return action.payload
    }
    return state;
}


const storeInstance = createStore(
    combineReducers({
        feelingReducer,
        understandingReducer,
        supportReducer,
        commentReducer
    }),
    applyMiddleware(logger),
);

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
