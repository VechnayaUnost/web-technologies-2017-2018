import React from 'react';

import Repo from './Repo';

class ReposList extends React.Component {
    render() {
        return (
            <ul>
                {
                    this.props.repositories.map((repo) =>
                        <Repo repo={repo}/>
                    )
                }
            </ul>
        )
    }
}

export default ReposList;