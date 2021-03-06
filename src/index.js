import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger'
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';
import theme from './components/Theme/theme';

// Holds input from FeelingPage
const feelingReducer = (state = '', action) => {
    if (action.type === 'GET_FEELINGS'){
        return action.payload
    }
    if (action.type === 'RESET'){
        return action.payload
    }
    return state;
}

// Holds input from UnderstandingPage
const understandingReducer = (state = '', action) => {
    if (action.type === 'GET_UNDERSTANDING'){
        return action.payload
    }
    if (action.type === 'RESET'){
        return action.payload
    }
    return state;
}

// Holds input from SupportPage
const supportReducer = (state = '', action) => {
    if (action.type === 'GET_SUPPORT'){
        return action.payload
    }
    if (action.type === 'RESET'){
        return action.payload
    }
    return state;
}

// Holds input from CommentsPage
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
        {/* import custom theme from Themes.*/}
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
