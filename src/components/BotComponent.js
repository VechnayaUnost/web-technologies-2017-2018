import React from 'react';
import { connect } from "react-redux";
import ImageComponent from './ImageComponent';
import emailIc from '@fortawesome/fontawesome-free-solid/faEnvelope'
import socialIc from '@fortawesome/fontawesome-free-solid/faUser'
import locationIc from '@fortawesome/fontawesome-free-solid/faMapMarker'
import companyIc from '@fortawesome/fontawesome-free-solid/faBuilding'

function BotComponent(props) {
    const email = props.userEmail;
    const blog = props.userSocial;
    const location = props.userLocation;
    const company = props.userCompany;
    return (
        <div className="AdditionalUserInfo">
        {
            blog != null && blog!=="" && <a><ImageComponent icon={socialIc} />{props.userSocial}</a>
        }
        {
            email != null && email!=="" && <a><ImageComponent icon={emailIc} />{props.userEmail}</a>
        }
        {
            location != null && location!=="" && <h5><ImageComponent icon={locationIc} />{props.userLocation}</h5>
        }
        {
            company != null && company!=="" &&<h5><ImageComponent icon={companyIc} />{props.userCompany}</h5>
        }
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log(state);

    return {
        userEmail: state.userInfo.userEmail,
        userLocation: state.userInfo.userLocation,
        userSocial: state.userInfo.userSocial,
        userCompany: state.userInfo.userCompany,
    };
};

export default connect(mapStateToProps)(BotComponent);