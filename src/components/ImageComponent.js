import React from 'react';
import { connect } from "react-redux";

function ImageComponent(props) {
    if (props.icon != null) {
        return (
            <div className="BioComponent">
                <img alt={props.userSocial} src={props.icon}></img>
            </div>
        );
    }else{
        return(<div/>);
    }
}



export default connect(null)(ImageComponent);