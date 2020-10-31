import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MoreProjects from './pages/MoreProjects';
import ScrollToTop from './ScrollToTop';
import MobileButton from './Navbar/MobileButton';

function App() {
  const [load, setLoad] = useState(true);
  const [mobileButton, setMobileButton] = useState(false);

  setTimeout(() => {
    setLoad(false);
  }, 2500);

  useEffect(()=>{
    const scrollListener = () => {
      if(window.scrollY > 150){
        setMobileButton(true)            
      }else{
        setMobileButton(false) 
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  },[])
  
  return (
    <main className={ (load) ? 'is-preload' : '' }>
      <Router>
        <div id="wrapper" className="fade-in" >
            <ScrollToTop />
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/more-projects" exact component={MoreProjects} />
            </Switch>
            <Footer />
        </div>        
        <MobileButton alt={mobileButton} />
      </Router>

    </main>
  );
}

export default App;
