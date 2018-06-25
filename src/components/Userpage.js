import React from 'react';
import { Link } from 'react-router-dom';

import Input from './Input';
import User from './User';
import Bio from './BioComponent';
import BotComponent from './BotComponent';
import EditComponent from './EditComponent';

export default class Userpage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <ul>
                    <li>
                        <Link to="/user/followers">User followers</Link>
                    </li>
                    <li>
                        <Link to="/user/repos">User repositories</Link>
                    </li>
                </ul>
                <Input />
                <div className='main' >
                    <section className="user-section">
                        <User />
                        <Bio />
                        <BotComponent />
                        <EditComponent />
                    </section>
                </div>
            </React.Fragment>
        )
    }
}