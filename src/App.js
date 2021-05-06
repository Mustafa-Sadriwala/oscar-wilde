import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home.js';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import WildeWeb from './pages/WildeWeb';
import EraWeb from './pages/EraWeb';
import Adaptation from './pages/Adaptation';
import Article from './pages/Article';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/adaptations/:slug">
          <Article />
        </Route>
        <Route path="/adaptations">
          <Adaptation />
        </Route>
        <Route exact path="/wilde-era-websites/:slug">
          <Article />
        </Route>
        <Route path="/wilde-era-websites">
          <EraWeb />
        </Route>
        <Route exact path="/wilde-websites/:slug">
          <Article />
        </Route>
        <Route path="/wilde-websites">
          <WildeWeb />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
