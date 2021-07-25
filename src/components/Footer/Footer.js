import React from 'react';
import './Footer.scss';

function Footer () {
    return (
        <footer>
            <div id="footer-contact">
                <h2>Contact</h2>
                Here are my links
                faceook twitty linkin
            </div>
            <div id="footer-more">
                <h2>More</h2>
                <p>
                    This website was created by Mark Wahlberg (not really. it was me - Tyler Smith).
                </p>
                <p>
                    Tools used: Node.js, GSAP, Express, Bootstrap (only for ScrollSpy).
                </p>
            </div>
        </footer>
    )
}

export default Footer;