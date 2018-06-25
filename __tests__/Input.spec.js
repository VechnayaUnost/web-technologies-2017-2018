import React from 'react';
import Input from '../src/components/Input';
import { shallow, mount, configure } from 'enzyme';
import { shallowToJson, mountToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

configure({ adapter: new Adapter() });

describe('Input component test', () => {
    const mockStore = configureStore([thunk]);
    const initialState = {}

    let store;

    beforeEach(() => {
        store = mockStore(initialState);
    })

    it('Input component rendered succesfully', () => {
        const input = mount(
            <Input store={store} />
        );
        expect(mountToJson(input)).toMatchSnapshot();
    });

    it('Input component event triggers', () => {
        const props = {
            fetchUserRequest: jest.fn()
        }
        const input = mount(
            <Input store={store} {...props}/>
        );
        input.find('input').simulate('change', { target: { value: 'meow' } });
        input.find('input').simulate('keyDown', { key: 'Enter', keyCode: 13, which: 13, shiftKey: false });
        input.setState({text: 'meow'});
        input.find('button').simulate('click');
        input.instance().props.fetchUserRequest(input.find('button').simulate('click'));
        expect(props.fetchUserRequest).toHaveBeenCalled();
    });
});