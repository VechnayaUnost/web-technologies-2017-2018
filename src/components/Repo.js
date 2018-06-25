import React from 'react';

class Repo extends React.Component {
    render() {
        const repo = this.props.repo;
        return (
            <li className="repo">
                <div className="repo-description">
                    <h3>{repo.name}</h3>
                    <p>{repo.description}</p>
                </div>
                <div className="repo-stars-lang">
                    {
                        repo.language
                        ?
                        <span className="repo-lang">Language: {repo.language}</span>
                        :
                        null
                    }
                    <span className="repo-stars">Stars: {repo.stargazers_count}</span>
                </div>
            </li>
        )
    }
}

export default Repo;