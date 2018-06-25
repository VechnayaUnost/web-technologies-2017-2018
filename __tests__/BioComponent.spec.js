import React from 'react';
import BioComponent from '../src/components/BioComponent';
import { shallow, mount, configure } from 'enzyme';
import { shallowToJson, mountToJson } from 'enzyme-to-json';
import { BrowserRouter } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

configure({ adapter: new Adapter() });

describe('BioComponent component test', () => {
    const mockStore = configureStore([thunk]);
    const initialState = {
        userInfo: {
            bio: "Neytiri te Tskaha Mo'at’ite is the Na'vi princess of the Omaticaya clan." +
                "She is the second-born daughter of Eytukan and Mo'at and younger sister of Sylwanin. " +
                "She meets Jake Sully in a Pandoran forest, helping him when he is attacked by a pack " +
                "of viperwolves. Neytiri soon becomes Jake's teacher and helps him to complete several " +
                "tasks. Eventually, they fall in love and mate under the Trees of Voices. Neytiri fights " +
                "alongside Jake in the Assault on the Tree of Souls and saves him from being killed by Miles " +
                "Quaritch. She will be the future Tsahìk of the clan, with her mate, Jake, as Olo'eyktan."
        }
    }

    let store;

    beforeEach(() => {
        store = mockStore(initialState);
    })

    it('BioComponent component rendered succesfully', () => {
        const bioComponent = mount(
            <BioComponent store={store} />
        );
        expect(mountToJson(bioComponent)).toMatchSnapshot();
    });

    it('BioComponent component props match state', () => {
        const bioComponent = shallow(
            <BioComponent store={store} />
        );
        expect(bioComponent.prop('bio')).toBe(initialState.userInfo.bio);
    })
});