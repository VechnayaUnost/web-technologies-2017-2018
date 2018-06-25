import React from 'react';
import ReposList from '../src/components/ReposList';
import { shallow, mount, configure } from 'enzyme';
import { shallowToJson, mountToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('ReposList component test', () => {
    it('ReposList component rendered succesfully', () => {
        const props = {
            repositories: [
                {
                    name: 'AvatarSkeleton',
                    description: 'Creates Avatar skeleton with some preinstalled options',
                    stargazers_count: 321,
                    language: 'C#',
                },
                {
                    name: 'AvatarMountConnection',
                    description: 'Avatar mount connection is easier with this tool',
                    stargazers_count: 543,
                    language: 'Java',
                },
            ]
        }

        const reposList = mount(
            <ReposList {...props} />
        );
        expect(mountToJson(reposList)).toMatchSnapshot();
        expect(reposList.find('Repo').length).toBe(2);
    });
});