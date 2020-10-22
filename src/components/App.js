import React from 'react';
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div id="wrapper" className="fade-in">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />

        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
