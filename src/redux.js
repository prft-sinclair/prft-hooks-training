import { combineReducers } from "redux";
import AppReducer from './person'
import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  App: AppReducer
});

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware())
);