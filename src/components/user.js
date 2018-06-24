import React from 'react';
import {connect} from "react-redux";

function User(props) {
    return(
        <div className="user-name">
            <img src={ props.avatar_url } alt={ props.name } />
            <h2>{ props.name }</h2>
            <p>{ props.login }</p>
        </div>
    );
}

const mapStateToProps = (state) => {
    return{
        name: state.userInfo.userName,
        avatar_url: state.userInfo.userImg,
        login: state.userInfo.userLogin,
    };
};

export default connect(mapStateToProps)(User);

