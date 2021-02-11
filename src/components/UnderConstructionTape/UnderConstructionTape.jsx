import React from 'react';
import './UnderConstructionTape.scss';

const UnderConstructionTape = (props) => {
    return (
        <div id="underconstruction">
            {props.children}
        </div>
    );
};

export default UnderConstructionTape;