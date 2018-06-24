import React from 'react';
import { connect } from "react-redux";
import ImageComponent from './ImageComponent';
import emailIc from '@fortawesome/fontawesome-free-solid/faEnvelope'
import socialIc from '@fortawesome/fontawesome-free-solid/faUser'
import locationIc from '@fortawesome/fontawesome-free-solid/faMapMarker'
import companyIc from '@fortawesome/fontawesome-free-solid/faBuilding'

function BotComponent(props) {
    const email = props.email;
    const blog = props.blog;
    const location = props.location;
    const company = props.company;
    return (
        <div className="AdditionalUserInfo">
            {
                blog != null && blog!=="" && <a><ImageComponent icon={socialIc} />{props.blog}</a>
            }
            {
                email != null && email!=="" && <a><ImageComponent icon={emailIc} />{props.email}</a>
            }
            {
                location != null && location!=="" && <h5><ImageComponent icon={locationIc} />{props.location}</h5>
            }
            {
                company != null && company!=="" &&<h5><ImageComponent icon={companyIc} />{props.company}</h5>
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log(state);

    return {
        email: state.userInfo.email,
        location: state.userInfo.location,
        blog: state.userInfo.blog,
        company: state.userInfo.company,
    };
};

export default connect(mapStateToProps)(BotComponent);