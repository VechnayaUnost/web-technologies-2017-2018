import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { fetchUserFollowersRequest } from '../actions'

class UserFollowersComponent extends React.Component {
    componentDidMount() {
        this.props.fetchUserFollowersRequest(this.props.userLogin);
    }

    render() {
        const followers = [];
        for (const follower in this.props.followers) {
            if (this.props.followers.hasOwnProperty(follower)) {
                const element = this.props.followers[follower];
                followers.push(element);
            }
        }
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

                <h2>Followers</h2>
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
                <h2>Followers</h2>
                {followers.map(follower =>
                    <div>
                        <h3>{follower.login}</h3>
                        <img src={follower.avatar_url} alt={'user avatar'}/>
                    </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userLogin: state.userInfo.login,
        followers: state.userFollowers
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchUserFollowersRequest,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserFollowersComponent);