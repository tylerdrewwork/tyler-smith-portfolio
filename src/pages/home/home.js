import React from 'react';
import './home.scss';
// Gsap Imports
import FXText from 'components/FXText';

function Home () {
    
    
    return (
        <div id="home-title-container">
            <FXText layers={3} id={"fxtext-firstname"} className="jumbo home-title">
                Tyler Smith
            </FXText>
            <hr></hr>
            {/* <FXText id={"fxtext-lastname"} className="jumbo home-title"> */}
                {/* Smith */}
            {/* </FXText> */}
        </div>
    )
}

export default Home;