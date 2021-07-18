import React from 'react';
import "./SectionBrowser.scss";

function SectionBrowser (props) {
    return (
        <div className="sectionbrowser" sections={props.sections}>
            <div className="sectionbrowser-header">{RenderSectionHeader(props.sections)}</div>
            <div className="sectionbrowser-content">
                {RenderSections(props.sections)}
            </div>
        </div>
    );
}

function RenderSectionHeader (sections) {
    return sections.map(section => {
        return (
            <p key={section.title}>{section.title}</p>
        )
    })
}

function RenderSections (sections) {
    return sections.map(section => {
        return (
            <>
            {section.component}
            <hr/>
            </>
        )
    })
}

export default SectionBrowser;