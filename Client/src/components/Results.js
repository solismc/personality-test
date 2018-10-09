import React, { Component } from "react";
import logo from "./logo.svg";
import PersonalityTypes from '../Data/Questions.json';
// import "./App.css";




class Results extends Component {
  constructor(props) {
    super(props)
    this.state = {
  
  }
}

  componentDidMount() {
    // console.log({data: PersonalityDescriptions})
    let totalscore = localStorage.getItem("totalscore") 
    let result = localStorage.getItem("result")
    console.log(PersonalityTypes.data[result])

    this.state = {
      totalscore: totalscore,
      result: result,
    // this.setState({totalscore: fromStorage })
    // go to storage to get the score.

}
  }



  render() {
    return (
      <div>
          <h3>You are {this.state.result}</h3>
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
