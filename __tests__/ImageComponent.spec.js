import React from 'react';
import ImageComponent from '../src/components/ImageComponent';
import { shallow, mount, configure } from 'enzyme';
import { shallowToJson, mountToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('ImageComponent component test', () => {
    it('ImageComponent component rendered succesfully', () => {
        const imageComponent = mount(
            <ImageComponent props={{ userSocial: '@neyney', icon: 'twitter' }} />
        );
        expect(mountToJson(imageComponent)).toMatchSnapshot();
    });

    it('ImageComponent component rendered with null icon props', () => {
        const imageComponent = mount(
            <ImageComponent props={{ userSocial: '@neyney', icon: null }} />
        );
        expect(imageComponent.find('img').length).toBe(0);
    });
});