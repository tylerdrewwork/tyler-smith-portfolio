import React from 'react';
import { 
  BrowserRouter as Router, 
  // Link,
  Route,
  Switch,
} from 'react-router-dom';
import './app.css';
import { Container } from 'react-bootstrap';

// Themes
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import ColorScheme from "../../themes/colorScheme"

// Pages
import Home from '../../pages/home/home';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${ColorScheme.primary};
  } 
`

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ThemeProvider theme={ColorScheme}>
        <Container>
          <Switch>
            <Route path="/gallery">
              
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
