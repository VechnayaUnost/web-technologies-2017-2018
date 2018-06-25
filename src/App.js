import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { Fragment } from 'react';

import Userpage from './components/Userpage';
import UserFollowersComponent from './components/UserFollowersComponent';
import UserRepositoriesComponent from './components/UserRepositoriesComponent';

import Repositories from './components/Repositories';
import BestRepos from './components/BestRepos';

import configureStore from './store/configureStore'

const store = configureStore()

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <BrowserRouter>
                        <div>
                            <ul>
                                <li>
                                    <Link to="/">Homepage</Link>
                                </li>
                                <li>
                                    <Link to="/user">User</Link>
                                </li>
                                <li>
                                    <Link to="/repos">Repositories</Link>
                                </li>
                                <li>
                                    <Link to="/best-repos">Best repositories</Link>
                                </li>
                            </ul>

                            <Route exact path="/user" component={Userpage} />
                            <Route path="/user/followers" component={UserFollowersComponent} />
                            <Route path="/user/repos" component={UserRepositoriesComponent} />
                            <Route path="/repos" component={Repositories} />
                            <Route path="/best-repos" component={BestRepos} />
                        </div>
                    </BrowserRouter>
                </Fragment>
            </Provider>
        );
    }
}

export default App;
