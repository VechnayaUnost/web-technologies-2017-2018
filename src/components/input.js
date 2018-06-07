import React from 'react';
//import './App.css';
import {connect} from 'react-redux';
import get from '../githubAPI/request'

class Input extends React.Component{
    PressEnter = (event) =>{
        if (this.value !== "" && event.keyCode === 13)
        this.props.newValue;
    };

    render(){
        return (
            <div className='inputs'>
                <input id='inputText' type='text' onChange={this.props.newValue} value={ this.props.inputValue } placeholder="Username" />
                <button onClick={ this.props.search } value={ this.props.inputValue }>Search</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        search: (event) => {
            get.search(event.target.value)
                .then(res => {
                    dispatch({
                        type: 'ON_SUBMIT',
                        data: {
                            name: res.name,
                            login: res.login,
                            avatar_url: res.avatar_url,
                            location: res.location,
                            bio: res.bio,
                            followers_url: res.followers_url
                        }
                    })
                })
        },
        newValue: (event) => {
            const action = { type: 'CHANGE_INPUT', user: event.target.value};
            dispatch(action);
        }
    }
};

const mapStateToProps = (state) => {
    return{
        inputValue: state.inputValue
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);