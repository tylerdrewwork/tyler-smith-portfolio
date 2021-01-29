import React from 'react';
import { 
  BrowserRouter as Router, 
  // Link,
  Route,
  Switch,
} from 'react-router-dom';
import Navbar from 'components/Navbar';
import './app.scss';

// Pages
import Home from '../../pages/home/home';
import Portfolio from '../../pages/PagePortfolio'

function App() {
  return (
    <Router>
      <main>
        <Switch>
          {/* ANCHOR Gallery */}
          <Route exact path="/gallery">
            <Navbar variant="default"/>
          </Route>

          {/* ANCHOR Portfolio */}
          <Route exact path="/portfolio">
            <Navbar variant="default"/>
            <Portfolio />
          </Route> 
          
          {/* ANCHOR Home Page, needs to be last so it is the default page */}
          <Route path="/">
            <Home />
            <Navbar variant="home"/>
          </Route>
          
        </Switch>
      </main>
    </Router>
  );
}

export default App;
