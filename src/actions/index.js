export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';

export const GET_USER_FOLLOWERS_REQUEST = 'GET_USER_FOLLOWERS_REQUEST';
export const GET_USER_FOLLOWERS_SUCCESS = 'GET_USER_FOLLOWERS_SUCCESS';

export const GET_USER_REPOS_REQUEST = 'GET_USER_REPOS_REQUEST';
export const GET_USER_REPOS_SUCCESS = 'GET_USER_REPOS_SUCCESS';

export const GET_REPOS_REQUEST = 'GET_REPOS_REQUEST';
export const GET_REPOS_SUCCESS = 'GET_REPOS_SUCCESS';

export const GET_BEST_REPOS_REQUEST = 'GET_BEST_REPOS_REQUEST';
export const GET_BEST_REPOS_SUCCESS = 'GET_BEST_REPOS_SUCCESS';

//user fetch actions
export const fetchUserRequest = (username) => ({
    type: GET_USER_REQUEST,
    username: username
})

export const fetchUserSuccess = (data) => ({
    type: GET_USER_SUCCESS,
    user: data
})

export const fetchUserFollowersRequest = (username) => ({
    type: GET_USER_FOLLOWERS_REQUEST,
    username: username
})

export const fetchUserFollowersSuccess = (data) => ({
    type: GET_USER_FOLLOWERS_SUCCESS,
    followers: data
})

export const fetchUserReposRequest = (username) => ({
    type: GET_USER_REPOS_REQUEST,
    username: username
})

export const fetchUserReposSuccess = (data) => ({
    type: GET_USER_REPOS_SUCCESS,
    repos: data
})

//repos fetch actions
export const fetchReposRequest = (searchText) => ({
    type: GET_REPOS_REQUEST,
    searchText: searchText
})

export const fetchReposSuccess = (data) => ({
    type: GET_REPOS_SUCCESS,
    repos: data
})

export const fetchBestReposRequest = (searchParam) => ({
    type: GET_BEST_REPOS_REQUEST,
    searchParam: searchParam
})

export const fetchBestReposSuccess = (data) => ({
    type: GET_BEST_REPOS_SUCCESS,
    repos: data
})