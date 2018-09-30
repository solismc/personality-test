import React, { Component } from "react";
import logo from "./logo.svg";

class Results extends Component {
  render() {
    return (
      <div>
          <h3>You are Conscientious - blue</h3>
        <section className="Results-box">
          <h4>
            You are private, analytical and logical. You are disciplined and pay
            a lot attention to detail. Professionalism and clear guidelines help
            you thrive. Your biggest source of pride is delivering quality work.
            Disorganized settings will most likely drive you crazy. You
            communicate in a very concrete manner. You carefully choose the
            right words to get your message across. As a member of a team, you
            are the one they turn to when something is not working. They also
            turn to you for a last look at the work before delivering.
          </h4>
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

export default Results;
