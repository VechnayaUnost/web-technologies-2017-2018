import React from 'react';
import User from './user'
import BioComponent from './bioComponent'
import BotComponent from './BotComponent'
import EditComponent from './EditComponent'
import Input from './input'

class IndexComponent extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="main-info">
                    <Input/>
                    <User/>
                    <BioComponent/>
                    <BotComponent/>
                </div>
                <EditComponent/>
            </div>
        );
    }
}

export default IndexComponent;