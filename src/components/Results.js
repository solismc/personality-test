import React, { Component } from "react";
import logo from "./logo.svg";
import PersonalityDescriptions from '../Data/Questions.json'
import Questions from './Questions.js'
import {Link} from "react-router-dom"

class Results extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    console.log({data: PersonalityDescriptions})
    let fromStorage = localStorage.getItem("totalscore") 
    let fromStorage = localStorage.getItem("result")
    this.setState({totalscore: fromStorage })
    this.setState({result: fromStorage})

    // go to storage to get the score.
}



  render() {
    return (
      <div>
          <h3>You are {this.state.Title} - {this.state.Result}</h3>
        <section className="Results-box">
          <h4>
            {this.state.Description}
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
