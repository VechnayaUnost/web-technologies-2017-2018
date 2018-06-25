import {
    userInfo,
    userFollowers,
    userRepos,
    repos,
    bestRepos
} from '../../src/reducers/index'
import { shallow, mount } from 'enzyme';

describe('Reducers test', () => {
    it('userInfo reducer', () => {
        let state = {
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
        let userReducer = userInfo(state, { type: 'GET_USER_REQUEST', user: {} });
        expect(userReducer).toEqual(state);
        userReducer = userInfo(state, { type: 'GET_USER_SUCCESS', user: { userName: 'Neytiri', userLogin: 'neytiritiri' } });
        expect(userReducer).toEqual({
            userImg: '',
            userName: 'Neytiri',
            userLogin: 'neytiritiri',
            userBio: '',
            userBlog: '',
            userCompany: '',
            userLocation: '',
            userEmail: '',
            userSocial: ''
        });
    });

    it('userFollowers reducer', () => {
        let state = [];
        let userFolReducer = userFollowers(state, { type: 'GET_USER_FOLLOWERS_REQUEST', followers: [] });
        expect(userFolReducer).toEqual(state);
        userFolReducer = userFollowers(state, { type: 'GET_USER_FOLLOWERS_SUCCESS', followers: [{ fol1: 'name1' }, { fol2: 'name2' }] });
        expect(userFolReducer).toEqual({ 0: { fol1: 'name1' }, 1: { fol2: 'name2' } });
    });

    it('userRepos reducer', () => {
        let state = [];
        let userRepReducer = userRepos(state, { type: 'GET_USER_REPOS_REQUEST', repos: [] });
        expect(userRepReducer).toEqual(state);
        userRepReducer = userRepos(state, { type: 'GET_USER_REPOS_SUCCESS', repos: [{ rep1: 'name1' }, { rep2: 'name2' }] });
        expect(userRepReducer).toEqual({ 0: { rep1: 'name1' }, 1: { rep2: 'name2' } });
    });

    it('repos reducer', () => {
        let state = [];
        let reposReducer = repos(state, { type: 'GET_REPOS_REQUEST', repos: [] });
        expect(reposReducer).toEqual(state);
        reposReducer = repos(state, { type: 'GET_REPOS_SUCCESS', repos: { items: [{ rep1: 'name1' }, { rep2: 'name2' }] } });
        expect(reposReducer).toEqual([{ rep1: 'name1' }, { rep2: 'name2' }]);
    });

    it('bestRepos reducer', () => {
        let state = [];
        let bestReposReducer = bestRepos(state, { type: 'GET_BEST_REPOS_REQUEST', repos: [] });
        expect(bestReposReducer).toEqual(state);
        bestReposReducer = bestRepos(state, { type: 'GET_BEST_REPOS_SUCCESS', repos: { items: [{ rep1: 'name1' }, { rep2: 'name2' }] } });
        expect(bestReposReducer).toEqual([{ rep1: 'name1' }, { rep2: 'name2' }]);
    });
});