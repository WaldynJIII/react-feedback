import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './App.css';
import FeelingForm from '../Feeling/FeelingForm.js'
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import Understanding from '../Understansding/Understanding.js';
import SUpport from '../Support/SUpport';
import Comments from '../Comments/Comments';
// import PageTwo from '../PageTwo/PageTwo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>

        <br/>
        <Router>
          <div className="App">
            {/* Navigate on the page with Link */}
            <Link to="/results">Results</Link> |
          <Link to="/">Home</Link>
            {/* When we go to / load the ColorPage */}
            <Route exact path="/" component={FeelingForm} />
            <Route exact path="/understand" component={Understanding} />
            <Route exact path="/support" component={SUpport} />
            <Route exact path="/comment" component={Comments} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
