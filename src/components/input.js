import React from 'react';
import { connect } from 'react-redux';
import { fetchSuccess } from '../actions/action'
import {sendRequestFollowers} from '../githubAPI/request'
import {sendRequestRepos} from '../githubAPI/request'

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }
    pressEnter(e) {
        if(e.keyCode === 13 && e.shiftKey === false)
            this.searchUser();
    };

    textChange(e) {
        console.log(e.target.value);
        this.setState({
            text: e.target.value
        })
    }

    searchUser() {
        this.props.fetchSuccess(this.state.text);
        this.props.sendRequestFollowers(this.state.text);
        this.props.sendRequestRepos(this.state.text);
    }

    render() {
        return (
            <div className='inputs'>
                <input id='inputText' type='text' onChange={this.textChange.bind(this)} onKeyDown={this.pressEnter.bind(this)} placeholder="Username" />
                <button onClick={this.searchUser.bind(this)}>Search</button>
            </div>
        );
    }
}

export default connect(null, { fetchSuccess,sendRequestFollowers,sendRequestRepos })(Input);