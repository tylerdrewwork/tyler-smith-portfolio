import React from 'react';
import { 
  BrowserRouter as Router, 
  // Link,
  Route,
  Switch,
} from 'react-router-dom';
import './app.css';

// Themes
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import ColorScheme from "../../themes/colorScheme"

// Pages
import Home from '../../pages/home/home';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${ColorScheme.primarydark};
  } 
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ThemeProvider theme={ColorScheme}>
        <Switch>
          <Route path="/gallery">
            
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
