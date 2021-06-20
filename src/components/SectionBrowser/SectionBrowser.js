import React from "react";
import './SectionBrowser.scss';

function SectionBrowser(props) {
    return (
        <div className="section-browser">
            {props.children}
        </div>
    );
}

export default SectionBrowser;