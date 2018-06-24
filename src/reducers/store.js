import {applyMiddleware, createStore} from "redux";
import {combineReducers} from 'redux'
import thunk from "redux-thunk";
import reducerFollowers from '../reducers/ReducerFollowers'
import reducerRepos from '../reducers/ReducerRepos'
import userInfo from './main_info'

const reducer = combineReducers({userInfo,reducerRepos,reducerFollowers});
const store = createStore(reducer, applyMiddleware(thunk));

export default store;