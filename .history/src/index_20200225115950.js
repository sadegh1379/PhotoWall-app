import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer from './redux/Reducer';

const store = createStore



ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));

