/* eslint-disable no-unused-vars */
import React from 'react';
import Scrollspy from 'react-scrollspy';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./SectionBrowser.scss";

let isHeaderPinned = false;

function SectionBrowser (props) {
    gsap.registerPlugin(ScrollTrigger);
    StartScrollPinTrigger();

    return (
        <div className="sectionbrowser" sections={props.sections}>

            {/* Navigation Header */}
            <Scrollspy className={"sectionbrowser-header"} items={GetItemsForScrollspy(props.sections)} currentClassName="current">
                {RenderSectionHeader(props.sections)}
                {isHeaderPinned == true && <h1>PINNED!!!</h1>}
            </Scrollspy>

            {/* Navigation Content */}
            <div className="sectionbrowser-content">
                {RenderSections(props.sections)}
            </div>

        </div>
    );
}

function StartScrollPinTrigger () {
    ScrollTrigger.create({
        trigger: "#sectionbrowser-header",
        start: "top top",
        onEnter: UpdatePinnedClass(true),
        onEnterBack: (() => isHeaderPinned = false),
    })
}



function UpdatePinnedClass (isPinned) {
    isHeaderPinned = isPinned;
}

function RemovePinnedClassFromHeader () {

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
            <>
            <div key={"content-" + section.title} className="sectionbrowser-content-section" id={"sectionbrowser-" + section.title}>
                {section.component}
            </div>
            <hr/>
            </>
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