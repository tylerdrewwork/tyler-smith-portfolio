import React from 'react';
import Scrollspy from 'react-scrollspy';
import "./SectionBrowser.scss";

function SectionBrowser (props) {
    return (
        <div className="sectionbrowser" sections={props.sections}>

            {/* Navigation Header */}
            <Scrollspy className="sectionbrowser-header" items={GetItemsForScrollspy(props.sections)} currentClassName="current">
                {RenderSectionHeader(props.sections)}
            </Scrollspy>

            {/* Navigation Content */}
            <div className="sectionbrowser-content">
                {RenderSections(props.sections)}
            </div>

        </div>
    );
}

function RenderSectionHeader (sections) {
    return sections.map(section => {
        return (
            <li key={"header-" + section.title}>
                <a href={"#sectionbrowser-" + section.title}>
                    {section.title}
                </a>
            </li>
        )
    })
}

function RenderSections (sections) {
    return sections.map(section => {
        return (
            <div key={"content-" + section.title} className="sectionbrowser-content-section" id={"sectionbrowser-" + section.title}>
                {section.component}
                <hr/>
            </div>
        )
    })
}

/// This function gets the ids for the Scrollspy to use
function GetItemsForScrollspy (sections) {
    let items = [];

    for (let i = 0; i < sections.length; i++) {
        items.push("sectionbrowser-" + sections[i].title);
    }

    return items;
}

export default SectionBrowser;