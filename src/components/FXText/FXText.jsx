import React from 'react';
import './FXText.scss';

const FXText = (props) => {
    return (
        <div className={"fxtext"}>
            {/* The actual text */}
            <div className={"fxtext__text " + props.className}>
                {props.children}
            </div>
            {/* The fx overlay */}
            <div className={"fxtext__overlay " + props.className}>
                {props.children}
            </div>
        </div>
    );
};

export default FXText;