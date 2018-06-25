import React from 'react';
import ImageComponent from './ImageComponent';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class EditComponent extends React.Component {
    constructor() {
        super();
        this.state = { tabIndex: 0 };
    }

    render() {
        return (

            <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                <TabList>
                    <Tab>Title 1</Tab>
                    <Tab>Title 2</Tab>
                </TabList>
                <TabPanel><button >Edut1</button></TabPanel>
                <TabPanel><button >Edut2</button></TabPanel>
            </Tabs>
        );
    }
}



export default EditComponent;