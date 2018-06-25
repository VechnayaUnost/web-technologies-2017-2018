import {
    fetchUserRequest,
    fetchUserSuccess,
    fetchUserFollowersRequest,
    fetchUserFollowersSuccess,
    fetchUserReposRequest,
    fetchUserReposSuccess,
    fetchReposRequest,
    fetchReposSuccess,
    fetchBestReposRequest,
    fetchBestReposSuccess
} from '../../src/actions/index'

describe('Actions test', () => {
    it('fetchUserRequest test', () => {
        const fetchRequest = fetchUserRequest('neytiritiri');
        expect(fetchRequest).toEqual({ type: 'GET_USER_REQUEST', username: 'neytiritiri' });
    });
    
    it('fetchUserSuccess test', () => {
        const fetchSuccess = fetchUserSuccess({someObjKey: 'someValue'});
        expect(fetchSuccess).toEqual({ type: 'GET_USER_SUCCESS', user: {someObjKey: 'someValue'} });
    });

    it('fetchUserFollowersRequest test', () => {
        const fetchRequest = fetchUserFollowersRequest('neytiritiri');
        expect(fetchRequest).toEqual({ type: 'GET_USER_FOLLOWERS_REQUEST', username: 'neytiritiri' });
    });
    
    it('fetchUserFollowersSuccess test', () => {
        const fetchSuccess = fetchUserFollowersSuccess([{fol1: 'name1'}, {fol2: 'name2'}]);
        expect(fetchSuccess).toEqual({ type: 'GET_USER_FOLLOWERS_SUCCESS', followers: [{fol1: 'name1'}, {fol2: 'name2'}] });
    });

    it('fetchUserReposRequest test', () => {
        const fetchRequest = fetchUserReposRequest('neytiritiri');
        expect(fetchRequest).toEqual({ type: 'GET_USER_REPOS_REQUEST', username: 'neytiritiri' });
    });
    
    it('fetchUserReposSuccess test', () => {
        const fetchSuccess = fetchUserReposSuccess([{rep1: 'name1'}, {rep2: 'name2'}]);
        expect(fetchSuccess).toEqual({ type: 'GET_USER_REPOS_SUCCESS', repos: [{rep1: 'name1'}, {rep2: 'name2'}] });
    });

    it('fetchReposRequest test', () => {
        const fetchRequest = fetchReposRequest('react');
        expect(fetchRequest).toEqual({ type: 'GET_REPOS_REQUEST', searchText: 'react' });
    });
    
    it('fetchReposSuccess test', () => {
        const fetchSuccess = fetchReposSuccess([{rep1: 'name1'}, {rep2: 'name2'}]);
        expect(fetchSuccess).toEqual({ type: 'GET_REPOS_SUCCESS', repos: [{rep1: 'name1'}, {rep2: 'name2'}] });
    });

    it('fetchBestReposRequest test', () => {
        const fetchRequest = fetchBestReposRequest('stars');
        expect(fetchRequest).toEqual({ type: 'GET_BEST_REPOS_REQUEST', searchParam: 'stars' });
    });
    
    it('fetchBestReposSuccess test', () => {
        const fetchSuccess = fetchBestReposSuccess([{rep1: 'name1'}, {rep2: 'name2'}]);
        expect(fetchSuccess).toEqual({ type: 'GET_BEST_REPOS_SUCCESS', repos: [{rep1: 'name1'}, {rep2: 'name2'}] });
    });
});