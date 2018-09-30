import React, { Component } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Quiz from "./components/Results.js";
import Questions from "./components/Questions.js";
import HomePage from "./components/HomePage";
import "./App.css";
import Results from "./components/Results.js";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="header">
            <img className="header-logo" src="./images/TAB-logo-website.png" alt="logo" />
          <span>For Business</span>
          <span>About Us</span>
          </header>
          <nav className="Nav-Bar">
          <ul className="ul-list">
              <li>
                <Link to="/homepage">Home</Link>
              </li>
              <li>
                <Link to="/questions">Questions</Link>
              </li>
              <li>
                <Link to="/quiz">Results</Link>
              </li>
            </ul>
          
          </nav>
          <div> 
          <Switch>
            <Route path="/homepage" exact component={HomePage}/>
            <Route path="/questions" exact component={Questions} />
            <Route path="/quiz" exact component={Results} />
          </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
