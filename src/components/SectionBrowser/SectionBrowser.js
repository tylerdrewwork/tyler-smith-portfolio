import React from 'react';
import "./SectionBrowser.scss";

function SectionBrowser (props) {
    return (
        <div className="sectionbrowser" sections={props.sections}>
            <nav className="sectionbrowser-header">{RenderSectionHeader(props.sections)}</nav>
            <div className="sectionbrowser-content">
                {RenderSections(props.sections)}
            </div>
        </div>
    );
}

function RenderSectionHeader (sections) {
    return sections.map(section => {
        return (
            <a key={"header-" + section.title} href={"#sectionbrowser-" + section.title}>
                {section.title}
            </a>
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

export default SectionBrowser;