import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchReposRequest } from '../actions';
import ReposList from './ReposList';

class Repositories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    pressEnter(e) {
        if(e.keyCode === 13 && e.shiftKey === false) 
            this.searchRepos();
    };

    textChange(e) {
        console.log(e.target.value);
        this.setState({
            text: e.target.value
        })
    }

    searchRepos() {
        this.props.fetchReposRequest(this.state.text);
    }

    render() {
        return (
            <div>
                <h1>Repositories</h1>
                <div className='inputs'>
                    <input type='text' onChange={this.textChange.bind(this)} onKeyDown={this.pressEnter.bind(this)} placeholder="Repositories" />
                    <button onClick={this.searchRepos.bind(this)}>Search</button>
                </div>
                <ReposList repositories={this.props.repositories}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        repositories: state.repos,
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchReposRequest,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Repositories);