import React from 'react';
import { 
  BrowserRouter as Router, 
  // Link,
  Route,
  Switch,
} from 'react-router-dom';
import './app.css';

// Components
import Header from '../header';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <Header />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
