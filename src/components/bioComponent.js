import React from 'react';
import { connect } from "react-redux";

function BioComponent(props) {
    return (
        <div>
            <p>{props.bio}</p>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        bio: state.userInfo.userBio
    };
};

export default connect(mapStateToProps)(BioComponent);