import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Applications from './Applications';

const App = ({ projects }) => (
  <Router>
    <div>
      <Route exact path='/' render={props => <Home {...props} projects={projects} />} />
      <Route path='/apps' render={props => <Applications {...props} projects={projects} />} />
    </div>
  </Router>
);

export default App;
