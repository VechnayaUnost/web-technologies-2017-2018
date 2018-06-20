import React from 'react';
import './App.css';
import store from './reducers/store';
import {Provider} from "react-redux";
import Input from './components/input';
import User from './components/user'
import Bio from './components/bioComponent'
import { Fragment} from 'react';
import BotComponent from './components/BotComponent';
import EditComponent from './components/EditComponent';

class App extends React.Component{
    render(){
        return (
            <Provider store={store}>
                <Fragment>
                    <Input />
                    <div className='main' >
                        <section className="user-section">
                            <User />
                            <Bio />
                            <BotComponent/>
                            <EditComponent/>
                        </section>
                    </div>
                </Fragment>
            </Provider>
        );
    }
}

export default App;
