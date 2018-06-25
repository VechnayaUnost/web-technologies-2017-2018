import React from 'react';
import EditComponent from '../src/components/EditComponent';
import { shallow, mount, configure } from 'enzyme';
import { shallowToJson, mountToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('EditComponent component test', () => {
    it('EditComponent component rendered succesfully', () => {
        const editComponent = mount(
            <EditComponent />
        );
        expect(mountToJson(editComponent)).toMatchSnapshot();
    });

    it('EditComponent component tabs switch', () => {
        const editComponent = shallow(
            <EditComponent />
        );
        editComponent.find('Tabs').simulate('select', 1);
        expect(editComponent.props().selectedIndex).toBe(1);
    });
});