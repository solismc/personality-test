import React, { Component } from "react";
import logo from "./logo.svg";
import { Link } from "react-router-dom";

class CaptureForm extends Component {
  render() {
    return (
      <div>
        <form>
          <h4>Please fill out the form and we will email your results</h4>

          <p>First Name</p>
          <input type="firstName" name="firstName" placeholder="First" />
          <p>Last Name</p>
          <input type="lastName" name="lastName" placeholder="Last" />
          <p>email address</p>
          <input type="email" name="email" placeholder="email" />
          <p />
          <span>I wish to receive your newsletter</span>
          <input type="checkbox" name="email newsletter" />
          <br />
          <br />
          <Link to="/results">
            <button type="button" className="btn btn-primary btn-lg">
              Submit
            </button>
          </Link>
        </form>
        <section>
          <footer className="footer">
            Powered by <img src={logo} className="App-logo" alt="logo" />
          </footer>
        </section>
      </div>
    );
  }
}

export default CaptureForm;
