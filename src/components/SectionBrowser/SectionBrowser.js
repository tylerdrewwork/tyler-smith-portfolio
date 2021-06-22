/* eslint-disable no-unused-vars */
import React from "react";
import './SectionBrowser.scss';
import SectionBrowserHeader from "./SectionBrowserHeader/SectionBrowserHeader";

function SectionBrowser(props) {
    return (
        <div className="section-browser">
            <SectionBrowserHeader sections={props.sections}/>
            {MapChildren(props.sections)}
        </div>
    );
}

// FOR EACH CHILD IN section BROWSER
function MapChildren(sections) {
    // children = React.Children.toArray(children);
    let jsx = [];
    console.log(sections);

    for (let section in sections) {
        let thisSection = sections[section];

        jsx.push(
            <>
                {thisSection.component()}
                <hr />
            </>
        )
    }
    return jsx;
}

export default SectionBrowser;