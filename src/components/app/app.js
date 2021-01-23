import React from 'react';
import { 
  BrowserRouter as Router, 
  // Link,
  Route,
  Switch,
} from 'react-router-dom';
import Header from 'components/header';
import Navbar from 'components/Navbar';
import PAGES from 'data/pagesdata';
import './app.scss';

// Themes
// import { createGlobalStyle, ThemeProvider } from 'styled-components';
// import ColorScheme from "../../themes/colorScheme"

// Pages
import Home from '../../pages/home/home';

function App() {
  return (
    <Router>
      <main>
        <Navbar/>
        <Switch>
          <Route exact path="/gallery">
            
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
