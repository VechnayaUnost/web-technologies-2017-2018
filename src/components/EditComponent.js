import React from 'react';
import { connect } from "react-redux";
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
                    <Tab>Основное</Tab>
                    <Tab>Образование</Tab>
                    <Tab>Контакты</Tab>
                </TabList>
                <textarea/>
                <TabPanel><button >Edit1</button></TabPanel>
                <TabPanel><button >Edit2</button></TabPanel>
                <TabPanel><button >Edit3</button></TabPanel>
            </Tabs>
        );
    }

    mapStateToProps = (state) => {
        console.log(state);

        return {
            userEmail: this.state.tabIndex
        };
    };
}



export default connect(null)(EditComponent);