import React from 'react';
import { connect } from "react-redux";

function FollowersComponent(props) {
    if(props.login.length===0){
        return(
            <h2>Empty</h2>
        )
    }
    return (
        props.login.length!==0 && <div>
        <h2>Repositories</h2>
        {props.login.map(function(item, i) { 
            return (<div>
                <h3>{item}</h3>
                <img src={props.image[i]} alt={props.image[i]} />
            </div>)
        })}
        </div>
    );
}

const getState = (state) => {
    return {
        login: state.reducerFollowers.login,
        image: state.reducerFollowers.image
    };
};

export default connect(getState)(FollowersComponent);