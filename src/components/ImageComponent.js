import React from 'react';

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



export default ImageComponent;