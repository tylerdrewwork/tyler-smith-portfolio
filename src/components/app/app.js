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
        <div id="page-container">
          <Switch>
            {/* ANCHOR Home Page, needs to be last so it is the default page */}
            <Route path="/">
              <PageHome/>
            </Route>
            
          </Switch>
        </div>
      </main>
    </Router>
  );
}

export default App;
