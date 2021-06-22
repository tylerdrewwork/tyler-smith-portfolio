/* eslint-disable no-unused-vars */
import React from "react";
import './SectionBrowser.scss';
import SectionBrowserHeader from "./SectionBrowserHeader/SectionBrowserHeader";

function SectionBrowser(props) {
    let sectionNames = [];
    let sectionsJsx = MapSections(props.sections);

    return (
        <div className="section-browser">
            <SectionBrowserHeader names={sectionNames} sections={props.sections}/>
            {sectionsJsx}
        </div>
    );

    // FOR EACH CHILD IN section BROWSER
    function MapSections(sections) {
        let jsx = [];

        for (let section in sections) {

            let thisSection = sections[section];

            // First, add the name to sectionNames for the browser header
            sectionNames.push(thisSection.name);

            // Push it to jsx
            jsx.push(thisSection.component())
            jsx.push(<hr />)
        }
        return jsx;
    }
}

export default SectionBrowser;