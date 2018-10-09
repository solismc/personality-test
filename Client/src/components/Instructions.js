import React, { Component } from "react";
import logo from "./logo.svg";
import { Link } from "react-router-dom";

class Instructions extends Component {
  render() {
    return (
      <div>
        <section className="Instructions-component">
          <img src="./images/instructions-icon.png" alt="instructions" />
          <ol>
            <li>You will be presented with a series of images.</li>
            <li>
              Do not over-think the answer. Select the first one that best
              describes you or your environment.
            </li>
            <li>There are no right or wrong answers, be yourself.</li>
          </ol>
          <Link to="/questions">
            <button type="button" className="btn btn-primary btn-lg">
              Lets Do This!
            </button>
          </Link>
        </section>
        <section>
          <footer className="footer">
            Powered by <img src={logo} className="App-logo" alt="logo" />
          </footer>
        </section>
      </div>
    );
  }
}

export default Instructions;
