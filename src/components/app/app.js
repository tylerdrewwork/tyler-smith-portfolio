import React from 'react';
import { 
  BrowserRouter as Router, 
  // Link,
  Route,
  Switch,
} from 'react-router-dom';
import './app.css';
import { styled, ThemeProvider } from 'styled-components';

// Themes
import ColorScheme from "../../themes/colorScheme"

// Pages
import Home from '../../pages/home/home';

function App() {
  return (
    <Router>
      <ThemeProvider theme={ColorScheme}>
        <div>
          <Switch>
            <Route path="/gallery">
              
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
