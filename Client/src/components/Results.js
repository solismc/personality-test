import React, { Component } from "react";
import logo from "./logo.svg";
import PersonalityTypes from "../Data/Questions.json";

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Title: [],
      Description: [],
      totalscore: []
    };
  }

  componentDidMount() {
    // console.log({data: PersonalityDescriptions})
    let totalscore = localStorage.getItem("totalscore");
    let result = localStorage.getItem("result");
    console.log(result)

    let newTitle = PersonalityTypes.PersonalityTypes.data[result].Title
    let newDescription = PersonalityTypes.PersonalityTypes.data[result].Description

    this.setState({
      Title: newTitle,
      Description: newDescription,
    });
  }
  

  render() {
    return (
      <div>
        <h3>You are {this.state.Title}</h3>
        <section className="Results-box">
          <h4>{this.state.Description}</h4>
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
