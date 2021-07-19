/* eslint-disable no-unused-vars */
import React from 'react';

function SectionBrowserHeader(props) {
    return (
        <div id="section-browser-header">
            {MapSectionsObject()}
            {/* {props.sections.map(section => {
                return (
                    <button 
                    className="section-browser-header-button" 
                    // href={"#" + }
                    key={section.name}>
                        {section.name}
                    </button>
                )
            })} */}
        </div>
    );

    function MapSectionsObject() {
        let jsx = [];

        for (let section in props.sections) {

            let thisSection = props.sections[section];

            // Push it to jsx
            jsx.push(
                <a 
                    className="section-browser-header-button"
                    href={"#" + thisSection.hrefId}
                    key={section.name}>
                    {thisSection.name}
                </a>
            )
        }
        
        return jsx;
    }
}

export default SectionBrowserHeader;