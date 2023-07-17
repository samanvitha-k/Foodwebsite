import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';
import About from './About';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/menu" component={Menu} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
};

export default App;
