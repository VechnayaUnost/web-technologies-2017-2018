import React from 'react';
import './App.css';
import store from './reducers/store';
import {Provider} from "react-redux";
import Input from './components/input';
import User from './components/user'
import { Fragment} from 'react';
class App extends React.Component{
    render(){
        return (
            <Provider store={store}>
                <Fragment>
                    <Input />
                    <div className='main' >
                        <section className="user-section">
                            <User />
                        </section>
                    </div>
                </Fragment>
            </Provider>
        );
    }
}

export default App;
