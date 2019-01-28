import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import FeelingForm from './Feeling/FeelingForm.js'
import { HashRouter as Router, Route, Link } from 'react-router-dom';
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
            <Route exact path="/item" component={ItemInputPage} />
            <Route exact path="/confirm" component={ConfirmPage} />
            <Route exact path="/results" component={ResultPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
