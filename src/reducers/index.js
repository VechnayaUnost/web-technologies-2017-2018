import {
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FOLLOWERS_REQUEST,
    GET_USER_FOLLOWERS_SUCCESS,
    GET_USER_REPOS_REQUEST,
    GET_USER_REPOS_SUCCESS,
    GET_REPOS_REQUEST,
    GET_REPOS_SUCCESS,
    GET_BEST_REPOS_REQUEST,
    GET_BEST_REPOS_SUCCESS
} from '../actions';
import { combineReducers } from 'redux';

export const initialState = {
    userImg: '',
    userName: '',
    userLogin: '',
    userBio: '',
    userBlog: '',
    userCompany: '',
    userLocation: '',
    userEmail: '',
    userSocial: ''
};

export const userInfo = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_REQUEST:
            return state;
        case GET_USER_SUCCESS:
            return Object.assign({}, state, action.user);
        default: {
            return state;
        }
    }
};

export const userFollowers = (state = [], action) => {
    switch (action.type) {
        case GET_USER_FOLLOWERS_REQUEST: {
            return state;
        }
        case GET_USER_FOLLOWERS_SUCCESS: {
            return Object.assign({}, state, action.followers);
        }
        default: {
            return state;
        }
    }
};

export const userRepos = (state = [], action) => {
    switch (action.type) {
        case GET_USER_REPOS_REQUEST: {
            return state;
        }
        case GET_USER_REPOS_SUCCESS: {
            return Object.assign({}, state, action.repos);
        }
        default: {
            return state;
        }
    }
};

export const repos = (state = [], action) => {
    switch (action.type) {
        case GET_REPOS_REQUEST: {
            return state;
        }
        case GET_REPOS_SUCCESS: {
            return action.repos.items;
        }
        default: {
            return state;
        }
    }
}

export const bestRepos = (state = [], action) => {
    switch (action.type) {
        case GET_BEST_REPOS_REQUEST: {
            return state;
        }
        case GET_BEST_REPOS_SUCCESS: {
            return action.repos.items;
        }
        default: {
            return state;
        }
    }
}

const rootReducer = combineReducers({
    userInfo,
    userFollowers,
    userRepos,
    repos,
    bestRepos
})

export default rootReducer;