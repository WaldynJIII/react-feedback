import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
const feedBack = (state = [
    {feels: '',
understanding: '',
support: '',
comments: '',
funk: ''}
], action) => {
    if (action.type === 'FEEL_IT') {
        this.setState({
            feels: action.payload
        })
        return state
    } else if (action.type === 'UNDERSTAND_IT') {
        this.setState({
            understanding: action.payload
        })
        return state
    } else if (action.type === 'SUPPORT_IT') {
        this.setState({
            support: action.payload
        })
        return state
    }
    else if (action.type === 'COMMENT_IT') {
        this.setState({
            comments: action.payload,
            funk: 'onReady'
        })
        return state
    }
    else if (action.type === 'YEET_AND_REPLACE') {
    this.setState({
        state = []
    })
    return state
}}
const storeInstance = createStore(
    combineReducers({
        feedBack,
        
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
