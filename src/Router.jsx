import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './screens/Login';

export default function() {
  return (
    <Router>
      <Route path="/" exact component={Login} />
    </Router>
  );
}
