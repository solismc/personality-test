import React, { Component } from "react";
import logo from "./logo.svg";
import QuestionData from "../Data/Questions.json";
import {Link} from "react-router-dom"

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 1,
      currentAnswer: 1,
      score: 0
    };
  }

  componentDidMount() {
    console.log({ Data: Questions, keys: Object.keys(Questions)});
 
  }

  updateCurrentQuestion = (nextQuestion, questionValue) => {
    this.setState({
      currentQuestion: nextQuestion,
      score: this.state.score + questionValue
    });
  };

  addOneToQuestion = questionValue => {
    if (this.state.currentQuestion <= 10) {
      this.updateCurrentQuestion(this.state.currentQuestion + 1, questionValue);
    } else {
      
    }
  };

  render() {
    return (
      <div className="App">
        <section className="ActualQuestion">
         <h3>{QuestionData.ListofQuestions.data[this.state.currentQuestion-1].Question}</h3>
        </section>

        <section className="img-fluid">
          <img
            onClick={() => this.addOneToQuestion(10)}
            className="image"
            src={`./images/Question-${
              this.state.currentQuestion
            }/Picture1Question${this.state.currentQuestion}.png`}
            alt="P1Q1"
            height="300"
            width="300"
          />
          <img
            onClick={() => this.addOneToQuestion(20)}
            className="image"
            src={`./images/Question-${
              this.state.currentQuestion
            }/Picture2Question${this.state.currentQuestion}.png`}
            alt="P1Q1"
            height="300"
            width="300"
          />
          <img
            onClick={() => this.addOneToQuestion(30)}
            className="image"
            src={`./images/Question-${
              this.state.currentQuestion
            }/Picture3Question${this.state.currentQuestion}.png`}
            alt="P1Q1"
            height="300"
            width="300"
          />
          <img
            onClick={() => this.addOneToQuestion(40)}
            className="image"
            src={`./images/Question-${
              this.state.currentQuestion
            }/Picture4Question${this.state.currentQuestion}.png`}
            alt="P1Q1"
            height="300"
            width="300"
          />
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

export default Questions;
