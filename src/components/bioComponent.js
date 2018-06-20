import React from 'react';
import { connect } from "react-redux";


function BioComponent(props) {
    return (
        <div className="BioComponent">
            <h2>{props.bio}</h2>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        bio: state.userBio
    };
};

export default connect(mapStateToProps)(BioComponent);