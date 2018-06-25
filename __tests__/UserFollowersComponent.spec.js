import React from 'react';
import UserFollowersComponent from '../src/components/UserFollowersComponent';
import { shallow, mount, configure } from 'enzyme';
import { shallowToJson, mountToJson } from 'enzyme-to-json';
import { BrowserRouter } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

configure({ adapter: new Adapter() });

describe('UserFollowers component test', () => {
    const mockStore = configureStore([ thunk ]);
    const initialState = {
        userInfo: {
            login: 'GoGoPandora'
        },
        userFollowers: [
            {
                login: 'FakeAvatar1337',
                avatar_url: 'https://vokrug.tv/pic/person/2/3/8/8/23887ed0f336731e4c62eedcb25bf4d0.jpeg'
            }
        ]
    }

    let store;

    beforeEach(() => {
        store = mockStore(initialState);
    })

    it('UserFollowers component rendered succesfully', () => {
        const userFollowers = mount(
            <BrowserRouter>
                <UserFollowersComponent store={store} />
            </BrowserRouter>
        );
        expect(mountToJson(userFollowers)).toMatchSnapshot();
    });

    it('UserFollowers rendered without user login', () => {
        const fakeInitialState = {
            userInfo: {
                login: ''
            },
            userFollowers: [
                {
                    login: 'FakeAvatar1337',
                    avatar_url: 'https://vokrug.tv/pic/person/2/3/8/8/23887ed0f336731e4c62eedcb25bf4d0.jpeg'
                }
            ]
        }
        const fakeStore = mockStore(fakeInitialState);
        const userFollowers = mount(
            <BrowserRouter>
                <UserFollowersComponent store={fakeStore} />
            </BrowserRouter>
        );
        expect(userFollowers.prop('userLogin')).toBe(undefined);
        expect(mountToJson(userFollowers)).toMatchSnapshot();
    })
});