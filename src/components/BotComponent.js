import React from 'react';
import { connect } from "react-redux";
import ImageComponent from './ImageComponent';

function BotComponent(props) {
    return (
        <div className="BioComponent">
            <ImageComponent icon={props.userSocial}></ImageComponent>
            <h6>{props.userSocial}</h6>
            <ImageComponent icon={props.userCompany}></ImageComponent>
            <h6>{props.userCompany}</h6>
            <ImageComponent icon={props.userLocation}></ImageComponent>
            <h6>{props.userLocation}</h6>
            <ImageComponent icon={props.userEmail}></ImageComponent>
            <h6>{props.userEmail}</h6>
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log(state);

    return {
        userEmail: state.userEmail,
        userLocation: state.userLocation,
        userSocial: state.userSocial,
        userCompany: state.userCompany,
    };
};


export default connect(mapStateToProps)(BotComponent);