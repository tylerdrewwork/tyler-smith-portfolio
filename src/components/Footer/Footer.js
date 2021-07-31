import React from 'react';
import './Footer.scss';
import resume from '../../data/Tyler Smith - Experienced Full Stack Web Developer Resume.docx';

function Footer () {
    return (
        <footer>
            <div id="footer-contact">
                <h2 id="contact-header">Contact</h2>
                <hr />
                <div id="contact-body">
                    <h3>Resume</h3> 
                    <a href={resume}>Click to download</a>
                    
                    <h3>Email</h3> 
                    <a href="mailto:@tylerdrew.work@gmail.com">tylerdrew.work@gmail.com</a>
                    
                    <h3>LinkedIn</h3> 
                    <a href="https://www.linkedin.com/in/tyler-smith-atx/">linkedin.com/tyler-smith-atx</a>
                    
                    <h3>GitHub</h3> 
                    <a href="https://github.com/Sakiskid">github.com/sakiskid</a>
                </div>
            </div>
            <div id="footer-more">
                <h2>More</h2>
                <hr />
                <p>
                    This website was created by Mark Wahlberg (not really. it was me - Tyler Smith).
                </p>
                <p>
                    Tools used: Node.js, GSAP, Express, Bootstrap (only for ScrollSpy).
                </p>
                <p>
                    Learn more about me and my work on my GitHub.
                </p>
            </div>
            <div id="footer-attributions">
                Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
            </div>
        </footer>
    )
}

export default Footer;