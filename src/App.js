import React from 'react';
import './App.css';
import store from './reducers/store';
import { Provider } from "react-redux";
import { Fragment } from 'react';
import FollowersComponent from './components/FollowersComponent';
import RepositoriesComponent from './components/RepositoriesComponent';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import IndexComponent from './components/IndexComponent';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <Router>
                        <div>
                            <ul>
                                <li>
                                    <Link to="/followers">Followers</Link>
                                </li>
                                <li>
                                    <Link to="/repos">Repos</Link>
                                </li>
                            </ul>
                            <Route exact path="/" component={IndexComponent} />
                            <Route path="/followers" component={FollowersComponent} />
                            <Route path="/repos" component={RepositoriesComponent} />
                        </div>
                    </Router>
                </Fragment>
            </Provider>
        );
    }
}

export default App;
