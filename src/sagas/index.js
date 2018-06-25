import {
    sendRequestUser,
    sendRequestFollowers,
    sendRequestRepos,
    searchRepositoriesRequest,
    searchBestReposRequest
} from '../githubAPI/request';
import { call, put, all, takeLatest } from 'redux-saga/effects';

import * as actions from '../actions';

//user sagas
export function* fetchUser(action) {
    const user = yield call(sendRequestUser, action.username);

    yield put(actions.fetchUserSuccess(user));
}

export function* watchFetchUser() {
    yield takeLatest(actions.GET_USER_REQUEST, fetchUser);
}

export function* fetchUserFollowers(action) {
    const followers = yield call(sendRequestFollowers, action.username);

    yield put(actions.fetchUserFollowersSuccess(followers));
}

export function* watchFetchUserFollowers() {
    yield takeLatest(actions.GET_USER_FOLLOWERS_REQUEST, fetchUserFollowers);
}

export function* fetchUserRepos(action) {
    const repos = yield call(sendRequestRepos, action.username);

    yield put(actions.fetchUserReposSuccess(repos));
}

export function* watchFetchUserRepos() {
    yield takeLatest(actions.GET_USER_REPOS_REQUEST, fetchUserRepos);
}

//repositories sagas
export function* fetchRepos(action) {
    const repos = yield call(searchRepositoriesRequest, action.searchText);

    yield put(actions.fetchReposSuccess(repos));
}

export function * watchFetchRepos() {
    yield takeLatest(actions.GET_REPOS_REQUEST, fetchRepos);
}

export function* fetchBestRepos(action) {
    console.log('triggered v2');
    const repos = yield call(searchBestReposRequest, action.searchParam);
    console.log(repos);

    yield put(actions.fetchBestReposSuccess(repos));
}

export function * watchFetchBestRepos() {
    yield takeLatest(actions.GET_BEST_REPOS_REQUEST, fetchBestRepos);
}

export default function* rootSaga() {
    yield all([
        watchFetchUser(),
        watchFetchUserFollowers(),
        watchFetchUserRepos(),
        watchFetchRepos(),
        watchFetchBestRepos()
    ])
}