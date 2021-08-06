/* eslint-disable no-unused-vars */
import { React, useEffect } from 'react';
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

// =========== CONFIGURATION =========== // 
const possibleTitleSuffixes = ['MERN Superstar', "REACT Superstar", "SASS Superstar", "😍", "Hire me!", "Why yes this is my portfolio 😏", "Use Coding Design Patterns!", "Download the starfield scss!", "Currently developing a game!"];
const timerInterval = 5000;

function App() {

  useEffect(() => {
    SetRandomSuffix();
    setInterval(() => SetRandomSuffix(), timerInterval);
  }, [])

  function SetRandomSuffix() {
    document.title = "Tyler Smith - " + possibleTitleSuffixes[Math.floor(Math.random() * possibleTitleSuffixes.length)];
  }

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
