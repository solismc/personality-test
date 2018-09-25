import React, { Component } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Quiz from "./components/Quiz.js";
import Questions from "./components/Questions.js";
import HomePage from "./components/HomePage";
import "./App.css";


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
                <Link to="/quiz">Quiz</Link>
              </li>
            </ul>
          
          </nav>
          <div> 
          <Switch>
            <Route path="/homepage" exact component={HomePage}/>
            <Route path="/questions" exact component={Questions} />
            <Route path="/quiz" exact component={Quiz} />
          </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
