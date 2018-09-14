import React, { Component } from "react";
import "./App.css";

import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Quiz from "./components/Quiz.js";
import Questions from "./components/Questions.js";
import HomePage from "./components/HomePage";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src="./images/TAB-logo-website.png" alt="logo" />
          </header>
          <nav>
            <ul className="Nav-Menu">
              <li>
                <Link to="/" />
                <section>
                  <img
                    src="./images/Who-Am-I.png"
                    className="App-logo"
                    alt="logo"
                  />
                  <header className="App-intro">Who Am I?</header>
                  <h2>AN IN-DEPTH PERSONALITY TEST DESIGNED BY PSYCOLOGISTS</h2>
                  <button className="Start-Quiz-Button">Start Quiz!</button>
                </section>
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
            <Route path="/" exact component={HomePage}/>
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
