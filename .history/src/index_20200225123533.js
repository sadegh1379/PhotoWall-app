import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import {BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer from './redux/Reducer';
import {Provider} from 'react-redux'

const store = createStore(rootReducer);



ReactDOM.render(
<Router><Main /></Router>
, document.getElementById('root'));

