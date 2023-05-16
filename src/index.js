import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import counterReducer from "./Store/reducers/counter.js";
import resultReducer from "./Store/reducers/result.js";


const rootReducer = combineReducers({
  ctr: counterReducer,
  resR: resultReducer
});
const store = createStore(rootReducer);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>


);
