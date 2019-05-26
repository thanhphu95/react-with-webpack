import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'
import appReducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(logger)(createStore);

const store = createStoreWithMiddleware(appReducers);

const container = document.getElementById('app');

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, container);