import React from 'react';
import { connect } from 'react-redux';
import { fetchSuccess } from '../actions/action'

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }
    PressEnter = (event) => {
        if (this.value !== "" && event.keyCode === 13)
            this.props.newValue;
    };

    textChange(e) {
        console.log(e.target.value);
        this.setState({
            text: e.target.value
        })
    }

    searchUser() {
        this.props.fetchSuccess(this.state.text);
    }

    render() {
        return (
            <div className='inputs'>
                <input id='inputText' type='text' onChange={this.textChange.bind(this)} placeholder="Username" />
                <button onClick={this.searchUser.bind(this)}>Search</button>
            </div>
        );
    }
}



export default connect(null, { fetchSuccess })(Input);