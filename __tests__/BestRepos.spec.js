import React from 'react';
import BestRepos from '../src/components/BestRepos';
import { shallow, mount, configure } from 'enzyme';
import { shallowToJson, mountToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

configure({ adapter: new Adapter() });

describe('BestRepos component test', () => {
    const mockStore = configureStore([thunk]);
    const initialState = {
        bestRepos: [
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

    it('BestRepos component rendered succesfully', () => {
        const  bestRepos = mount(
            <BestRepos store={store} />
        );
        expect(mountToJson(bestRepos)).toMatchSnapshot();
    });

    it('BestRepos component event triggers', () => {
        const props = {
            fetchBestReposRequest: jest.fn()
        }
        const bestRepos = mount(
            <BestRepos store={store} {...props}/>
        );
        bestRepos.setState({text: 'meow'});
        bestRepos.find('button').not('.active').simulate('click');
        bestRepos.instance().props.fetchBestReposRequest(bestRepos.find('button').not('.active').simulate('click'));
        expect(props.fetchBestReposRequest).toHaveBeenCalled();
    });
});