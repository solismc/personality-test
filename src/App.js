import React, { Component } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Instructions from "./components/Instructions.js";
import Questions from "./components/Questions.js";
import CaptureForm from "./components/CaptureForm.js";
import Results from "./components/Results.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="header">
            <img
              className="header-logo"
              src="./images/TAB-logo-website.png"
              alt="logo"
            />
            <span>For Business</span>
            <span>About Us</span>
          </header>
          <nav>
            <ul className="ul-list">
              <li>
                <Link to="/homepage">Home</Link>
              </li>
              <li>
                <Link to="/instructions">Instructions</Link>
              </li>
              <li>
                <Link to="/questions">Questions</Link>
              </li>
              <li>
                <Link to="/captureform">Capture Form</Link>
              </li>
              <li>
                <Link to="/results">Results</Link>
              </li>
            </ul>
          </nav>
          <div>
            <Switch>
              <Route path="/homepage" exact component={HomePage} />
              <Route path="/instructions" exact component={Instructions} />
              <Route path="/questions" exact component={Questions} />
              <Route path="/captureform" exact component={CaptureForm} />
              <Route path="/results" exact component={Results} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
