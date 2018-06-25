import React from 'react';
import Repositories from '../src/components/Repositories';
import { shallow, mount, configure } from 'enzyme';
import { shallowToJson, mountToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

configure({ adapter: new Adapter() });

describe('Repositories component test', () => {
    const mockStore = configureStore([thunk]);
    const initialState = {
        repos: [
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

    it('Repositories component rendered succesfully', () => {
        const repositories = mount(
            <Repositories store={store} />
        );
        expect(mountToJson(repositories)).toMatchSnapshot();
    });

    it('Repositories component event triggers', () => {
        const props = {
            fetchReposRequest: jest.fn()
        }
        const repositories = mount(
            <Repositories store={store} {...props}/>
        );
        repositories.find('input').simulate('change', { target: { value: 'react' } });
        repositories.find('input').simulate('keyDown', { key: 'Enter', keyCode: 13, which: 13, shiftKey: false });
        repositories.setState({text: 'meow'});
        repositories.find('button').simulate('click');
        repositories.instance().props.fetchReposRequest(repositories.find('button').simulate('click'));
        expect(props.fetchReposRequest).toHaveBeenCalled();
    });
});