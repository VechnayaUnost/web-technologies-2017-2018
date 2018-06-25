import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchBestReposRequest } from '../actions';

import ReposList from './ReposList';

class BestRepos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reposType: 'popular'
        };
    }

    componentDidMount() {
        this.handleReposSearch(this.state.reposType);
    }

    changeReposType(e) {
        this.setState({
            reposType: e.target.value
        })
        this.handleReposSearch(e.target.value);
    }

    handleReposSearch(reposType) {
        this.props.fetchBestReposRequest(reposType)
    }

    render() {
        return (
            <div>
                <h1>Best Repositories by: {this.state.reposType}</h1>
                <div className='inputs'>
                    <button value={'popular'} onClick={this.changeReposType.bind(this)} className={'button ' + (this.state.reposType === 'popular' ? 'active' : '')}>Popular</button>
                    <button value={'trending'} onClick={this.changeReposType.bind(this)} className={'button ' + (this.state.reposType === 'trending' ? 'active' : '')}>Trending</button>
                </div>
                <ReposList repositories={this.props.repositories}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        repositories: state.bestRepos,
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchBestReposRequest,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BestRepos);