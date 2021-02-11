/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
// import FXText from 'components/FXText';
import resume_pdf from 'data/Tyler Smith - Full Stack Developer Resume.pdf';
import './PageUnderConstruction.scss';
import UnderConstructionTape from 'components/UnderConstructionTape/UnderConstructionTape';

const PageUnderConstruction = () => {
    return (
        <div id="construction-container">
            <UnderConstructionTape>🚧UNDER CONSTRUCTION🚧</UnderConstructionTape>

            <section>
                <h2>Welcome!</h2>
                <h1>Tyler Smith</h1>
                <p>My portfolio is currently under construction for a new gorgeous React rework.</p>
                <p>Please refer to my other materials in the meantime:</p>
                <span>
                    <a href={resume_pdf} download>Resume</a>
                    <a href="https://github.com/sakiskid" target="_blank">GitHub</a>
                    <a href="https://www.linkedin.com/" target="_blank">LinkedIn</a>
                </span>
            </section>

            <hr />

            <small>
                My name is Tyler Smith. I am a former C# Game Developer that turned to Full Stack development after one too many game jams. My portfolio will be up soon, I just have been busy working on <a href="www.ELTConstructionTX.com" target="_blank">client websites</a> as well as starting a new job.
            </small>
        </div>
    );
};

export default PageUnderConstruction;