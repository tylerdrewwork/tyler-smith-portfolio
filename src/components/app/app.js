import React from 'react';
import { 
  BrowserRouter as Router, 
  // Link,
  Route,
  Switch,
} from 'react-router-dom';
import './app.css';
import Header from 'components/header';
import PAGES from 'data/pagesdata';

// Themes
// import { createGlobalStyle, ThemeProvider } from 'styled-components';
// import ColorScheme from "../../themes/colorScheme"

// Pages
import Home from '../../pages/home/home';

function App() {
  return (
    <Router>
      <Switch>
        <Header pages={PAGES}/>
        <Route path="/gallery">
          
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
