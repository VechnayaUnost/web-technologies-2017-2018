import {fetchSuccessFollowers}  from '../actions/action'
import {fetchSuccessRepos}  from '../actions/action'
const url = 'https://api.github.com/users/';

export default function request(uName) {
    return fetch(url+uName)
        .then(res => res.json());
}

export const sendRequestFollowers = (login) => (dispatch) => {
    return fetch(url + login + "/followers")
        .then(res => res.json())
        .then(json => dispatch(fetchSuccessFollowers(json)))
}

export const sendRequestRepos = (login) => (dispatch) => {
    return fetch(url + login + "/repos")
        .then(res => res.json())
        .then(json => dispatch(fetchSuccessRepos(json)))
}