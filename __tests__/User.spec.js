import React from 'react';
import User from '../src/components/User';
import { shallow, mount, configure } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

configure({ adapter: new Adapter() });

describe('User component test', () => {
    const mockStore = configureStore([ thunk ]);
    const initialState = {
        userInfo: {
            avatar_url: 'https://vignette.wikia.nocookie.net/james-camerons-avatar/images/2/2c/Neytiri_Avatar.jpg/revision/latest/scale-to-width-down/640?cb=20140428095608&path-prefix=ru',
            name: 'Neytiri',
            login: 'GoGoPandora'
        }
    }

    let store;

    beforeEach(() => {
        store = mockStore(initialState);
    })

    it('User component rendered succesfully', () => {
        const user = mount(<User store={store} />);
        expect(mountToJson(user)).toMatchSnapshot();
    });

    it('User props match store', () => {
        const user = shallow(<User store={store}/>);
        expect(user.prop('name')).toBe('Neytiri');
        expect(user.prop('login')).toBe('GoGoPandora');
    })
});