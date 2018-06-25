import React from 'react';
import Repo from '../src/components/Repo';
import { shallow, mount, configure } from 'enzyme';
import { shallowToJson, mountToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Repo component test', () => {
    it('Repo component rendered succesfully', () => {
        const props = {
            repo: {
                name: 'AvatarSkeleton',
                description: 'Creates Avatar skeleton with some preinstalled options',
                stargazers_count: 321,
                language: 'C#',
            }
        }

        const repo = mount(
            <Repo {...props} />
        );
        expect(mountToJson(repo)).toMatchSnapshot();
    });

    it('Repo component rendered widhout language', () => {
        const props = {
            repo: {
                name: 'AvatarSkeleton',
                description: 'Creates Avatar skeleton with some preinstalled options',
                stargazers_count: 321,
                language: '',
            }
        }

        const repo = mount(
            <Repo {...props} />
        );
        expect(repo.find('.repo-lang').length).toBe(0);
    });
});