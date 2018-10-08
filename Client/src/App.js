import React, { Component } from "react";
import {Router, Link, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Instructions from "./components/Instructions.js";
import Questions from "./components/Questions.js";
import CaptureForm from "./components/CaptureForm.js";
import Results from "./components/Results.js";
import history from './components/History';
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router history={history}>
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
          <section className="page-mid-section">
          <nav>
            <ul className="ul-list">
              <li>
                <Link to="/"></Link>
              </li>
              <li>
                <Link to="/instructions"></Link>
              </li>
              <li>
                <Link to="/questions"></Link>
              </li>
              <li>
                <Link to="/captureform"></Link>
              </li>
              <li>
                <Link to="/results"></Link>
              </li>
            </ul>
          </nav>
          </section>
          <div>
            <Switch>
              <Route path="/" exact component={HomePage} />
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
