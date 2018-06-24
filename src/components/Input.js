import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUserRequest } from '../actions'

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
        this.props.fetchUserRequest(this.state.text);
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

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchUserRequest,
}, dispatch);

export default connect(null, mapDispatchToProps)(Input);