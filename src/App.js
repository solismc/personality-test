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
          <header className="header">
            <img className="header-logo" src="./images/TAB-logo-website.png" alt="logo" />
          <span>For Business</span>
          <span>About Us</span>
          </header>
          <nav className="Nav-Bar">
          <ul className="ul-list">
              <li>
                <Link to="/" />
              </li>
              <li>
                <Link to="/questions">Questions</Link>
              </li>
              <li>
                <Link to="/quiz">Quiz</Link>
              </li>
            </ul>
          <section className="container-fluid">
                  <img className="test-image" src="./images/Who-Am-I.png"
                    alt="logo"/>
                  
                  <section className="App-intro">Who Am I?</section>
                  <section>AN IN-DEPTH PERSONALITY TEST DESIGNED BY PSYCOLOGISTS</section>
                  <br></br>
                  <button type="button" class="btn btn-primary btn-lg">Start Quiz!</button>
                  {/* <button className="Start-Quiz-Button">Start Quiz!</button> */}
                  </section>
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
