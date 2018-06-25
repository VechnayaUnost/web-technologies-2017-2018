import React from 'react';
import BotComponent from '../src/components/BotComponent';
import { shallow, mount, configure } from 'enzyme';
import { shallowToJson, mountToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

configure({ adapter: new Adapter() });

describe('BotComponent component test', () => {
    const mockStore = configureStore([thunk]);
    const initialState = {
        userInfo: {
            email: 'neytiri@avatar.com',
            location: 'Pandora Planet',
            blog: '@neyney',
            company: 'AvatarInc'
        }
    }

    let store;

    beforeEach(() => {
        store = mockStore(initialState);
    })

    it('BotComponent component rendered succesfully', () => {
        const botComponent = mount(
            <BotComponent store={store} />
        );
        expect(mountToJson(botComponent)).toMatchSnapshot();
    });

    it('BotComponent component props match state', () => {
        const botComponent = shallow(
            <BotComponent store={store} />
        );
        expect(botComponent.prop('userEmail')).toBe(initialState.userInfo.email);
        expect(botComponent.prop('userLocation')).toBe(initialState.userInfo.location);
        expect(botComponent.prop('userSocial')).toBe(initialState.userInfo.blog);
        expect(botComponent.prop('userCompany')).toBe(initialState.userInfo.company);
    })
});