import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './routes.css';
import Home from './Home';
import About from './About';
import Speakers from './Speakers';
import Gallery from './Gallery';
import Contact from './Contact';

function Routes() {
  return (
    <Router>
      <div>
        <nav>
          <ul id="lists">
            <li>
              <Link to="/" target="_blank">Home</Link>
            </li>
            <li>
              <Link to="/about" target="_blank">About</Link>
            </li>
            <li>
              <Link to="/speakers" target="_blank">Speakers</Link>
            </li>
            <li>
              <Link to="/gallery" target="_blank">Gallery</Link>
            </li>
            <li>
              <Link to="/contact" target="_blank">Contact</Link>
            </li>
          </ul>
        </nav>

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/speakers" component={Speakers} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default Routes;