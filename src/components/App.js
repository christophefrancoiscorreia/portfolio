import React, { useState } from 'react';
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MoreProjects from './pages/MoreProjects';

function App() {
  const [load, setLoad] = useState(true);

  setTimeout(() => {
    setLoad(false);
  }, 2500);

  return (
    <main className={ (load) ? 'is-preload' : '' }>
      <div id="wrapper" className="fade-in">
        <Router>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/more-projects" exact component={MoreProjects} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </main>
  );
}

export default App;
