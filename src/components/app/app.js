import React from 'react';
import { 
  BrowserRouter as Router, 
  // Link,
  Route,
  Switch,
} from 'react-router-dom';
import './app.scss';
import './mainfx.scss';

// Pages
import PageHome from '../../pages/PageHome/PageHome';

function App() {


  return (
    <Router>
      <main>
        {/* <MainFX /> */}
        <Switch>
          {/* FIXME All of the commented out lines here are JUST for the PageUnderConstruction quickfix. Please uncomment! */}
          {/* ANCHOR Gallery */}
          {/* <Route exact path="/gallery"> */}
            {/* <Navbar variant="default"/> */}
            {/* <div className="container"> */}
            {/* </div> */}
          {/* </Route> */}

          {/* ANCHOR Portfolio */}
          {/* <Route exact path="/portfolio"> */}
            {/* <Navbar variant="default"/> */}
            {/* <div className="container"> */}
              {/* <Portfolio /> */}
            {/* </div> */}
          {/* </Route>  */}
          
          {/* ANCHOR Home Page, needs to be last so it is the default page */}
          <Route path="/">
            <PageHome/>
          </Route>
          
        </Switch>
      </main>
    </Router>
  );
}

export default App;
