import {applyMiddleware, createStore} from "redux";
import {combineReducers} from 'redux'
import thunk from "redux-thunk";
import userInfo from './main_info'

const store = createStore(userInfo, applyMiddleware(thunk));

export default store;