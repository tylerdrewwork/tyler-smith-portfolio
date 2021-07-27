import React from 'react';
import './Footer.scss';

function Footer () {
    return (
        <footer>
            <div id="footer-contact">
                <h2 id="contact-header">Contact</h2>
                <hr />
                <div id="contact-body">
                    <h3>Resume</h3> 
                    <a href="test">Click to download</a>
                    
                    <h3>Email</h3> 
                    <a href="test">tylerdrew.work@gmail.com</a>
                    
                    <h3>LinkedIn</h3> 
                    <a href="test">linkedin.com/tyler-smith-atx</a>
                    
                    <h3>GitHub</h3> 
                    <a href="test">github.com/sakiskid</a>
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
        </footer>
    )
}

export default Footer;