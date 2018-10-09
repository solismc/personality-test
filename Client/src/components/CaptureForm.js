import React, { Component } from "react";
import logo from "./logo.svg";
import { Link } from "react-router-dom";
import history from "./History";
// import "./App.css";

class CaptureForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: "",
      LastName: "",
      EmailAddress: "",
      PersonalityType: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    fetch("https://localhost:5001/api/usersubscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        FirstName: this.state.FirstName,
        LastName: this.state.LastName,
        EmailAddress: this.state.EmailAddress,
        PersonalityType: localStorage.getItem("result")
      })
    })
      .then(resp => resp.json())
      .then(_ => {
        console.log("success");
        history.push('/results');
      });
  };

  render() {
    return (
      <div>
        <form className="contact-information">
          <h4>Please fill out the form to show your results</h4>

          <p>First Name</p>
          <input
            type="firstName"
            name="FirstName"
            placeholder="First"
            onChange={this.handleChange}
          />
          <p>Last Name</p>
          <input
            type="lastName"
            name="LastName"
            placeholder="Last"
            onChange={this.handleChange}
          />
          <p>email address</p>
          <input
            type="email"
            name="EmailAddress"
            placeholder="email"
            onChange={this.handleChange}
          />
          <p />
          <span>I wish to receive your newsletter</span>
          <input type="checkbox" name="email newsletter" />
          <br />
          <br />

          <button onClick={this.handleSubmit}
            type="button"
            className="btn btn-primary btn-lg">
            Submit
          </button>
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
