import React from 'react';
import UserRepositoriesComponent from '../src/components/UserRepositoriesComponent';
import { shallow, mount, configure } from 'enzyme';
import { shallowToJson, mountToJson } from 'enzyme-to-json';
import { BrowserRouter } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

configure({ adapter: new Adapter() });

describe('UserRepositories component test', () => {
    const mockStore = configureStore([ thunk ]);
    const initialState = {
        userInfo: {
            login: 'GoGoPandora'
        },
        userRepos: [
            {
                name: 'AvatarSkeleton',
                description: 'Creates Avatar skeleton with some preinstalled options',
                stargazers_count: 321,
                watchers_count: 123,
                language: 'C#',
                fork: true,
                archived: false
            },
            {
                name: 'AvatarMountConnection',
                description: 'Avatar mount connection is easier with this tool',
                stargazers_count: 543,
                watchers_count: 345,
                language: 'Java',
                fork: false,
                archived: true
            },
            {
                name: 'SoldiersBarracks',
                description: 'Barrack project for human soldiers',
                stargazers_count: 2,
                watchers_count: 1,
                language: 'Paper&Pen',
                fork: false,
                archived: false
            }
        ]
    }

    let store;

    beforeEach(() => {
        store = mockStore(initialState);
    })

    it('UserRepositories component rendered succesfully', () => {
        const userRepositories = mount(
            <BrowserRouter>
                <UserRepositoriesComponent store={store} />
            </BrowserRouter>
        );
        expect(mountToJson(userRepositories)).toMatchSnapshot();
    });

    it('Switch filter', () => {
        const userRepositories = mount(
            <BrowserRouter>
                <UserRepositoriesComponent store={store} />
            </BrowserRouter>
        );
        expect(userRepositories.find('.repos-type').props().value).toBe('All');
        expect(userRepositories.find('.repos-lang').props().value).toBe('All');
        userRepositories.find('.repos-type').simulate('change', { target: { value: 'Forks' } });
        userRepositories.find('.repos-lang').simulate('change', { target: { value: 'C#' } });
        expect(userRepositories.find('.repos-type').props().value).toBe('Forks');
        expect(userRepositories.find('.repos-lang').props().value).toBe('C#');
        userRepositories.find('.repos-type').simulate('change', { target: { value: 'Archived' } });
        expect(userRepositories.find('.repos-type').props().value).toBe('Archived');
        userRepositories.find('.repos-type').simulate('change', { target: { value: 'SomethingElse' } });
        expect(userRepositories.find('.repos-type').props().value).toBe('SomethingElse');
    });
    
    it('UserRepositories rendered without user login', () => {
        const fakeInitialState = {
            userInfo: {
                login: ''
            },
            userRepos: [
                {
                    name: 'AvatarSkeleton',
                    description: 'Creates Avatar skeleton with some preinstalled options',
                    stargazers_count: 321,
                    watchers_count: 123
                }
            ]
        }
        const fakeStore = mockStore(fakeInitialState);
        const userRepositories = mount(
            <BrowserRouter>
                <UserRepositoriesComponent store={fakeStore} />
            </BrowserRouter>
        );
        expect(userRepositories.prop('userLogin')).toBe(undefined);
        expect(mountToJson(userRepositories)).toMatchSnapshot();
    })
});