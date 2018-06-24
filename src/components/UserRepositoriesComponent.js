import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { fetchUserReposRequest } from '../actions'

class UserRepositoriesComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentRepoType: 'All',
            currentRepoLang: 'All'
        }
    }

    componentDidMount() {
        this.props.fetchUserReposRequest(this.props.userLogin);
    }

    getUniqueLanguages(arr) {
        let tempObj = {};

        for (let i = 0; i < arr.length; i++) {
            let key = arr[i].language
            tempObj[key] = true;
        }

        return Object.keys(tempObj);
    }

    changeRepoType(e) {
        this.setState({
            currentRepoType: e.target.value
        })
        console.log(e.target.value)
    }

    changeRepoLang(e) {
        this.setState({
            currentRepoLang: e.target.value
        })
        console.log(e.target.value)
    }

    filterRepos(repos) {
        console.log(this.state);
        console.log(repos);
        const firstResult = repos.filter(repo => {
            if (this.state.currentRepoLang === 'All') {
                console.log(this.state.currentRepoLang);
                console.log(repo);
                return repo
            } else {
                console.log(this.state.currentRepoLang);
                console.log(repo);
                return repo.language === this.state.currentRepoLang
            }
        })
        const secondResult = firstResult.filter(repo => {
            if (this.state.currentRepoType === 'All') {
                console.log(this.state.currentRepoType);
                console.log(repo);
                return repo
            } else {
                switch(this.state.currentRepoType) {
                    case 'Forks': {
                        console.log(this.state.currentRepoType);
                        console.log(repo);
                        return repo.fork
                    }
                    case 'Archived': {
                        console.log(this.state.currentRepoType);
                        console.log(repo);
                        return repo.archived
                    }
                    default: return;
                }
            }
        })
        console.log(secondResult);
        return secondResult;
    }

    render() {
        console.log(this.props.repos);
        const repos = [];
        for (const repo in this.props.repos) {
            if (this.props.repos.hasOwnProperty(repo)) {
                const element = this.props.repos[repo];
                repos.push(element);
            }
        }
        const reposLangs = this.getUniqueLanguages(repos);
        console.log(reposLangs);
        const filteredRepos = this.filterRepos(repos);

        return (
            this.props.userLogin === '' || this.props.userLogin === undefined
                ?
                <div>
                    <ul>
                        <li>
                            <Link to="/user/followers">User followers</Link>
                        </li>
                        <li>
                            <Link to="/user/repos">User repositories</Link>
                        </li>
                    </ul>

                    <h2>Repositories</h2>
                    <h3>Empty</h3>
                </div>
                :
                <div>
                    <ul>
                        <li>
                            <Link to="/user/followers">User followers</Link>
                        </li>
                        <li>
                            <Link to="/user/repos">User repositories</Link>
                        </li>
                    </ul>
                    <h2>Repositories</h2>
                    <select className="repos-type" value={this.state.currentRepoType} onChange={this.changeRepoType.bind(this)}>
                        <option value="All">All</option>
                        <option value="Forks">Forks</option>
                        <option value="Archived">Archived</option>
                    </select>
                    <select className="repos-lang" value={this.state.currentRepoLang} onChange={this.changeRepoLang.bind(this)}>
                        <option value="All">All</option>
                        {reposLangs.map(repoLang => <option value={repoLang}>{repoLang}</option>)}
                    </select>
                    {filteredRepos.map(repo =>
                        <div>
                            <h3>{repo.name}</h3>
                            <span>{repo.description}</span>
                            <br />
                            <span>Stars: {repo.stargazers_count}</span>
                            <br />
                            <span>Watchers: {repo.watchers_count}</span>
                        </div>
                    )}
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    console.log(state.userRepos)
    return {
        userLogin: state.userInfo.login,
        repos: state.userRepos
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchUserReposRequest,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserRepositoriesComponent);