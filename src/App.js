import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
// import other page components

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      {/* Add more routes for other pages */}
    </Router>
  );
};

export default App;