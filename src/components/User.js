import React from 'react';
import {connect} from "react-redux";


function User(props) {
    return(
        <div className="User">
            <img src={ props.avatar_url } alt={ props.name } />
            <h2>{ props.name }</h2>
            <h3>{ props.login }</h3>

        </div>
    );
}

const mapStateToProps = (state) => {
    // console.log(state);
    return{
        name: state.userInfo.name,
        avatar_url: state.userInfo.avatar_url,
        login: state.userInfo.login,
    };
};


export default connect(mapStateToProps)(User);

